// import React from 'react'
// import { IoMdArrowDropdown } from "react-icons/io"

// function NewSidebar() {
//   return (
//     <div className='w-full h-full bg-gradient-to-b from-white to-[#00244E] '>
//         <div className='w-full h-[85px] flex justify-center items-center '>
//             <img src="/admin/sidebar-logo.svg" alt="logo" />
//         </div>
//         <div className='w-full h-full bg-[#00244E]'>
//             <div className='w-full'>
//                 <h1 className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>OVERVIEW</h1>
//                 <p className='text-white text-[14px] font-semibold py-2 ps-8'>Meditators</p>
//                 <p className='text-white text-[14px] font-semibold py-2 ps-8'>Mahadanam</p>

//                 <p className='text-white text-[14px] font-semibold py-2 ps-8 flex'>Feedbacks<span className='text-white  ps-16 '><IoMdArrowDropdown className='size-5'/></span></p>

//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>MEDITATOR MANAGEMENT</p>

//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>FINANCE MANAGEMENT</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>MANAGE APPOINTMENTS</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>COMMUNICATIONS</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>CONTENT MANAGEMENT</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>EMPLOYEE MANAGEMENT</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>CONTROL MANAGEMENT</p>
//             </div>
//             <div>
//                 <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>HELP AND SUPPORT</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default NewSidebar

// "use client"
// import React, { useState } from 'react';
// import { IoMdArrowDropdown } from "react-icons/io";
// import { LuDot } from "react-icons/lu";

// function NewSidebar() {
//   const [showFeedbacksSubmenu, setShowFeedbacksSubmenu] = useState(false);

//   // Toggle submenu visibility
//   const toggleFeedbacksSubmenu = () => {
//     setShowFeedbacksSubmenu(!showFeedbacksSubmenu);
//   };

//   return (
//     <div className='w-full h-full bg-gradient-to-b from-white to-[#00244E] '>
//       <div className='w-full h-[85px] flex justify-center items-center '>
//         <img src="/admin/sidebar-logo.svg" alt="logo" />
//       </div>
//       <div className='w-full h-full bg-[#00244E]'>

//         <div className='w-full'>
//           <h1 className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>OVERVIEW</h1>
//           <p className='text-[#F9F9FF] text-[14px] font-semibold py-2 ps-8'>Meditators</p>
//           <p className='text-[#F9F9FF] text-[14px] font-semibold py-2 ps-8'>Mahadanam</p>

//           <div className='text-[#f9f9ff] text-[14px] font-semibold py-2 ps-8 flex items-center cursor-pointer' onClick={toggleFeedbacksSubmenu}>
//             Feedbacks
//             <span className='text-[#F9F9FF] ps-16'>
//               <IoMdArrowDropdown className={`size-5 transition-transform ${showFeedbacksSubmenu ? 'rotate-180' : ''}`} />
//             </span>
//           </div>

//           {/* Submenu */}
//           {showFeedbacksSubmenu && (
//             <div className='ps-16'>
//               <p className='text-[#F9F9FF] text-[14px] py-2 flex  items-center' ><LuDot className='size-8'/>Ashram Feedback</p>
//               <p className='text-[#F9F9FF] text-[14px] py-2 flex  items-center'><LuDot className='size-8'/>Overall Feedback</p>
//             </div>
//           )}
//         </div>

//         <div className='w-full'>
//           <h1 className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>MEDITATOR MANAGEMENT</h1>

//           <div className='text-[#f9f9ff] text-[14px] font-semibold py-2 ps-8 flex items-center cursor-pointer' onClick={toggleFeedbacksSubmenu}>
//             INCOME
//             <span className='text-[#F9F9FF] ps-16'>
//               <IoMdArrowDropdown className={`size-5 transition-transform ${showFeedbacksSubmenu ? 'rotate-180' : ''}`} />
//             </span>
//           </div>

//           {/* Submenu */}
//           {showFeedbacksSubmenu && (
//             <div className='ps-16'>
//               <p className='text-[#F9F9FF] text-[14px] py-2 flex  items-center' ><LuDot className='size-8'/>Donantion</p>
//               <p className='text-[#F9F9FF] text-[14px] py-2 flex  items-center'><LuDot className='size-8'/>Dakshana</p>
//               <p className='text-[#F9F9FF] text-[14px] py-2 flex  items-center'><LuDot className='size-8'/>Meditation Fee</p>

//             </div>
//           )}
//         </div>

//         {/* Other sections */}

//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>FINANCE MANAGEMENT</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>MANAGE APPOINTMENTS</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>COMMUNICATIONS</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>CONTENT MANAGEMENT</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>EMPLOYEE MANAGEMENT</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>CONTROL MANAGEMENT</p>
//         </div>
//         <div>
//           <p className='text-[#82B0FF] text-[14px] font-bold ps-4 py-5'>HELP AND SUPPORT</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewSidebar;

"use client";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

function NewSidebar() {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true); // State for loading

  const [showFeedbacksSubmenu, setShowFeedbacksSubmenu] = useState(false);
  const [showIncomeSubmenu, setShowIncomeSubmenu] = useState(false);
  const [showExpenseSubmenu, setShowExpenseSubmenu] = useState(false);
  const [showFundAllocationSubmenu, setshowFundAllocationSubmenu] = useState(false);

  const pathname = usePathname();
  const router = useRouter();


    useEffect(() => {
      setRole('');
      let role_text = localStorage.getItem('userdata');
      console.log("Role from local storage:", role_text); // Log the role_text to check if it's retrieved correctly
      if (role_text) {
        const parsedRole = JSON.parse(role_text).role; // Parse the role from the stored userdata
        console.log("Parsed role:", parsedRole); // Log the parsed role to check its value
        setRole(parsedRole); // Set the role state
      }
      setLoading(false); // Set loading to false after fetching the role
    }, []);



  // Toggle submenu visibility
  const toggleFeedbacksSubmenu = () => {
    setShowFeedbacksSubmenu(!showFeedbacksSubmenu);
  };

  const toggleIncomeSubmenu = () => {
    setShowIncomeSubmenu(!showIncomeSubmenu);
  };
  const toggleExpenseSubmenu = () => {
    setShowExpenseSubmenu(!showExpenseSubmenu);
  };
  const toggleFundAllocationSubmenu = () => {
    setshowFundAllocationSubmenu(!showFundAllocationSubmenu);
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-16 flex justify-center items-center ">
        <img src="/admin/sidebar-logo.svg" alt="logo" />
      </div>

      {
        role === "admin" && (
          <div className="w-full h-full pt-14 pb-40 bg-[#00244E] overflow-y-auto">
          <Link href="/overview">
            <h1 className={`text-[#82B0FF] text-[14px] font-bold ps-4 py-5  ${ pathname === "/overview" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
              OVERVIEW
            </h1>
          </Link>
  
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              MEDITATOR MANAGEMENT
            </h1>
            <Link href="/users/meditatorlist">
              <p 
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/users/meditatorlist" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Meditators
              </p>
            </Link>
  
            <Link href="/users/mahadhanam">
              <p 
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/users/mahadhanam" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img src="/admin/mahadhanam-icon.svg" alt="mahadhanam-icon" />
                </span> */}
                Mahadhanam
              </p>
            </Link>
  
            <Link href="/users/ashram-appointments">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white ${ pathname === "/users/ashram-appointments" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img src="/admin/mahadhanam-icon.svg" alt="mahadhanam-icon" />
                </span> */}
                Ashram Appointments
              </p>
            </Link>
  
            {/* <div className='text-[#f9f9ff] text-[14px] font-semibold py-2 px-6 flex items-center justify-between cursor-pointer' onClick={toggleFeedbacksSubmenu}>
              <Link href="/feedback/appointmentFeedback">
              <p className='flex items-center gap-2'><span><img src="/admin/feedbacks-icon.svg" alt="" /></span>Feedbacks</p>
              </Link>
  
              <span className='text-[#F9F9FF] '>
                <IoMdArrowDropdown className={`size-5 transition-transform ${showFeedbacksSubmenu ? 'rotate-180' : ''}`} />
              </span>
            </div> */}
  
            {/* Feedbacks Submenu */}
            {/* {showFeedbacksSubmenu && (
              <ul className='ps-8'>
                <Link href="/feedback/appointmentFeedback">
                  <li className='text-[#F9F9FF] text-[14px] py-2 flex items-center'><LuDot className='size-8'/>Ashram Feedback</li>
  
                </Link>
                <Link href="/feedback/applicationFeedback">
                <li className='text-[#F9F9FF] text-[14px] py-2 flex items-center'><LuDot className='size-8'/>Overall Feedback</li>
                </Link>
              </ul>
            )} */}
          </div>
  
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              FINANCE MANAGEMENT
            </h1>
            <Link href="/financial/distribution">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white ${ pathname === "/financial/distribution" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Distribution
              </p>
            </Link>
            <Link href="/financial/donation">
              <p 
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/financial/donation" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Donation
              </p>
            </Link>
            <Link href="/financial/operations">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/financial/operations" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Operations
              </p>
            </Link>
            <Link href="/financial/ashramIncome">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/financial/ashramIncome" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Ashram Fees
              </p>
            </Link>
          </div>
  
          {/* MANAGE APPOINTMENTS */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              MANAGE APPOINTMENTS{" "}
            </h1>
            <Link href="/appointments/appointments">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/appointments/appointments" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Appointments
              </p>
            </Link>
  
            <Link href="/financial/appointments">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/financial/appointments" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Ashram Appointments
              </p>
            </Link>
            <Link href="/appointments/calender">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/appointments/calender" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Calender
              </p>
            </Link>
          </div>
  
          {/* Feedbacksview */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              FEEDBACK VIEWS{" "}
            </h1>
            <Link href="/feedback/appointmentFeedback">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/feedback/appointmentFeedback" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Ashram Stay Feedback
              </p>
            </Link>
  
            <Link href="/feedback/applicationFeedback">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/feedback/applicationFeedback" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Application Feedback
              </p>
            </Link>
          </div>
  
          {/* Message */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              MESSAGES
            </h1>
            <Link href="/message/globalMessage">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/message/globalMessage" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                T-Tok
              </p>
            </Link>
            <Link href="/message/gurujiMessage">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/message/gurujiMessage" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Guruji Message
              </p>
            </Link>
          </div>
  
          {/* Notifications / Broadcast */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              NOTIFICATION / BROADCAST
            </h1>
            <Link href="/notifications/notifications">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/notifications/notifications" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                One2One (Notification)
              </p>
            </Link>
            <Link href="/notifications/broadcast">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/notifications/broadcast" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Broadcast (Ev1)
              </p>
            </Link>
          </div>
  
          {/* Events / Blogs  */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              EVENTS / BLOGS
            </h1>
            <Link href="/events/events">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/events/events" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Event Details
              </p>
            </Link>
  
            <Link href="/events/blogs">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/events/blogs" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Blogs
              </p>
            </Link>
          </div>
  
          {/* Videos */}
          <div className="w-full">
            <Link href="/videos">
              <h1 className={`text-[#82B0FF] text-[14px] font-bold ps-4 py-5  ${ pathname === "/videos" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
                VIDEOS
              </h1>
            </Link>
          </div>
  
          {/* Financial /Expense */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
             FINANCIAL / EXPENSE
            </h1>
            <Link href="/expenses/add-expense">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/expenses/add-expense" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Add Expense
              </p>
            </Link>
            <Link href="/expenses/reports">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/expenses/reports" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Reports
              </p>
            </Link>
          </div>
  
          {/* Operator Management */}
          <div className="w-full">
            <Link href="/operator/operator-creation">
              <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
                OPERATOR MANAGEMENT
              </h1>
            </Link>
          </div>
  
          {/* Configuration Parameters */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              CONFIGURATION PARAMETERS
            </h1>
            <Link href="/configuration/financial">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/configuration/financial" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Financial
              </p>
            </Link>
            <Link href="/configuration/registration">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/configuration/registration" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Registartion
              </p>
            </Link>
  
            <div
              className="text-[#f9f9ff] text-[14px] font-semibold py-2 px-6 flex items-center justify-between cursor-pointer hover:bg-[#3d98ff2a] hover:scale-105"
              onClick={toggleFeedbacksSubmenu}
            >
              {/* <Link href="/configuration/applications/reference">
                <p className="flex items-center gap-2">
                  <span>
                    <img src="/admin/feedbacks-icon.svg" alt="" />
                  </span>
                  Applications
                </p>
              </Link>
  
              <span className="text-[#F9F9FF] ">
                <IoMdArrowDropdown
                  className={`size-5 transition-transform ${
                    showFeedbacksSubmenu ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div> */}
  
            {/* Feedbacks Submenu */}
            {/* {showFeedbacksSubmenu && (
              <ul className="ps-8">
                <Link href="/configuration/applications/reference">
                  <li className="text-[#F9F9FF] text-[14px] py-2 flex items-center">
                    <LuDot className="size-8" />
                    Reference
                  </li>
                </Link>
                <Link href="/configuration/applications/meditationTime">
                  <li className="text-[#F9F9FF] text-[14px] py-2 flex items-center">
                    <LuDot className="size-8" />
                    Meditation Time
                  </li>
                </Link>
                <Link href="/configuration/applications/zoomMeet">
                  <li className="text-[#F9F9FF] text-[14px] py-2 flex items-center">
                    <LuDot className="size-8" />
                    Zoom Meet
                  </li>
                </Link>
              </ul>
            )} */}
  
          <Link href="/configuration/applications/reference">
            <p className="flex items-center gap-2">
              {/* <span>
                <img src="/admin/mahadhanam-icon.svg" alt="" />
              </span> */}
              Applications
            </p>
          </Link>
  
          <span className="text-[#F9F9FF] ">
            <IoMdArrowDropdown
              className={`size-5 transition-transform ${
                showFeedbacksSubmenu ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
  
        {/* Feedbacks Submenu */}
        <ul
          className={`ps-8 transition-opacity duration-300 ease-in-out ${
            showFeedbacksSubmenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ maxHeight: showFeedbacksSubmenu ? "200px" : "0", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
        >
          <Link href="/configuration/applications/reference">
            <li className={`text-[#F9F9FF] text-[14px] py-2 flex items-center hover:text-white ${ pathname === "/configuration/applications/reference" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
              <LuDot className="size-8" />
              Reference
            </li>
          </Link>
          <Link href="/configuration/applications/meditationTime">
            <li className={`text-[#F9F9FF] text-[14px] py-2 flex items-center hover:text-white ${ pathname === "/configuration/applications/meditationTime" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
              <LuDot className="size-8" />
              Meditation Time
            </li>
          </Link>
          <Link href="/configuration/applications/zoomMeet">
            <li className={`text-[#F9F9FF] text-[14px] py-2 flex items-center hover:text-white ${ pathname === "/configuration/applications/zoomMeet" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
              <LuDot className="size-8" />
              Zoom Meet
            </li>
          </Link>
        </ul>
            
  
            <Link href="/configuration/help-support">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/configuration/help-support" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Help & Support
              </p>
            </Link>
          </div>
  
          {/* Help and Support */}
          <div className="w-full">
            <Link href="/support">
              <h1 
                className={`text-[#82B0FF] text-[14px] font-bold ps-4 py-5 ${ pathname === "/support" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                HELP AND SUPPORT
              </h1>
            </Link>
          </div>
          </div>
        )
      }


      {
        (role === "operator" || role === "Operator") && (
          <div className="w-full h-full pt-14 pb-40 bg-[#00244E] overflow-y-auto">
          <Link href="/overview">
            <h1 className={`text-[#82B0FF] text-[14px] font-bold ps-4 py-5  ${ pathname === "/overview" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}>
              OVERVIEW
            </h1>
          </Link>
  
  
          {/* MANAGE APPOINTMENTS */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              MANAGE APPOINTMENTS{" "}
            </h1>
            <Link href="/appointments/appointments">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/appointments/appointments" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Appointments
              </p>
            </Link>
  
            <Link href="/appointments/calender">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/appointments/calender" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Calender
              </p>
            </Link>
          </div>
  
          {/* Feedbacksview */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              FEEDBACK VIEWS{" "}
            </h1>
            <Link href="/feedback/appointmentFeedback">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/feedback/appointmentFeedback" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Ashram Stay Feedback
              </p>
            </Link>
  
            <Link href="/feedback/applicationFeedback">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/feedback/applicationFeedback" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Application Feedback
              </p>
            </Link>
          </div>
  
    
  
          {/* Notifications / Broadcast */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              NOTIFICATION / BROADCAST
            </h1>
            <Link href="/notifications/notifications">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/notifications/notifications" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                One2One (Notification)
              </p>
            </Link>
            <Link href="/notifications/broadcast">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/notifications/broadcast" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Broadcast (Ev1)
              </p>
            </Link>
          </div>
  
          {/* Events / Blogs  */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
              EVENTS / BLOGS
            </h1>
            <Link href="/events/events">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/events/events" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Event Details
              </p>
            </Link>
  
            <Link href="/events/blogs">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/events/blogs" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Blogs
              </p>
            </Link>
          </div>
  

          {/* Financial /Expense */}
          <div className="w-full">
            <h1 className="text-[#82B0FF] text-[14px] font-bold ps-4 py-5 hover:bg-[#3d98ff2a]">
             FINANCIAL / EXPENSE
            </h1>
            <Link href="/expenses/add-expense">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/expenses/add-expense" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Add Expense
              </p>
            </Link>
            <Link href="/expenses/reports">
              <p
                className={`text-[#F9F9FF] text-[14px] font-semibold py-2 px-6 flex items-center gap-2 hover:scale-105 hover:text-white  ${ pathname === "/expenses/reports" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                {/* <span>
                  <img
                    src="/admin/meditators-icon.svg"
                    alt="meditator-icon"
                    className=""
                  />
                </span> */}
                Reports
              </p>
            </Link>
          </div>
  
          {/* Help and Support */}
          <div className="w-full mb-24">
            <Link href="/support">
              <h1 
                className={`text-[#82B0FF] text-[14px] font-bold ps-4 py-5 ${ pathname === "/support" ? "bg-[#3d98ff76] text-white" : "hover:bg-[#3d98ff2a]" }`}
              >
                HELP AND SUPPORT
              </h1>
            </Link>
          </div>
          </div>
        )
      }

      

    </div>
  );
}

export default NewSidebar;
