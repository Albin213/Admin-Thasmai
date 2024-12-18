// "use client"

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from 'next/navigation';
// import { useNavbarTextStore } from '../../state/navbar-state'
// import { useLoginStore } from "@/app/loginstate/loginState";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { FaAngleDown , FaAngleRight } from "react-icons/fa";
// import LogoutPopUp from "./LogoutPopUp";

// function Navbar() {

// 	const [isDropDown, setIsDropDown] = useState(false)
// 	const [isLogoutPopUp, setIsLogoutPopUp] = useState(false)
//   	const state = useLoginStore(function(state) { {
//     	return state
//   		}
// 	})

// 	const pathname = usePathname()
// 	const router = useRouter()

//   	const nav_text  = useNavbarTextStore(state => state.navbar_text);

//   	return (

// 		<div className="w-full h-16 flex">

// 			{/* this div is displayed only for operator mobile view */}
// 			<div className="w-[10%] md:w-0 h-full flex justify-center items-center bg-white">

// 				<div className="drawer bg-white">
// 				  	<input id="my-drawer" type="checkbox" className="drawer-toggle" />
// 				  	<div className="drawer-content bg-white">
// 				    	{/* Page content here */}
// 				    	<label htmlFor="my-drawer" className="drawer-button bg-white flex justify-center items-center">
// 							<IoMdMenu className="text-4xl text-[#005DB8]" />
// 						</label>
// 				  	</div>
// 				  	<div className="drawer-side z-50">
// 				    	<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

// 				    	<ul className="menu p-4 w-80 min-h-full bg-white text-base-content">

// 				      		{/* Sidebar content here */}

// 							{/* custom code for close button */}
// 							<div className="w-full mb-3 ps-3 flex justify-between">
// 								<img className="w-[45%]" src="/admin/logo.png" alt="star-life logo" />
// 				  				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
// 								<label htmlFor="my-drawer" className="drawer-button bg-white flex justify-center items-center">
// 									<IoMdClose className="text-4xl text-[#757677]" />
// 								</label>
// 							</div>

// 				      		<Link href="/overview">
//                   				<li className={`${pathname.startsWith('/overview') ? 'bg-[#005DB8] text-white py-3 px-5 ' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Overview</li>
//                 			</Link>
//               				<Link href="/appointments/appointments">
//               				    <li className={`${pathname.startsWith('/appointments') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Appointments</li>
//               				</Link>
//               				<Link href="/feedback/appointmentFeedback">
//               				  <li className={`${pathname.startsWith('/feedback') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Feedback Views</li>
//               				</Link>
//               				<Link href="/notifications/notifications">
//               				    <li className={`${pathname.startsWith('/notifications') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Notifications / Broadcast</li>
//               				  </Link>
//               				<Link href="/events/events">
//               				    <li className={`${pathname.startsWith('/events') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Events</li>
//               				</Link>
//               				<Link href="/expenses/add-expense">
//               				    <li className={`${pathname.startsWith('/expenses') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Financial / Expense</li>
//               				</Link>
//               				<Link href="/support">
//               				    <li className={`${pathname.startsWith('/support') ? 'bg-[#005DB8] text-white py-3 px-5' : 'py-3 px-5 text-black hover:bg-[#dbeafe]'}`}>Support & Contact</li>
//               				</Link>
// 				    	</ul>
// 				  	</div>
// 				</div>

// 			</div>

// 			<div className="w-[90%] md:w-full  h-full">
// 				<nav className="navbar w-full h-10 px-4 md:px-10 bg-white flex justify-between ">

// 	  				<h1 className="text-black text-md md:text-lg font-medium">{nav_text}</h1>
// 		 			{/* <button
// 			 			className='w-[80px] h-[30px]  bg-[#d34b4b] text-white flex items-center justify-center rounded'
// 		  				onClick={()=>{
// 			  				localStorage.removeItem('userdata')
// 			  				state.setIsloggedin(false)
// 			  				router.push('/login');
// 		  				}}
// 	  				>Logout</button> */}

// 					<div className="w-28 md:w-44 flex justify-between">
// 						<img src="/admin/starlife-logo.png" className="h-10 w-0 md:w-10 rounded-full" />
// 						<p className="text-[#afafaf]">Thasmai</p>
// 						<button
// 							className="w-6 h-6 text-[#afafaf] text-xl flex justify-center items-center rounded-sm hover:text-white  hover:bg-[#dadadae4] "
// 							onMouseEnter={()=>{
// 								setIsDropDown(prevValue => !prevValue);
// 							}}

// 						>
// 							 {
// 								isDropDown ? <FaAngleRight/> : <FaAngleDown/>
// 							 }
// 						</button>

// 					</div>

//   				</nav>
// 			</div>
// 			{
// 				isDropDown &&
// 				<div className=" w-44 z-10  p-2 bg-white border-[1px] border-[#afafaf] rounded absolute top-[44px] right-[20px] md:right-[40px]"
// 					onMouseLeave={()=>{
// 						setIsDropDown(prevValue => !prevValue)
// 					}}
// 				>
// 					<button

// 			 			className='w-full  h-[34px]  bg-[#d34b4b] hover:bg-[#d34b4bd2] text-white flex items-center justify-center rounded'
// 		  				onClick={()=>{
// 							setIsLogoutPopUp(true)
// 						}}
// 	  				>Logout</button>
// 				</div>
// 			}

// 			{
// 				isLogoutPopUp &&
// 				<LogoutPopUp setIsLogoutPopUp={setIsLogoutPopUp}/>
// 			}

// 		</div>

//   	);
// }

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useNavbarTextStore } from "../../state/navbar-state";
import { useLoginStore } from "@/app/loginstate/loginState";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import LogoutPopUp from "./LogoutPopUp";
import { FiLogOut } from "react-icons/fi";
import { MdKey } from "react-icons/md";
import ResetPasswordPopUp from "./ResetPasswordPopUp";

function Navbar() {
  const [role, setRole] = useState("");
  const [isResetPasswordPopUpOpen, setIsResetPasswordPopUpOpen] =
    useState(false);
  const [isLogoutPopUp, setIsLogoutPopUp] = useState(false);
  const state = useLoginStore((state) => state);

  const pathname = usePathname();
  const router = useRouter();

  const nav_text = useNavbarTextStore((state) => state.navbar_text);

  useEffect(() => {
    // console.log("use ffect sdebar sidebar");
    setRole("");
    let role_text = localStorage.getItem("userdata");
    console.log("Role from local storage:", role_text); // Log the role_text to check if it's retrieved correctly
    if (role_text) {
      const parsedRole = JSON.parse(role_text).role; // Parse the role from the stored userdata
      // console.log("Parsed role:", parsedRole); // Log the parsed role to check its value
      setRole(parsedRole); // Set the role state
    }
    
  }, []);

  const handleCloseDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="w-full h-16 flex">
      {/* this div is displayed only for operator mobile view */}
      <div className="w-[10%] md:w-0 h-full flex justify-center items-center bg-white">
        <div className="drawer bg-white">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-white">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="drawer-button bg-white flex justify-center items-center"
            >
              <IoMdMenu className="text-4xl text-[#005DB8]" />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              {/* Sidebar content here */}
              {/* custom code for close button */}
              <div className="w-full mb-3 ps-3 flex justify-between">
                <img
                  className="w-[45%]"
                  src="/admin/logo.png"
                  alt="star-life logo"
                />
                <label
                  htmlFor="my-drawer"
                  className="drawer-button bg-white flex justify-center items-center"
                >
                  <IoMdClose className="text-4xl text-[#757677]" />
                </label>
              </div>

              {(role === "operator" || role === "Operator") && (
                <>
                  {/* <Link href="/overview">
                    <li
                      className={`${
                        pathname.startsWith("/overview")
                          ? "bg-[#005DB8] text-white py-3 px-5 "
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Overview
                    </li>
                  </Link> */}
                  <Link href="/appointments/appointments">
                    <li
                      className={`${
                        pathname.startsWith("/appointments")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Appointments
                    </li>
                  </Link>
                  <Link href="/feedback/appointmentFeedback">
                    <li
                      className={`${
                        pathname.startsWith("/feedback")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Feedback Views
                    </li>
                  </Link>
                  <Link href="/notifications/notifications">
                    <li
                      className={`${
                        pathname.startsWith("/notifications")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Notifications / Broadcast
                    </li>
                  </Link>
                  <Link href="/events/events">
                    <li
                      className={`${
                        pathname.startsWith("/events")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Events / Blogs
                    </li>
                  </Link>
                  <Link href="/expenses/add-expense">
                    <li
                      className={`${
                        pathname.startsWith("/expenses")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Financial / Expense
                    </li>
                  </Link>
                  <Link href="/support">
                    <li
                      className={`${
                        pathname.startsWith("/support")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Support & Contact
                    </li>
                  </Link>
                </>
              )}

              {(role === "supervisor" || role === "Supervisor") && (
                <>
                  <Link href="/overview">
                    <li
                      className={`${
                        pathname.startsWith("/overview")
                          ? "bg-[#005DB8] text-white py-3 px-5 "
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Overview
                    </li>
                  </Link>
                  <Link href="/appointments/appointments">
                    <li
                      className={`${
                        pathname.startsWith("/appointments")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Appointments
                    </li>
                  </Link>
                  <Link href="/feedback/appointmentFeedback">
                    <li
                      className={`${
                        pathname.startsWith("/feedback")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Feedback Views
                    </li>
                  </Link>
                  <Link href="/notifications/notifications">
                    <li
                      className={`${
                        pathname.startsWith("/notifications")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Notifications / Broadcast
                    </li>
                  </Link>
                  <Link href="/events/events">
                    <li
                      className={`${
                        pathname.startsWith("/events")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Events / Blogs
                    </li>
                  </Link>
                  <Link href="/videos">
                    <li
                      className={`${
                        pathname.startsWith("/videos")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Videos
                    </li>
                  </Link>
                  <Link href="/expenses/add-expense">
                    <li
                      className={`${
                        pathname.startsWith("/expenses")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Financial / Expense
                    </li>
                  </Link>
                  <Link href="/support">
                    <li
                      className={`${
                        pathname.startsWith("/support")
                          ? "bg-[#005DB8] text-white py-3 px-5"
                          : "py-3 px-5 text-black hover:bg-[#dbeafe]"
                      }`}
                      onClick={handleCloseDrawer}
                    >
                      Support & Contact
                    </li>
                  </Link>
                </>
              )}

            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-full h-full">
        <nav className="navbar w-full h-10 px-4 md:px-10 bg-white flex justify-between ">
          <h1 className="text-black text-md md:text-lg font-medium">
            {nav_text}
          </h1>
          <div className="w-36 md:w-56 flex items-center justify-between">
            <img
              src="/admin/starlife-logo.png"
              className="h-10 w-0 md:w-10 rounded-full"
            />
            <p className="text-[#afafaf]">Thasmai</p>
            <button
              className="w-6 h-6 text-[#005db8] text-2xl flex justify-center items-center rounded-sm hover:scale-110"
              title="Reset Password"
              onClick={() => {
                setIsResetPasswordPopUpOpen(true);
              }}
            >
              {" "}
              <MdKey />
            </button>
            <button
              className="w-6 h-6 text-[#e95757] text-xl flex justify-center items-center rounded-sm hover:scale-110"
              title="Logout"
              onClick={() => {
                setIsLogoutPopUp(true);
              }}
            >
              {" "}
              <FiLogOut />
            </button>
          </div>
        </nav>
      </div>

      {isResetPasswordPopUpOpen && (
        <ResetPasswordPopUp
          setIsResetPasswordPopUpOpen={setIsResetPasswordPopUpOpen}
        />
      )}

      {isLogoutPopUp && <LogoutPopUp setIsLogoutPopUp={setIsLogoutPopUp} />}
    </div>
  );
}

export default Navbar;
