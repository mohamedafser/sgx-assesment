/** 
*
* style.js
* file which hold entry point of the styles
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/
// MATERIAL UI STYLED IMPORT
import styled from "@emotion/styled";
// MATERIAL UI COMPONENT IMPORT
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { Button } from "../../atoms/button";

// CONSTANT
export const WelcomeInfo =  styled(Grid)`
    background-color: #3BB895;
    border-radius: 30px 0px 0px 30px;
    @media (min-width: 0px ) and (max-width: 899px) {
        border-radius: 30px 30px 0px 0px;
        min-height: 500px;
        width: 100%;
    }
`
export const CreateAccountFormInner =  styled('div')`
    padding: 35px;
    background-color: #fff;
    border-radius: 0px 30px 30px 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 0px ) and (max-width: 899px) {
        border-radius: 0px 0px 30px 30px;
    }
`
export const FormWrapper =  styled(Grid)`
    max-width: 90%;
    border-radius: 30px;
    box-shadow: 0 0 10px rgb(46 59 125 / 23%);
    height: calc(100vh - 130px);
    @media (min-width: 0px ) and (max-width: 899px) {
        height: 100%;
    }
`
export const FormMainWrapper =  styled('div')`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    flex-direction: column;
    @media (min-width: 0px ) and (max-width: 899px) {
        height: 100%;
    }
`
export const WelcomeInfoInner = styled(Grid)`
    height: 100%;
   
`
export const WelcomeTitle =  styled(Typography)`
    margin-bottom: 20px;
    font-weight: bold;
    color: #fff;
    @media (min-width: 0px ) and (max-width: 467px) {
        font-size: 24px;
    }
`
export const CreateAccountTitle = styled(Typography)`
    color: #3BB895;
    margin-bottom: 35px;
    font-weight: bold;
    @media (min-width: 0px ) and (max-width: 467px) {
        font-size: 24px;
    }
`
export const SignInSubTitle = styled(Typography)`
    color: #ffffffd6;
    font-size: 20px;
    @media (min-width: 0px ) and (max-width: 467px) {
        font-size: 14px;
    }
`
export const IconBtn = styled(IconButton)`
    color: ${({color}) => color ? color: '#3BB895'};
`
export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#3BB895',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3BB895',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#3BB895',
      },
    },
});

export const Logo = styled('div')`
    color: #fff;
    svg {
        font-size: 100px;
    }
    @media (min-width: 0px ) and (max-width: 467px) {
        svg {
            font-size: 70px;
        }
    }
`
export const Gallery = styled(Grid)`
    max-height: 200px;
    overflow: auto;
    margin: 15px 0;
    img {
        object-fit: cover;
        maxWidth: 100%;
        width: 100px;
        border-radius: 10px;
        box-shadow: 0 0 5px rgb(46 59 125 / 20%);
    }
`
export const GalleryInnerWrapper = styled('div')`
    position: relative;
    .overlay {
        position: absolute; 
        bottom: 0; 
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.5); 
        color: #f1f1f1; 
        width: 100%;
        transition: .5s ease;
        opacity:0;
        color: white;
        padding: 20px;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    .overlay svg {
        cursor: pointer;
    }
    :hover .overlay {
        opacity: 1;
    }
`
export const TextFieldGrid = styled(Grid)`
    min-height: 75px;
    @media (min-width: 0px ) and (max-width: 899px) {
        width: 100%;
    }
`
export const CreateAccountWrapper = styled('div')`
    width: 70%;
    margin: auto;
    @media (min-width: 0px ) and (max-width: 899px) {
        width: 100%;
    }
`
export const CreateAccountSubmitButton = styled(Button)`
    margin-left: 15px;
`

export const UploadGridContainer = styled(Grid)`
    gap: 5px;
    margin-top: 15px;
`
export const CreateAccountGrid = styled(Grid)`
    @media (min-width: 0px ) and (max-width: 899px) {
        width: 100%;
    }
`
