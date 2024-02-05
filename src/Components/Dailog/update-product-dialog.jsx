import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import UpdateProduct from '../../View/Product/Update/update-product';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateProductDailog(props) {
 
  return (
    <React.Fragment>
   
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
      
       <UpdateProduct data={props.data.data} handleClose={props.handleClose}/>
      </Dialog>
    </React.Fragment>
  );
}
