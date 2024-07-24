/* eslint-disable @typescript-eslint/no-explicit-any */
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import MFileUploader from "@/components/form/MFileUploader";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { useAddTestimonialMutation } from "@/redux/features/admin/testimonialManagementApi";

const AddTestimonialModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTestimonial, { isLoading }] = useAddTestimonialMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    let imageUrl = "https://mobassher.vercel.app";
    if (data.file) {
      imageUrl = await uploadImageToCloudinary(data.file);
      if (!imageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }
    data.profileImg = imageUrl;
    // console.log(data);

    try {
      const res = await addTestimonial(data);
      console.log(res);

      toast.success(res?.data?.message || "Testimonial added successfully.");

      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Testimonial added Failed.");
    }
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New Testimonial
      </button>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add New Testimonial"
      >
        <MForm onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-5">
            <MInput
              name="authorName"
              type="text"
              label="Author Name"
              required
            />
            <MInput name="company" type="text" label="Company" required />
            <MInput name="role" type="text" label="Role" required />
            <MInput name="content" type="text" label="Content" required />
            <MFileUploader name="file" label="Profile image" />
          </div>

          {isLoading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
            >
              {isLoading ? "Adding New Testimonial..." : "Add New Testimonial"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add New Testimonial
            </button>
          )}
        </MForm>
      </FullScreenModal>
    </div>
  );
};

export default AddTestimonialModal;
