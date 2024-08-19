import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import { useUser } from "../../context/UserContext";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { setFullName } = useUser();
  const navigate = useNavigate();

  const reqBody = {
    userFirstName: firstName,
    userLastName: lastName,
    userName: name,
    userPassword: pwd,
    userEmail: email,
    userPhone: phone,
    userAddress: address,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic client-side validation
    if (!firstName || !lastName || !email || !phone || !pwd || !address) {
      toast.error("Please fill all fields.", { position: "top-right" });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://blugle-server.onrender.com/api/signup",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("The send was successful");
        setFullName(name); // Store full name in context and localStorage
        navigate("/login");
        toast.success("Account created successfully!", { position: "top-right" });
      } else if (response.status === 400) {
        console.log(response.data.message);
        toast.error("Please check your credentials and try again.", { position: "top-right" });
      } else if (response.status === 409) {
        console.log(response.data.existingUserMessage);
        toast.error("An account with this email already exists.", { position: "top-right" });
      } else if (response.status === 500) {
        console.log(response.data.message);
        toast.error("An error occurred during sign up.", { position: "top-right" });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sign up.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Link to="/">
        <BiArrowBack className="text-2xl text-blue-600 cursor-pointer lg:hidden m-3" />
      </Link>
      <img src={logo} className="lg:hidden" />
      <div className="w-full mx-4 sm:mx-16 lg:pl-10 md:mt-6 mt-3">
        <div>
          <h2 className="text-lg md:text-xl uppercase">REGISTER</h2>
          <p className="text-4xl md:text-5xl font-bold pt-2">
            Sign Up For Free
          </p>
          <p className="text-gray-800 py-2 text-sm md:text-lg">
            Already have an account?
            <span className="text-blue-500 pl-2">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit} method="POST" action="https://blugle-server.onrender.com/api/signup">
          <div className="w-[330px] sm:w-[600px] lg:w-[400px]">
            <div className="mt-2 mb-2">
              <label className="">First Name</label>
              <br />
              <input
                type="text"
                name="userFirstName"
                placeholder="First name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="">Last Name</label>
              <br />
              <input
                type="text"
                name="userLastName"
                placeholder="Enter Last name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="">Full Name</label>
              <br />
              <input
                type="text"
                name="userName"
                placeholder="Enter full name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="">Email</label>
              <br />
              <input
                type="email"
                name="userEmail"
                placeholder="Enter Email"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="">Address</label>
              <br />
              <input
                type="text"
                name="userAddress"
                placeholder="Enter your location here"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-4">
              <label className="">Phone Number</label>
              <br />
              <input
                type="number"
                name="userPhone"
                pattern="[0-9]+"
                placeholder="Phone Number"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="">Password</label>
              <br />
              <input
                type="password"
                name="userPassword"
                placeholder="Password"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear relative"
              disabled={loading}
            >
              {loading ? (
                <CgSpinner className="animate-spin h-5 w-5 mx-auto" />
              ) : (
                "SIGN UP"
              )}
            </button>
          </div>
        </form>
      </div>
      <p className="pt-3 cursor-pointer text-center lg:pl-20 font-semibold px-2">
        By submitting your information, you agree to our{" "}
        <span className="text-navlinkshover">Privacy Policy</span> and{" "}
        <span className="text-navlinkshover">Terms of use</span>
      </p>
    </div>
  );
};

export default SignUpForm;
