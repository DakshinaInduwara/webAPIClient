import React, { useState, useEffect } from 'react';
import { getTrainLocations } from '../services/trainService';

const TrainMap = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const data = await getTrainLocations();
      setTrains(data);
    };
    fetchTrains();
  }, []);

  return (
    <div>
      <h1>Train Locations</h1>
      <ul>
        {trains.map(train => (
          <li key={train._id}>
            Train ID: {train.trainId} - Location: ({train.location.lat}, {train.location.lon})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainMap;
