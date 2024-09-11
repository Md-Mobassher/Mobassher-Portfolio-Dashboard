/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateABlogMutation } from "@/redux/features/admin/blogManagementApi";
import MFileUploader from "@/components/form/MFileUploader";
import ReactQuill from "react-quill";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";

interface EditBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: any;
}

const EditBlogModal: React.FC<EditBlogModalProps> = ({
  isOpen,
  onClose,
  blog,
}) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [updateBlog] = useUpdateABlogMutation();

  useEffect(() => {
    console.log("Selected Blog:", blog);
    setContent(blog?.content);
  }, [blog]);

  const defaultBlogs = {
    title: blog?.title,
    tags: blog?.tags,
    category: blog?.category,
    coverImage: blog?.coverImage,
  };

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    let imageUrl = blog?.coverImage;

    // Check if a new image file is provided
    if (data.file) {
      imageUrl = await uploadImageToCloudinary(data.file);
      if (!imageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }

    const id = blog._id;
    const updatedData = {
      title: data?.title,
      content: content,
      tags: (data.tags || "").toString().split("|"),
      category: data?.category,
      coverImage: imageUrl,
    };
    // console.log(updatedData);
    try {
      const res = await updateBlog({ id, updatedData });
      // console.log(res);

      toast.success(res?.data?.message || "Blog updated successfully.");
      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Blog update failed.");
      setLoading(false);
      onClose();
    }
  };

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} title="Edit Blog">
      <MForm onSubmit={handleSubmit} defaultValues={defaultBlogs}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5">
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

        <button
          type="submit"
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10 ${
            loading ? "disabled:opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Updating Blog..." : "Update Blog"}
        </button>
      </MForm>
    </FullScreenModal>
  );
};

export default EditBlogModal;
