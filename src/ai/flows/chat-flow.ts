
'use server';
/**
 * @fileOverview A Genkit flow for chatting with the DeepSeek model via OpenRouter.
 *
 * - chatWithAI - A function that handles the chat interaction.
 * - ChatInput - The input type for the chatWithAI function.
 * - ChatOutput - The return type for the chatWithAI function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// IMPORTANT: Replace with your actual OpenRouter API Key
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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';
const YOUR_SITE_URL = process.env.YOUR_SITE_URL || '<YOUR_SITE_URL>'; // Optional, for OpenRouter ranking
const YOUR_SITE_NAME = process.env.YOUR_SITE_NAME || '<YOUR_SITE_NAME>'; // Optional, for OpenRouter ranking


const ChatInputSchema = z.object({
  userMessage: z.string().describe('The message from the user.'),
  // Optional: Add conversation history here if you want to support multi-turn conversations
  // conversationHistory: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string() })).optional(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  aiResponse: z.string().describe('The response from the AI model.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chatWithAI(input: ChatInput): Promise<ChatOutput> {
  return aiChatFlow(input);
}

const aiChatFlow = ai.defineFlow(
  {
    name: 'aiChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { userMessage } = input;

    // For now, we'll send only the current user message.
    // To support conversation history, you would construct the messages array like:
    // const messages = [...(input.conversationHistory || []), { role: 'user', content: userMessage }];
    const messages = [{ role: 'user', content: userMessage }];

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": YOUR_SITE_URL, 
          "X-Title": YOUR_SITE_NAME, 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1-0528:free", // or other models like "deepseek/deepseek-chat"
          "messages": messages
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("OpenRouter API Error:", response.status, errorBody);
        throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
      }

      const responseData = await response.json();
      
      // Extract the AI's response - structure might vary slightly based on model/API
      // Common structure: responseData.choices[0].message.content
      const aiMessage = responseData.choices?.[0]?.message?.content;

      if (!aiMessage) {
        console.error("Could not extract AI response from OpenRouter data:", responseData);
        throw new Error("Invalid response structure from AI API.");
      }

      return { aiResponse: aiMessage };

    } catch (error) {
      console.error("Error in aiChatFlow:", error);
      // It's good practice to return a user-friendly error or throw a specific error type
      // For now, returning a generic error message in the aiResponse.
      return { aiResponse: "Sorry, I encountered an error. Please try again later." };
    }
  }
);

    
