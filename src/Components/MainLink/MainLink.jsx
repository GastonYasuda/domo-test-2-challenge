import React from 'react'
import mainData from '../../Data/mainData.json'

const MainLink = () => {
    return (
        <div className='mainLink d-f-row'>

            {mainData.map((data, id) => {
                return (

                    <div className='mainLink_data' key={id}>

                        <div className={`mainLink_data-icon`}>
                            <img src={data.icon} alt="data" />
                        </div>

                        <h3>{data.title}</h3>

                        <div className='mainLink_data-txt'>
                            <p className='txt-size'>{data.text}</p>
                        </div>

                        <div className='mainLink_data-button'>
                            <a href="/#" className='d-f-row'>
                                <h3>Learn more</h3>

                                <img src="Assets/arrow.svg" alt="arrow" />
                            </a>
                        </div>

                    </div>





                )
            })}


        </div >
    )
}

export default MainLink
