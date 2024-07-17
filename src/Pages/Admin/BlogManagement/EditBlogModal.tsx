/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateABlogMutation } from "@/redux/features/admin/blogManagementApi";

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
  const [updateBlog, { isLoading }] = useUpdateABlogMutation();

  useEffect(() => {
    console.log("Selected Blog:", blog);
  }, [blog]);

  const defaultBolgs = {
    title: blog?.title,
    content: blog?.content,
    tags: blog?.tags,
    category: blog?.category,
    coverImage: blog?.coverImage,
    // blogStatus: blog?.blogStatus,
  };

  const handleSubmit = async (data: FieldValues) => {
    const id = blog._id;
    const updatedData = {
      title: data?.title,
      content: data?.content,
      tags: data?.tags,
      category: data?.category,
      coverImage: data?.coverImage,
      // blogStatus: data?.blogStatus,
    };

    console.log(id);
    console.log(updatedData);
    try {
      const res = await updateBlog({ id, updatedData });
      console.log(res);
      if (res?.data?.success) {
        toast.success("Blog updated successfully.");
      }
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Blog update Failed.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Blog">
      <MForm onSubmit={handleSubmit} defaultValues={defaultBolgs}>
        <MInput name="title" type="text" label="Blog Title" required />
        <MInput name="content" type="text" label="Blog Content" required />
        <MInput name="tags" type="text" label="Tags" required />
        <MInput name="category" type="text" label="Category" required />
        {/* <MInput name="blogStatus" type="text" label="Blog Status" required /> */}
        <MInput name="coverImage" type="text" label="Cover Image" required />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Edit Blog"}
        </button>
      </MForm>
    </Modal>
  );
};

export default EditBlogModal;
