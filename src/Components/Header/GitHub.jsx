import React, { useEffect, useState } from "react";

const GitHub = () => {
  const [data, setData] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/shobhit902");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        console.log(json);

        setData(json);
      } catch (error) {
        seterror(error.message);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return (
      <div className="text-center m-4 bg-red-600 text-white p-4 text-3xl">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center m-4 text-gray-500 text-xl">Loading...</div>
    );
  }
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};
// };

export default GitHub;
