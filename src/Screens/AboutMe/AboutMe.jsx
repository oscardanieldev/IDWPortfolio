import './AboutMe.css';
import {Grid, Box} from '@mui/material';
import {useTranslation} from "react-i18next"
import Grow from '@mui/material/Grow';

// import Rotate from 'react-reveal/Rotate';
function Blog() {


  const [t, i18n] = useTranslation("global");

  return (
    
    <div className="App">
        <header className="r">
          <Grid container >
              <Grid item xs={12}>
              <h1>{t('Aboutme.title')}</h1>       
              </Grid>
          </Grid>
        </header>
          <Grid container >
            <Grid item md={6} xs={12} className="bg-img-OscarDev">
            {/* <img src={oscarDanielDevHome} alt="oscarDanielDevHome" /> */}

            </Grid>
            <Grid item md={6} xs={12} className="">
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
              >
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4} }} className="sobreMiInfo">
                    {t('Aboutme.presentation')}
                    <br />
                    <br />
                    {t('Aboutme.exp-1-1')} 
                    <strong><a className='textoBlanco' target='_blank' href="https://salauno.com.mx/">Salauno</a></strong> 
                    {t('Aboutme.exp-1-2')} 
                    <br />
                    <br />
                    {t('Aboutme.exp-2-1')} 
                    <strong><a className='textoBlanco' target='_blank' href="https://www.linkedin.com/company/latbc/?originalSubdomain=mx">Latbc Consulting</a></strong> 
                    {t('Aboutme.exp-2-2')} 
                    <strong><a className='textoBlanco' target='_blank' href="https://www.att.com.mx/">AT&T México</a></strong> 
                    {t('Aboutme.exp-2-3')} 
                    <br />
                    <br />
                    {t('Aboutme.exp-3')} 



                  </Box>  
              </Grow>
              
            </Grid>

          </Grid>

          
    </div>
  );
}

export default Blog;
