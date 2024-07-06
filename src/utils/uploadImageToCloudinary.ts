import { toast } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImageToCloudinary = async (file: any) => {
  if (!file) {
    toast.error("File not found.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", `${process.env.CLOUDINARY_UPLOAD_PRESET}`);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  console.log(data);
  if (!data) {
    toast.error("Failed to upload image");
  }
  // console.log(data);
  return data?.secure_url;
};
