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
// IMPORT COMPONENT FORM MATERIAL UI
import { Dialog, AppBar, IconButton, Typography, Slide} from '@mui/material';
//  MATERIAL UI ICON IMPORT
import CloseIcon from '@mui/icons-material/Close';
// STYLE FILE
import { 
  AlertToolbar,
  AlertBody,
  Content
} from './style';

// SLIDE UP TRANSITION COMPONENT
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ALERT COMPONENT
export function Alert(props) {
  // ALERT PROPS
  const { onClose, title, content, headerBg = '#3BB895'} = props;
  // RENDER HTML
  return (
    <Dialog
      open
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth='sm'
    >
      <AppBar sx={{ position: 'relative', background: headerBg }}>
        <AlertToolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            size='small'
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
          </Typography>
        </AlertToolbar>
      </AppBar>
      <AlertBody>
        <Content variant='body1'>
          {content}
        </Content>
      </AlertBody>
    </Dialog>
  );
}
