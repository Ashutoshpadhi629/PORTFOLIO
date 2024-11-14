import { Link } from "react-scroll";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "TailwindCSS" },
  { name: "Next.js" },
  { name: "NodeJs" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "Postgres" },
  { name: "GIT" },
  { name: "GitHub" },
  { name: "Responsive Design" },
];

const Aboutme = () => {
  return (
    <div className="py-16 bg-slate-100">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-4xl pt-3 md:pt-6">
          ABOUT ME
        </h1>{" "}
        <div className="mx-auto m-4 h-1 w-8 bg-purple-500 rounded-md"></div>
        <h2 className="font-light text-rounded-md md:text-xl p-4 max-rounded-md:pb-10 md:p-8 text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h2>
      </div>
      <div className="grid md:grid-flow-col md:grid-cols-2 text-left px-4 md:py-16 md:px-16 overflow-auto ">
        <div className="">
          <h1 className="text-2xl font-bold px-2 max-sm:pt-10 md:px-8">
            Get to know me!
          </h1>
          <h2 className="py-6 px-2 font-light text-justify text-base md:text-lg">
            I am a dynamic and enthusiastic individual with a strong foundation
            in full-stack development. Hailing from India, I bring a diverse
            perspective to the ever-evolving tech landscape. My journey in the
            world of programming has been an exciting exploration of
            cutting-edge technologies and innovative solutions. <br></br>
            <br></br>
            As a{" "}
            <span className="font-semibold text-neutral-800">
              full-stack developer
            </span>
            , I thrive on bridging the gap between front-end and back-end
            technologies. Crafting seamless and intuitive user experiences is
            not just a job for me; it&#39;s a passion. I specialize in
            architecting robust systems that leverage the latest tools and
            frameworks to bring ideas to life. <br></br>
            <br></br>
            Feel free to Connect or Follow me on my{" "}
            <a
              href="https://www.linkedin.com/in/ashutoshpadhi629/"
              className="font-bold text-purple-500 underline"
            >
              Linkedin
            </a>{" "}
            where I post useful content related to Web Development and
            Programming.<br></br>
            <br></br> I&#39;m open to{" "}
            <span className="font-semibold text-neutral-800">Job </span>
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then
            don&#39;t hesitate to{" "}
            <span className="font-semibold text-neutral-800">contact</span> me.
          </h2>
          <Link activeClass="active" smooth spy to="contact">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2 my-4">
              CONTACT
            </button>
          </Link>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold md:px-10 py-8 md:py-0">
            My skills
          </h1>
          <ul className="flex md:m-8 flex-wrap text-sm md:text-base">
            {skills.map((items) => (
              <li
                key={items.name}
                className="bg-slate-300 p-4 m-3 rounded-md justify-center"
              >
                {items.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
