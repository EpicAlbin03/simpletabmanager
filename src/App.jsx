import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-215861568-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview('/app');

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#07C8F4",
      dark: "#003087",
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      Simple Tab Manager {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Github",
    description: ["Repository", "Issues"],
    link: ["https://github.com/EpicAlbin03/Simple-Tab-Manager.git", "https://github.com/EpicAlbin03/Simple-Tab-Manager/issues"]
  },
  {
    title: "Extension",
    description: ["Install", "Rate Us"],
    link: ["https://chrome.google.com/webstore/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc/", "https://chrome.google.com/webstore/detail/simple-tab-manager/mdfbfcbfcohpbdicnpdpcdioggfdddlc/"]
  },
  {
    title: "Legal",
    description: ["Privacy Policy"],
    link: ["https://www.privacypolicygenerator.info/live.php?token=bQyvfrKEo8VI7ZwAEHmaEfQe08buGrOj"]
  },
];

function PricingContent() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Box sx={{ mt: 0.75 }}>
              <Link href="#">
                <img src={require("./images/icon-32x32.png")} alt="" />
              </Link>
            </Box>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: 2 }}>
              Simple Tab Manager
            </Typography>
            <nav>
              <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}></Link>
            </nav>
          </Toolbar>
        </AppBar>

        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Simple Tab Manager
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              "Simple Tab Manager" is a free and open-source chrome extension for people who want to quickly sort and group tabs.
            </Typography>
          </Container>
          {/* End hero unit */}

          {/* Card */}
          <Card sx={{ maxWidth: 345, margin: "auto" }}>
            <CardActionArea href="https://www.paypal.com/donate/?hosted_button_id=CTLJM8CLZLJD6">
              <CardContent>
                <CardMedia component="img" height="100" image="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" alt="paypal-logo" />
                <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
                  Donate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you like the extension and have some money to spare it would help me to maintain and provide further updates for the extension. Any amount
                  would go a long way, thank's for your support!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* End Card */}

          {/* Footer */}
          <Container maxWidth="md" component="footer" sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 6] }}>
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link href={footer.link} target="blank" variant="subtitle1" color="text.secondary">
                          {item}
                        </Link>
                      </li>
                    ))}
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
