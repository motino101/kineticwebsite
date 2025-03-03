import axios from 'axios';

export const uploadVideos = async (files: File[]) => { // Accept an array of File objects
  const formData = new FormData();
  
  // Append each file to the formData object
  files.forEach(file => {
    formData.append('videos', file);
  });

  try {
    const response = await axios.post('https://kinetic-backend-94edd43e6f42.herokuapp.com/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Upload success:', response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Upload error:', error);
    throw error; // Re-throw the error for the caller to catch
  }
};