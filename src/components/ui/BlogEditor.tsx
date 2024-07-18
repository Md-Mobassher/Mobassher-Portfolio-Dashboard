/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const BlogEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleSubmit = () => {
    // Handle the form submission, e.g., send the content to your server
    console.log(content);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleContentChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BlogEditor;
