import React from "react";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";
const Footer = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const transitionmatches = [
    {
      source: "version",
    },
  ];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            sx={{ bgcolor: "#d9e0e8" }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              label="Translation Matches"
              value="1"
              sx={{
                bgcolor: value == "1" ? "#d9e0e8" : "transparent",
              }}
            />
            <Tab
              label="TM Search"
              value="2"
              sx={{
                bgcolor: value == "2" ? "#d9e0e8" : "transparent",
              }}
            />
            <Tab
              label="Glossary"
              value="3"
              sx={{
                bgcolor: value == "3" ? "#d9e0e8" : "transparent",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontSize: "12px" }}>
                        add Spanish (Colombia)
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Box
                        sx={{ bgcolor: "red", width: "40px", height: "20px" }}
                      >
                        <Typography sx={{ fontSize: "12px", color: "white" }}>
                          100%
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontSize: "12px" }}>
                        add Spanish (Colombia)
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Box
                        sx={{ bgcolor: "red", width: "40px", height: "20px" }}
                      >
                        <Typography sx={{ fontSize: "12px", color: "white" }}>
                          100%
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Version</Typography>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontSize: "12px" }}>
                        add Spanish (Colombia)
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Box
                        sx={{ bgcolor: "red", width: "40px", height: "20px" }}
                      >
                        <Typography sx={{ fontSize: "12px", color: "white" }}>
                          100%
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value="2">
          <Grid container xs={12} spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="project-name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="project-name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid container xs={12} spacing={2}>
            <Grid item xs={6}>
              <div>
                <IconButton type="submit" sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search input" }}
                />
              </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <Button variant="contained">Add Term</Button>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Footer;
