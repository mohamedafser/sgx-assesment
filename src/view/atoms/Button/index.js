/** 
*
* index.js
* Base file which hold entry point of the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// STYLE IMOPORT FORM BASE STYLE
import { ContainedButton } from "./style";

// BUTTON COMPONENT EXPORT
export function Button(props) {
    return <ContainedButton { ...props } />
}