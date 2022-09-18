/** 
*
* useRegisterForm.js
* file is a custom hook which hold all states and funcitons
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/

// REACT IMPORT
import { createContext, useContext, useReducer } from 'react';
// SEND MAIL IMPORT FORM SERVICES
import { sendEmail } from '../../../services/api/sendMailApi';
// CONSTANTS IMPORT FROM UTILS
import * as constants from '../../../utils/constants';
import * as errorMessage from '../../../utils/validationMessage';

// INITIAL STATE
const initialState = {
    first_name: '',
    last_name: '',
    description: '',
    email: '',
    file_array: [],
    file_object: [],
    first_name_error: null,
    last_name_error: null,
    email_error: null,
    description_error: null,
    alertType: null,
    previewImgUrl: null,
}

// CONTEXT CREATED
const FormContext = createContext(null);

// REDUCER FUNCTION IT MANAGE STATES WE CAN UPDATE STATE USING REDUCER FUNCTION
function reducer(state, action) {
    switch(action.type) {
        case constants.SET_VALUES:
            const { key, value, errorKey, errorValue } = action.payload;
            return { ...state, [key]: value, [errorKey]: errorValue};
        case constants.SET_FILES:
            return { ...state, file_array: [ ...state.file_array, action.payload ] }
        case constants.SET_SUCCESS:
            return {
                ...state,
                alertType: action.payload,
                first_name: '',
                last_name: '',
                description: '',
                email: '',
                file_array: [],
            }
        case constants.SET_PREVIEW_IMAGE_URL:
            return {
                ...state,
                previewImgUrl: action.payload
            }
        default :
            return state;
    };
}

// REGISTER FORM PROVIDER IT RETURN CONTEXT CONSTANTS AND FUNCITONS ALSO IT RENDER HTML USING CHILDREN
function RegisterFormContextProvider(props) {
    // REGISTER FORM PROVIDER PROPERTIES
    const { children } = props
    // CREATE USE REDUCER CONTANT
    const [state, dispatch] = useReducer(reducer, initialState);
    // EXTRACT CONSTANT FROM STATE
    const {
        first_name,
        last_name,
        description,
        email_error,
        email,
    } = state;

    // UDPATE FORM VALUES
    const onUpateValue = (key, value, errorKey, errorValue) => {
        dispatch({
            type: constants.SET_VALUES,
            payload: { key, value, errorKey,errorValue }
        });
    }

    // UPLOAD FILES
    const onUploadFiles = (event) => {
        let fileObject = [event.target.files];
        const fileArray =  URL.createObjectURL(fileObject[0][0]);
        dispatch({
            type: constants.SET_FILES,
            payload: fileArray
        });
    }

    // SUBMIT FORM
    const onSubmit = () => {
        sendEmail({
            first_name,
            last_name,
            email,
            description
        }).then((res) => {
            dispatch({
                type: constants.SET_SUCCESS,
                payload: constants.SUCCESS
            });
        }).catch((err) => {
            dispatch({
                type: constants.SET_SUCCESS,
                payload: constants.ERROR
            });
        });
    }

    // VALIDATE AND ENABLE SUBMIT BUTTON
    const enableSubmit = first_name && last_name && description && email && !email_error;

    // RENDER HTML
    return (
        <FormContext.Provider 
            value={{ 
                ...state,
                enableSubmit,
                dispatch,
                onUpateValue,
                onUploadFiles,
                onSubmit
                }}>
            {children}
        </FormContext.Provider>
    )
}

// USE REGISTER FORM CUSTOM HOOK IT RETURN HOLDING CONTEXT VALUES AND FUNCTION 
function useRegisterFormContext() {
    // IT CONTAIN CONTEXT CONSTANT AND FUNCTIONS
    const context = useContext(FormContext);
    // VALIDATE IF CONTEXT CONSTANT IS UNDEFINED
    if(context === undefined) {
        // IF CONTEXT CONSTANT IS UNDEFINED THROW ERROR IT WILL PRINT IN CONSOLE
        throw new Error(errorMessage.REGISTER_ERROR_MESSAGE);
    }
    // CONTEXT CONSTANT RETURN VALUES AND FUNCIONS
    return context;
}

// EXPORT USE REGISTER FROM CUSTOM HOOK AND REGISTER FORM PROVIDER
export { useRegisterFormContext, RegisterFormContextProvider }