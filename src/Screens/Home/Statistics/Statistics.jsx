import './Statistics.css';
import {Grid, Box} from '@mui/material';
import {useTranslation} from "react-i18next"



function Statistics() {
  const [t, i18n] = useTranslation("global");
  return (
    
    <div className="App">

      <header className="r">
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
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="sub-titulo">
                        <span className='sub-titulo'>{t('Statistics.info-title')}</span>
                  </Box> 

                </Grid>

            </Grid>
      </header>
      <div>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="left"
              alignItems="left"
              alignContent="left"
              wrap="nowrap"
               
            >
                <Grid item xs={12}>
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="elementos">
                        <div className='elementos'><strong>{t('Statistics.info-subtitle')}</strong></div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-1')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-2')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-3')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-4')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-5')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-6')}</div>
                        <br /> <div className='elementos'>{t('Statistics.info-pr1-7')}</div>
                  </Box> 
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }}} className="elementos">
                        <div className='elementos'><strong>{t('Statistics.info-pr2-1')}</strong></div>
              
                  </Box> 
                </Grid>

            </Grid>
          
      </div>
    </div>
  );
}

export default Statistics;
