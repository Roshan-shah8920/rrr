import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";

const Profile = () => {
  const { user, logoutUser, registerUser } = useProductContext();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "", // profile picture
  });
  const [editMode, setEditMode] = useState(false);
  const [preview, setPreview] = useState(""); // preview of uploaded image

  useEffect(() => {
    if (user) {
      setUserDetails({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        avatar: user.avatar || "", // user avatar if exists
      });
      setPreview(user.avatar || "https://via.placeholder.com/150"); // placeholder if no avatar
    }
  }, [user]);

  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // show preview
      setUserDetails({ ...userDetails, avatar: file }); // store file for upload
    }
  };

  const handleSave = async () => {
    // Example: call registerUser or updateUser API
    const formData = new FormData();
    formData.append("name", userDetails.name);
    formData.append("email", userDetails.email);
    formData.append("phone", userDetails.phone);
    formData.append("address", userDetails.address);
    if (userDetails.avatar instanceof File) {
      formData.append("avatar", userDetails.avatar);
    }

    const data = await registerUser(formData); // assuming API handles FormData
    if (data?.user) {
      alert("Profile updated successfully!");
      setEditMode(false);
    } else {
      alert("Failed to update profile.");
    }
  };

  if (!user) {
    return <div className="alert alert-warning text-center mt-5">Please login to view your profile.</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Profile</h2>
      <div className="card p-4 shadow-sm" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="text-center mb-4">
          <img
            src={preview}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "120px", height: "120px", objectFit: "cover", border: "2px solid #ddd" }}
          />
          {editMode && (
            <div className="mt-2">
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            rows="3"
            value={userDetails.address}
            onChange={handleChange}
            disabled={!editMode}
          ></textarea>
        </div>

        <div className="d-flex justify-content-between mt-4">
          {editMode ? (
            <>
              <button className="btn btn-success" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
              <button className="btn btn-danger" onClick={logoutUser}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
