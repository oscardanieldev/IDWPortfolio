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
// import Rotate from 'react-reveal/Rotate';
function ServiceComp(element) {
    console.log('serv',element);
    console.log('nombre serv',element.element.servicio);
    const styleCard = {
      width: '100%', 
      // backgroundColor: 'rgb(231, 231, 231)' ,
      color: 'white',
      padding: '2rem',
      
    }

  const [t, i18n] = useTranslation("global");

  return (
    

            <Grid item md={6} xs={12} className="">
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4} }} className="sobreMiInfo">
                    <Card style={styleCard}>
                        <Card.Body>
                          <Card.Title>{element.element.servicio}</Card.Title>
                          {/* <Card.Subtitle className="mb-2 text-muted">{t('Services.webDeveloper-title')}</Card.Subtitle> */}
                          <Card.Text>
                            {element.element.descripcion}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Box>  
            </Grid>
            

          
  );
}

export default ServiceComp;
