import { useState } from "react";

const Contact = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const mailHandler = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent("From : " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    window.location.href = 'mailto:padhiashutosh106@gmail.com?subject=' + subject + '&body=' + body;
  };
  
  return (
    <div className="bg-slate-200 py-16 flex flex-col">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold  pt-3 md:pt-6">
          CONTACT
        </h1>
        <div className="mx-auto m-4 h-1 w-8 bg-purple-500 rounded-lg"></div>
        <h2 className="font-light text-lg md:text-xl p-4 md:p-8">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h2>
      </div>
      <div className=" bg-white-500 border-solid py-8 ">
        <form
          className="rounded-lg m-auto bg-white p-8 w-5/6 md:w-1/2 font-semibold shadow-2xl max-sm:text-sm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            required=""
            id="name"
            placeholder="Enter your Name"
            onChange={(e)=> setName(e.target.value)}
            className="w-full p-2  bg-slate-200  rounded mb-4 mt-3 focus:outline-none"
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            required=""
            id="email"
            placeholder="Enter your Email"
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full p-2   bg-slate-200 rounded mb-4 mt-3 focus:outline-none"
          />
          <br />

          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            required=""
            placeholder="Enter your Message"
            onChange={(e)=> setMessage(e.target.value)}
            className="w-full h-48 p-2  bg-slate-200  rounded mb-4 mt-3 focus:outline-none resize-none"
          ></textarea>
          <br />
          <div>
            <button
              onClick={mailHandler}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2 my-4"
            >
              CONTACT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
