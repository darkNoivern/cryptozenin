import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Home from './Home'
import Main from './Main'
import Doge from './Doge'
import News from './News'
import Loading from './Loading'
import StalkList from './StalkList'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './Error'
import '../App.css'

const Index = () => {

    const substituteData = useSelector(state=>state);
    const [user, setUser] = useState(substituteData.user);
    const [data, setData] = useState([]);
    console.log('user logged in', user)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const toggleUser = (set) => {
        setUser(set);
    }

    async function getData() {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        console.log('response', responseJsonData)
        setData(responseJsonData.data)
        dispatch({
            type: 'SET_DATA',
            payload: responseJsonData.data,
        });
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Router>
                <Navbar user={user} toggleUser={toggleUser} />
                <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false} />
                { 
                ( loading === true || data === [])
                ? 
                <Loading /> 
                : 
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/coins" element={<Home />} />
                    <Route exact path="/coin/:id" element={<Doge />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/stalk" element={
                        user === true ? <StalkList /> : <SignIn toggleUser={toggleUser} /> } />
                    <Route exact path="/signin" element={<SignIn toggleUser={toggleUser} />} />
                    <Route exact path="/signup" element={<SignUp toggleUser={toggleUser} />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                }
            </Router>
        </>
    )
}

export default Index;
