import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import '../styles/table.css'

const LargeTable = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <table className="table text-white mx-lg-5 mx-2">
                <thead>
                    <tr className="bg-warning text-dark individualCrypto-head">
                        <td className="custom-lg-width ps-2">Coin</td>
                        <td>Symbol</td>
                        <td className="text-end">Price</td>
                        <td className="text-end">Volume</td>

                        {/* <td className="text-end">%_Change</td> */}
                        <td className="text-end ">
                            <span className="text-success td-sym">&#8593;</span>
                            <span className="text-danger td-sym">&#8595;</span>
                        </td>
                        <td className="text-end pe-2">Market Cap</td>
                    </tr>
                </thead>
                
                {props.data.length !== 0 ? (
                    props.data.map((crypto, index) => {
                        return (
                            <tr className="individualCrypto" key={index}>
                                <td className="custom-lg-width">
                                
                                    <img
                                        className="bitcoin-img me-3"
                                        src={crypto.image}
                                        alt={crypto.name}
                                        onClick={()=>{
                                            navigate(`/coin/${crypto.id}`)
                                        }}
                                    />
                                    <p>
                                        <Link exact to={`/coin/${crypto.id}`} className="text-white">
                                            {crypto.name}
                                        </Link>
                                    </p>
                                </td>
                                <td>{crypto.symbol.toUpperCase()}</td>
                                <td className="text-end">
                                    ${crypto.current_price.toFixed(2)}
                                </td>
                                <td className="text-end">${crypto.total_volume}</td>
                                {crypto.price_change_percentage_24h?.toFixed(2) >= 0.0 ? (
                                    <td className="per_change text-success text-end">
                                        {crypto.price_change_percentage_24h?.toFixed(2)}%
                                    </td>
                                ) : (
                                    <td className="per_change text-danger text-end">
                                        {crypto.price_change_percentage_24h?.toFixed(2)}%
                                    </td>
                                )}
                                <td className="text-end pe-2">
                                    Mkt_Cap : ${crypto.market_cap}
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <div className="unavailable text-center my-5">
                        Search Unavialable
                    </div>
                )}
            </table>
        </>
    )
}

export default LargeTable
