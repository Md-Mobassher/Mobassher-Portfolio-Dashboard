import MFileUploader from "@/components/form/MFileUploader";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { useAddProjectMutation } from "@/redux/features/admin/projectManagemetApi";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const AddProjectModal = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addProject] = useAddProjectMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    // console.log(data);
    let coverImageUrl = "";
    let landingImageUrl = "";

    data.description = data.description.split("|");
    data.technology = data.technology.split("|");
    data.clientUrl = data.clientUrl || "";
    data.serverUrl = data.serverUrl || "";
    data.clientUrl = data.clientUrl || "";

    if (data?.image?.cover) {
      coverImageUrl = await uploadImageToCloudinary(data?.image?.cover);
      if (!coverImageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }
    if (data?.image?.landing) {
      landingImageUrl = await uploadImageToCloudinary(data?.image?.landing);
      if (!landingImageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }

    data.image.cover = coverImageUrl;
    data.image.landing = landingImageUrl;
    // console.log(data);

    try {
      const res = await addProject(data);
      // console.log(res);

      if (res && res?.data?.success) {
        toast.success(res?.data?.message || "Project added successfully.");
      }
      setLoading(false);
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Project added Failed.");
      setLoading(false);
      closeModal();
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={openModal}
      >
        Add New Project
      </button>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add New Project"
      >
        <MForm onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5">
            <MInput name="name" type="text" label="Project Name" required />
            <MInput name="position" type="number" label="Project Position" />
            <MInput name="type" type="text" label="Project Type" required />
            <MInput
              name="description"
              type="text"
              label="Project Description"
              required
            />
            <MInput
              name="technology"
              type="text"
              label="Used Technologies"
              required
            />
            <MInput name="liveUrl" type="text" label="Live URL" required />
            <MInput name="clientUrl" type="text" label="Client Side Code URL" />
            <MInput name="serverUrl" type="text" label="Server Side Code URL" />
            <MFileUploader name="image.cover" label="Select Cover Image" />
            <MFileUploader name="image.landing" label="Select Full Image" />
          </div>

          {loading ? (
            <button
              disabled
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              {loading ? "Adding New Project..." : "Add New Project"}
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              Add New Project
            </button>
          )}
        </MForm>
      </FullScreenModal>
    </div>
  );
};

export default AddProjectModal;
