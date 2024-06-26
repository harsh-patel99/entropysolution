import React from "react";


const UserCard = ({ user }) => {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-4 mb-4 sm:mb-0 sm:p-6 lg:p-8">
      <h2 className="text-xl lg:text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-1"><span className="font-bold">UserName:</span> @{user.username}</p>
      <p className="text-gray-700 mb-4"><span className="font-bold">Email:</span> {user.email}</p>
      <div className="text-gray-600">
        <h5 className="font-bold">Address:</h5>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
