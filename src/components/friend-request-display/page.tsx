import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface FriendRequest {
  id: string;
  avatar: string;
  name: string;
  mutualFriends: number;
}

interface FriendRequestsDisplayProps {
  friendRequests: FriendRequest[];
}

const FriendRequestsDisplay: React.FC<FriendRequestsDisplayProps> = ({ friendRequests }) => {
  return (
    <div className="friend-requests-container">
      {friendRequests.map((request) => (
        <div key={request.id} className="friend-request-item">
          <div className="friend-request-content">
            <img src={request.avatar} alt={request.name} className="avatar" />
            <div className="user-details">
              <h3>{request.name}</h3>
              <p>{request.mutualFriends} bạn chung</p>
            </div>
            <div className="button-container">
              <button className="confirm-button">
                <FaCheck /> <span>Xác nhận</span>
              </button>
              <button className="delete-button">
                <FaTimes /> <span>Xóa</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .friend-requests-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .friend-request-item {
          width: 200px;
          height: 350px;
        }

        .friend-request-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0px;
          border: 1px solid #ddd;
          border-radius: 2px;
          height: 100%;
        }

        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 2%;
          margin-bottom: 0; /* Remove margin-bottom */
        }

        .user-details {
          text-align: center;
          margin-bottom: 8px;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .confirm-button,
        .delete-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #007bff;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 170px; /* Set width in pixels */
          height: 30px; /* Set height in pixels */
        }

        .delete-button {
          background-color: #6c757d;
        }

        .confirm-button span,
        .delete-button span {
          margin-left: 4px;
        }
      `}</style>
    </div>
  );
};

export default FriendRequestsDisplay;
