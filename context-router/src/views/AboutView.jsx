import React from "react";
import { useSearchParams } from "react-router-dom";

const AboutView = () => {
  const [searchParams] = useSearchParams();

  const url = searchParams.get("id");
  const name = searchParams.get("name");
  console.log("url", url, name);

  return (
    <div>
      AboutView {url}-{name}
    </div>
  );
};

export default AboutView;
