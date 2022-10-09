import React from "react"
import "./optin.scss"

export default function Optin() {
  return (
    <div className="Optin">
      <p>
        Descarga esta guía suscribiendote a nuestra lista de correos. A partir
        de Noviembre enviaremos un correo al día con un concepto, consejo o
        testimonio de como usar la tecnología para mejorar los resultados de tu
        tienda.
      </p>
      <form action="">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electronico" />
        <button>Descargar Guia</button>
      </form>
    </div>
  )
}
