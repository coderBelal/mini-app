import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Telegram WebApp SDK
    const tg = window.Telegram.WebApp;

    tg.ready();

    // Fetch user data from Telegram WebApp
    const user = tg.initDataUnsafe?.user;

    if (user) {
      setUserData({
        id: user.id,
        firstName: user.first_name,
        username: user.username,
      });
    }

    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Telegram Mini App</h1>
      {userData ? (
        <div className="p-4 bg-white shadow-md rounded-lg">
          <p>
            <strong>ID:</strong> {userData.id}
          </p>
          <p>
            <strong>Name:</strong> {userData.firstName || "N/A"}
          </p>
          <p>
            <strong>Username:</strong> @{userData.username || "N/A"}
          </p>
        </div>
      ) : (
        <p>No user data available. Please open this app in Telegram.</p>
      )}
    </div>
  );
}

export default App;
