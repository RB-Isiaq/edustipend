import React from "react";
import MusicList from "./MusicList";
import Button from "./Button";

const AvailableMusics = () => {
  return (
    <div className=" bg-gray-500 flex flex-col items-center justify-center gap-4 py-4 px-5 w-[300px] md:w-[400px] h-full">
      <h1 className="text-2xl font-bold">Trending Songs</h1>
      <ul className="w-full">
        <MusicList />
        <MusicList />
        <MusicList />
        <MusicList />
        <MusicList />
      </ul>
      <Button text="View more" />
    </div>
  );
};

export default AvailableMusics;
