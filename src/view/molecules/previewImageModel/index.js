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
import * as React from 'react';
// MATERIAL UI IMPORT
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
// BASE STYLE IMPORT
import { ImageWrapper } from './style';

// EXPORT PREVIEW IMAGE MODEL COMPONENT
export function PreviewImageModel(props) {
  // PREVIEW MODEL COMPONENT PROPS
  const {
    onClose,
    url
  } = props;
  // RENDER HTML 
  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <ImageWrapper>
        <IconButton>
          <CloseIcon onClick={onClose}/>
        </IconButton>
        <img src={url} alt="Preview"/>
      </ImageWrapper>
    </Dialog>
  );
}
