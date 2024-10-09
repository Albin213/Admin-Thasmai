"use client"

import React, { useState } from "react";
import axios from "axios";
import { useNavbarTextStore } from "@/app/state/navbar-state";
import NavLink from '../navlink/navlink'
import HelpAndSupportTable from "@/app/components/helpandsupport/HelpAndSupportTable";
import AddNewDepartment from "@/app/components/helpandsupport/AddNewDepartment";
import AddNewContact from "@/app/components/helpandsupport/AddNewContact";
import EditContact from "@/app/components/helpandsupport/EditContact";
import DeleteContactPopUp from "@/app/components/helpandsupport/DeleteContactPopUp";
import EditDepartmentPopUp from "@/app/components/helpandsupport/EditDepartmentPopUp";
import DeleteDepartmentPopUp from "@/app/components/helpandsupport/DeleteDepartmentPopUp";



export default function HelpAndSupport() {

    const [searchText, setSearchText] = useState("");
  
    const [contactList, setContactList] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  
  
    const [isAddNewDepartmentOpen, setIsAddNewDepartmentOpen] = useState(false);
    const [isAddNewContactOpen, setIsAddNewContactOpen] = useState(false);
  
    const [isEditContactOpen, setIsEditContactOpen] = useState(false);
    const [isDeleteContactOpen, setIsDeleteContactOpen] = useState(false);
  
    const [isEditDepartmentOpen, setIsEditDepartmentOpen] = useState(false);
    const [isDeleteDepartmentOpen,setIsDeleteDepartmentOpen] = useState(false);
  
    const [isDepartmentRenderToggle, setIsDepartmentRenderToggle] = useState(false);
    const [isContactTableRenderToggle, setIsContactTableRenderToggle] = useState(false);
  
    
  
    const setNavbarText = useNavbarTextStore((state) => state.setNavbarText);
    setNavbarText("Configuration Parameters");
  
    async function handleSearch() {
      try {  
          if(searchText.length > 0) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/searchContact/${searchText}`);
            console.log(response);  
            setContactList(response.data.result);
          } else {
            setIsContactTableRenderToggle(prevValue => !prevValue);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
            // toast(error.response.data.message);
      }
    }
  
  
  
    return (
      <div className="w-full h-[85vh] md:px-7 overflow-y-auto">
        <div className="w-full flex items-center justify-between ">
            <NavLink />
        </div>
        <div className="w-full min-h-[90vh] md:min-h-0 md:h-[90%] mt-2 p-4  drop-shadow-xl bg-white flex flex-col md:flex-row overflow-y-scroll">
          <div className="w-[60%] h-full ">
            <button 
              className="w-[213px] h-14 bg-[#165DB2] text-white text-base font-medium rounded-lg"
              onClick={() => {
                setIsAddNewContactOpen(true);
              }}
            >
              + ADD NEW CONTACT
            </button>
            <div className="w-full py-2 px-4 mt-2 flex  justify-between items-center bg-[#F9F9FF]">
              <h1 className="text-[#424752] font-bold text-base">
                Help & Support
              </h1>
              <input
                type="search"
                className="w-[274px] h-10 px-4 bg-[#EDEDF5] border-[1px] border-[#727783] rounded-lg outline-none "
                placeholder="Search"
                onChange={(e) => {
                  let val = e.target.value;
                  setSearchText(val);
                  handleSearch();
                }}
              />
            </div>
  
            <div className="w-full h-3/4 overflow-scroll">
              <HelpAndSupportTable
                 contactList={ contactList }
                 setContactList={ setContactList }
                 setIsEditContactOpen={ setIsEditContactOpen }
                 setIsDeleteContactOpen={setIsDeleteContactOpen}
                 setSelectedContactId={ setSelectedContactId }
                 isContactTableRenderToggle={isContactTableRenderToggle}    
              />
              
            </div>
          </div>
          <div className="w-[40%] h-full mx-4 pb-6 border-[1px] border-[#727783] rounded-lg drop-shadow-sm shadow-md bg-[#F9F9FF]">
            <AddNewDepartment
              isDepartmentRenderToggle={isDepartmentRenderToggle}
              setIsDepartmentRenderToggle={setIsDepartmentRenderToggle}
              setSelectedDepartmentId={setSelectedDepartmentId}
              setIsEditDepartmentOpen={setIsEditDepartmentOpen}
              setIsDeleteDepartmentOpen={setIsDeleteDepartmentOpen}
  
  
            />
          </div>
        </div>
  
        {
          isAddNewContactOpen &&
          <AddNewContact 
            setIsAddNewContactOpen={setIsAddNewContactOpen} 
            isContactTableRenderToggle={isContactTableRenderToggle}
            setIsContactTableRenderToggle={setIsContactTableRenderToggle}
          />
        }    
  
        {
          isEditContactOpen &&
          <EditContact 
            selectedContactId={selectedContactId}
            setSelectedDepartmentId={setSelectedDepartmentId}
            setIsEditContactOpen={setIsEditContactOpen}
            setIsContactTableRenderToggle={setIsContactTableRenderToggle}
          />
        }
  
        {
          isDeleteContactOpen && 
          <DeleteContactPopUp 
            selectedContactId={selectedContactId}
            setIsDeleteContactOpen={setIsDeleteContactOpen}
            setIsContactTableRenderToggle={setIsContactTableRenderToggle}
          />
        }
  
        {
          isEditDepartmentOpen &&
          <EditDepartmentPopUp
            selectedDepartmentId={selectedDepartmentId}
            setIsEditDepartmentOpen={setIsEditDepartmentOpen}
            setIsDepartmentRenderToggle={setIsDepartmentRenderToggle}
          />
        }
  
  
        {
          isDeleteDepartmentOpen && 
          <DeleteDepartmentPopUp
            selectedDepartmentId={selectedDepartmentId}
            setIsDeleteDepartmentOpen={setIsDeleteDepartmentOpen}
            setIsDepartmentRenderToggle={setIsDepartmentRenderToggle}
          />
        }
        
      </div>
    );
  }