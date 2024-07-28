/* eslint-disable @typescript-eslint/no-explicit-any */
import AddBlogModal from "./AddBlogModal";
import Loading from "@/components/Loading";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import EditBlogModal from "./EditBlogModal";
import DeleteBlogModal from "./DeleteBlogModal";
import { toast } from "react-toastify";
import {
  useDeleteABlogMutation,
  useGetAllblogsQuery,
} from "@/redux/features/admin/blogManagementApi";
import { BlogDataTable } from "./BlogDataTable";

const BlogManagement = () => {
  const { data, isLoading } = useGetAllblogsQuery(undefined);
  const [deleteABlog] = useDeleteABlogMutation(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedBlog(row);
    setShowEditModal(true);
  };

  const handleDelete = (row: any) => {
    // console.log(row);
    setSelectedBlog(row);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // console.log("Confirm deletion:", selectedBlog);
    try {
      const res = await deleteABlog(selectedBlog?._id);
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Blog Deleted Successfully");
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
      header: "Blog Title",
      accessorKey: "title",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Tags",
      accessorKey: "tags",
    },
  ];

  return (
    <div className="">
      <AddBlogModal />
      <div className="mt-8">
        {data && data?.success && data?.data && (
          <BlogDataTable
            columns={columns}
            data={data?.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <DeleteBlogModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <EditBlogModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        blog={selectedBlog}
      />
    </div>
  );
};

export default BlogManagement;
