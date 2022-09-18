/** 
*
* style.js
* Base file which hold styles of the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/
// MATERIAL UI STYLE IMPORT
import styled from "@emotion/styled";
// MATERIAL UI COMPONENT IMPORT
import { Button } from "@mui/material";

// STYLED CONSTANT
export const ContainedButton = styled(Button)`
    border: 1px solid ${({color}) => color ? color: '#3BB895'};
    color:  ${({color}) => color ? color: '#fff'} !important;
    background-color: ${({bgColor}) => bgColor ? bgColor: '#3BB895'} !important;
    opacity: ${({disabled}) => disabled ? 0.5: 1};
    padding: 10px 50px;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
`