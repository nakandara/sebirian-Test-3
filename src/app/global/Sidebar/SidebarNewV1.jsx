import { useState } from "react";

import { Avatar, Box, CardMedia, ListItemIcon, useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../../dashboard/styles.css";
import { tokens } from "../../../theme";
import useAuth from "../../../Application/fndbas/hooks/useAuth";
import image1 from "../../accets/mmg.PNG";
import home from "../../accets/home.svg";

//import { userAuthContext } from "../../base/context/UserAuthContext";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";

import {
  AutoAwesome,
  AutoAwesomeMosaicOutlined,
  FilterNoneOutlined,
  FormatListBulletedOutlined,
  Grid4x4,
  Grid4x4Outlined,
  GridViewOutlined,
  Home,
  HomeMaxOutlined,
  HomeOutlined,
  LayersOutlined,
  NearMeOutlined,
  PaymentOutlined,
  Person4Outlined,
} from "@mui/icons-material";

const SidebarNewV1 = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        className="menu  text-2xl"
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px ",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar
          className="drop-shadow-2xl"
          collapsed={collapsed}
          toggled={toggled}
          onToggle={handleToggleSidebar}
          breakPoint="md"
          style={{
            zIndex: "387456378853",

            color: "black",
          }}
        >
          {/* Header */}
          <SidebarHeader className="p-2 ">
            <Menu iconShape="circle">
              {collapsed ? (
                <MenuItem
                  icon={<FaAngleDoubleRight />}
                  onClick={handleCollapsedChange}
                ></MenuItem>
              ) : (
                <MenuItem
                  suffix={<FaAngleDoubleLeft />}
                  onClick={handleCollapsedChange}
                >
                  <div style={{ height: "80px" }}>
                    <CardMedia
                      className="w-full p-[2rem]  -mt-10"
                      component="img"
                      height="40%"
                      image={image1}
                      alt="scene"
                    />
                  </div>
                </MenuItem>
              )}
            </Menu>
          </SidebarHeader>
          {/* Content */}
          <SidebarContent>
            <Menu
              iconShape="circle"
              style={{
                padding: "5px",

                fontSize: 6,
                letterSpacing: "1px",
              }}
            >
              <MenuItem style={{ fontSize: "16px" }} icon={<HomeOutlined />}>
                {/* <img src={home} alt="home" /> */}
                Home
                <NavLink to="/" />
              </MenuItem>

              <MenuItem style={{ fontSize: "16px" }} icon={<NearMeOutlined />}>
                Actions
                <NavLink to="/Actions" />
              </MenuItem>

              <MenuItem
                style={{ fontSize: "16px" }}
                icon={<GridViewOutlined />}
              >
                Spaces
                <NavLink to="/Spaces" />
              </MenuItem>

              <MenuItem style={{ fontSize: "16px" }} icon={<PaymentOutlined />}>
                Cards
                <NavLink to="/Cards" />
              </MenuItem>

              <MenuItem style={{ fontSize: "16px" }} icon={<LayersOutlined />}>
                Products
                <NavLink to="/Products" />
              </MenuItem>

              <MenuItem
                style={{ fontSize: "16px" }}
                icon={<FormatListBulletedOutlined />}
              >
                spendings
                <NavLink to="/spendings" />
              </MenuItem>
              <MenuItem style={{ fontSize: 14 }} icon={<Person4Outlined />}>
                My Account
                <NavLink to="/spendings" />
              </MenuItem>

              <MenuItem style={{ fontSize: "16px" }}>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="data:image/jpeg;base64,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"
                  />
                  <div className="m-2"> John Doe</div>
                  <NavLink to="/My Account" />
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </Box>
    </>
  );
};

export default SidebarNewV1;
