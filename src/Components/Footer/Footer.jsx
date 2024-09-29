import React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <div className='footer'>
            <Logo />



            <div className='footer_container d-f-row'>

                <div className="footer_container-data txt-size">
                    <a href="mailto:gastonyasuda@gmail.com" className='d-f-row' target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-mail-icon.svg" alt="mail" />
                        <span>gastonyasuda@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/gaston-yasuda/" className='d-f-row' target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-linkedin-icon.svg" alt="linkedin" />
                        <span>linkedin.com/gaston-yasuda/</span>
                    </a>
                    <a href="https://github.com/GastonYasuda/domo-test-2-challenge" className='d-f-row' target="_blank" rel="noopener noreferrer">
                        <img src="Assets/sm-github-icon.svg" alt="github" />
                        <span>github.com/GastonYasuda/domo-test-2-challenge</span>
                    </a>
                </div>

                <div className="footer_container-description txt-size">
                    <span>
                        En este challenge, decidí utilizar React.js como framework, ya que me siento cómodo trabajando con él y me permitió reutilizar varios componentes de manera eficiente. Además, incorporé algunas librerías para mejorar la funcionalidad y la experiencia del usuario. Para el menú, usé la librería hamburger-react, que me proporcionó un menú accesible y fácil de implementar con un diseño atractivo. Para mejorar la interacción visual, implementé AOS (Animate on Scroll), que me permitió añadir efectos de fade en la carga de las secciones al hacer scroll, dándole dinamismo a la página. En cuanto a los estilos, utilicé SASS para facilitar la lectura y organización del código CSS. Esto me permitió escribir estilos de forma más clara.
                    </span>
                </div>


            </div>



        </div >
    )
}

export default Footer
