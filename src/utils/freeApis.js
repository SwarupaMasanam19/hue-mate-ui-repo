// src/utils/freeApis.js

// This function gets a placeholder image - useful for testing UI
export const getPlaceholderImage = (width, height) => {
    return `https://via.placeholder.com/${width}x${height}`;
  };
  
  // This function gets random user data - useful for testing
  export const getRandomUserData = async () => {
    const response = await fetch('https://randomuser.me/api/');
    return response.json();
  };