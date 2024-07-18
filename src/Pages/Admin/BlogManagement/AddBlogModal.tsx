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

const AddBlogModal = () => {
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleSubmit = async (data: FieldValues) => {
    data.tags = data.tags.split(",");
    data.content = content;

    // console.log(data);
    try {
      const res = await addBlog(data);
      // console.log(res);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Blog added successfully.");
      }
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Blog added Failed.");
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
            <MInput
              name="coverImage"
              type="text"
              label="Cover Image"
              required
            />
          </div>

          <p className="font-semibold mb-1">Blog Content</p>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="border-green-500 rounded-md"
          />

          {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
            >
              {isLoading ? "Adding New Blog..." : "Add New Blog"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
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
