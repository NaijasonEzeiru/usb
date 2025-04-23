"use client";
import AuthContext from "@/components/AuthContext";
import { usersColumns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import styles from "@/styles/Dashboard.module.css";
import { useContext } from "react";
const Users = () => {
  const { users }: any = useContext(AuthContext);
  return (
    <div className={styles.details}>
      <div className="px-2 py-5 bg-background shadow rounded">
        <p>All Users</p>
        {!!users && (
          <DataTable columns={usersColumns} isLoading={false} data={users} />
        )}
      </div>
    </div>
  );
};

export default Users;
