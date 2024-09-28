import React, { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='header_container d-f-row'>

            <div className="socialMedia">
                <span>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-dribble-icon.svg" alt="dribble icon" />
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
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-twitter-icon.svg" alt="twitter icon" />
                    </a>
                </span>
            </div>
            <div className="logo d-f-row">
                <a href="/">
                    <img src="Assets/isologo.svg" alt="isologo" />
                    <span>Comet</span>
                </a>
            </div>

            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} Cross />

                {isOpen &&
                    <div className="hamburger_menu">
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
