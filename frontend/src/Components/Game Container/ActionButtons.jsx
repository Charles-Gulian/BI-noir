import React from 'react'

// Button component
export const ActionButtons = ({ label, onClick }) => {
  const handleButtonClick = () => {
    // You can customize the fetch request logic here
    fetch('/')
      .then((response) => response.json())
      .then((data) => {
        // Handle the data or perform additional actions
        console.log(`Fetch request successful for ${label}`);
      })
      .catch((error) => {
        // Handle errors
        console.error(`Error in fetch request for ${label}:`, error);
      });

    // Invoke the onClick callback if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2"
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};
