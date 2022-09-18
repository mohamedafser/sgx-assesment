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
import { Grid } from "@mui/material";


// STYLES CONSTANT
export const ErrorMainWrapper = styled('div')`
    height: 100vh;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ErrorGrid = styled(Grid)`
    max-width: 90%;
    border-radius: 30px;
    box-shadow: 0 0 10px rgb(46 59 125 / 23%);
    height: calc(100vh - 130px);
    margin: auto;
}
`