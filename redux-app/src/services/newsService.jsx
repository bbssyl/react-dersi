import { headerHelpers } from "./headerHelpers";

export const getAll = async (sessionId) => {
  const { data } = headerHelpers();
  const response = await fetch("url", data);

  return await response.json();
};
