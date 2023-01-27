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
          </div>
          {/***********************End Photo profile ***********************/}
          {/*********************** Text of about ***********************/}
          <div className={Styles.boxContent}>
            <p>
              I am a courteous and enthusiastic person, interested in 'IT' and
              all in its orbit. I have been fascinated by web programming, for
              example: application development and website construction.
            </p>
          </div>
          {/*********************** End Text of about ***********************/}
        </div>
        <div className="mb-10">
          <button className="btn glass w-40 m-6">
            <a href="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">Github</a>
          </button>
          <button className="btn glass w-40  m-6">
            <a href="https://www.linkedin.com/in/cristian-camilo-garcia-gutierrez-1713301a5/">
              Linkendin
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
