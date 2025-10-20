import React from 'react'
import { Box, Button, Divider, IconButton, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';


export default function PopUpModal(){

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        handleOpen()
      }, 2000)
    }, [])
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      textAlign: 'center',
      boxShadow: "rgb(145 158 171 / 20%) 0px 11px 15px -7px, rgb(145 158 171 / 14%) 0px 24px 38px 3px, rgb(145 158 171 / 12%) 0px 9px 46px 8px",
      padding: "32px",
      borderRadius: "25px"
    };
    
    return (
        <React.Fragment>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} style={{color: 'green'}}>
                {/* <IconButton
                    onClick={handleClose}
                    variant="text"
                    size="small"
                    sx={{
                        height: '50px',
                        ml: 2,
                        [theme.breakpoints.down('md')]: {
                          width: '20px',
                          height: '40px',
                          position: 'absolute',
                          right: '2%',
                          top: '1%',
                        },
                      }}
                >
                    <CloseIcon fontSize='large'/>
                </IconButton> */}
                <Typography id="keep-mounted-modal-title" variant="h5" component="h5" style={{mt: 2, mb: 5 }}>
                    WORLD ROBOTICS CHAMPIONSHIP’2023
                </Typography>
                <Typography id="keep-mounted-modal-title" variant="body2" component="body2" sx={{my: '5%' }}>
                    JULY 2-5, 2023
                </Typography>
                <Typography id="keep-mounted-modal-body" variant="p" component="p" style={{mt: 2, mb: 5 }}>
                    Learning, Sharing, Competing, Winning! Youngsters from world over
                    coming together to challenge in 10 categories.
                </Typography>

                <Link to='/popup'>
                    <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'#00A859', mt: 5}}>Register</Button>
                </Link>
                </Box>
            </Modal>
        </React.Fragment>
    )
}