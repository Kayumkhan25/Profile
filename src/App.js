import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import Loader from "./components/Loader";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  
  // Function to extract the page number from the URL query parameters
  const getPageNumber = () => {
    const params = new URLSearchParams(location.search);
    return params.get("page") || 1;  // Default to page 1 if not present
  };

  useEffect(() => {
    const page = getPageNumber();
    fetch(`https://randomuser.me/api/?page=${page}&results=1&seed=abc`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [location.search]);  // Re-fetch if the query parameter changes

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      {userData ? (
        <ProfileCard user={userData} />
      ) : (
        <p><Loader /></p>
      )}
    </div>
  );
  
  
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}



export default App;
