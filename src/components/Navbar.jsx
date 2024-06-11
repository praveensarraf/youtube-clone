import React, { useState } from 'react'

export default function Navbar({isChecked, onCheckboxChange}) {
    let [isHidden, setIsHidden] = useState(true);

    let toggleHiddenSubs = () => {
        setIsHidden(!isHidden);
    };

  return (
    <>
        {/* Top Nav */}
        <header>
            <div className="logo left">
                <a className="youtube-logo" href="https://www.youtube.com/">
                    <img src={`${process.env.PUBLIC_URL}/Images/svg/YouTube-White-Full-Color-Logo.wine.svg`} className="youtube-logo" alt="Youtube Logo" style={{cursor: 'pointer'}}/>
                    <div className="tooltip">YouTube Home</div>
                </a>
            </div>

            <div className="search mx-4">
                <form action="#">
                    <input type="text" placeholder=" Search"/>
                    <button>
                        <i className="material-icons">search</i>
                        <div className="tooltip">Search</div>
                    </button>
                </form>
                
                <div className="mic">
                    <i className="material-icons">mic</i>
                    <div className="tooltip">Search with your voice</div>
                </div>
            </div>

            <div className="icons right">
                <button className="btn videocam me-1">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{pointerEvents: 'none', display: 'block', width: '24px', height: '24px'}} width="24" height="24" viewBox="0 0 24 24" focusable="false">
                        <path
                            d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z">
                        </path>
                    </svg>
                    <div className="tooltip">Create</div>
                </button>

                <button className="btn fs-5 connectivity p-0">
                    <i className="fa-brands fa-chromecast" style={{color: '#ffffff'}}></i>
                    <div className="tooltip">Connect to a device</div>
                </button>
                
                <button className="btn me-1">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 25 25" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', display: 'block', width: '24px', height: '24px'}}>
                        <path
                            d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z">
                        </path>
                    </svg>
                    <span className="badge">9+</span>
                    <div className="tooltip">Notifications</div>
                </button>

                <a href='https://www.youtube.com/@PraveenSarraf_'>
                    <img alt="Avatar img" className="rounded-circle you-btn mx-3" height="35px" width="35px" src={`${process.env.PUBLIC_URL}/Images/praveen.jpg`}/>
                </a>

                <span style={{color: '#ffffff', fontSize: '20px'}}>
                    <i className="fa-solid fa-magnifying-glass mx-3 search-magnifying-glass"></i>
                    <div className="tooltip">Search</div>
                </span>
            </div>



            {/* Sidebar */}
            <div className="wrapper">
                <input type="checkbox" id="btn" className='myInput' hidden checked={isChecked} onChange={onCheckboxChange}/>
                <label htmlFor="btn" className="menu-btn btn">
                    <i className="fas fa-bars"></i>
                </label>

                <nav id="sidebar">
                    <div className="menu-group py-0">
                        <a href='https://www.youtube.com/' className='menu-group-anchor'>
                            <div className="menu-item home-item">
                                <svg viewBox="0 0 24 24" height="24" width="24">
                                    <g>
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
                                    </g>
                                </svg>
                                <span>Home</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/shorts/' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/shorts.svg`} alt=''/>
                                <span>Shorts</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/feed/subscriptions' className='menu-group-anchor'>
                            <div className="menu-item mb-1">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/subscription.svg`} alt=''/>
                                <span>Subscriptions</span>
                            </div>
                        </a>
                    </div>

                    <div className="menu-group py-1">
                        <a href='https://www.youtube.com/feed/you' className='menu-group-anchor'>
                            <div className="menu-item">
                                <span className='fw-bold h6 m-0'>You</span>
                                <span>&nbsp; <i className="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UCIZ_FxwjDRgo-ZZRsLxgMOw' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/your-channel.svg`} alt=''/>
                                <span>your Channel</span>
                            </div>
                        </a>
                        
                        <a href='https://www.youtube.com/feed/library' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/library.svg`} alt=''/>
                                <span>Library</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/feed/history' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/history.svg`} alt=''/>
                                <span>History</span>
                            </div>
                        </a>
                        
                        <a href='https://www.youtube.com/feed/playlists' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/playlists.svg`} alt=''/>
                                <span>Playlists</span>
                            </div>
                        </a>

                        <a href='https://studio.youtube.com/channel/UCIZ_FxwjDRgo-ZZRsLxgMOw/videos' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/videos.svg`} alt=''/>
                                <span>Your Videos</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/playlist?list=WL' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/watch-later.svg`} alt=''/>
                                <span>Watch Later</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/playlist?list=LL' className='menu-group-anchor'>
                            <div className="menu-item">
                                <img src={`${process.env.PUBLIC_URL}/Images/svg/liked.svg`} alt=''/>
                                <span>Liked Videos</span>
                            </div>
                        </a>
                    </div>

                    <div className="menu-group py-1">
                        <div className='menu-group-anchor'>
                            <div className="menu-item subs">
                                <span className='fw-bold'>Subscriptions</span>
                            </div>
                        </div>

                        <a href='https://www.youtube.com/@PraveenSarraf_' className='menu-group-anchor'>
                            <div className="menu-item subsImg">
                                <img src={`${process.env.PUBLIC_URL}/Images/praveen.jpg`} alt=''/>
                                <span>Praveen Kumar</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/@4Achievers' className='menu-group-anchor'>
                            <div className="menu-item subsImg">
                                <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/4Achievers.jpg`} alt=''/>
                                <span>4Achievers</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/@20thCenturyStudios' className='menu-group-anchor'>
                            <div className="menu-item subsImg">
                                <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/20th.jpg`} alt=''/>
                                <span>20th Century</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/@TSeriesBhaktiSagar' className='menu-group-anchor'>
                            <div className="menu-item subsImg">
                                <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/tseries-bhakti.jpg`} alt=''/>
                                <span>T-Series Bhakti</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/@NarendraModi' className='menu-group-anchor'>
                            <div className="menu-item subsImg">
                                <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/modiji.jpg`} alt=''/>
                                <span>Narendra Modi</span>
                            </div>
                        </a>

                        <div id='hiddenSubs' style={{ display: isHidden ? 'none' : 'block' }}>
                            <a href='https://www.youtube.com/@DNAIndiaNews' className='menu-group-anchor'>
                                <div className="menu-item subsImg">
                                    <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/dnaNews.jpg`} alt=''/>
                                    <span>DNANewsIndia</span>
                                </div>
                            </a>

                            <a href='https://www.youtube.com/@ANINewsIndia' className='menu-group-anchor'>
                                <div className="menu-item subsImg">
                                    <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/ANI.jpg`} alt=''/>
                                    <span>ANI</span>
                                </div>
                            </a>

                            <a href='https://www.youtube.com/@TVFMusic' className='menu-group-anchor'>
                                <div className="menu-item subsImg">
                                    <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/tvfmusiclogo.jpg`} alt=''/>
                                    <span>TVF Music</span>
                                </div>
                            </a>

                            <a href='https://www.youtube.com/@ReligiousIndia_' className='menu-group-anchor'>
                                <div className="menu-item subsImg">
                                    <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/religiousIndia.jpg`} alt=''/>
                                    <span>Religious India</span>
                                </div>
                            </a>

                            <a href='https://www.youtube.com/@ICC' className='menu-group-anchor'>
                                <div className="menu-item subsImg">
                                    <img src={`${process.env.PUBLIC_URL}/Images/channelLogo/iccLogo.jpg`} alt=''/>
                                    <span>ICC</span>
                                </div>
                            </a>
                        </div>
                        
                        <div onClick={toggleHiddenSubs} className='menu-group-anchor' style={{cursor: 'pointer'}}>
                            <div className="menu-item subsImg">
                                <span className='mySpann'>
                                    <i className={`fa-solid fa-chevron-${isHidden ? 'down' : 'up'}`}></i>
                                </span>
                                <span>{isHidden ? 'Show More' : 'Show Less'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="menu-group py-1">
                        <div className='menu-group-anchor'>
                            <div className="menu-item subs">
                                <span className='fw-bold'>Explore</span>
                            </div>
                        </div>

                        <a href='https://www.youtube.com/feed/trending' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M14 6V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2l-6 4zm0 9.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.24 1.45-2.82L14 10v5.7z"></path>
                                </svg>
                                <span>Trending</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UCkYQyvc_i9hXEo4xic9Hh2g' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
                                </svg>
                                <span>Shopping</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
                                </svg>
                                <span>Music</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/feed/storefront?bp=ogUCKAU%3D' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
                                </svg>
                                <span>Movies</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <g>
                                        <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
                                    </g>
                                </svg>
                                <span>Live</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/gaming' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
                                </svg>
                                <span>Gaming</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
                                </svg>
                                <span>News</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
                                </svg>
                                <span>Sports</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/feed/courses_destination' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
                                </svg>
                                <span>Courses</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
                                </svg>
                                <span>Fashion & Beauty</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/podcasts' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
                                </svg>
                                <span>Podcasts</span>
                            </div>
                        </a>
                    </div>

                    <div className="menu-group py-1">
                        <div className='menu-group-anchor'>
                            <div className="menu-item subs">
                                <span className='fw-bold'>More From Youtube</span>
                            </div>
                        </div>

                        <a href='https://www.youtube.com/premium' className='menu-group-anchor'>
                            <div className="menu-item mySvgMore">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{pointerEvents: 'none', display: 'inherit', width: '30px', height: '30px'}}>
                                    <defs>
                                        <radialGradient cx="5.4%" cy="7.11%" r="107.93%" fx="5.4%" fy="7.11%" gradientTransform="matrix(.70653 0 0 1 .016 0)">
                                        <stop offset="0%" stopColor="#FFF"></stop>
                                        <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
                                        </radialGradient>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M1 1h21.77v22H1z"></path>
                                        <g fillRule="nonzero">
                                        <path fill="#F00" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"></path>
                                        <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                                        <path fill="#000" fillOpacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"></path>
                                        <path fill="#FFF" fillOpacity=".2" d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"></path>
                                        <path fill="#3E2723" fillOpacity=".2" d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"></path>
                                        <path fill="#FFF" fillOpacity=".2" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
                                        <path fill="#3E2723" fillOpacity=".2" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
                                        <path fill="url(#a_yt120)" fillOpacity=".1" d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z" transform="translate(1 4.208)"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span>Youtube Premium</span>
                            </div>
                        </a>

                        <a href='https://studio.youtube.com/' className='menu-group-anchor'>
                            <div className="menu-item mySvgMore">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{pointerEvents: 'none', display: 'inherit', width: '30px', height: '30px'}}>
                                    <path fill="red" d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"></path>
                                    <path fill="#fff" d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"></path>
                                    <path fill="red" d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"></path>
                                    <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path>
                                </svg>
                                <span>Youtube Studio</span>
                            </div>
                        </a>

                        <a href='https://music.youtube.com/' className='menu-group-anchor'>
                            <div className="menu-item mySvgMore">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{pointerEvents: 'none', display: 'inherit', width: '30px', height: '30px'}}>
                                    <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
                                    <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
                                    <path fill="#FFFFFF" d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"></path>
                                </svg>
                                <span>Youtube Music</span>
                            </div>
                        </a>

                        <a href='https://www.youtubekids.com/' className='menu-group-anchor'>
                            <div className="menu-item mySvgMore">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{pointerEvents: 'none', display: 'inherit', width: '30px', height: '30px'}}>
                                    <path fill="#FF0000" d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"></path>
                                    <path fill="#000" d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"></path>
                                    <path fill="#000" d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"></path>
                                    <path fill="#FFF" d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"></path>
                                </svg>
                                <span>Youtube Kids</span>
                            </div>
                        </a>
                    </div>
                    
                    <div className="menu-group py-1">
                        <a href='https://www.youtube.com/account' className='menu-group-anchor'>
                            <div className="menu-item ">
                                <i style={{fontSize: 'large', marginRight: '28px'}} className="bi bi-gear"></i>
                                <span>Settings</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/reporthistory' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                                </svg>
                                <span>Report History</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                                </svg>
                                <span>Help</span>
                            </div>
                        </a>

                        <a href='https://www.youtube.com/' className='menu-group-anchor'>
                            <div className="menu-item mySvg">
                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                    <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
                                </svg>
                                <span>Send Feedback</span>
                            </div>
                        </a>
                    </div>
                    
                    <div className="menu-group">
                        <div className='menu-group-anchor'>
                            <div className="menu-item subs">
                                <span className="pb-4 text-secondary text-center" style={{fontSize: '11px'}}>
                                    <span>&copy; 2024 <a href='https://www.youtube.com/' target='_blank' className='text-decoration-none text-secondary' rel="noreferrer">Google LLC</a><br/></span>
                                    <span className='pb-1'>Designed by - <a href='http://www.github.com/praveensarraf' target='_blank' className='text-decoration-none text-secondary' rel="noreferrer">Praveen Kumar</a></span>
                                </span>
                            </div>
                        </div>
                    </div>      
                </nav>
            </div>
        </header>

        {/* Side MENU (Main page) */}

        <div className="side-panel">
            <div className="main-content">
                <a className="main-content-btm" href='https://www.youtube.com/'>
                    <button className="main-svg btn">
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
                            </g>
                        </svg>
                    </button>
                    <span>Home</span>
                </a>

                <a className="main-content-btm" href='https://www.youtube.com/shorts/'>
                    <button className="main-svg btn">
                        <img src={`${process.env.PUBLIC_URL}/Images/svg/shorts.svg`} alt="menu-item"/>
                    </button>
                    <span>Shorts</span>
                </a>

                <a className="main-content-btm plus-btn" href='/upload'>
                    <button className="main-svg btn">
                        <img src={`${process.env.PUBLIC_URL}/Images/svg/plus-btn.png`} alt="menu-item"/>
                    </button>
                </a>

                <a className="main-content-btm" href='https://www.youtube.com/feed/subscriptions'>
                    <button className="main-svg btn">
                        <img src={`${process.env.PUBLIC_URL}/Images/svg/subscription.svg`} alt="menu-item"/>
                    </button>
                    <span>Subscriptions</span>
                </a>
                
                <a className="main-content-btm you-btn" href='https://www.youtube.com/feed/you'>
                    <button className="main-svg btn">
                        <img src={`${process.env.PUBLIC_URL}/Images/svg/library.svg`} alt=''/>
                    </button>
                    <span>You</span>
                </a>


                <a className="main-content-btm my-avatar" href='https://www.youtube.com/feed/you'>
                    <button className="main-svg btn">
                        <img alt="Avatar img" className="rounded-circle" height="24px" width="35px" src={`${process.env.PUBLIC_URL}/Images/praveen.jpg`}/>
                    </button>
                    <span>You</span>
                </a>
            </div>
        </div>

    </>
  )
}
