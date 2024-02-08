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

  const arregloServicios = [
    {
      servicio: "Salesforce",
      descripcion: "Salesforce es una solución de gestión de relaciones con clientes que une empresas y clientes. Es una plataforma CRM integrada que brinda a todos tus departamentos, incluidos marketing, ventas, comercio y servicios, una vista única y compartida de cada cliente."
    }, 
    {
      servicio: "Wordpress",
      descripcion: "WordPress es un sistema de gestión de contenidos web (CMS o content management system), que en pocas palabras es un sistema para publicar contenido en la web de forma sencilla. Tan común es ya, que es el líder absoluto a nivel mundial para la creación de webs desde hace muchísimos años."
    },
    {
      servicio: "ReactJS",
      descripcion: "ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes."
    },
    {
      servicio: "React Native",
      descripcion: "React Native es un framework JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React para la creación de componentes visuales, cambiando el propósito de los mismos para, en lugar de ser ejecutados en navegador, correr directamente sobre las plataformas móviles nativas, en este caso iOS y Andorid."
    }
  ];


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
