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
// REGISTER FORM COMPONENT IMPORT
import { RegisterForm } from './component/registerForm'
// REGISTER FORM CONTEXT IMPORT
import { RegisterFormContextProvider } from './useRegisterForm';

// REGISTER PAGE EXPORT
export function RegisterPage() {
  // RENDER HTML
  return (
    <RegisterFormContextProvider>
        <RegisterForm />
    </RegisterFormContextProvider>
  )
}
