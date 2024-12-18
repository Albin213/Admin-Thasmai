"use client"

import React, { useState, useEffect} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import DateFormatter from "../../utils/DateFormatter";

function WaitingListTable(props) {

    // const filterState = useDonationFilterStore((state) => {
    //     return state;
    // });


    useEffect(() => {

        const fetchData = async () => {
            const pageNo = props.pageNo;
        	const pageRows = props.pageRows;
        
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/waitingListDetails?page=${pageNo}&pageSize=${pageRows}&limit=${pageRows}`);                    
                props.setUsersData(response.data.waitingListDetails);
                props.setTotalPages(response.data.totalPages);
                props.setIsSearchedData(false);
                props.setSearchedPageNo(1);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error("Error fetching data.");
            }
        };
    
        fetchData();
    }, [props.pageNo, props.filterToggle, props.tableRowToggle]);
  
    return (
    
        <table className="table">
            <thead
              className="bg-[#5799FD] text-white sticky top-0 gap-x-20 text-[0.9rem]"
              style={{ borderRadius: "11px" }}
            >
                <tr className="">
					{/* <th className="text-center">Sl. No</th> */}
                    <th className="text-left">DOJ</th>
                    <th className="text-left">Name</th>
                    <th className="text-left">User Id</th>
                    <th className="text-left">Email</th>
                    <th className="text-left">Phone</th>
                    <th className="text-left"></th>
                </tr>
            </thead>
            <tbody className="my-10">

                {    
					props.usersData[0] ? (

                  		props.usersData.map((i, index) => {

                    		return (
                                <tr
                                    key={index}
                                    className="font-medium text-xs text-black my-10 border-b-[1px] border-[#eeeeee]"
                                >
								    {/* <td className="text-center">
                                        { 	
											!props.isFilteredData ? (

												(index + 1) + ((props.pageNo - 1) * 10 )

											) : (

												(index + 1) + ((props.filteredPageNo - 1) * 10 )

											)
										}
                                    </td> */}
                                    
                                    <td className="text-left"><DateFormatter date={ i.DOJ }/></td>
                                    <td 
                                        className="text-left text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                                        onClick={() => {
                                            props.setSelectedUser(i);
                                            props.setIsUserDetails(true);
                                        }}
                                    >
                                        { i.first_name } { i.last_name }
                                    </td>
                                    <td className="text-left">TSL{ i.UId }</td>
                                    <td className="text-left">{ i.email } </td>
                                    <td className="text-left">{i.countryCode}{" "}{ i.phone } </td>
                                    <td className="text-left flex justify-evenly">    
                                    <button 
                                        title="View event details"
                                        className='w-28 h-8 bg-[#5799FD] text-white rounded-xl hover:scale-105'
                                        onClick={() => {
                                            props.setSelectedUser(i);
                                            props.setIsUserDetails(true);
                                        }}
                                    >
                                        View Details
                                    </button>
                                    </td>               
                                </tr>
                    		);
                    	})

                	) : (
                  		<tr>
                			<td>No data to display</td>
              			</tr>
                	)
                    
                }

            </tbody>
        </table>
    
    );
}

export default WaitingListTable;
