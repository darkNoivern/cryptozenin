import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GlassTilt from './GlassTilt';
import '../styles/main.css'

const Main = () => {
    const url = [`https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579`, `https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066`, `https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880`, `https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818`];
    const [x, setX] = useState(0);
    const [newsLetter, setNewsLetter] = useState('');
    const navigate = useNavigate();

    const getNewsLetter = (event) => {
        setNewsLetter(event.target.value)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setX((x + 1) % 4);
        }, 3500);
        // clearing interval
        return () => clearInterval(timer);
    });

    return (
        <>
            <div className="style-bg">
                <div className="background-top pt-5 pt-sm-2 pt-md-0 bg-warning d-flex justify-content-center">
                    <div className="homex">
                        <div className="row mx-0">
                            <div className="col col-md-6 col-12 flexy home-title-container">
                                <div>
                                    <div className='home-title text-dark comfortaa mb-5'>
                                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, at. */}
                                        CryptoCurrency's a Drag until you Analyse, Espy and start Investing
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => { navigate('/coins') }}
                                            className="ui button bg-dark text-warning get-started-btn">
                                            {`Get Started →`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-6 mt-5 mt-md-0 col-12 flexy">
                                <img src={url[x]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1639398461">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="glass-features my-5 flexy">
                <div className="about-width">
                    <div className="abril-banner fatface text-warning text-md-start text-center mt-4 mb-5">Main Features</div>
                    <div className="row mx-0">
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="01"
                                title='Analyse Data'
                                desc='Top 100 cryptocurrencies are displayed along with required data to analyse-compare-observe-invest ( ACOI ) in them . Updated NEWS from  NYT is a cherry on cake for everyone' />
                        </div>
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="02"
                                title='Stalk List'
                                desc='You can add sexy cyprocurrencies to your stalklist to remain updatesd with your investment assurities and profits. U can break-up with them whenever you want.' />
                        </div>
                        <div className="col col-lg-4 col-12 flexy">
                            <GlassTilt
                                number="03"
                                title='Data Charts'
                                desc='Delicious Data Charts 📈 for insecure hominums so that they feel comfortable in investing with the grace of hell lot visual data' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutUs bg-dark text-warning flexy">
                <div className="about-width">
                    <div className="abril-banner fatface text-md-start text-center mt-5 mb-4">AboutUs</div>
                    <div className="about-desc mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla nihil velit praesentium id illo dolor molestias placeat animi enim, sit maiores tempore fuga ipsam laboriosam officia explicabo iusto magnam? Pariatur, accusantium. Porro natus repudiandae deleniti aliquid. Dignissimos labore ad voluptatem, praesentium autem est, quos quo atque reiciendis impedit omnis, aperiam fugit sit hic architecto! Quia debitis distinctio quae minus totam labore adipisci earum possimus ratione sint animi dignissimos excepturi dolorum est nemo cum, odio necessitatibus hic praesentium dolore dolorem id perspiciatis. Reprehenderit, reiciendis repudiandae! Autem molestiae perferendis earum quae quibusdam incidunt! Eos quidem architecto praesentium fugiat dolorem sint pariatur.
                    </div>
                    <div className="about-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla nihil velit praesentium id illo dolor molestias placeat animi enim, sit maiores tempore fuga ipsam laboriosam officia explicabo iusto magnam? Pariatur, accusantium. Porro natus repudiandae deleniti aliquid. Dignissimos labore ad voluptatem, praesentium autem est, quos quo atque reiciendis impedit omnis, aperiam fugit sit hic architecto! Quia debitis distinctio quae minus totam labore adipisci earum possimus ratione sint animi dignissimos excepturi dolorum est nemo cum, odio necessitatibus hic praesentium dolore dolorem id perspiciatis. Reprehenderit, reiciendis repudiandae! Autem molestiae perferendis earum quae quibusdam incidunt! Eos quidem architecto praesentium fugiat dolorem sint pariatur.
                    </div>
                </div>
            </div>

            <div className="footer flexy mt-5 px-3">
                <div>
                    <div className='text-center newsletter-text my-3'>
                        For regular updated news subscribe to our newsletter
                    </div>
                    <div className='d-flex justify-content-between'>
                        <input
                            onChange={getNewsLetter}
                            value={newsLetter}
                            type="email"
                            placeholder='Enter mail Id .... '
                            className="form-control bg-dark text-white subscribe-input" />
                        <button
                            onClick={() => { setNewsLetter('') }}
                            className="ui ms-4 me-0 button red mouse-rat">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer flexy">
                <div>
                    <div className="footer-icons d-flex justify-content-between">
                        <i class="fab fa-twitter fa-2x" />
                        <i class="fab fa-facebook fa-2x" />
                        <i class="fab fa-instagram fa-2x" />
                        <i class="fas fa-envelope-open-text fa-2x" />
                    </div>
                    <div className='mt-3'>
                        © Copyright 2023 CryptoZenin
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main
