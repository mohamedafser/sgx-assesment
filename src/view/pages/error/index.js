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
// BUTTON IMPORT FROM ATOMS
import { Button } from '../../atoms/Button';
// STYLES IMPORT
import {
    ErrorGrid,
    ErrorMainWrapper,
    Image,
    Info,
    LinkButton,
    Title
} from './style';
// ROUTER PATH CONSTANT IMPORT
import * as routerPath from '../routes/constants';

// ERROR COMPONENT
export function Error(props) {
    // ERROR COMPONENT PROPERTIES
    const { 
        imageUrl,
        title,
        info,
        buttonUrl = routerPath.HOME_PAGE_PATH,
        buttonLabel = "Back To Home"
    } = props;

    // RENDER HTML
    return (
        <ErrorMainWrapper>
            <ErrorGrid container alignContent={'center'} justifyContent={'center'} direction="column">
                <Image src={imageUrl} alt="404"/>
                <Title variant='h2' align='center'>{title}</Title>
                {info && <Info variant='body1' align='center'>{info}</Info>}
                {buttonLabel && <LinkButton to={buttonUrl}><Button>{buttonLabel}</Button></LinkButton> }
            </ErrorGrid>
        </ErrorMainWrapper>
    ) 
}
