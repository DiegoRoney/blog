import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Este blog <Themed.a href="https://diegoroney.github.io/portfolio/">Diego R.</Themed.a>
      {` `}
      
      <br />
      Bora programar
    </>
  )
}
