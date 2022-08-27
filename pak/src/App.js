import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function App() {
  return (
    <div>
<h1>Aloha</h1>
<AppBar position="static">
  <Toolbar variant="dense">
    
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
<h1> Daite reactions za da moga da imam poveche tochki ot Rado😛</h1>

<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
    </div>
  );
}

export default App;












