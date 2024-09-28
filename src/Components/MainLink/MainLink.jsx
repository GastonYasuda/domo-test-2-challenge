import React from 'react'
import mainData from '../../Data/mainData.json'

const MainLink = () => {
    return (
        <div className='mainLink d-f-row '>

            {mainData.map((data, id) => {
                return (
                    <div className='mainLink_data' key={id}>
                        <img src={data.icon} alt="data" />
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                        <button >
                            <span>Learn more</span>
                            <img src="Assets/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                )
            })}


        </div >
    )
}

export default MainLink
