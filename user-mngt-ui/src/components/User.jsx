import React, { useState } from "react";

const styles = {
  tableData: "text-left px-6 py-4 whitespace-nowrap",
  tableDataButton: "flex flex-auto justify-center space-x-2 py-2"
}

const User = ({ user, index }) => {

  return (
    <tr key={user.id} className={"border-b " + ((index % 2 == 0) ? "bg-neutral-100" : "bg-white")}>
      <td className={styles.tableData}>
        <div className="">{user.firstName}</div>
      </td>
      <td className={styles.tableData}>
        <div className="">{user.lastName}</div>
      </td>
      <td className={styles.tableData}>
        <div className="">{user.emailId}</div>
      </td>
      <td className={styles.tableData}>
        <div className="">{user.role}</div>
      </td>
      <td className={styles.tableDataButton}>
        <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        <button type="button" className="bg-teal-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View
        </button>
      </td>
    </tr>
  )
}

export default User