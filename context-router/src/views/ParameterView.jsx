import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ParameterView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    setData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      {data && (
        <div>
          <div>{data?.userId}</div>
          <div>{data?.id}</div>
          <div>{data?.title}</div>
          <div>{data?.body}</div>
        </div>
      )}
    </div>
  );
};

export default ParameterView;
