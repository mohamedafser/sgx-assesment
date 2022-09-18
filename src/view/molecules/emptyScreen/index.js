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
import React from 'react';
import {
    Image,
    Info,
    LinkButton,
    Title
} from './style';
// ROUTE PATH 
import * as routerPath from '../../pages/routes/constants';
// BUTTON COMPONENT IMPORT
import { Button } from '../../atoms/button';

// EMPTY SCREEN COMPONENT
export function EmptyScreen (props) {
     // ERROR COMPONENT PROPERTIES
     const { 
        imageUrl,
        title,
        info,
        buttonUrl = routerPath.HOME_PAGE_PATH,
        buttonLabel = "Back To Home",
        showButton = false
    } = props;

    return (
        <>
            <Image src={imageUrl} alt="404"/>
            <Title variant='h2' align='center'>{title}</Title>
            {info && <Info variant='body1' align='center'>{info}</Info>}
            {showButton && <LinkButton to={buttonUrl}><Button>{buttonLabel}</Button></LinkButton> }
        </>
    )
}