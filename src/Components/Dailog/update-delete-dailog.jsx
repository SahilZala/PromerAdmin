
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function UpdateDeleteDailog(props) {
    
    return (
      <React.Fragment>
      
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Update or delete Given article number product {props.data.data.productDetails.articleNumber}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>props.updateDailog(props.data)}>Update</Button>
            <Button onClick={()=>props.deleteDailog(props.data)}>Delete</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
    
  }