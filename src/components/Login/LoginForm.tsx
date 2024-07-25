import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [responses, setResponses] = useState("");
  // const [accessToken, setAccessToken] = useState("");

  //request body
  const reqBody = { userEmail, userPassword };

  // const accessToken = localStorage.getItem("accessToken");
  // console.log(accessToken);
  //handle login function to the api
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //axios post to the login api
      const response = await axios.post(
        "http://localhost:5000/api/login",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //get responses from the server

      //handle error 400 status from the server
      if (response.status === 400) {
        console.log(response.data.message); //placeholder message
      } else {
        //handle success status 200 from the server
        if (response.status === 200) {
          //store token directly from response
          const token = response.data.token;
          localStorage.setItem("tokenAccess", JSON.stringify(token));
          console.log(JSON.parse(token));
          navigate("/");
          console.log("You have signed up successfully");
        }
      }
      //handle catch exceptions from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className=" h-[100vh] lg:pr-36 mt-10 md:mt-24 mx-6">
        <div className="w-full px-auto">
          <Link to="/">
            <BiArrowBack className="text-2xl text-blue-600 cursor-pointer lg:hidden" />
          </Link>
          <img src={logo} className="lg:hidden" />
          <h2 className="md:text-xl uppercase ">Start your Journey</h2>
          <p className="md:text-5xl font-bold pt-4 text-2xl">
            Sign In To <span className="text-blue-500">Blugle.</span>
          </p>
          <p className="text-gray-800 py-2">
            Don't have an account?
            <span className="text-blue-500 pl-2">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <form action="http://localhost:5000" method="POST">
          <div>
            <div className="mt-7 mb-4">
              <label className="" htmlFor="user-email" id="user-email">
                Email
              </label>
              <br />
              <input
                type="email"
                name="userEmail"
                placeholder="Enter email here"
                id="user-email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border px-2 py-3 w-full outline-none rounded-lg"
              />
            </div>
            <div>
              <label className="" htmlFor="user-password" id="user-password">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                id="user-password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border px-2 py-3 w-full outline-none rounded-lg"
              />
            </div>

            <Link to="/doctor/dashboard">
            <div className='bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'>
              <button onClick={handleLogin}>SIGN IN</button>
            </div>
            </Link>
            </div>
          </form> 
          <p className='pt-3 text-blue-500 cursor-pointer text-right '>Forgot your password?</p>
      </div>
    </div>
  );
};

export default LoginForm;
