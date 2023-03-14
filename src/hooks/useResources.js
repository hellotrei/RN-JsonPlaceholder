import { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const useResources = (path) => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await jsonPlaceholder.get(path);
        setResources(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [path]);

  return { resources, isLoading };
};
