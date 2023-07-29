import React from 'react'
import Styles from './aboutme.module.css'

function AboutMe(props) {
  return (
    <div>
      <div className={Styles.container}>
        {/*********************** Title ***********************/}
        <div>
          <h1 className="mt-8 text-2xl">Aboutme</h1>
        </div>
        <br />
        <div className={Styles.subContainer}>
          {/********************Photo profile ***********************/}
          <div className={Styles.boxContent}>
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/zb5Xh8H/Imagen2.png" />
              </div>
            </div>
            <div className="mb-10">
          <a href="https://github.com/camilo7896" target="_blank">
            <button className="btn glass w-40 m-6">Github</button>
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-camilo-garcia-gutierrez-1713301a5/"
            target="_blank"
          >
            <button className="btn glass w-40  m-6">Linkedin</button>
          </a>
        </div>
          </div>
          {/***********************End Photo profile ***********************/}
          {/*********************** Text of about ***********************/}
          <div className={Styles.boxContent}>
            <p>
            Soy un entusiasta Desarrollador Front-end Junior con una sólida base de conocimientos en tecnologías web, incluyendo Linux, HTML, CSS, JavaScript, React JS, Angular, SQL y Node.js. Mi objetivo es  aplicar mis habilidades técnicas y mi creatividad para diseñar interfaces atractivas y funcionales que brinden a los usuarios una experiencia única y satisfactoria.            </p>

  <br/>
<hr/>
<br/>
<h2 className='font-semibold'>Proyectos Destacados</h2>
<br/>
{}
<p>
•	Colaboración en el desarrollo front end para Codery app, una red social diseñada para Programate Academy.<br/>
•	Creación de un sitio web utilizando React js, que recibió elogios por su diseño moderno y su navegación intuitiva.<br/>
•	Creación de sitio web informativa para cliente realizada en html,css y javascript.<br/>
•	Proyecto personal consumiendo Api Rick and Morty utilizado React js.<br/>
</p>
</div>
          {/*********************** End Text of about ***********************/}
        </div>
       
      </div>
    </div>
  )
}

export default AboutMe
