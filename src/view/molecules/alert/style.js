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
// IMPORT STYLED FORM MATERIAL UI
import { Toolbar, Typography } from "@mui/material";

// STYLE CONSTANT 
export const AlertToolbar = styled(Toolbar)`
    min-height: 55px;
`
export const AlertBody = styled('div')`
    padding: 20px 25px 30px;
`
export const Content = styled(Typography)`
    color: #222;
`