import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import Lsadumpsam from "./lsadumpsam.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Sekurlsalogonpasswords from "./sekurlsalogonpasswords.js";
import Footer from "./Footer.js";
import DataModal from "./DataModal";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Palette() {
  const [data, setData] = useState("Copy/paste mimikatz output here");
  const [status, setStatus] = useState(true);
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <DataModal open={open} setOpen={setOpen} setData={setData} data={data} />
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Mimikatz Parser
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Insert Data
            </Button>
          </Toolbar>
        </AppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="LSADUMP::SAM" {...a11yProps(0)} />
          <Tab label="logonpasswords" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Lsadumpsam data={data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Sekurlsalogonpasswords data={data} />
        </TabPanel>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
