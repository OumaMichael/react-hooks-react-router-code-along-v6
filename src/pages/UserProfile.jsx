import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // dynamic ID from route

  return (
    <div style={{ padding: "1rem" }}>
      <h1>User Profile</h1>
      <p>
        Welcome to the profile of user with ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default UserProfile;