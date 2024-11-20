"use client"

import React, { useState, useEffect} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function BeneficiariesListTable(props) {

    
    useEffect(() => {

        const fetchData = async () => {
            const pageNo = props.pageNo;
        	const pageRows = props.pageRows;
        
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/beneficiariesDetails?page=${pageNo}&limit=${pageRows}`);

                    
                props.setUsersData(response.data.beneficiariesDetails);
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
					{/* <th className="text-left">Sl. No</th> */}
                    {/* <th className="text-left">Date</th> */}
                    <th className="text-left">Name</th>
                    <th className="text-left">User Id</th>
                    <th className="text-left">Coupons Redeemed</th>
                    {/* <th className="text-left">Branch</th> */}
                </tr>
            </thead>
            <tbody className="my-10">

                {    
					props.usersData[0] ? (

                  		props.usersData.map((i, index) => {

                            const distributionDate = i.distribution_time ? i.distribution_time.split("T") : "";

                    		return (
                                <tr
                                    key={index}
                                    className="font-medium text-xs text-black my-10 border-b-[1px] border-[#eeeeee]"
                                >
								    {/* <td className="text-left">
                                        { 	
											!props.isFilteredData ? (

												(index + 1) + ((props.pageNo - 1) * 10 )

											) : (

												(index + 1) + ((props.filteredPageNo - 1) * 10 )

											)
										}
                                    </td> */}
                                    {/* <td className="text-left">{ distributionDate[0] }</td> */}
                                    <td 
                                        className="text-left text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer"
                                        onClick={() => {
                                            props.setUserId(i.UId);
                                            props.setIsViewProfile(true);
                                        }}
                                    >
                                        { i.firstName } { i.secondName }
                                    </td>
                                    <td className="text-left">TSL{ i.UId }</td>
                                    {/* <td className="text-left">{ i.email } </td>
                                    <td className="text-left">{i.countryCode}{" "}{ i.phone } </td> */}
                                    {/* <td className="text-left">{ i.total_donation }</td> */}
                                    {/* <td className="text-left">{ i.latest_donation }</td> */}
                                    {/* <td className="text-left">
                                      <div className="bg-[#d9d9d9] w-full h-7 p-1 rounded">{i.remarks}</div>
                                    </td> */}
                                    <td className="text-left">{i.totalDistributedCoupon} </td>
                                    {/* <td className="text-left flex justify-evenly">
                                      <p className="text-[10px] bg-[#d9d9d9] w-16 h-7 me-1 rounded flex justify-center items-center">
                                        L - {i.Level}
                                      </p>      
                                      <p className="text-[10px] bg-[#d9d9d9] w-16 h-7 rounded flex justify-center items-center">
                                        N - {i.node_number}
                                      </p> 
                                    </td> */}
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

export default BeneficiariesListTable;
