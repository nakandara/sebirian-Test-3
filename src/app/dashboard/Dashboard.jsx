import { Box, createTheme, ThemeProvider, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import useAxiosPrivate from "../../Application/fndbas/hooks/useAxiosPrivate";
import MainCard from "./Home/MainCard";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Copyright } from "@mui/icons-material";
import { SideCardAlert, DebitCArd, EnjoyCart } from "./Home/SideCardAlert";

const API_URL = "util/v1/Dashboard/admin";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mdTheme = createTheme();

  const axiosPrivate = useAxiosPrivate();

  const [values, setValues] = useState([]);

  // useEffect(() => {
  //   const fetchDashboardValues = async () => {
  //     const controller = new AbortController();
  //     try {
  //       const dashValues = await axiosPrivate.get(API_URL, {
  //         headers: {
  //           signal: controller.signal,
  //         },
  //       });

  //       setValues(dashValues.data);
  //     } catch (err) {}
  //   };
  //   fetchDashboardValues();
  // }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: "-60px" }}>
            <Grid container spacing={4}>
              <MainCard />

              {/* Recent Deposits */}
              <Grid item xs={8} md={1} lg={3}>
                <div className="rounded subone  w-80 h-52 ">
                  {DebitCArd}
                  {SideCardAlert}
                  {EnjoyCart}
                </div>
              </Grid>
              {/* Recent Orders */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
