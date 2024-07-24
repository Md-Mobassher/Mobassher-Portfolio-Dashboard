/* eslint-disable @typescript-eslint/no-explicit-any */
// import AddContactModal from "./AddContactModal";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import DeleteContactModal from "./DeleteContactModal";
import { toast } from "react-toastify";
import { ContactDataTable } from "./ContactDataTable";
import {
  useDeleteAContactMutation,
  useGetAllContactsQuery,
} from "@/redux/features/admin/contactManagementApi";
import ViewContactModal from "./ViewContactModal";

const ContactManagement = () => {
  const { data, isLoading } = useGetAllContactsQuery(undefined);
  const [deleteAContact] = useDeleteAContactMutation(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedContact(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    // console.log(row);
    setSelectedContact(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // console.log("Confirm deletion:", selectedContact);
    try {
      const res = await deleteAContact(selectedContact?._id);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Contact Deleted Successfully");
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
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Subject",
      accessorKey: "subject",
    },
    {
      header: "Message",
      accessorKey: "message",
    },
  ];

  return (
    <div>
      {/* <AddContactModal /> */}
      <h2 className="text-2xl text-green-500 text-center font-bold">
        View All Messages
      </h2>

      <div className="mt-8">
        {data && data?.success && data?.data && (
          <ContactDataTable
            columns={columns}
            data={data?.data || []}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <DeleteContactModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <ViewContactModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        contact={selectedContact}
      />
    </div>
  );
};

export default ContactManagement;
