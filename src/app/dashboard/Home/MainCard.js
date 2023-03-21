import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Divider,
  Chip,
  ListItemText,
  ListItemIcon,
  Icon,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import {
  Add,
  ArrowRightAlt,
  CoffeeOutlined,
  DinnerDining,
  KeyboardBackspace,
  MinorCrashOutlined,
} from "@mui/icons-material";
import CardLandAsso from "./CardLandAsso";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainCard = () => {
  return (
    <Grid
      className=" max-w-screen-2xl  drop-shadow-2xl"
      item
      xs={12}
      md={8}
      lg={9}
    >
      <Paper
        sx={{
          margin: "7px",
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 310,
          minWidth: 400,
        }}
      >
        <Stack direction="row" spacing={7}>
          <Avatar
            sx={{ width: 56, height: 56, bgcolor: "#ADD8E6" }}
            src="/broken-image.jpg"
          />
          <Typography
            sx={{
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: 20,
              margin: "auto",
            }}
          >
            <Typography className="text-gray-400" sx={{ fontWeight: "hidden" }}>
              Primarry Acount
            </Typography>
            2.560.731,56 Kr
          </Typography>
          <Button className="h-8 w-8" variant="contained" size="small">
            ACTIVE
          </Button>

          {/* <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button> */}
        </Stack>
        <div>
          <div className="mt-3 menu text-lg">
            <h2>Recent Transations</h2>
          </div>
          <br />

          <div className="grid mb-4 grid-cols-4 gap-4">
            <div className="sm:flex space-x-0 md:flex space-x-5">
              <div>
                {" "}
                <CoffeeOutlined />{" "}
              </div>
              <div className="menu text-md">
                Breakfast <br />
                <div className="font-bold menu text-sm">-80 Kr</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                {" "}
                <DinnerDining />{" "}
              </div>
              <div className="menu text-md">
                Peter Wilgard <br />
                <div className="font-bold text-green-500 menu text-sm">
                  1000 Kr
                </div>
              </div>
            </div>
            <div className="sm:flex space-x-0 md:flex space-x-5">
              <div>
                {" "}
                <MinorCrashOutlined />{" "}
              </div>
              <div className="menu text-md">
                Taxi to Roskider <br />
                <div className="font-bold menu text-sm">-270 Kr</div>
              </div>
            </div>

            <div className=" flex space-x-4 border-l h-8">
              <div></div>
              <div className="text-green-400">View all</div>
            </div>
          </div>

          <div className="grid mt-10 grid-cols-4 gap-4 ">
            <div className="sm:0 md:flex space-x-5 ">
              <div>
                <Avatar sx={{ bgcolor: "mediumseagreen" }}>
                  <Add />
                </Avatar>
              </div>
              <div className="font-semibold">Add Money </div>
            </div>
            <div className="sm:0 md:flex space-x-5">
              <div>
                <Avatar sx={{ bgcolor: "mediumseagreen" }}>
                  <ArrowRightAlt />
                </Avatar>
              </div>
              <div className="font-semibold">Send Money </div>
            </div>

            <div className="sm:0 md:flex space-x-5">
              <div>
                <Avatar sx={{ bgcolor: "mediumseagreen" }}>
                  <KeyboardBackspace />
                </Avatar>
              </div>
              <div className="font-semibold">Request Money </div>
            </div>
            <div className="sm:0 md:flex space-x-5">
              <div>
                <Avatar sx={{ bgcolor: "mediumseagreen" }}>
                  <AssignmentIcon />
                </Avatar>
              </div>
              <div className="font-semibold">Pay Bills </div>
            </div>
          </div>
        </div>
      </Paper>
      <CardLandAsso />
    </Grid>
  );
};

export default MainCard;
