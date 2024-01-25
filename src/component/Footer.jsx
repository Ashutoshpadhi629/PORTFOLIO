import {SocialMediaList} from "./SocialMedialist";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4">
        <div className="grid md:grid-cols-2">
        <div className="p-12 pl-2">
        <h1 className="font-bold">ASHUTOSH PADHI</h1>
        <p className="py-8 max-sm:pb-6 text-sm">
          A Fullstack  Web Developer building the Frontend and backend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        </div>
        <div className="pl-2 pb-6 md:p-12">
            <h1 className="font-bold max-sm:pb-4 pb-4">Socials</h1>
            <SocialMediaList></SocialMediaList>
        </div>
        </div>
        <div className="container mx-auto pb-4">
          <div className="border-b border-gray-500"></div>
          <div className="flex justify-between items-center text-sm font-light">
            <p>&copy;Copyright 2024</p>
            <p>Designed by Ashutosh padhi</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
