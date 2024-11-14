import img1 from "/image1.png";
import img2 from "/image2.png";

const projectsData = [
  {
    name: "Webinar.gg",
    description:
      "Video broadcasting app for creators.Here you can schedule a call, has chat feature to chat with students.Made with React frontend and express backend, for video calling we are using webRTC and bradcasting it with cloudflare stream.",
    img: img1,
  },

  {
    name: "Build Your Own",
    description:
      "A cli based web app where you can solve challeges to learn new technologies.",
    img: img2,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col bg-slate-200 py-5 px-10">
      <h1 className="text-center text-4xl font-bold  py-10 z-10">PROJECTS</h1>
      <div className="mx-auto mb-8 h-1 w-8 bg-purple-500 rounded-lg"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((items) => (
          <div
            className="py-3 px-5 border border-slate-700 rounded-md w-fit h-full flex flex-col justify-evenly items-stretch space-y-4"
            key={items.name}
          >
            <a href="https://webinar.gg/" target="_blank">
              <img
                src={items.img}
                alt="preview"
                className="rounded-md w-full"
              />
            </a>

            <div className="space-y-2">
              <h1 className="text-lg font-medium">{items.name}</h1>
              <p className="text-sm">{items.description}</p>

              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2 my-4 ">
                <a href="https://webinar.gg/" target="_blank">
                  Live
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
