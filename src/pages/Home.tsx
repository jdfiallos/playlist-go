import React from "react";
import SelectSource from "../components/SelectSource";
import SelectDestination from "../components/SelectDestination";
import PlaylistPreview from "../components/PlaylistPreview";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <SelectSource />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <PlaylistPreview />
      </div>
      <div className="flex-1">
        <SelectDestination />
      </div>
    </div>
  );
};

export default Home;
