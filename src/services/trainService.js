import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTrainLocations = async () => {
  try {
    const response = await axios.get(`${API_URL}/trains`);
    return response.data;
  } catch (error) {
    console.error('Error fetching train locations:', error);
  }
};
