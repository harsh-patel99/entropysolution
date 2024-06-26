import React, { useState, useEffect } from "react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import UserCard from "./Components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getAllUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const onSearch = (data) => {
    const searchQuery = data.target.value.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User Search</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full px-4 py-2 pr-10 border rounded-md"
            onChange={onSearch}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FeatherIcon icon="search" />
          </div>
        </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(filteredUsers.length ? filteredUsers : users).map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
