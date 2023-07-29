import React from 'react'
import Styles from './contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_gvduf04',
        'template_dq21836',
        event.target,
        'user_s4Ni5coA5PAH3jRvxFGAX',
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.containerForm}>
          <h1>Contactame</h1>
          <form onSubmit={sendEmail}>
            <input placeholder="Nombre" type="text" name="user_name" />

            <input placeholder="Correo electronico" type="email" name="user_email" />
            <p>Mensaje</p>
            <textarea placeholder='Redacta tu mensaje aqui...' name="user_message" id="" cols="30" rows="10"></textarea>
            <div className={Styles.btn}>
              <button className={Styles.btnButton}>Enviar</button>
            </div>
          </form>
        </div>
        <div className={Styles.iconMail}>
          <img src="https://i.ibb.co/n81XnJX/email.png" alt="" />
        </div>
      </div>
    </>
  )
}
