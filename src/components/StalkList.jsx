import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LargeTable from './LargeTable'
import SmallTable from './SmallTable'
import { useNavigate } from 'react-router'

const StalkList = () => {

    const substituteData = useSelector(state => state);
    const currentUser = substituteData.currentUser;
    const userDetails = substituteData.userDetails;
    const [stalkDetails, setStalkDetails] = useState([]);
    
    useEffect(()=>{
        userDetails.forEach((user)=>{
            if(user.username===currentUser){
                setStalkDetails(user.userStalkList)
            }
        })
    },[])
    
    const data = substituteData.axiosData;
    const navigate = useNavigate();

    const displayData = data.filter((yawn) => {
        return (stalkDetails.includes(yawn.id));
    })

    return (
        <>
            <div className="abril-banner fatface flexy my-5 text-white">
                Stalk List
            </div>
            <div className="dataAnalysis mb-5 flexy">
                {
                    (displayData.length > 0) ?
                        (window.innerWidth > 760 ?
                            <LargeTable data={displayData} />
                            :
                            <SmallTable data={displayData} />) :
                        <div className="flexy my-5">
                            <div>
                                <div className="unavailable flexy mt-3 mb-5 text-white text-center">
                                    Add Some Cryptos To Stalk
                                </div>
                                <div className="flexy">
                                    <button
                                        onClick={() => { navigate('/coins') }}
                                        className="ui primary button go-back-btn">
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
export default StalkList
