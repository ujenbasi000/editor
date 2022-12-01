import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ markdown }) => {
  console.log({ markdown });
  return (
    <div className="text-gray-100 max-h-[500px] overflow-auto ">
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export default Preview;
