/** 
*
* index.js
* Base file which hold entry point of the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/
// REACT IMPORT
import React from 'react'
// BASE STYLE IMPORT
import { CopyRight } from './style'

// FOOTER COMPONENT
export function Footer() {
  // RENDER HTML
  return (
    <CopyRight>
      <p>© {new Date().getFullYear()} Company Name All Rights Reserved.</p>
    </CopyRight>
  )
}