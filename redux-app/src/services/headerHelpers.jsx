export const headerHelpers = ({ method, headers, body, ...attr }) => {
  return {
    data: {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: { sessionId },
      ...attr,
    },
  };
};
