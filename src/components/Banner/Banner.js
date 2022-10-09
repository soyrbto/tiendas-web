import React from "react"
import "./banner.scss"

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <h2>Servicio de consultoría en creación de tiendas web</h2>
      <ul>
        <li>Sin costo por ahora.</li>
        <li>Duración de 45 minutos.</li>
        <li>Sin compromiso de contrato de tu parte ni la nuestra.</li>
      </ul>

      <button>Agendar la consultoría con TiendasWeb</button>
    </div>
  )
}

export default Banner
