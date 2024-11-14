import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [togglebar, setTogglebar] = useState(true);
  const togglebarHandler = () => {
    setTogglebar((togglebar) => !togglebar);
  };
  return (
    <div className="bg-white z-40 opacity-100 w-screen fixed ">
      <nav className="bg-white-500  ">
        <ul className="flex justify-between">
          <li>
            <a href="/">
              <img src="ash.png" className="h-16"></img>
            </a>
          </li>
          <div>
            <div className="hidden md:flex md:ml-auto">
              <li className="md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer">
                <Link activeClass="active" smooth spy to="home">
                  HOME
                </Link>
              </li>
              <li className="md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer">
                <Link activeClass="active" smooth spy to="about">
                  ABOUT
                </Link>
              </li>
              <li className="md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer">
                <Link activeClass="active" smooth spy to="project">
                  PROJECTS
                </Link>
              </li>
              <li className="md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer">
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT
                </Link>
              </li>
            </div>
            <li>
              <div className="flex ml-auto items-center">
                <button onClick={togglebarHandler} className="md:hidden p-2">
                  {togglebar && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  )}
                  {!togglebar && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {!togglebar && (
                    <div className="  origin-top-right absolute right-0 mt-6 w-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                      <div
                        className=" py-4 border-solid shadow-lg border-b border-gray-500  "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {/* Dropdown items */}

                        <Link
                          activeClass="active"
                          smooth
                          spy
                          to="home"
                          onClick={togglebarHandler}
                        >
                          <li className=" md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer p-8 border-b border-gray-200 w-screen">
                            HOME
                          </li>
                        </Link>

                        <Link
                          activeClass="active"
                          smooth
                          spy
                          to="about"
                          onClick={togglebarHandler}
                        >
                          <li className="  md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer p-8 border-b border-gray-200 w-screen">
                            ABOUT
                          </li>
                        </Link>

                        <Link
                          activeClass="active"
                          smooth
                          spy
                          to="project"
                          onClick={togglebarHandler}
                        >
                          <li className="  md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer p-8 border-b border-gray-200 w-screen">
                            PROJECTS
                          </li>
                        </Link>

                        <Link
                          activeClass="active"
                          smooth
                          spy
                          to="contact"
                          onClick={togglebarHandler}
                        >
                          <li className="  md:m-4 md:mx-10 text-black font-bold hover:text-purple-700 cursor-pointer p-8  w-screen ">
                            CONTACT
                          </li>
                        </Link>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
