import React, { useEffect, useState } from "react";

const UseBoolean = (props) => {
  const { apiResponseState } = props;
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (apiResponseState === 1) {
      setBool(true);
    } else {
      setBool(false);
    }
  }, [apiResponseState]);
  return {
    bool,
  };
};

export default UseBoolean;
