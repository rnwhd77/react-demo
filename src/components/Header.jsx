import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className="header-wrap">
                    <div className="logo">
                        <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
                            <img
                                style={{ width: "156px", height: "40px" }}
                                src="/assets/images/logo.png"
                                alt="로고"
                            />
                        </Link>
                    </div>

                    <div className="nav">
                            <a>
                                <Link className="header-nav-item" to="/Login">
                                    Login
                                </Link>
                            </a>
                            <a>
                                <Link className="header-nav-item" to="/Logout">
                                    Logout
                                </Link>
                            </a>
                            <a>
                                <Link className="header-nav-item" to="/movie">
                                    영화
                                </Link>
                            </a>
                            <a>
                                <Link className="header-nav-item" to="/tv">
                                    TV 프로그램
                                </Link>
                            </a>
                            <a>
                                <Link className="header-nav-item" to="/person">
                                    인물
                                </Link>
                            </a>
                            <a>
                                <Link className="header-nav-item" to="/">
                                    More
                                </Link>
                            </a>
                    </div>
            </div>
        </div>
    );
}