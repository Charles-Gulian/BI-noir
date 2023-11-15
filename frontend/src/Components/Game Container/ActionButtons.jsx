import React from 'react'

// Button component
export const ActionButtons = ({ label,action, method, body, onClick }) => {
  const handleButtonClick = () => {
    // You can customize the fetch request logic here
    fetch(`/${action}`, {
      method: method,
          headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
        .then((response) =>
        {

            return  response.json()
        })
        .then((data) => {
            // Handle the data or perform additional actions
            console.log(data);
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
