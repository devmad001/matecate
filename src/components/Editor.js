import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Editor() {
  const [checked, setChecked] = React.useState([]);
  const [editvalue, setValue] = React.useState(-1);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className='landscape'>
        <List dense sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
            <ListItem
                key={value}
                disablePadding
            >
                <ListItemIcon>
                    <Checkbox
                        edge="end"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        onChange={handleToggle(value)}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <div className={checked.indexOf(value) !== -1 ? "light" : "dark"}>
                    <ListItemButton onClick={() => {
                        setValue(value);
                    }}>
                        <div className='gap'></div>
                        {
                            editvalue != value ?
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div>Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>Création d'applications BI avec QlikView, Tableau et Power BI pour le marketing, l'acquisition de clients, le CRM, les jeux responsables, les paiements et les finances.</div>
                                </Grid>
                            </Grid>
                            : <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div>Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <textarea rows={5} className='textarea'>Création d'applications BI avec QlikView, Tableau et Power BI pour le marketing, l'acquisition de clients, le CRM, les jeux responsables, les paiements et les finances.</textarea>
                                    <div style={{ "float": "right" }}>
                                        <Button variant="contained" style={{ "marginRight": "2px" }}>T+>></Button>
                                        <Button variant="contained">TRANSLATED</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        }
                    </ListItemButton>
                </div>
            </ListItem>
            );
        })}
        </List>
    </div>
  );
}

export default Editor
