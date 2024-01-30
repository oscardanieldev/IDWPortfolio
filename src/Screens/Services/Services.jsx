import './Services.css';
import {Grid, Box} from '@mui/material';
import {useTranslation} from "react-i18next"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import salforcelogo  from './img/salforce-logo.png';
import Typography from '@mui/material/Typography';
// import Rotate from 'react-reveal/Rotate';
function Services() {


  const [t, i18n] = useTranslation("global");

  return (
    
    <div className="App">
        <header className="r">
          <Grid container >
              <Grid item xs={12}>
              <h1>{t('Services.title')}</h1>       
              </Grid>
          </Grid>
        </header>
          <Grid container >
            <Grid item md={6} xs={12} className="">
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4} }} className="sobreMiInfo">
                    <Card sx={{ maxWidth: '100vw' }} >
                      <CardHeader
                       title="Consultoría y desarrollo Salesforce"
                      />
                        <CardMedia
                          component="img"
                          height="100"
                          src={salforcelogo}
                          alt="Salesforce Logo"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
               
                    </Card>
                  </Box>  
            </Grid>
            <Grid item md={6} xs={12} className="">
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4} }} className="sobreMiInfo">
                    <Card sx={{ maxWidth: '100vw' }} >
                      <CardHeader
                       title="Consultoría y desarrollo Salesforce"
                      />
                        <CardMedia
                          component="img"
                          height="100"
                          src={salforcelogo}
                          alt="Salesforce Logo"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
               
                    </Card>
                  </Box>  
            </Grid>
          </Grid>

          
    </div>
  );
}

export default Services;
