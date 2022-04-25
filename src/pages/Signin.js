import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/OAuth";
import "../styles/signin.css";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login Success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email Or Password");
    }
  };
  return (
    <Layout title="signin - house marketplace">
      <div className="row m-4 signin-container ">
        <div className="col-md-6">
          <img src="./assets/loginpage.svg" alt="login" />
        </div>
        <div className="col-md-6 signin-container-col2">
          <form onSubmit={loginHandler}>
            <h4 className=" text-center">Sign In</h4>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={onChange}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onChange}
                className="form-control"
                id="password"
              />
            </div>
            <div className="mb-3 show-pass-forgot">
              <span>
                <BsFillEyeFill
                  className="text-danger ms-2 "
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowPassword((prevState) => !prevState);
                  }}
                />{" "}
                show password
              </span>{" "}
              |
              <Link to="/forgot-password" className="ms-4">
                forgot Password
              </Link>
            </div>
            <button type="submit" className="btn signinbutton">
              Sign in
            </button>
            <span className="ms-4 new-user"> New User</span>{" "}
            <Link to="/signup">Sign up !</Link>
            <OAuth />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
