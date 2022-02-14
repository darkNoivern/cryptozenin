import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../styles/signin.css'

const SignUp = (props) => {
    
    const dispatch = useDispatch();
    const substituteData = useSelector(state=>state);
    const userDetails = substituteData.userDetails;
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassWord, setRePassword] = useState('');

    const getUserName = (event) =>{
        setUserName(event.target.value);
    }
    const getPassword = (event) =>{
        setPassword(event.target.value);
    }
    const getRePassword = (event) =>{
        setRePassword(event.target.value);
    }
    
    const signUpFunc = () => {

        const checkUserNamePresent = userDetails.find((user) => {
            return (user.username === username);
        })

        if (!username || !password || !rePassWord) {
            return toast.warn('Please fill all details', { theme: "colored" })
        }

        if (checkUserNamePresent !== undefined) {
            return toast.error('Username already exists', { theme: "colored" });
        }

        if(password!==rePassWord){
            return toast.error("Passwords didn't match", { theme: "colored" });
        }

        const newObj = {
            username: username,
            password: password,
        }
    
        dispatch({
            type: 'SIGN_UP',
            payload: newObj,
        });

        props.toggleUser(true)
        toast.success('User added succesfully', { theme: "colored" })
        navigate('/coins')
    }

    return (
        <>
            <div className="background">
                <div className='mt-5 mb-4 d-flex justify-content-end'>
                    <button className='ui yellow button text-dark me-lg-4 me-3' onClick={() => { navigate('/signin') }}>Sign-In</button>
                </div>
                <div className="box flexy">
                    <div className="signInBox p-3 my-2">
                        <div className="abril-banner fatface text-warning mt-2 mb-5 flexy">
                            Sign-Up
                        </div>
                        <form action="" className="mt-4">
                            <label htmlFor="" className="form-label text-warning">UserName</label>
                            <input 
                            type="text" 
                            className="form-control text-white mb-4 bg-dark" 
                            placeholder="Enter the Username....." 
                            onChange={getUserName}
                            />
                            <label htmlFor="" className="form-label text-warning">Password</label>
                            <input 
                            type="password" 
                            className="form-control text-white mb-4 bg-dark" 
                            placeholder="Enter the Password....." 
                            onChange={getPassword}
                            />
                            <label htmlFor="" className="form-label text-warning">Password</label>
                            <input 
                            type="password" 
                            className="form-control text-white mb-4 bg-dark" 
                            placeholder="Re-Enter the Password....." 
                            onChange={getRePassword}
                            />
                        </form>
                        <div className="flexy mt-4 mb-3">
                            <button 
                            className="ui yellow button text-dark"
                            onClick={signUpFunc}
                            >Sign-Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
