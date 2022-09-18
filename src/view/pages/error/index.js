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
// STYLES IMPORT
import {
    ErrorGrid,
    ErrorMainWrapper,
} from './style';
// EMPTY SCREEN COMPONENT IMPORT
import { EmptyScreen } from '../../molecules/emptyScreen';
// ERROR IMAGE IMPORT
import errorImg from '../../../assets/img/404.jpeg';

// ERROR COMPONENT
export function ErrorPage() {   
    // RENDER HTML
    return (
        <ErrorMainWrapper>
            <ErrorGrid container alignContent={'center'} justifyContent={'center'} direction="column">
                <EmptyScreen 
                    imageUrl={errorImg}
                    title="Page Not Found"
                    info={`We are sorry but the page you are looking for does not exists. \n You could return to the home page by clicking the below button.`}
                />
            </ErrorGrid>
        </ErrorMainWrapper>
    ) 
}
