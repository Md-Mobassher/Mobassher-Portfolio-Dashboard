/* eslint-disable @typescript-eslint/no-explicit-any */

import AddProjectModal from "./AddProjectModal";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import EditProjectModal from "./EditProjectModal";
import DeleteProjectModal from "./DeleteProjectModal";
import { toast } from "react-toastify";
import {
  useDeleteAProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/features/admin/projectManagemetApi";
import { ProjectDataTable } from "./ProjectDataTable";

const ProjectManagement = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);
  const [deleteAProject] = useDeleteAProjectMutation(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleEdit = (row: any) => {
    // console.log(row);
    setSelectedProject(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    // console.log(row);
    setSelectedProject(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // console.log("Confirm deletion:", selectedProject);
    try {
      const res = await deleteAProject(selectedProject?._id);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Project Deleted Successfully");
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
      header: "Project Name",
      accessorKey: "name",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Technology",
      accessorKey: "technology",
    },
  ];

  return (
    <div className="">
      <AddProjectModal />
      <div className="mt-8">
        {data && data?.success && data?.data && (
          <ProjectDataTable
            columns={columns}
            data={data?.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <DeleteProjectModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <EditProjectModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectManagement;
