import React, { useRef } from 'react'
import { Grid, Box, Collapse, IconButton, Alert } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton'
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
import { Verified } from '@mui/icons-material';

function Newsletter (){
  const form = useRef()
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [formData, setFormData] = React.useState(
    {fullName: "", email: ""}
  )

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function isValidForm(values) {
    const errors ={};
    if (!values.fullName){
      errors.fullName = "Name is required !  ";
    } else if (values.fullName.length > 20) {
      errors.fullName = 'Name cannot exceed 20 characters !  ';
    } else if (!isNaN(values.fullName)) {
      errors.fullName = "Must input string !  ";
    }

    if (!values.email){
      errors.email = "Email is required !  ";
    }  else if (!regex.test(values.email)){
       errors.email = "This is not a valid email !  ";
     };
    return errors;

  }

  function handleChange(e){ 
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value});
  }
     
    function submitForm(event){
      event.preventDefault()
      setOpen(true)
      
      setError(isValidForm(formData))   
      setValid(true)

      if (formData.fullName && formData.email){
        if((formData.fullName.length <= 20 && isNaN(formData.fullName)) && regex.test(formData.email)){
          emailjs.sendForm(
            "service_rrnwta1",
            // service_xebv99g
            "template_glcovcl",
            // template_brdmdz5
            form.current,
            "gKdEXk3FIbAD9UjWJ"
            // user_5DWzDq3qay2fpLzpX1XoN
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          setFormData({fullName: '', email: ''})
        }
      } 
  }



  return (
    <div style={{textAlign: 'center', backgroundColor: '#F4F4F4', paddingBottom: '4%', marginTop: '10%'}} className='newletter-mobile' data-aos="fade-up">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{marginTop: '1%'}}>
        {Object.keys(error).length ? <center> 
            <Collapse in={open}><Alert severity="error" variant="filled"  action={
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
            className='alert-width'>{error.fullName}{ error.email}</Alert></Collapse>
          </center> : <center></center>}
        {Object.keys(error).length === 0 && valid && <center> 
            <Collapse in={open}><Alert severity="success" variant="filled"  action={
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
            className='alert-width'>Thank You For Subscribing</Alert></Collapse>
          </center>}
          <Box >
              <h3 id='newsletter-text'>Subscribe to our newsletter</h3>
              <p id='newsletter-text'>and be the first to be notified of any current updates </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                ref={form}
                className='form-width'
                autoComplete="off"
                onSubmit={submitForm}
                >
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={12}>
                    <center>
                      <input 
                        className='border-white subform-width-1' 
                        id="outlined-basic-1" 
                        placeholder='Name' 
                        type="text" 
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      <input 
                        className='border-white subform-width-2' 
                        id="outlined-basic-2" 
                        placeholder='Email Address' 
                        type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className='job-subscribe-btn'>
                        <PrimaryButton bgColor={'#00A859'} text={'Subscribe'} />
                      </div>
                    </center>
                  </Grid>
                </Grid>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Newsletter