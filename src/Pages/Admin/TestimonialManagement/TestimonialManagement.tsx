/* eslint-disable @typescript-eslint/no-explicit-any */
import AddTestimonialModal from "./AddTestimonialModal";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import EditTestimonialModal from "./EditTestimonialModal";
import DeleteTestimonialModal from "./DeleteTestimonialModal";
import { toast } from "react-toastify";
import { TestimonialDataTable } from "./TestimonialDataTable";
import {
  useDeleteATestimonialMutation,
  useGetAllTestimonialsQuery,
} from "@/redux/features/admin/testimonialManagementApi";

const TestimonialManagement = () => {
  const { data, isLoading } = useGetAllTestimonialsQuery(undefined);
  const [deleteATestimonial] = useDeleteATestimonialMutation(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedTestimonial(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    // console.log(row);
    setSelectedTestimonial(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // console.log("Confirm deletion:", selectedTestimonial);
    try {
      const res = await deleteATestimonial(selectedTestimonial?._id);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Testimonial Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setShowDeleteModal(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  // console.log("Data:", data);

  const columns: ColumnDef<any>[] = [
    {
      header: "Author Name",
      accessorKey: "authorName",
    },
    {
      header: "Company",
      accessorKey: "company",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Content",
      accessorKey: "content",
    },
  ];

  return (
    <div>
      <AddTestimonialModal />
      <div className="mt-8">
        {data && data?.success && data?.data && (
          <TestimonialDataTable
            columns={columns}
            data={data?.data || []}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <DeleteTestimonialModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <EditTestimonialModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        testimonial={selectedTestimonial}
      />
    </div>
  );
};

export default TestimonialManagement;
