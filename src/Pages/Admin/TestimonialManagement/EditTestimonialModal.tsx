/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import MFileUploader from "@/components/form/MFileUploader";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { useUpdateATestimonialMutation } from "@/redux/features/admin/testimonialManagementApi";

interface EditTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: any;
}

const EditTestimonialModal: React.FC<EditTestimonialModalProps> = ({
  isOpen,
  onClose,
  testimonial,
}) => {
  const [loading, setLoading] = useState(false);
  const [updateTestimonial] = useUpdateATestimonialMutation();

  useEffect(() => {
    console.log("Selected Testimonial:", testimonial);
  }, [testimonial]);

  const defaultTestimonials = {
    authorName: testimonial?.authorName,
    company: testimonial?.company,
    role: testimonial?.role,
    content: testimonial?.content,
  };

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    let imageUrl = testimonial?.coverImage || "";

    // Check if a new image file is provided
    if (data.file) {
      imageUrl = await uploadImageToCloudinary(data.file);
      if (!imageUrl) {
        toast.error("Image upload failed.");
        return;
      }
      return imageUrl;
    }

    const id = testimonial._id;
    const updatedData = {
      authorName: data?.authorName,
      company: data?.company,
      role: data?.role,
      content: data?.content,
      profileImg: imageUrl,
    };
    console.log(updatedData);

    try {
      const res = await updateTestimonial({ id, updatedData });
      console.log(res);

      toast.success(res?.data?.message || "Testimonial updated successfully.");
      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Testimonial update failed.");
      setLoading(false);
      onClose();
    }
  };

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} title="Edit Testimonial">
      <MForm onSubmit={handleSubmit} defaultValues={defaultTestimonials}>
        <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-x-5">
          <MInput name="authorName" type="text" label="Author Name" required />
          <MInput name="company" type="text" label="Company" required />
          <MInput name="role" type="text" label="Role" required />
          <MInput name="content" type="text" label="Content" required />
          <MFileUploader name="file" label="Profile image" />
        </div>

        {loading ? (
          <button
            disabled
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-10"
          >
            {loading ? "Updating Testimonial..." : "Update Testimonial"}
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Update Testimonial
          </button>
        )}
      </MForm>
    </FullScreenModal>
  );
};

export default EditTestimonialModal;
