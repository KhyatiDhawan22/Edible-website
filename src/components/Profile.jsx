import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              ) : (
                
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#FED9E0] text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile" className="p-3 mb-2 mr-4 mx-6 bg-Pink text-gray-500 rounded-lg shadow hover:bg-puce hover:text-white shadow-lg">Profile</a>
            </li>
            <li>
              <a className="p-3 mb-2 mr-4 mx-6 bg-Pink text-gray-500 rounded-lg shadow hover:bg-puce hover:text-white shadow-lg">Order</a>
            </li>
            <li>
              <a className="p-3 mb-2 mr-4 mx-6 bg-Pink text-gray-500 rounded-lg shadow hover:bg-puce hover:text-white shadow-lg">Setting</a>
            </li>
            <li>
              <a className="p-3 mb-2 mr-4 mx-6 bg-Pink text-gray-500 rounded-lg shadow hover:bg-puce hover:text-white shadow-lg" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
