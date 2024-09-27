import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div>

            <div className="socialMedia">
                <span>
                    <img src="Assets/sm-dribble-icon.svg" alt="dribble icon" />
                </span>
                <span>
                    <img src="Assets/sm-instagram-icon.svg" alt="instagram icon" />
                </span>
                <span>
                    <img src="Assets/sm-linkedin-icon.svg" alt="linkedin icon" />
                </span>
                <span>
                    <img src="Assets/sm-twitter-icon.svg" alt="twitter icon" />
                </span>
            </div>
            <div className="logo">
                <img src="Assets/isologo.svg" alt="isologo" />
                <span>Comet</span>
            </div>

            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

        </div>
    )
}

export default Header
