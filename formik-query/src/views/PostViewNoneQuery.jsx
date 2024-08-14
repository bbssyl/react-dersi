import React, { useEffect, useState } from "react";

const PostViewNoneQuery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setIsLoading(true);
    if (response.ok) {
      setData(await response.json());
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
          );
        })}
    </div>
  );
};

export default PostViewNoneQuery;
