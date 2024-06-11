import React, { useState } from 'react'

export default function HomeBody({isChecked}) {
    let contentStyle = {
        position: 'relative',
        top: '70px',
        width: isChecked ? 'calc(100% - 250px)' : 'calc(100% - 80px)',
        maxWidth: isChecked ? 'calc(100% - 250px)' : 'calc(100% - 80px)',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'all 0.3s ease',
        left: isChecked ? '250px' : '80px',
    };

    let shorthash = {
        color : '#3EA6F1'
    }

    let [isHidden, setIsHidden] = useState(true);

    let toggleHiddenShorts = () => {
        setIsHidden(!isHidden);
    };

  return (
    <>
        <main className={`content ${isChecked ? 'checked' : 'unchecked'} pb-5`} style={contentStyle}>
            <div className="container-fluid pb-5 myBody">

                <div className="row">
                    <div className="col-12 topBtns">
                        <button className='btn'>All</button>
                        <button className='btn'>Praveen Kumar</button>
                        <button className='btn'>Music</button>
                        <button className='btn'>Movies</button>
                        <button className='btn'>Cartoon</button>
                        <button className='btn'>Entertainment</button>
                        <button className='btn'>Comedy</button>
                        <button className='btn'>Hrishab Sir</button>
                        <button className='btn'>4Achievers</button>
                        <button className='btn'>News</button>
                        <button className='btn'>Mixes</button>
                        <button className='btn'>Gaming</button>
                        <button className='btn'>Web Development</button>
                        <button className='btn'>React</button>
                        <button className='btn'>Javascript</button>
                        <button className='btn'>Science & Technology</button>
                        <button className='btn'>UPSC</button>
                        <button className='btn'>Live</button>
                        <button className='btn'>Web Series</button>
                        <button className='btn'>T-Series</button>
                        <button className='btn'>Kapil Sharma</button>
                        <button className='btn'>Cricket</button>
                        <button className='btn'>Virat Kohli</button>
                        <button className='btn'>Loksabha Elections 2024</button>
                        <button className='btn'>Narendra Modi</button>
                        <button className='btn'>BJP News</button>
                        <button className='btn'>Rohit Sharma</button>
                        <button className='btn'>MS Dhoni</button>
                        <button className='btn'>Indian Cricket Team</button>
                        <button className='btn'>Football</button>
                        <button className='btn'>Sunil Chhetri</button>
                        <button className='btn'>T20 World Cup 2024</button>
                        <button className='btn'>Bhojpuri Songs</button>
                        <button className='btn'>Cooking</button>
                        <button className='btn'>Food Vlog</button>
                        <button className='btn'>Recently Uploaded</button>
                        <button className='btn'>Recently Watched</button>
                        <button className='btn'>Youtube History</button>
                        <button className='btn'>New to you</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://www.youtube.com/live/avzufy3tPKw?si=31f2hHTeNIYs4nJw' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/sapath.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>03:54:15</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@NarendraModi'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/modiji.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://www.youtube.com/live/avzufy3tPKw?si=31f2hHTeNIYs4nJw' className="my-1 video-title text-light">
                                        Shri Narendra Modi Oath Ceremony Live | Modi's Cabinet 2024 Oath Live | Modi 3.0
                                    </a>
                                    <a href='https://www.youtube.com/@NarendraModi' className="channel-name d-block">Narendra Modi <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">13M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">Streamed 17 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/bukN2P7WpwE?si=T8mx7WnbW2pbHUym' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/namamiShamishan.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>01:09:52</span>
                            </a>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@ReligiousIndia_'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/religiousIndia.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/bukN2P7WpwE?si=T8mx7WnbW2pbHUym' className="my-1 video-title text-light">
                                        Witness the POWER of LORD SHIVA and feel his STRONG PRESENCE through this ANCIENT MANTRA
                                    </a>
                                    <a href='https://www.youtube.com/@ReligiousIndia_' className="channel-name d-block">Religious India <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">15M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">3 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/0zG8JMSqVXs?si=Vnw0yznPEsLeo0yQ' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/kesarikelaal.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>06:10</span>
                            </a>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@TSeriesBhaktiSagar'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/tseries-bhakti.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/0zG8JMSqVXs?si=Vnw0yznPEsLeo0yQ' className="my-1 video-title text-light">
                                        Keejo Kesari Ke Laal Hanuman Bhajan By LAKHBIR SINGH LAKKHA [Full Song] Hanuman Jab Chale
                                    </a>
                                    <a href='https://www.youtube.com/@TSeriesBhaktiSagar' className="channel-name d-block">T-Series Bhakti Sagar <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">36M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">13 years ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/7S_tz1z_5bA?si=-r-UR2hANsd-EMbb' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/mysql.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>03:10:19</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@programmingwithmosh'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/moshprog_profile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/7S_tz1z_5bA?si=-r-UR2hANsd-EMbb' className="my-1 video-title text-light">
                                        MySQL Tutorial for Beginners [Full Course]
                                    </a>
                                    <a href='https://www.youtube.com/@programmingwithmosh' className="channel-name d-block">Programming with Mosh <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">11M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">5 years ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/AEIAKtkhEtc?si=-RoIVrv-W9K47rt_' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/ayodhyaNews.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>08:07</span>
                            </a>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@ANINewsIndia'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/ANI.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/AEIAKtkhEtc?si=-RoIVrv-W9K47rt_' className="my-1 video-title text-light">
                                        Highways, Airport, Ram Mandir | What went wrong for BJP in Ayodhya? | Loksabha Elections 2024
                                    </a>
                                    <a href='https://www.youtube.com/@ANINewsIndia' className="channel-name d-block">ANI <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">321K views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">2 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/AEIAKtkhEtc?si=-RoIVrv-W9K47rt_' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/indvspak.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>10:55</span>
                            </a>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@DNAIndiaNews'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/dnaNews.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/AEIAKtkhEtc?si=-RoIVrv-W9K47rt_' className="my-1 video-title text-light">
                                        India Vs Pakistan Highlights: Team India Won By 6 Runs Against Pakistan | T20 World Cup 2024
                                    </a>
                                    <a href='https://www.youtube.com/@DNAIndiaNews' className="channel-name d-block">DNAIndiaNews <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">25K views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">Streamed 12 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    

                    {/* Shorts */}
                    <div className='container-fluid mt-5'>
                        <div className='row mt-2'>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                
                                <div className='d-flex justify-content-start align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" style={{pointerEvents: 'none', display: 'inherit', width: '40px', height: '40px'}}>
                                        <g>
                                            <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" fill="red"></path>
                                            <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff"></polygon>
                                        </g>
                                    </svg>

                                    <span className='h5 fw-bold text-light ms-3'>Shorts</span>
                                </div>

                                <button className='btn text-secondary d-flex justify-content-center align-items-center' title='Close Shots'>
                                    <span style={{fontSize: '25px'}}><i className="fa-solid fa-xmark"></i></span>
                                </button>
                            </div>
                        </div>

                        {/* Shorts Content Box */}
                        <div className='row'>
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/shorts/Sy9pEraQmUk?si=_DJ90MeMID_SrhCo' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/watermelonshort.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/shorts/Sy9pEraQmUk?si=_DJ90MeMID_SrhCo' className='short-title'>
                                                Amazing Watermelon Cutting Skills - Korea
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>4.9M views</span>
                                </div>
                            </div>
                            
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/shorts/gHObB8NSLMg?si=L7n-VuEo3RkleCHO' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/coconutskill.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/shorts/gHObB8NSLMg?si=L7n-VuEo3RkleCHO' className='short-title'>
                                                Knife and Coconut Battle
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>6.7M views</span>
                                </div>
                            </div>
                            
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/watch?v=y6jj2apvOcM' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/training.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/watch?v=y6jj2apvOcM' className='short-title'>
                                                Pistol Defence With Commando - Fitness Club
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>26M views</span>
                                </div>
                            </div>
                            
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/shorts/dWcbI2jhA5w?si=kFsw_Yri1AChoxFI' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/mahadev.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/shorts/dWcbI2jhA5w?si=kFsw_Yri1AChoxFI' className='short-title'>
                                                <span style={shorthash}>#Bholenath</span> Whatsapp Status | <span style={shorthash}>#Mahadev</span> Status
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>887K views</span>
                                </div>
                            </div>
                            
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/shorts/B0oXftmW_WA?si=J0CjRxAT4FsL0cHZ' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/boybhakt.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/shorts/B0oXftmW_WA?si=J0CjRxAT4FsL0cHZ' className='short-title'>
                                                3 years old boy | bhakt bhagwat
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>1.5M views</span>
                                </div>
                            </div>
                            
                            <div className="col-6 col-sm-4 col-lg-2 shorts">
                                <div className="video-card mt-3">
                                    <a href='https://youtube.com/shorts/RUg4G7Eksos?si=TAWxV5vFax_MMGmt' className='thumbBox d-flex flex-direction-row'>
                                        <img src={`${process.env.PUBLIC_URL}/Images/shorts/papergun.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                    </a>

                                    <div className='row g-0'>
                                        <div className='col-10 col-md-11 g-0'>
                                            <a href='https://youtube.com/shorts/RUg4G7Eksos?si=TAWxV5vFax_MMGmt' className='short-title'>
                                                Amazing paper gun | Machis box gun #shorts #craft #gun #viral
                                            </a>
                                        </div>

                                        <div className='col-2 col-md-1 g-0 short-dots'>
                                            <button> 
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>   

                                    <span className='short-views'>2.4M views</span>
                                </div>
                            </div>                        
                        </div>

                        {/* Hidden Shorts */}
                        <div className='row' style={{ display: isHidden ? 'none' : 'flex'}}>
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/mPSEDls5Eig?si=iFn-OKqY1mnnJmmf' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/seacreature.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/mPSEDls5Eig?si=iFn-OKqY1mnnJmmf' className='short-title'>
                                                    RIP in heaven <span style={shorthash}>#natureocean #natureocean #naturehealingmuisc #whale</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>5.1M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/1zf6QmrNIEY?si=Kj10ECFu-QqEG28i' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/rainforest.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/1zf6QmrNIEY?si=Kj10ECFu-QqEG28i' className='short-title'>
                                                    Cango rainforest <span style={shorthash}>#Science #Viralshort</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>4.3M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/Y09s9lJBfV4?si=kHUj75MKD0hrQS1K' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/aampanna.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/Y09s9lJBfV4?si=kHUj75MKD0hrQS1K' className='short-title'>
                                                    Aam Panna Recipe | Village Style <span style={shorthash}>#Shorts</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>3.8M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/jeZurxKI_Gg?si=-JrfGsrlBV5vEtXy' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/lychee.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/jeZurxKI_Gg?si=-JrfGsrlBV5vEtXy' className='short-title'>
                                                    Beautiful Lychee Garden <span style={shorthash}>#Satisfying #Shorts</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>2.8M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/sdc9K7X1BNk?si=z88PoJItSxEa3E6r' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/freeride.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/sdc9K7X1BNk?si=z88PoJItSxEa3E6r' className='short-title'>
                                                    Freeride was born here
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>8.8M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/fbi6PU7nR60?si=bxda2kczXEpsbphC' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/icecream.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/fbi6PU7nR60?si=bxda2kczXEpsbphC' className='short-title'>
                                                    ₹10000 ki ek Chocobar 🤮🤢 <span style={shorthash}>#IndianStreetFood #icecream</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>161M views</span>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/JzbtdebZhj4?si=g1oTVFCzyPL_qmRn' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/lotus-seed.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/JzbtdebZhj4?si=g1oTVFCzyPL_qmRn' className='short-title'>
                                                    Must Try!! Edible Lotus Seeds
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>125M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/SGTV0nDaI4I?si=7Bk-kmkPkOPonWkJ' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/jellyfish.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/SGTV0nDaI4I?si=7Bk-kmkPkOPonWkJ' className='short-title'>
                                                    Rescue Mission: Over 100+ Jellyfish safely returned to their home
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>36M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/hIHYMD98gVc?si=nGcGCv64qbPFj3x1' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/hanumanji.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/hIHYMD98gVc?si=nGcGCv64qbPFj3x1' className='short-title'>
                                                    Bala Ji 😍😍 Hanuman Ji Idol 🙏 Jai Shree Ram 🌸🙏
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>46M views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/oxkCvwKjCMo?si=ZL5XcMAbFvMB-frB' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/shivling.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/oxkCvwKjCMo?si=ZL5XcMAbFvMB-frB' className='short-title'>
                                                    Har Har Mahadev <span style={shorthash}>#HarHarMahadevॐ #TrendingShorts #ViralVideo #Bhajan</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>251 views</span>
                                    </div>                      
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/Jnhga8lbI_4?si=6e2SupskZdIOEg-Y' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/modijiKaSapath.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/Jnhga8lbI_4?si=6e2SupskZdIOEg-Y' className='short-title'>
                                                    Glimpses from PM Modi's oath ceremony <span style={shorthash}>#PMModi</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>30K views</span>
                                    </div>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-lg-2 shorts">
                                    <div className="video-card mt-3">
                                        <a href='https://youtube.com/shorts/tjmkBH2s7UQ?si=pt6nwh4nhbaL-CW5' className='thumbBox d-flex flex-direction-row'>
                                            <img src={`${process.env.PUBLIC_URL}/Images/shorts/panchayatBinod.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>                              
                                        </a>

                                        <div className='row g-0'>
                                            <div className='col-10 col-md-11 g-0'>
                                                <a href='https://youtube.com/shorts/tjmkBH2s7UQ?si=pt6nwh4nhbaL-CW5' className='short-title'>
                                                    Hesitation hesitates from Binod! 😂 | <span style={shorthash}>#TVF #PanchayatOnPrime #Shorts</span>
                                                </a>
                                            </div>

                                            <div className='col-2 col-md-1 g-0 short-dots'>
                                                <button> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="M479.63-171.23q-27.38 0-46.5-19.5Q414-210.23 414-237.6q0-27.38 19.5-46.51 19.49-19.12 46.87-19.12t46.5 19.5Q546-264.24 546-236.86t-19.5 46.5q-19.49 19.13-46.87 19.13Zm0-242.77q-27.38 0-46.5-19.5Q414-452.99 414-480.37t19.5-46.5Q452.99-546 480.37-546t46.5 19.5Q546-507.01 546-479.63t-19.5 46.5Q507.01-414 479.63-414Zm0-242.77q-27.38 0-46.5-19.5Q414-695.76 414-723.14t19.5-46.5q19.49-19.13 46.87-19.13t46.5 19.5Q546-749.77 546-722.4q0 27.38-19.5 46.51-19.49 19.12-46.87 19.12Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>   

                                        <span className='short-views'>4.3M views</span>
                                    </div>
                                </div>                        
                            </div>

                        <div className='row mt-5'>
                            <div className='col-12'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-4 g-0">
                                        <span className='w-100 text-light'><hr/></span>
                                    </div>
                                    <div className="col-4 g-0">
                                        <button onClick={toggleHiddenShorts} className='btn text-light w-100 d-flex justify-content-center align-items-center' id='shortShowBtn'>
                                            <span>{isHidden ? 'Show More' : 'Show Less'}</span>
                                            <span className='ms-2'>
                                                <i className={`fa-solid fa-chevron-${isHidden ? 'down' : 'up'}`}></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-4 g-0">
                                        <span className='w-100 text-light'><hr/></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Shorts Closed */}

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/F6hmwkI3n64?si=bRg27RXp2AKsQivy' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/AITOOL.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>14:42</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@TechBurner'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/techburner_profile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/F6hmwkI3n64?si=bRg27RXp2AKsQivy' className="my-1 video-title text-light">
                                        35 Majedaar AI Tools You Should Try !
                                    </a>
                                    <a href='https://www.youtube.com/@TechBurner' className="channel-name d-block">Tech Burner <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">1.7M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">30 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/ZF6t-XGdkRQ?si=wOcsg3N2cxlm8vTz' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/hindkesitara.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>05:23</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@TVFMusic'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/tvfmusiclogo.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/ZF6t-XGdkRQ?si=wOcsg3N2cxlm8vTz' className="my-1 video-title text-light">
                                        Hind Ke Sitara | Official Music Video | Panchayat S3 | Manoj Tiwari, Gayatri Thakur Vyas, Anurag S
                                    </a>
                                    <a href='https://www.youtube.com/@TVFMusic' className="channel-name d-block">TVF Music <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">3.4M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">8 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/bNLJEsqCFWM?si=SA-WZtVHzg2clDPE' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/t20wc2024.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>01:25</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@ICC'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/iccLogo.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/bNLJEsqCFWM?si=SA-WZtVHzg2clDPE' className="my-1 video-title text-light">
                                        An Out of This World Spectacle | ICC Men’s T20 World Cup 2024
                                    </a>
                                    <a href='https://www.youtube.com/@ICC' className="channel-name d-block">ICC <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">38M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">3 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/pvW6HBEoIAI?si=7CMndqkERUGogECh' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/kaka.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>03:18</span>
                            </a>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/channel/UCoBZjU5zDSWhlewGr3KJdrg'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/kaka_profile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/pvW6HBEoIAI?si=7CMndqkERUGogECh' className="my-1 video-title text-light">
                                        KAKA Shape (Full Music Video) - Kaka New Song - New Punjabi Song
                                    </a>
                                    <a href='https://www.youtube.com/channel/UCoBZjU5zDSWhlewGr3KJdrg' className="channel-name d-block">Kaka <i className="bi bi-music-note"></i></a>
                                    <span className="channel-name">104M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/NYP59Xiwwo0?si=nNYrhQViW2zD-PE6' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/godzilla.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>03:25</span>
                            </a>

                            <div className="d-flex">
                                <a href='https://www.youtube.com/@DangerVille'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/godzillaprofile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/NYP59Xiwwo0?si=nNYrhQViW2zD-PE6' className="my-1 video-title text-light">
                                        Godzilla x Kong: The New Empire - OFFICIAL TRAILER 2
                                    </a>
                                    <a href='https://www.youtube.com/@DangerVille' className="channel-name d-block">DangerVille <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">2.3M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">3 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/73NUY_J7DoY?si=YNhCnnyutpI7yViN' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/artofwar.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>05:09</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@AllAction'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo " alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/allaction.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/73NUY_J7DoY?si=YNhCnnyutpI7yViN' className="my-1 video-title text-light">
                                        The Art Of War (Final Battle) | Battleship | All Action
                                    </a>
                                    <a href='https://www.youtube.com/@AllAction' className="channel-name d-block">All Action <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">17M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/XtFI7SNtVpY?si=flJw4d31Yejyf4uD' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/ingdomofplannet.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>02:31</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@20thCenturyStudios'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/20th.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/XtFI7SNtVpY?si=flJw4d31Yejyf4uD' className="my-1 video-title text-light">
                                        Kingdom of the Planet of the Apes | Official Trailer
                                    </a>
                                    <a href='https://www.youtube.com/@20thCenturyStudios' className="channel-name d-block">20th Century Studios <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">20M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">3 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/NMVGsGiV8Ro?si=BYCHa8Au5nq7EIiL' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/transformer.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>05:18</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@bingesociety'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo " alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/bingsociety_profile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/NMVGsGiV8Ro?si=BYCHa8Au5nq7EIiL' className="my-1 video-title text-light">
                                        Transformers: Age Of Extinction (2014) : Calling all Autobots
                                    </a>
                                    <a href='https://www.youtube.com/@bingesociety' className="channel-name d-block">Binge Society <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">42M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">2 years ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/WCrmkX35Xks?si=1HAaqIsF2yDsxQyl' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/jurasic.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>20:53</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@jurassicworld'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" src={`${process.env.PUBLIC_URL}/Images/channelLogo/jurassicworld_profile.jpg`} alt=" Profile Img"/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/WCrmkX35Xks?si=1HAaqIsF2yDsxQyl' className="my-1 video-title text-light">
                                        The Best Velociraptor Scenes in 4K HDR | Jurassic World
                                    </a>
                                    <a href='https://www.youtube.com/@jurassicworld' className="channel-name d-block">Jurassic World <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">38M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">2 years ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/IEfBBYmxtIo?si=MuzxCM2EcCez8dQq' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/upsc.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>37:26</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@AnubhavSinghBassi'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/Anubhavsingh.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/IEfBBYmxtIo?si=MuzxCM2EcCez8dQq' className="my-1 video-title text-light">
                                        UPSC - Stand Up Comedy Ft. Anubhav Singh Bassi
                                    </a>
                                    <a href='https://www.youtube.com/@AnubhavSinghBassi' className="channel-name d-block">Anubhav Singh Bassi <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">54M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">10 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/M3ygFVrfR6E?si=fyxnSxyPTkk0LaJ0' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/35runworldrecord.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>08:33</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@officialenglandcricket'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo " alt="" src={`${process.env.PUBLIC_URL}/Images/channelLogo/england_profile.jpg`}/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/M3ygFVrfR6E?si=fyxnSxyPTkk0LaJ0' className="my-1 video-title text-light">
                                        Bumrah With The Bat! | 35 Runs In One Over Against Stuart Broad! | England v India 2022
                                    </a>
                                    <a href='https://www.youtube.com/@officialenglandcricket' className="channel-name d-block">England & Wales Cricket <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">44M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="video-card mt-5 text-light">
                            <a href='https://youtu.be/P8P_S1Fjl_Q?si=WCFEGaMDi-PFEt_d' className='thumbBox'>
                                <img src={`${process.env.PUBLIC_URL}/Images/motivational-carry.jpg`} className="img-fluid m-1 video-thumb" alt="content-thumbnail"/>
                                <span className='video-timing'>14:09</span>
                            </a>
                            
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@CarryMinati'>
                                    <img id="img" draggable="false" className="img-fluid mt-1 mx-2 channel-logo" src={`${process.env.PUBLIC_URL}/Images/channelLogo/carry_profile.jpg`} alt=" Profile Img"/>
                                </a>
                                <div>
                                    <a href='https://youtu.be/P8P_S1Fjl_Q?si=WCFEGaMDi-PFEt_d' className="my-1 video-title text-light">
                                        MOTIVATIONAL SPEAKER PARODY | CARRYMINATI
                                    </a>
                                    <a href='https://www.youtube.com/@CarryMinati' className="channel-name d-block">CarryMinati <i className="bi bi-check-circle-fill"></i></a>
                                    <span className="channel-name">44M views</span>
                                    <span className="separator"> • </span>
                                    <span className="channel-name">6 months ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}
