/** 
*
* sendMailApi.js
* it hold send mail api function
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

import { DOMAIN, SEND_EMAIL_API } from "../../utils/constants";

// SEND EMAIL API FUNCTION
export const sendEmail = async (data) => {
    const response = await fetch(`${DOMAIN}${SEND_EMAIL_API}`, {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(data),
   })
    .then((res) => res.json())
    return response;
}