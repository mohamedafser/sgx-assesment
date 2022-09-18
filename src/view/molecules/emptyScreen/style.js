/** 
*
* style.js
* Base file which hold styles of the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// MATERIAL UI STYLED IMPORT
import styled from "@emotion/styled";
// MATERIAL UI COMPONENT IMPORT
import { Typography } from "@mui/material";
// REACT ROUTER DOM LINK COMPONENT IMPORT
import { Link } from 'react-router-dom';

export const Title = styled(Typography)`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`
export const Info = styled(Typography)`
    font-size: 24px;
    margin-bottom: 15px;
    white-space: break-spaces;
`
export const Image = styled("img")`
    width: 200px;
    height: auto;
    margin: 0 auto 15px;
`
export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: center;
    margin-top: 20px;
`