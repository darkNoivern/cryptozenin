import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import '../styles/signin.css'

const SignIn = (props) => {

    const dispatch = useDispatch();
    const substituteData = useSelector(state=>state);
    const userDetails = substituteData.userDetails;
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const getUserName = (event) =>{
        setUserName(event.target.value);
    }
    const getPassword = (event) =>{
        setPassword(event.target.value);
    }

    const signInFunc = () => {

        console.log(username, password)

        if (!username || !password) {
            return toast.warn('Please fill all details', { theme: "colored" })
        }

        console.log('signinsubs', substituteData)
        console.log('signin', userDetails)

        const checkUserNamePresent = userDetails.find((user) => {
            return (user.username === username);
        })

        let same = false;
        userDetails.forEach((user)=>{
            if(user.username === username){
                console.log(user.username, username)
                console.log(user.password, password)
                if(user.password === password){
                    same = true;
                }
            }
        })

        console.log(checkUserNamePresent)
        if (checkUserNamePresent === undefined) {
            return toast.error("Username dosen't exists", { theme: "colored" });
        }
        console.log(same)
        if(same === false){
            setUserName('');
            setPassword('');
            return toast.error('Username/Password is in-correct', { theme: "colored" });
        
        }
        
        dispatch({
            type: 'SIGN_IN',
            payload: username,
        });
        
        props.toggleUser(true)
        toast.success('Logged In succesfully', { theme: "colored" })
        navigate('/coins')
        
    }

    return (
        <>
            <div className="background">
                <div className='mt-5 mb-4 d-flex justify-content-end'>
                    <button className='ui yellow button text-dark me-lg-4 me-3' onClick={() => { navigate('/signup') }}>Sign-Up</button>
                </div>
                <div className="box flexy">
                    <div className="signInBox p-3 my-2">
                        <div className="abril-banner fatface text-warning mt-2 mb-5 flexy">
                            Sign-In
                        </div>
                        <form action="" className="mt-4">
                            <label htmlFor="" className="form-label text-warning">UserName</label>
                            <input 
                            type="text" 
                            className="form-control mb-4 text-white bg-dark" 
                            placeholder="Enter the Username....." 
                            value={username}
                            onChange={getUserName}
                            />
                            <label htmlFor="" className="form-label text-warning">Password</label>
                            <input 
                            type="password" 
                            className="form-control text-white mb-4 bg-dark" 
                            placeholder="Enter the Password....."
                            value={password} 
                            onChange={getPassword}
                            />
                        </form>
                        <div className="flexy mt-5 mb-3">
                            <button 
                            className="ui yellow button text-dark"
                            onClick={signInFunc}>
                            Sign-In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
