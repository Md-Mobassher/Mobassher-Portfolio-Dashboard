/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import MForm from "@/components/form/MForm";
import MInput from "@/components/form/MInput";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateAProjectMutation } from "@/redux/features/admin/projectManagemetApi";
import FullScreenModal from "@/components/ui/FullScreenModal";
import { uploadImageToCloudinary } from "@/utils/uploadImageToCloudinary";
import MFileUploader from "@/components/form/MFileUploader";

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  // console.log(project);
  const [loading, setLoading] = useState(false);
  const [updateProject] = useUpdateAProjectMutation();

  const projectDefaultValue = {
    name: project?.name,
    position: project?.position,
    type: project?.type,
    description: project?.description,
    technology: project?.technology,
    liveUrl: project?.liveUrl,
    clientUrl: project?.clientUrl,
    serverUrl: project?.serverUrl,
  };

  useEffect(() => {
    console.log("Selected Project:", project);
  }, [project]);

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    let coverImageUrl = project?.image?.cover || "";
    let landingImageUrl = project?.image?.landing || "";

    if (data.cover) {
      coverImageUrl = await uploadImageToCloudinary(data?.cover);
      if (!coverImageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }
    if (data.landing) {
      landingImageUrl = await uploadImageToCloudinary(data?.landing);
      if (!landingImageUrl) {
        toast.error("Image upload failed.");
        return;
      }
    }

    const id = project._id;
    const updatedData = {
      name: data?.name,
      position: String(data?.position),
      type: data?.type,
      description: (data.description || "").toString().split("|"),
      technology: data?.technology,
      liveUrl: data?.liveUrl,
      clientUrl: data?.clientUrl,
      serverUrl: data?.serverUrl,
      image: {
        cover: coverImageUrl,
        landing: landingImageUrl,
      },
    };

    // console.log(id);
    // console.log(updatedData);
    try {
      const res = await updateProject({ id, updatedData });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Project updated successfully.");
      }
      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Project update Failed.");
      setLoading(false);
      onClose();
    }
  };

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose} title="Edit Project">
      <MForm onSubmit={handleSubmit} defaultValues={projectDefaultValue}>
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
          <MFileUploader name="cover" label="Select Cover Image" />
          <MFileUploader name="landing" label="Select Full Image" />
        </div>

        {loading ? (
          <button
            disabled
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex justify-between"
          >
            {loading ? "Updating Project..." : "Update Project"}
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled"
          >
            Update Project
          </button>
        )}
      </MForm>
    </FullScreenModal>
  );
};

export default EditProjectModal;
