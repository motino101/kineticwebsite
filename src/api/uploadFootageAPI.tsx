import axios from 'axios';

export const uploadVideos = async (files: File[]) => {
    const formData = new FormData();
    
    files.forEach(file => {
      formData.append('videos', file);
    });
  
    // Log FormData content
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      const response = await axios.post('https://kinetic-backend-94edd43e6f42.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload success:', response.data);
      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };