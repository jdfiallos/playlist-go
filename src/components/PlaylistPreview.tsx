import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlaylistPreview: React.FC = () => {
  const mockPlaylist = {
    name: "Playlist Coding 🎧🔥",
    cover: "https://placehold.co/300x300?text=Playlist",
    tracks: [
      "Lo-fi Chill Beats – DJ Smooth",
      "React Hooks & Coffee – CodeLife",
      "TypeScript Vibes – TS Beats",
      "Deploy Dreams – DevFlow",
    ],
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">{mockPlaylist.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <img
          src={mockPlaylist.cover}
          alt="Playlist cover"
          className="rounded-md shadow-md w-60 h-60 object-cover"
        />

        <ul className="text-sm text-muted-foreground w-full">
          {mockPlaylist.tracks.map((track, index) => (
            <li key={index} className="mb-1">
              • {track}
            </li>
          ))}
        </ul>

        <Button className="w-full mt-4">Migrar Playlist</Button>
      </CardContent>
    </Card>
  );
};

export default PlaylistPreview;
