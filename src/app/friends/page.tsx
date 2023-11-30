"use client";

/// Import React and necessary components
import React from "react";
import DefaultLayout from "@/components/layout/default-layout/page";
import SidebarFriends from "@/components/sidebar-friends/page";
import FriendRequestsDisplay from "@/components/friend-request-display/page";

// Define the Friends component
const Friends = () => {
  // Replace the following mock data with your actual friend requests data
  const friendRequests = Array.from({ length: 20 }, (_, index) => ({
    id: `${index + 1}`,
    avatar: `https://picsum.photos/1920/1080?random=${index + 1}`, // Replace with your preferred source
    name: `Friend ${index + 1}`,
    mutualFriends: 5,
  }));
  
  // Return the component structure
  return (
    <DefaultLayout>
      <div className="friends-container">
        <SidebarFriends />
        <div className="friends-main-content">
          <h1 className="invitation-heading">Lời mời kết bạn</h1>
          <FriendRequestsDisplay friendRequests={friendRequests} />
        </div>
      </div>
      {/* Apply styles using JSX */}
      <style jsx>{`
        .friends-container {
          display: flex;
          margin-right: 0; /* Remove margin-right */
        }
  
        .friends-main-content {
          margin-left: 350px; /* Adjust the width of the sidebar */
          padding: 16px; /* Add padding for spacing */
          flex-grow: 1; /* Allow the content to grow and fill available space */
        }
  
        .invitation-heading {
          margin-bottom: 16px; /* Add margin below the heading */
          font-size: 24px; /* Adjust font size */
          color: #7f8286; /* Adjust text color */
          font-weight: bold;
        }
  
        .friend-request-item {
          width: 200px;
          height: 350px;
        }
  
        .avatar {
          width: 100%; /* Use 100% width to fill the container */
          height: 200px;
          border-radius: 5%;
          margin-bottom: 8px;
          object-fit: cover; /* Maintain aspect ratio and cover the container */
        }
      `}</style>
    </DefaultLayout>
  );
};

// Export the Friends component
export default Friends;
