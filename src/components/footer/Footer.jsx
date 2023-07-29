import React from 'react'

export function Footer() {
  return (
    <>
      <div>
        <footer className="footer footer-center p-10 bg-black rounded">
          <div className="grid grid-flow-col gap-4 text-amber-400">
            <a className="link link-hover text-amber-400">Sobre mi</a>
            <a className="link link-hover text-amber-400">Contacto</a>
            <a className="link link-hover text-amber-400">Projectos</a>
            <a className="link link-hover text-amber-400">Habilidades</a>
          </div>

          <div>
            <p className="text-amber-400">
              Copyright © 2023 - Cristian Camilo Garcia Gutierrez
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
