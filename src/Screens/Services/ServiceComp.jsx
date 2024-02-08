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

  const [t, i18n] = useTranslation("global");

  return (
    

            <Grid item md={6} xs={12} className="">
                  <Box sx={{ flexGrow: 1, p: { xs: 2, md: 8 }, mb: {xs: 2, md: 4} }} className="sobreMiInfo">
                    <Card style={{ width: '100%', backgroundColor: 'red'  }}>
                        <Card.Body>
                          <Card.Title>{t('Services.webDeveloper-title')}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{t('Services.webDeveloper-title')}</Card.Subtitle>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Card.Link href="#">Card Link</Card.Link>
                          <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                      </Card>
                  </Box>  
            </Grid>
            

          
  );
}

export default ServiceComp;
