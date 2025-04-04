import NavBar from "@components/NavBar";
import Experience from "@components/sections/Experience";
import Profile from "@components/sections/Profile";
import Projects from "@components/sections/Projects";
import Dither from "@components/ui/Dither";
import { ShootingStars } from "@components/ui/ShootingStars";
import { StarsBackground } from "@components/ui/StarsBackground";

const App = () => {
  return (
    <>
      <div className="box-border  text-white min-h-[100dvh] font-poppins">
        {/* <div className="absolute inset-0 -z-10">
          <BackgroundBeams />
        </div> */}
        <ShootingStars />
        <StarsBackground className="pointer-events-none" />
        {/* <div className="relative w-full h-screen overflow-hidden">
          <Dither
            className="!absolute inset-0 w-full h-full"
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />

          <div className="relative z-1">
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold">Hello, Tailwind!</h1>
            </div>
          </div>
        </div> */}
        <NavBar />
        <div className="relative z-1 flex flex-col gap-5 mx-auto w-full max-w-2xl pt-20 px-4">
          <Profile />
          <Experience />
          <Projects />
          <div className="h-[1280px]">Rest of the content</div>
        </div>
      </div>
    </>
  );
};

export default App;
