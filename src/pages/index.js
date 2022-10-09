import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Optin from "../components/Optin/Optin"
import "../styles/landing.scss"
import "../styles/global.scss"
import optinImg from "../../static/images/optin.svg"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <div className="left-side">
          <h1>
            ¿Quieres que tu tienda venda más con ayuda de la tecnología?
            Descarga nuestra guía para aprovechar el mundo digital y potenciar
            tu tienda.
          </h1>
          <span className="subtitle">
            Traducimos todas esas palabras raras de tecnología a un español más
            claro.
          </span>

          <ul>
            <li>
              5 Aplicaciones que deberías estar utilizando para ser más
              eficiente.
            </li>
            <li>¿Cómo eliminar las tareas repetitivas y fastidiosas?</li>
            <li>Lo que nunca debes hacer en el Internet.</li>
            <li>
              ¿Has estado midiendo tu negocio Mal? (Y, ¿realmente importa?)
            </li>
            <li>¿Dónde encontrar los Datos más importantes de tu tienda?</li>
            <li>
              ¿Necesitas tener Cuentas en todas las redes sociales? Equivocado.
            </li>
            <li>
              ¿En qué parte del internet se encuentran tus futuros clientes?
            </li>
            <li>
              ¿Cómo eliminar las barreras entre nuestra tienda y la tarjeta de
              crédito de nuestros clientes?
            </li>
            <li>3 formas de vender “en automático”.</li>
            <li>Dile adiós a tus dudas sobre las tiendas web.</li>
            <li>Como tener una tienda web sin saber programación.</li>
            <li>
              La verdad acerca de la inteligencia artificial y el aprendizaje
              automático.
            </li>
          </ul>
        </div>
        <img
          src={optinImg}
          alt="book of how to get the best use of a online store"
        />
      </div>
      <Optin />
    </div>
  )
}
