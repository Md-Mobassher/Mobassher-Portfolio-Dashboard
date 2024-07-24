/* eslint-disable @typescript-eslint/no-explicit-any */
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { useAddBlogMutation } from "@/redux/features/admin/blogManagementApi";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import MFileUploader from "@/components/form/MFileUploader";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";

const AddBlogModal = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addBlog] = useAddBlogMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    data.tags = data?.tags?.split(",") || "";
    data.content = content;
    let imageUrl = "";
    if (data.file) {
      imageUrl = await uploadImageToCloudinary(data.file);
      if (!imageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }

    data.coverImage = imageUrl;
    // console.log(data);
    try {
      const res = await addBlog(data);
      // console.log(res);

      toast.success(res?.data?.message || "Blog added successfully.");
      setContent("");
      setLoading(false);
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Blog added Failed.");
      setContent("");
      setLoading(false);
      closeModal();
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New Blog
      </button>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add New Blog"
      >
        <MForm onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-5">
            <MInput name="title" type="text" label="Blog Title" required />
            <MInput name="category" type="text" label="Category" required />
            <MInput name="tags" type="text" label="Tags" required />
            <MFileUploader name="file" label="Cover Image" />
          </div>

          <p className="font-semibold mb-1">Blog Content</p>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="border-green-500 rounded-md h-[250px] pb-16"
          />

          {loading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
            >
              {loading ? "Adding New Blog..." : "Add New Blog"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add New Blog
            </button>
          )}
        </MForm>
      </FullScreenModal>
    </div>
  );
};

export default AddBlogModal;
