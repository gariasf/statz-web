import { useState, useEffect } from "react";

const usePlayerList = () => {
    const [data, updateData] = useState(undefined);
  
    // empty array as second argument equivalent to componentDidMount
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3000/api/players');
        const json = await response.json();
        
        if(json.ok) {
          updateData(json.value);
        } else {
          console.error('Error while loading player list')
          console.error(json.error, json.errorMessage)
        }
      }
      fetchData();
    }, ['http://localhost:3000/api/players']);
  
    return data;
  };

  export default usePlayerList
