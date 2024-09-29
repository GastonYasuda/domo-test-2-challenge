import React, { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import Logo from '../Logo/Logo'

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='header_container d-f-row' data-aos="fade-down">

            <div className="socialMedia">
                <span>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-twitter-icon.svg" alt="twitter icon" />
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-instagram-icon.svg" alt="instagram icon" />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-linkedin-icon.svg" alt="linkedin icon" />
                    </a>
                </span>
                <span>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-dribble-icon.svg" alt="dribble icon" />
                    </a>
                </span>
            </div>

            <Logo />

            <div className="hamburger">
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} Cross />

                {isOpen &&
                    <div className="hamburger_menu txt-size">
                        <ul>
                            <li><a href="/#">About Us</a></li>
                            <li><a href="/#">Project</a></li>
                            <li><a href="/#">Contact</a></li>
                        </ul>
                    </div>
                }

            </div>

        </div>
    )
}

export default Header
