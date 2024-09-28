import React from 'react'
import MainLink from '../MainLink/MainLink'

const Main = () => {
    return (
        <div className='main_container d-f-row '>

            <div className="main_container-info">

                <div className="main_container-info-txt">
                    <h3>Core features</h3>
                    <h1>Develop systematically<br /> with Comet</h1>
                    <h2>Adaptable sections are ideal for crafting versatile layouts.</h2>

                </div>

                <div className="main_container-info-link">

                    <MainLink />


                </div>




            </div>

            <div className='main_container-img'>
                <img src="Assets/main-img.jpg" alt="women with pc" />
            </div>

        </div >
    )
}

export default Main
