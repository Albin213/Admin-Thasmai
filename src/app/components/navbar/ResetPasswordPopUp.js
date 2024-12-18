"use client"
import { Condiment } from 'next/font/google';
import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

function ResetPasswordPopUp({ setIsResetPasswordPopUpOpen }) {
    const [data, setData] = useState({
        oldPassword : "",
        password : "",
        confirmPassword: ""
    });
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userdata"));
        setUserId(user.id);
    }, [])

    console.log(data);
    console.log(userId);
    
    

    function handleOnChange(event) {
        const {name, value} = event.target;

        setData((prevValue) => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { oldPassword, password, confirmPassword } = data;
        if(oldPassword && password && confirmPassword) {
            if(password === confirmPassword) {
                try {
                    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/resetPasswordAdmin/${userId}`, {
                        oldPassword : oldPassword,
                        password : password
                    });
                    toast.success(response.data.message)
                    console.log(response);
                    setIsResetPasswordPopUpOpen(false);
                } catch (error) {
                    console.log(error);
                    toast.error(error.response.data.message)

                }
            } else {
                toast("Password and confirm password should be same");
            }
        } else {
            toast("Please enter the required fields");
        }
    }
    
  return (
    <div className="w-screen h-screen px-2 md:px-0 bg-[#000000af] absolute left-0 top-0 flex justify-center items-center z-[100]">
        <div className='w-full md:w-[550px] bg-white drop-shadow-md rounded'>
            <div className='h-20 p-4 flex items-center bg-[#005db8] rounded-t relative'>
                <h1 className='text-xl text-white'>Reset Password</h1> 
                <span 
                    className='absolute top-2 right-2 rotate-45 text-white text-4xl cursor-pointer'
                    onClick={() => setIsResetPasswordPopUpOpen(false)}
                >+</span>
            </div>
            <div className='px-4 py-10 flex flex-col gap-8'>
                <input 
                    className="w-full h-12 px-2 text-base bg-gray-100 text-black outline-none border-gray-400 border-[1px] rounded" 
                    type="text"
                    name="oldPassword"
                    value={data.oldPassword}
                    placeholder='Enter current password'
                    onChange={handleOnChange}
                />
                <input 
                    className="w-full h-12 px-2 text-base bg-gray-100 text-black outline-none border-gray-400 border-[1px] rounded" 
                    type="text"
                    name="password"
                    value={data.password}
                    placeholder='Enter new password'
                    onChange={handleOnChange}
                />
                <input 
                    className="w-full h-12 px-2 text-base bg-gray-100 text-black outline-none border-gray-400 border-[1px] rounded" 
                    type="text"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    placeholder='Confirm new password'
                    onChange={handleOnChange}
                />
                
                <button 
                    className='h-12 bg-[#005db8] text-white'
                    onClick={handleSubmit}
                >
                    Reset Password
                </button>
            </div>
        
        </div>
    </div>
  )
}

export default ResetPasswordPopUp