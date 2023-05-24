import React from "react";
import "./ProfileUserCard.css";
import { useNavigate } from "react-router-dom";
const ProfileUserCard = ({ userName, profilePic, address }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${address}/${userName}/`);
  };
  return (
    <>
      <div className="profile-usercard">
        <div className="profiel-usercard-main-info">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-usercard-pic"
          />
          <span className="profile-usercard-name" onClick={handleClick}>
            {userName}
          </span>
          <button className="profile-remove-follower">Remove</button>
        </div>
        <small className="profile-usercard-address">{address}</small>
      </div>
    </>
  );
};

export default ProfileUserCard;
