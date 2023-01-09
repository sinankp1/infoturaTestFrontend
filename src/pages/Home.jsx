import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApplicationForm from "../components/ApplicationForm";
import Navbar from "../components/Navbar";

export default function Home() {
  const state = useSelector((state) => ({ ...state }));
  const { user } = state.user;
  const [showForm, setShowForm] = useState(false);
  console.log(user);
  return (
    <div className="home">
      <Navbar />
      {user?.application ? (
        ""
      ) : (
        <>
          {showForm ? (
            
            <ApplicationForm/>
          ) : (
            <div className="bg-[url('https://postsecondaryreadiness.org/wp-content/uploads/2018/03/classroom-focus-teacher.jpg')] h-screen bg-no-repeat bg-cover bg-center">
              <button
                onClick={() => setShowForm(true)}
                type="button"
                className="relative top-[45%] left-[45%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Join us
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
