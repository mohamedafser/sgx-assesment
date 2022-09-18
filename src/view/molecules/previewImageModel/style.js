/** 
*
* style.js
* Base style
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// IMPORT STYLED FROM MATERIAL UI
import styled from "@emotion/styled";
// CONSTANT
export const ImageWrapper = styled('div')`
  position: relative;
  img {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: contain;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`