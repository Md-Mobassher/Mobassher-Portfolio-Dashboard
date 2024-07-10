/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllSkillsQuery } from "@/redux/features/admin/skillManagementApi";
import AddSkillModal from "./AddSkillModal";
import { SkillDataTable } from "./SkillDataTable";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import EditSkillModal from "./EditSkillModal";

const SkillManagement = () => {
  const { data, isLoading } = useGetAllSkillsQuery(undefined);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedSkill(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    setSelectedSkill(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Confirm deletion:", selectedSkill);
    // Implement delete logic here
    setShowDeleteModal(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log("Data:", data);

  const columns: ColumnDef<any>[] = [
    {
      header: "Skill Name",
      accessorKey: "name",
    },
    {
      header: "Proficiency Level",
      accessorKey: "proficiencyLevel",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
  ];

  return (
    <div>
      <AddSkillModal />
      <div className="mt-8">
        {data && data.success && data.data && (
          <SkillDataTable
            columns={columns}
            data={data?.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      {showDeleteModal && (
        <Modal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          title="Confirm Deletion"
        >
          <p>Are you sure you want to delete this skill?</p>
          <div className="flex gap-5 mt-5">
            <button
              onClick={confirmDelete}
              className="text-white bg-red-600 rounded-lg px-5 py-2"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="text-white bg-green-500 rounded-lg px-5 py-2"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      <EditSkillModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        skill={selectedSkill}
      />
    </div>
  );
};

export default SkillManagement;
