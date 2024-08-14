import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const PostView = () => {
  const queryClient = new useQueryClient();

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  };

  const { data, isLoading, error } = useQuery("posts", fetchData, {});

  const deletePost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    return true;
  };

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <div>
              <button
                style={{ background: "red", color: "white" }}
                onClick={() => handleDelete(item.id)}
              >
                Sil
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostView;
