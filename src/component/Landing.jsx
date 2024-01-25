import Button from "./Button";
import { SocialMediabar } from "./SocialMedialist";
const Landing = () => {
  return (
    <div className="flex">

      <div className="z-20 text-center py-32 md:py-48 h-screen  bg-slate-200 grid grid-rows-12 ">
        <div className="hidden md:flex row-span-1 mt-24 z-50">
        <SocialMediabar></SocialMediabar>
        </div>
        <div>
        <h1 className="text-3xl md:text-5xl font-extrabold pt-6 row-span-11">
          HEY, I&#39;M ASHUTOSH PADHI
        </h1>
        <h2 className="py-8 px-6 md:p-12 md:px-32 text-lg md:text-xl font-light text-center ">
          A Fullstack Developer adept at architecting and implementing
          end-to-end solutions for web applications. Proficient in both frontend
          and backend technologies, committed to delivering seamless and
          successful digital products
        </h2>
        <Button text={"PROJECTS"} id={'project'}></Button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
