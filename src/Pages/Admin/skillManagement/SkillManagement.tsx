/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllSkillsQuery } from "@/redux/features/admin/skillManagementApi";
import AddSkillModal from "./AddSkillModal";
import { SkillDataTable } from "./SkillDataTable";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import EditSkillModal from "./EditSkillModal";
import DeleteSkillModal from "./DeleteSkillModal";

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
    console.log(row);
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

  // console.log("Data:", data);

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

      <DeleteSkillModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <EditSkillModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        skill={selectedSkill}
      />
    </div>
  );
};

export default SkillManagement;
