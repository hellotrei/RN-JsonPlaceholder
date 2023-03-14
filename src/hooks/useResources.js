import { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const useResources = (path) => {
  const [resources, setResources] = useState([{ name: 'initial' }]);
  useEffect(() => {
    try {
      (async (path) => {
        console.log(`path: `, path);
        const response = await jsonPlaceholder.get(path);
        setResources(response.data);
      })(path);
    } catch (err) {
      console.log(err);
    }
  }, [path]);

  return resources;
};
