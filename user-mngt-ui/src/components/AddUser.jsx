import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useStateContext } from "@/context/StateContext";

const roles = [
  { name: "Viewer"},
  { name: "Submitter"},
  { name: "Developer"},
  { name: "Project Manager" },
  { name: "Admin" }
]

const AddUser = () => {

  const { isOpen, setIsOpen, user, setUser, setResponseUser } = useStateContext();

  const USER_API_BASE_URL = process.env.NEXT_PUBLIC_USER_API_BASE_URL;
  // const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState({
  //   id: "",
  //   firstName: "",
  //   lastName: "",
  //   emailId: "",
  //   role: ""
  // });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const response = await fetch(USER_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) { throw new Error("Something went wrong"); }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
  };

  const reset = (e) => {
    e.preventDefault();
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
      role: ""
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button type="button" className="rounded bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 font-semibold" onClick={openModal}>Add User</button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              {/* <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md"> */}
                
                  <Dialog.Title as="h2" className="text-2xl font-bold leading-6 text-gray-900 text-center">ADD NEW USER</Dialog.Title>
                  <div className="flex max-w-md mx-auto">
                    <div className="py-2">

                      <div className="h-14 my-4">
                        <label htmlFor="firstName" className="block text-gray-600 font-bold">
                          First Name:
                        </label>
                        <input 
                          type="text" 
                          name="firstName" 
                          className="h-10 w-96 border mt-2 px-2 py-2" 
                          value={user.firstName} 
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="h-14 my-4">
                        <label htmlFor="lastName" className="block text-gray-600 font-bold">
                          Last Name:
                        </label>
                        <input 
                          type="text" 
                          name="lastName" 
                          className="h-10 w-96 border mt-2 px-2 py-2" 
                          value={user.lastName}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="h-14 my-4">
                        <label htmlFor="emailId" className="block text-gray-600 font-bold">
                          Email ID:
                        </label>
                        <input 
                          type="email" 
                          name="emailId" 
                          className="h-10 w-96 border mt-2 px-2 py-2"
                          value={user.emailId}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="h-14 my-4">
                        <label htmlFor="role" className="block text-gray-600 font-bold">
                          Role:
                        </label>
                        <select 
                          name="role" 
                          className="h-10 w-96 border mt-2 px-2 py-2"
                          onChange={(e) => handleChange(e)}
                        >
                          {roles.map((r, i) => (
                            <option key={i} value={r.name}>{r.name}</option>
                          ))}
                        </select>
                      </div>

                      <div 
                      className="text-center h-14 mt-5 space-x-4 pt-4">
                        <button 
                          className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6 w-28" 
                          onClick={saveUser}
                        >
                          Save
                        </button>
                        <button 
                          className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6 w-28"
                          onClick={reset}
                        >
                          Cancel
                        </button>
                        <div></div>
                      </div>

                    </div>

                    
                  </div>
                
                {/* </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddUser;