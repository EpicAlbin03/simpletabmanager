import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';

import ReactGA from "react-ga";
const TRACKING_ID = "UA-215861568-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview("/app");

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()} Simple Tab Manager. All Rights Reserved.
    </Typography>
  );
}

const footers = [
  {
    title: "Github",
    description: ["Repository", "Issues"],
    url: ["https://github.com/EpicAlbin03/Simple-Tab-Manager.git", "https://github.com/EpicAlbin03/Simple-Tab-Manager/issues"],
  },
  {
    title: "Extension",
    description: ["Install", "Rate Us"],
    url: [
      "https://chrome.google.com/webstore/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc/",
      "https://chrome.google.com/webstore/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc/",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy Policy"],
    url: ["https://www.privacypolicygenerator.info/live.php?token=bQyvfrKEo8VI7ZwAEHmaEfQe08buGrOj"],
  },
];

function PricingContent() {
  const [darkMode, setDarkMode] = useState(false);
  let test = false;

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#009CDE",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh", width: "50vw", margin: "auto" }}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
        <CssBaseline />
        <Container maxWidth="50vw" position="static" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Box sx={{ mt: 0.75, ml: -6 }}>
              <Link href="#">
                <img src={require("./images/icon-32x32.png")} alt="Simple Tab Manager logo" />
              </Link>
            </Box>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: 2 }}>
              Simple Tab Manager
            </Typography>
            <Button onClick={() => setDarkMode(!darkMode)} sx={{ mr: -6 }}>
              {!darkMode ? <DarkModeIcon sx={{ color: 'text.primary' }}></DarkModeIcon> : <LightModeIcon sx={{ color: 'text.primary' }}></LightModeIcon>}
            </Button>
          </Toolbar>
        </Container>
        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
          <Typography variant="h3" align="center" color="text.primary" gutterBottom sx={{ fontWeight: "400" }}>
            Thank you for using Simple Tab Manager!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary">
            "Simple Tab Manager" is a free and open-source chrome extension for people who want to quickly sort and group tabs.
          </Typography>
        </Container>
        {/* End hero unit */}

        {/* Card */}
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardActionArea href="https://www.paypal.com/donate/?hosted_button_id=CTLJM8CLZLJD6" target="blank">
            <CardContent>
              <CardMedia component="img" height="100" image="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" alt="paypal-logo" />
              <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
                Donate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you like the extension and have some money to spare it would help a lot to maintain and provide further updates for the extension. Any amount
                would go a long way, thank's for your support!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* End Card */}

        {/* Footer */}
        <Container maxWidth="50vw" component="footer" sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 0] }}>
          <Grid container spacing={4} justifyContent="space-evenly" maxWidth="sm" sx={{ margin: "auto" }}>
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  <li key={footer.description[0]}>
                    <Link href={footer.url[0]} target="blank" variant="subtitle1" color="text.secondary">
                      {footer.description[0]}
                    </Link>
                  </li>
                  <li key={footer.description[1]}>
                    <Link href={footer.url[1]} target="blank" variant="subtitle1" color="text.secondary">
                      {footer.description[1]}
                    </Link>
                  </li>
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        {/* End footer */}
      </Box>
    </ThemeProvider>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
