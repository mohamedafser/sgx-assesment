/** 
*
* registerForm.js
* file which hold register form the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/
// REACT IMPORT
import React from 'react'
// MATERIAL UI IMPORT
import { Grid, Tooltip } from '@mui/material'
// MATERIAL UI ICON IMPORT
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LogoDevIcon from '@mui/icons-material/LogoDev';
// VALIDATE EMAIL IMPORT FORM HELPER FILE
import { onValidateEmail, onValidateTextAndSpace } from '../../../../utils/helper';
// ALERT COMPONENT IMPORT FORM MOLECULES
import { Alert } from '../../../molecules/alert';
// IMAGE GALLERY COMONENT FORM REGISTER COMPONENT
import { ImageGallery } from './imageGallery';
// REGISTER FORM CONTEXT IMPORT
import { useRegisterFormContext } from '../useRegisterForm';
// PREVIEW IMAGE MODEL IMPORT FROM REGISTER COMPONENT
import { PreviewImageModel } from '../../../molecules/previewImageModel';
// FOOTER IMPORT FROM MOLECULES
import { Footer } from '../../../molecules/footer';
// VALIDATION ERROR MESSAGE CONSTANT FROM UTILS
import * as validationMessage from '../../../../utils/validationMessage';
// CONSTANT FROM UTILS
import * as constants from '../../../../utils/constants';
// BASE STYLE IMPORT
import {
    FormWrapper,
    WelcomeInfo, 
    CreateAccountGrid, 
    FormMainWrapper, 
    WelcomeInfoInner, 
    CreateAccountFormInner, 
    SignInSubTitle,
    Logo,
    IconBtn,
    StyledTextField,
    TextFieldGrid,
    WelcomeTitle,
    CreateAccountTitle,
    CreateAccountWrapper,
    CreateAccountSubmitButton,
    UploadGridContainer
} from '../style';

// REGISTER FROM COMPONENT EXPORT
export function RegisterForm() {
    // REGISTER FORM CONTEXT CONSTANT
    const {
        first_name,
        last_name,
        description,
        email,
        onUpateValue,
        enableSubmit,
        first_name_error,
        last_name_error,
        email_error,
        description_error,
        onUploadFiles,
        file_array,
        dispatch,
        previewImgUrl,
        onSubmit,
        alertType,
    } = useRegisterFormContext();
    // RENDER HTML
    return (
        <FormMainWrapper>
            <FormWrapper container spacing={0}>
                <WelcomeInfo item lg={4} md={6} sm={12}>
                    <WelcomeInfoInner container alignItems="center" justifyContent="center" direction="column">
                        <Logo>
                            <LogoDevIcon />
                        </Logo>
                        <WelcomeTitle variant='h3'>Welcome back!</WelcomeTitle>
                        <SignInSubTitle variant='body1'>Lorem Ipsum is simply dummy text </SignInSubTitle>
                        <SignInSubTitle variant='body1'>of the printing and typesetting.</SignInSubTitle>
                    </WelcomeInfoInner>
                </WelcomeInfo>
                <CreateAccountGrid item lg={8} md={6} sm={12}>
                    <CreateAccountFormInner>
                        <CreateAccountWrapper>
                            <CreateAccountTitle variant='h3' align='center'>Create Account</CreateAccountTitle>
                            <Grid container spacing={1} >
                                <TextFieldGrid item lg={6} md={12} sm={12}>
                                    <StyledTextField
                                        id="first_name"
                                        label="First Name"
                                        value={first_name}
                                        onChange={(event) => {
                                            // VALIDATE ALPHABETS AND SPACE 
                                            if(onValidateTextAndSpace(event.target.value)) {
                                                // IF VALUE IS EMPTY THROW ERROR
                                                if(!event.target.value) {
                                                    onUpateValue('first_name', event.target.value, 'first_name_error', validationMessage.FIRST_NAME_ERROR_MESSAGE);
                                                    return;
                                                }
                                                // ELSE VALUE WILL UPDATE
                                                onUpateValue('first_name', event.target.value, 'first_name_error', null);
                                            }
                                        }}
                                        helperText={first_name_error}
                                        error={Boolean(first_name_error)}
                                        size="small"
                                        fullWidth
                                    />
                                </TextFieldGrid>
                                <TextFieldGrid item lg={6} md={12} sm={12}>
                                    <StyledTextField 
                                        id="last_name"
                                        label="Last Name"
                                        value={last_name}
                                        onChange={(event) => {
                                            // VALIDATE ALPHABETS AND SPACE 
                                            if(onValidateTextAndSpace(event.target.value)) {
                                                // IF VALUE IS EMPTY THROW ERROR
                                                if(!event.target.value) {
                                                    onUpateValue('last_name', event.target.value, 'last_name_error', validationMessage.LAST_NAME_ERROR_MESSAGE);
                                                    return;
                                                }
                                                // ELSE VALUE WILL UPDATE
                                                onUpateValue('last_name', event.target.value, 'last_name_error', null);
                                            }
                                        }}
                                        helperText={last_name_error}
                                        error={Boolean(last_name_error)}
                                        size="small"
                                        fullWidth
                                    />
                                </TextFieldGrid>
                            </Grid>
                            <TextFieldGrid>
                                <StyledTextField 
                                    type='email'
                                    id="email"
                                    label="Email"
                                    value={email}
                                    onChange={(event) => {
                                        // IF VALUE IS EMPTY THROW ERROR
                                        if(!event.target.value) {
                                            onUpateValue('email', event.target.value, 'email_error', validationMessage.EMAIL_ERROR_MESSAGE);
                                            return;
                                        }
                                        // IF VALUE OF EMIAL IS INVALID THROW ERROR
                                        else if(!onValidateEmail(event.target.value)) {
                                            onUpateValue('email', event.target.value, 'email_error', validationMessage.EMAIL_VALIDATION_ERROR_MESSAGE);
                                            return;
                                        }
                                        // ELSE VALUE WILL UPDATE
                                        onUpateValue('email', event.target.value, 'email_error', null);
                                    }}
                                    helperText={email_error}
                                    error={Boolean(email_error)}
                                    size="small"
                                    fullWidth
                                />
                            </TextFieldGrid>
                            <TextFieldGrid>
                                <StyledTextField 
                                    type='text'
                                    id='description'
                                    label="Description"
                                    value={description}
                                    onChange={(event) => {
                                         // IF VALUE IS EMPTY THROW ERROR
                                        if(!event.target.value) {
                                            onUpateValue('description', event.target.value, 'description_error',validationMessage.DESCRIPTION_ERROR_MESSAGE);
                                            return;
                                        }
                                        // ELSE VALUE WILL UPDATE
                                        onUpateValue('description', event.target.value, 'description_error', null);
                                    }}
                                    helperText={description_error}
                                    error={Boolean(description_error)}
                                    minRows={4}
                                    multiline
                                    size="small"
                                    fullWidth
                                />
                            </TextFieldGrid>
                            {file_array.length > 0 &&  (
                                <ImageGallery images={file_array}/>
                            )}
                            <UploadGridContainer container direction={'row'} alignItems="center" justifyContent={'flex-end'}>
                                <Grid item>
                                    <Tooltip title="Upload Image">
                                        <IconBtn aria-label="upload picture" component="label" size="small">
                                            <input hidden accept="image/*" type="file" onChange={onUploadFiles}/>
                                            <CloudUploadIcon />
                                        </IconBtn>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <CreateAccountSubmitButton 
                                        variant="contained"  
                                        disabled={!enableSubmit} 
                                        onClick={() => {
                                            onSubmit();
                                        }} 
                                    >
                                        Submit    
                                    </CreateAccountSubmitButton> 
                                </Grid>
                            </UploadGridContainer>
                        </CreateAccountWrapper>
                    </CreateAccountFormInner>
                </CreateAccountGrid>
            </FormWrapper>
            {/* ON SUCCESS WE ARE SHOWING THE SUCCESS ALERT */}
            {alertType &&
                <Alert 
                    onClose={() => {
                        dispatch({
                            type: constants.SET_SUCCESS,
                            payload: null,
                        });
                    }}
                    title={alertType === "success" ? 'Email Sent' : 'Email Not Sent'}
                    content={alertType === "success" ? validationMessage.SUCCESS_EMAIL_MESSAGE : validationMessage.ERROR_EMAIL_MESSAGE}
                    headerBg={alertType === "success" ? '#3BB895' : 'red'}
                />
            }
            {/* ON CLICK THUMBNAIL SHOW PREVIEW MODEL */}
            {previewImgUrl && 
                <PreviewImageModel 
                    onClose={() => {
                        dispatch({
                            type: constants.SET_PREVIEW_IMAGE_URL,
                            payload: null,
                        })
                    }}
                    url={previewImgUrl}
                />
            }
            <Footer />
        </FormMainWrapper>
    )
}