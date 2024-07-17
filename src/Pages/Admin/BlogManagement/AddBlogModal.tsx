import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import Modal from "@/components/ui/Modal";
import { useAddBlogMutation } from "@/redux/features/admin/blogManagementApi";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    // console.log(data);
    data.tags = data.tags.split(",");
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
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New Blog">
        <MForm onSubmit={handleSubmit}>
          <MInput name="title" type="text" label="Blog Title" required />
          <MInput name="content" type="text" label="Blog Content" required />
          <MInput name="tags" type="text" label="Tags" required />
          <MInput name="category" type="text" label="Category" required />
          <MInput name="coverImage" type="text" label="Cover Image" required />

          {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
            >
              {isLoading ? "Adding New Blog..." : "Add New Blog"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled"
            >
              Add New Blog
            </button>
          )}
        </MForm>
      </Modal>
    </div>
  );
};

export default AddBlogModal;
