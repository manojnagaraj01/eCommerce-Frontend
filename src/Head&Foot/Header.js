import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import HeaderImage from "../Image/LOGO.png";

import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
    // State for search bar dropdown
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSearchClick = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };
  // State for notification dropdown
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Sample data for notification messages
  const notificationMessages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
  ];
  // Sample data for profile dropdown
  const profileOptions = [
    "Profile Option 1",
    "Profile Option 2",
    "Profile Option 3",
    "Profile Option 4",
  ];



  return (
    <div className="header">
      {/* Company Logo */}
      <div className="logo">
        <img src="" alt="Company Logo" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">
          Search
        </button>
      </div>
      {showSuggestions && (
        <ul className="suggestions-list">
          {suggestions
            .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>

      {/* Notification Icon */}
      <div
        className="notification-icon"
        onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
      >
        <span><NotificationsNoneIcon/></span>
        {showNotificationDropdown && (
          <div className="notification-dropdown">
            {/* Scrollable area for notification messages */}
            <div className="notification-scroll">
              {notificationMessages.map((message, index) => (
                <div key={index} className="notification-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      <div
        className="profile"
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      >
        <span>👤</span>
        {showProfileDropdown && (
          <div className="profile-dropdown">
            {/* Dropdown content goes here */}
            <div className="profile-option">Profile Option 1</div>
            <div className="profile-option">Profile Option 2</div>
            <div className="profile-option">Profile Option 3</div>
            <div className="profile-option">Profile Option 4</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
