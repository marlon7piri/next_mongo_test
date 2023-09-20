import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>No encontrada la pagina</h1>


      <Link href="/about">Regresar </Link>
    </div>
  )
}
