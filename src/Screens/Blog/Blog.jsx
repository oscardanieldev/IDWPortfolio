import './Blog.css';
import {Grid} from '@mui/material';

function Blog() {
  return (
    
    <div className="App">

      <header className="r">
        <Grid container >
            <Grid item xs={12}>
                <h1>Blog</h1>         
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
