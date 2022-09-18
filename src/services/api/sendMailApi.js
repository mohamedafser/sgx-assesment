/** 
*
* sendMailApi.js
* it hold send mail api function
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// SEND EMAIL API FUNCTION
export const sendEmail = async (data) => {
    const response = await fetch("http://localhost:3001/send-mail", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(data),
   })
    .then((res) => res.json())
    return response;
}