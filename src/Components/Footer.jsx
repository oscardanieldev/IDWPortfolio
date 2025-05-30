import './Components.css';

import {Box, Grid, Typography, Button, Link, IconButton } from '@mui/material';
import {useTranslation} from "react-i18next"

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import Grow from '@mui/material/Grow';
import { FaWhatsapp,FaLinkedin  } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";


function Footer() {
  //Js code
  const styleFab = { bottom: 14, right: 14 };
  const iconFotter = { padding: '0 1rem' };
  const styleMainButtom = { backgroundColor: 'aqua' };
  const styleChildrenAction = { backgroundColor: 'aqua' };
  const urlsDireccion = {
    'whatsapp': 'https://wa.me/525566704496',
    'linkedin': 'https://www.linkedin.com/in/oscar-daniel-solares-monzalvo/',
    'email'   : 'mailto:o.solares.m@gmail.com?Subject=Me%20interesa%20recibir%20Información'
  };
  
  const sendWhatsapp = () => {
    console.log('Envía whatsapp');
    window.location.href= urlsDireccion.whatsapp ;
  }

  const goToLinkedin = () => {
    console.log('Envía linkedin');
    window.location.href=urlsDireccion.linkedin;
  }
  const sendEmail = () => {
    console.log('Envía email');
    window.location.href=urlsDireccion.email;
  }

  const [t] = useTranslation("global");

  //Render
  return (
    
    <div className="App">
      <Fab
          mainButtonStyles={styleMainButtom}
          style={styleFab}
          icon={<IoMdSend
                size={25}
                color='black'
                />}
      >
        <Action
          text="Whatsapp"
          children = {<FaWhatsapp  
                          size={25}
                          color='black' />}
          style={styleChildrenAction}
          onClick={sendWhatsapp}
        >
        </Action>

        <Action
          text="Linkedin"
          children = {<FaLinkedin  
                          size={25}
                          color='black' />}
          style={styleChildrenAction}
          onClick={goToLinkedin}
        >
        </Action>

        <Action
          text="Email"
          children = {<TfiEmail  
                          size={25}
                          color='black' />}
          style={styleChildrenAction}
          onClick={sendEmail}
        >
        </Action>

        
      </Fab>
      <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
              
            >
                <Grid item xs={12}>
                      <Box sx={{ flexGrow: 1, p: { xs: 2, md: '4rem 4rem' }, m: {xs: 2, md: 2},  borderTop: 1  }} className="stylesFooter">
                        <Box sx={{ flexGrow: 1, p: { xs: 2, md: '1rem  0' }}}>
                        {t('footer.copyRight')} &#169; 2025
                        </Box>
                        <Button>
                          <FaLinkedin  
                              size={25}
                              color='aqua'
                              style={iconFotter}
                              onClick={goToLinkedin} />
                        </Button>
                        <Button>
                          <FaWhatsapp  
                              size={25}
                              color='aqua'
                              style={iconFotter}
                              onClick={sendWhatsapp} />
                        </Button>
                        <Button>
                          <TfiEmail  
                              size={25}
                              color='aqua'
                              style={iconFotter} 
                              onClick={sendEmail}/>
                        </Button>

                      </Box>  
                </Grid>

      </Grid>
        
    </div>
  );
}

export default Footer;
