/** 
*
* helper.js
* helper functions through out app
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// FUNCTION RETURN BOOLEAN VALUE BASE ON INPUT 
export function onValidateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// FUNCTION RETURN BOOLEAN VALUE BASE ON INPUT
export function onValidateTextAndSpace(text) {
    var re = /^[a-zA-Z\s]*$/;
    return re.test(text);
}