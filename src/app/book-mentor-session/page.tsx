
"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Users, Mail, MessageSquare } from "lucide-react"; // MessageSquare for WhatsApp

const MENTOR_EMAIL = "jamshedmsd589@gmail.com";
const MENTOR_WHATSAPP_NUMBER = "923029015909"; // International format without '+' or leading zeros

const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  availability: z.string().min(10, { message: "Please describe your availability (at least 10 characters)." }),
  discussionTopic: z.string().min(10, { message: "Please describe what you'd like to discuss (at least 10 characters)." }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export default function BookMentorSessionPage() {
  const [requestPrepared, setRequestPrepared] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState("");
  const [formValues, setFormValues] = useState<BookingFormValues | null>(null);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      availability: "",
      discussionTopic: "",
    },
  });

  const onSubmit: SubmitHandler<BookingFormValues> = (data) => {
    setFormValues(data);
    const messageBody = `
Mentorship Session Request:

Name: ${data.fullName}
Email: ${data.email}
Availability: ${data.availability}
Discussion Topic: ${data.discussionTopic}

Sent from EmpowerU App.
    `.trim();

    setPreparedMessage(messageBody);
    setRequestPrepared(true);
    toast({
      title: "Request Prepared!",
      description: "Your mentorship request is ready. Please choose how you'd like to send it.",
    });
  };

  const getMailtoLink = () => {
    if (!formValues) return "";
    const subject = `Mentorship Session Request from ${formValues.fullName}`;
    return `mailto:${MENTOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedMessage)}`;
  };

  const getWhatsAppLink = () => {
    if (!formValues) return "";
    return `https://wa.me/${MENTOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(preparedMessage)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full mb-4">
          <Users className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold text-foreground break-words">
          Book a Mentor Session
        </h1>
        <p className="text-lg text-muted-foreground mt-2 font-body break-words">
          Connect with a mentor to guide you on your journey.
        </p>
      </header>

      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        {!requestPrepared ? (
          <>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">Your Details</CardTitle>
              <CardDescription className="font-body text-muted-foreground">
                Please fill out the form below to request a session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Alex Johnson" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="e.g., alex@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Availability</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Weekdays after 5 PM, or Saturday mornings"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discussionTopic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What would you like to discuss?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Career advice in tech, study strategies for exams"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full font-body" size="lg">
                    Prepare Mentorship Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">Request Ready to Send!</CardTitle>
              <CardDescription className="font-body text-muted-foreground">
                Review your message below and choose how you'd like to send it to the mentor.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-md bg-muted/50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2 text-foreground">Message Preview:</h3>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-body break-words">{preparedMessage}</pre>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild size="lg" className="font-body">
                  <a href={getMailtoLink()} target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-5 w-5" /> Send via Email
                  </a>
                </Button>
                <Button asChild size="lg" className="font-body bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" /> Send via WhatsApp
                  </a>
                </Button>
              </div>
               <Button variant="outline" onClick={() => {setRequestPrepared(false); form.reset();}} className="w-full font-body">
                Edit Request or Start Over
              </Button>
            </CardContent>
          </>
        )}
      </Card>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/educational-zone">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Educational Zone
          </Link>
        </Button>
      </div>
    </div>
  );
}
