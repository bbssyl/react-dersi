import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NewsView = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setData(await response.json());
  };
  const handleNavigate = (id) => {
    navigate(`/news/sport/?id=${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>News</h2>
      {data &&
        data?.map((item) => {
          return (
            <div
              onClick={() => handleNavigate(item?.id)}
              key={item?.id}
              style={{
                margin: "1rem",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <div>{item?.id}</div>
              <div>{item?.title}</div>
              <div>{item?.body}</div>
            </div>
          );
        })}
      <Outlet />
    </div>
  );
};

export default NewsView;
