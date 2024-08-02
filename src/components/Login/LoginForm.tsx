import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logo } from "../../assets/images";
import { BiArrowBack } from "react-icons/bi";
import { CgSpinner } from 'react-icons/cg';
import { useUser } from '../../context/UserContext';

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setFullName } = useUser();
  const reqBody = { userEmail, userPassword };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://blugle-server.onrender.com/api/login",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { token, userRole, fullName } = response.data;
        setFullName(fullName);
        localStorage.setItem("accessToken", JSON.stringify(token));
        if (userRole === "doctor" || userRole === "admin") {
          navigate("/doctor/dashboard");
        } else {
          navigate("/patient/dashboard");
        }
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[100vh] lg:pr-36 mt-10 md:mt-24 mx-6">
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
        <form
          onSubmit={handleLogin}
          method="POST"
          action="https://blugle-server.onrender.com/api/login"
        >
          <div className="py-3 px-4  rounded-lg mb-4 w-full sm:w-[450px] mt-2">
            <label className="">Email Address</label>
            <br />
            <input
              type="email"
              placeholder="Enter email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="outline-none py-3 w-full border"
            />
          </div>
          <div className="py-3 px-4  rounded-lg mb-4 w-full sm:w-[450px]">
            <label className="">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="outline-none py-3 w-full border"
            />
          </div>
          <button
            type="submit"
            className="bg-navlinks py-2 px-3 rounded-md text-center text-white cursor-pointer w-full sm:w-[450px] hover:scale-105 duration-300 ease-linear"
            disabled={loading}
          >
            {loading ? (
              <CgSpinner className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p className="pt-3 cursor-pointer text-center font-semibold">
          By submitting your information, you agree to our{" "}
          <span className="text-navlinkshover">Privacy Policy</span> and{" "}
          <span className="text-navlinkshover">Terms of use</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;