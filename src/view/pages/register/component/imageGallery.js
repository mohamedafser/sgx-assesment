/** 
*
* imageGallery.js
* file which hold image gallery the component
*
* @author - Mohamed Afser
* @date - 18 September 2022
*
**/
// MATERIAL UI IMPORT
import { Grid, Tooltip } from "@mui/material"
// MATERIAL UI ICON IMPORT
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
// IMPORT BASE STYLE
import { Gallery, GalleryInnerWrapper } from "../style";
// IMPORT REGISTER FORM CONTEXT
import { useRegisterFormContext } from "../useRegisterForm";
// CONSTANT IMPORT FROM UTILS
import * as constants from '../../../../utils/constants';

// EXPORT IMAGE GALLERY COMPONENT
export function ImageGallery (props) {
    // IMAGE GALLERY PROPERTIES
    const { images } = props;
    // REGISTER FORM CONTEXT CONSTENT
    const {
        dispatch
    } = useRegisterFormContext();
    // RENDER HTML
    return (
        <Gallery container alignItems={'center'} spacing={1}>
            {images.map((image) => (
                <Grid item key={image}>  
                    <GalleryInnerWrapper>
                        <img src={image} alt="name" height="100"/>
                        <div class="overlay">
                            <Tooltip title="Preview Image">
                                <ZoomOutMapIcon 
                                    onClick={() => {
                                        dispatch({
                                            type: constants.SET_PREVIEW_IMAGE_URL,
                                            payload: image
                                        });
                                    }}
                                />
                            </Tooltip>
                        </div>
                    </GalleryInnerWrapper>
                </Grid>
            ))}
        </Gallery>
    )
}