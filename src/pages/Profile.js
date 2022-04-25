import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Successfully Logout");
    navigate("/");
  };

  return (
    <Layout>
      <div class="container mt-4 w-50 d-flex justify-content-between">
        <h4>Profile Details</h4>
        <button className="btn btn-danger" onClick={logoutHandler}>
          Logout
        </button>
      </div>

      <p>{name}</p>
      <p>{email}</p>
    </Layout>
  );
};

export default Profile;
