import React, { useEffect, useState } from "react";
import User from "./User";

const styles = {
  tableHeader: "text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6",
  tableHeaderAction: "text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6"
}

const userTest = [{
  id: 1,
  firstName: "Enzer",
  lastName: "Aquino",
  emailId: "eliezercoding@gmail.com",
  role: "Manager"
}]

const UserList = () => {

  const USER_API_BASE_URL = process.env.NEXT_PUBLIC_USER_API_BASE_URL;
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
    // setUsers(userTest);

  }, []);
  // }, [loading]);

  // const lala = () => {
  //   setLoading(!loading);
  // }
  

  return (
    <div className="container mx-auto my-8">
      {/* <button onClick={lala}>Do It</button> */}
      <div className="flex shadow border-b overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b-4">
            <tr>
              <th className={styles.tableHeader}>First Name</th>
              <th className={styles.tableHeader}>Last Name</th>
              <th className={styles.tableHeader}>Email ID</th>
              <th className={styles.tableHeader}>Role</th>
              <th className={styles.tableHeaderAction}>Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {users?.map((user, index) => (
                <User user={user} index={index} key={user.id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default UserList;