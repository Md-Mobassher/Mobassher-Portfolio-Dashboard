/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import {
  useDeleteAUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/admin/adminManagementApi";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { toast } from "react-toastify";
// import AddUserModal from "./AddUserModal";
import { UserDataTable } from "./UserDataTable";
import DeleteUserModal from "./DeleteUserModal";
import EditUserModal from "./EditUserModal";

const UserManagement = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const [deleteAUser] = useDeleteAUserMutation(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedUser(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    // console.log(row);
    setSelectedUser(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // console.log("Confirm deletion:", selectedUser);
    try {
      const res = await deleteAUser(selectedUser?._id);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "User Deleted Successfully");
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
      header: "User Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "IsDeleted",
      accessorKey: "isDeleted",
    },
  ];

  return (
    <div>
      {/* <AddUserModal /> */}
      <h2 className="text-2xl text-green-500 text-center font-bold">
        View All Users
      </h2>
      <div className="mt-8">
        {data && data.success && data.data && (
          <UserDataTable
            columns={columns}
            data={data?.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <DeleteUserModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <EditUserModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default UserManagement;
