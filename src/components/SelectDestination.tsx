import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SiSpotify, SiYoutube, SiApplemusic, SiAmazon } from "react-icons/si";

const destinations = [
  {
    name: "Spotify",
    icon: <SiSpotify className="h-6 w-6 text-green-500" />,
  },
  {
    name: "YouTube",
    icon: <SiYoutube className="h-6 w-6 text-red-500" />,
  },
  {
    name: "Apple Music",
    icon: <SiApplemusic className="h-6 w-6 text-pink-500" />,
  },
  {
    name: "Amazon Music",
    icon: <SiAmazon className="h-6 w-6 text-yellow-600" />,
  },
];

const SelectDestination: React.FC = () => {
  return (
    <div className="space-y-4 w-full p-4">
      <h2 className="text-xl font-semibold">Selecciona el destino</h2>

      <div className="grid grid-cols-2 gap-2">
        {destinations.map((destination) => (
          <Card key={destination.name}>
            <CardHeader className="flex justify-center">
              <CardTitle className="flex items-center gap-2">
                {destination.icon}
                {destination.name}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectDestination;
