import './Services.css';
import {Grid, Box} from '@mui/material';
import {useTranslation} from "react-i18next"
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import salforcelogo  from './img/salforce-logo.png';
import Typography from '@mui/material/Typography';
import Card from 'react-bootstrap/Card';
import ServiceComp from './ServiceComp';
// import Rotate from 'react-reveal/Rotate';
function Services() {
  const [t, i18n] = useTranslation("global");

  const arregloServicios = [
    {
      servicio: t('Services.title-Salesforce'),
      descripcion: t('Services.description-Salesforce')
    }, 
    {
      servicio: t('Services.title-Wordpress'),
      descripcion: t('Services.description-Wordpress')
    },
    {
      servicio: t('Services.title-ReactJs'),
      descripcion: t('Services.description-ReactJs')

    },
    {
      servicio: t('Services.title-React-Native'),
      descripcion: t('Services.description-React-Native')

    }
  ];



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
            {
              arregloServicios.map(serv => {
                 return (<ServiceComp 
                            element = {serv}    
                                    />)
              })
            }
          </Grid>

          
    </div>
  );
}

export default Services;
