import { Headphones, PlayCircle, PauseCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// In a real app, this data would come from a CMS or API
const tracks = [
  {
    id: 1,
    title: "Calming Ocean Waves",
    artist: "Nature Sounds",
    duration: "5:32",
    // src: "/audio/ocean-waves.mp3", // Placeholder for actual audio file
    imageSrc: "https://placehold.co/100x100.png",
    imageHint: "ocean waves",
  },
  {
    id: 2,
    title: "Gentle Rain Ambience",
    artist: "Atmospheric Scapes",
    duration: "7:15",
    // src: "/audio/gentle-rain.mp3", // Placeholder
    imageSrc: "https://placehold.co/100x100.png",
    imageHint: "rain window",
  },
  {
    id: 3,
    title: "Peaceful Forest Stream",
    artist: "Wilderness Echoes",
    duration: "6:40",
    // src: "/audio/forest-stream.mp3", // Placeholder
    imageSrc: "https://placehold.co/100x100.png",
    imageHint: "forest stream",
  },
];

export function RelaxationPlaylist() {
  // Basic play/pause state for demonstration - would need more complex audio handling in a real app
  // For now, buttons are just illustrative and do not control actual audio.

  return (
    <Card className="shadow-xl">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-primary/10 rounded-md">
          <Headphones className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl text-foreground">Audio Relaxation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tracks.map((track) => (
            <div key={track.id} className="flex items-center space-x-4 p-3 bg-background rounded-lg border">
              <Image
                src={track.imageSrc}
                alt={track.title}
                data-ai-hint={track.imageHint}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground font-body">{track.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{track.artist}</p>
              </div>
              <div className="text-right">
                 <p className="text-sm text-muted-foreground font-body mb-1">{track.duration}</p>
                <Button variant="ghost" size="icon" aria-label={`Play ${track.title}`}>
                  <PlayCircle className="h-6 w-6 text-primary" />
                </Button>
              </div>
            </div>
          ))}
           <p className="text-xs text-muted-foreground text-center pt-2 font-body">
            Audio playback controls are illustrative. Replace with actual audio sources and player logic.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
