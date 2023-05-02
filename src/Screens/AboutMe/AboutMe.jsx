import './AboutMe.css';
import {Grid} from '@mui/material';
import {useTranslation} from "react-i18next"
import Rotate from 'react-reveal/Rotate';
function Blog() {


  const [t, i18n] = useTranslation("global");

  return (
    
    <div className="App">

      <header className="r">
        <Grid container >
            <Grid item xs={12}>
              <Rotate>
            <h1>{t('home.title')}</h1>       
            </Rotate>  
            </Grid>
        </Grid>
      </header>
      <div>
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
                    Somos desarrolladoress
                </Grid>

            </Grid>
          
      </div>
    </div>
  );
}

export default Blog;
