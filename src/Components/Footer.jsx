import './Components.css';

import {Box, Grid, Typography, Button, Link, IconButton } from '@mui/material';
import {useTranslation} from "react-i18next"

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import { FaWhatsapp  } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";


function Footer() {
  //Js code

  const [t] = useTranslation("global");

  //Render
  return (
    
    <div className="App">
      <Fab
          mainButtonStyles={{ backgroundColor: 'aqua' }}
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
        style={{ backgroundColor: 'aqua'}}
        // onClick={handleEmailOnClick}
      >
      </Action>

      </Fab>

        
    </div>
  );
}

export default Footer;
