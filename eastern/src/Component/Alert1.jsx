import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse } from '@mui/material';

export default function Alert1(props) {
  const [open, setOpen] = React.useState(true);
 const capitalize=(word)=>{
  let lower=word.toLowerCase();
  return lower.charAt(0).toUpperCase()+ lower.slice(1);
 }
  return (
    <Box sx={{ width: '100%',height:"50px" }}>
       <Collapse in={open}>
      {props.alert && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {capitalize(props.alert.msg)}:{props.alert.type}
        </Alert>
      )}
      </Collapse>
    </Box>
  );
}
