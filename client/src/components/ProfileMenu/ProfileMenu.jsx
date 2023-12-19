import React, { useState } from "react";

const ProfileMenu = ({ user, logout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="profile-menu">
      <div className="avatar-container" onClick={toggleDropdown}>
        <img src={user?.picture} alt="user image" className="avatar" />
      </div>

      {isDropdownOpen && (
        <div className="dropdown" onBlur={closeDropdown} tabIndex={0}>
          <div className="menu-item" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
