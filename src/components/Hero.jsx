import AvailableMusics from "./AvailableMusics";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-10 md:flex-row lg:p-20">
      <div className="flex flex-col justify-around gap-6 md:ml-3 md:w-2/3">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Make your party fun!
        </h1>
        <p>Create your own custom playlist today.</p>
        <Button text="Create Playlist" />
      </div>
      <AvailableMusics />
    </div>
  );
};

export default Hero;
