import { Link } from "react-scroll";
const Button = ({ text, id }) => {
  return (
    <Link activeClass="active" smooth spy to={id}> 
    <button onClick={() => {
      if(id === 'submit') {
           alert("Message Sent")
      }
    }} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2 my-4">
      {text} 
    </button>
    </Link>
  );
};
export default Button;
