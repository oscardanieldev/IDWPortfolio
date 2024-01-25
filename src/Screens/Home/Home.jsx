import './Home.css';
import {Box, Grid, Typography, Button, Link } from '@mui/material';
import {useTranslation} from "react-i18next"
import salforcelogo  from './img/salforce-logo.png';
import reactjs  from './img/reactjs.png';
import reactNative  from './img/reactNative.png';
import nodejs  from './img/nodejs.png';
import php  from './img/php.png';
import wordpress  from './img/wordpress.png';
import laravel  from './img/laravel.png';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grow from '@mui/material/Grow';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import oscarDanielDevHome from "./img/OscarDanielDevHome.png";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';




function Home() {
  //Js code

  const [t] = useTranslation("global");

  //Render
  return (
    
    <div className="App">

        <Grid container >
            <Grid item md={6} xs={12} className="bg-codigo">
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
              >
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4},  borderBottom: 1  }} className="titulo">{t('home.slogan')}
                  </Box>  
              </Grow>
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 2000 } : {})}
              >
                <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="sub-titulo">
                  <span className='color-secundario'>{t('home.title')}</span> 
                  <br/>
                  <br/>
                   {t('home.sub-title')}
                </Box> 
              </Grow>
            </Grid>

            <Grid item md={6} xs={12} className="bg-img-OscarDevHome">
            {/* <img src={oscarDanielDevHome} alt="oscarDanielDevHome" /> */}

            </Grid>

            <Grid item md={12} xs={12} className='bg-img-Oscar'>
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 3000 } : {})}
              >
              <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="sub-titulo">
                  <span className='color-secundario'>{t('home.why-dig')}</span> 
              </Box>   
            </Grow>
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 3000 } : {})}
              >
              <Box sx={{ p: {xs: 2, md: 6}}}>
                 {/* <ArrowCircleDownOutlinedIcon className='arrowStyles' /> */}
                 <Accordion className='acordion'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{t('home.Greater-brand-recognition.title')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                     <p>{t('home.Greater-brand-recognition.info-p1')}</p>
                     <p>{t('home.Greater-brand-recognition.info-p2')}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='acordion'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{t('home.Access-to-the-new-generations.title')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                     <p>{t('home.Access-to-the-new-generations.info-p1')}</p>
                     <p>{t('home.Access-to-the-new-generations.info-p2')}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className='acordion'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{t('home.Obtaining-relevant-data-and-information.title')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                     <p>{t('home.Obtaining-relevant-data-and-information.info-p1')}</p>
                     <p>{t('home.Obtaining-relevant-data-and-information.info-p2')}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
               </Box> 
               </Grow> 
               <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 3500 } : {})}
              >  
                <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="sub-titulo">
                    <span className='color-secundario'>{t('home.want-know-stadistics')} 👀</span> 
                </Box>  
              </Grow> 

              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 3500 } : {})}
              >  
                <Box>
                <a class="unstyle" href="/Statistics"><button class="custom-btn btn-9"><span>{t("home.stadistics")}</span></button> </a>
                </Box> 
              </Grow> 

              {/* <Box sx={{ p: {xs: 2, md: 4}}}>
                <Button>
                  <Typography variant="h4" ><span className='reboteOut'> {t('home.click-here')}</span></Typography>
                 </Button>
              </Box>    */}
            </Grid>

        </Grid>

        <LightSpeed left cascade>
        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="sub-titulo">
                  {t("home.developmen-tec")}
                </Box>
          <Grid container>

      
                <Grid xs display="flex" justifyContent="center" alignItems="center"                     component={Link}
                    target="_blank" href="https://www.salesforce.com/"
                    >
                  <img className="imagen-logo" src={salforcelogo} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://react.dev/">
                  <img className="imagen-logo" src={reactjs} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://reactnative.dev/">
                  <img className="imagen-logo" src={reactNative} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://nodejs.org/es/about">
                  <img className="imagen-logo" src={nodejs} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://wordpress.com/es/funciones/">
                  <img className="imagen-logo" src={wordpress} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://www.php.net/manual/es/intro-whatis.php">
                  <img className="imagen-logo" src={php} alt="" />
                </Grid>
                <Grid xs display="flex" justifyContent="center" alignItems="center" component={Link}
                    target="_blank" href="https://laravel.com/">
                  <img className="imagen-logo" src={laravel} alt="" />
                </Grid>
          </Grid>
        </LightSpeed>
        
        <Grid container>
              

        </Grid>

    </div>
  );
}

export default Home;
