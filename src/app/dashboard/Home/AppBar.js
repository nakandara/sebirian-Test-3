import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Menu, MenuItem } from "react-pro-sidebar";
import { NavLink, Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function AppBar() {
    return (
        <Box className="drop-shadow-2xl" sx={{ flexGrow: 1 }}>
            <div className="grid grid-cols-4 gap-4 font-lora drop-shadow-2xl  justify-center ">
                <div className="sm:flex  md:flex space-x-5 border-r ml-8 w-full p-2 border-blue-900">
                    <div className="hover:text-green-400">
                        <div>
                            <Link to="/primaryAcounts">Primarry Account</Link>
                            <div className="font-bold">-27088.2242 Kr</div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex  md:flex space-x-5  border-r border-blue-900 ml-8 w-full p-2">
                    <div> </div>
                    <div className="hover:text-green-400">
                        <Link to="/Actions">Taxi to Roskider</Link>
                        <div className="font-bold">-27088.2242 Kr</div>
                    </div>
                </div>
                <div className="flex space-x-4 border-r border-blue-900 ml-8 w-full p-2">
                    <div> </div>
                    <div className="hover:text-green-400">
                        <Link to="/Actions">Peter Wilgard</Link>
                        <div className="font-bold">-27088.2242 Kr</div>
                    </div>
                </div>
                <div className=" flex space-x-4 border-black-900 ">
                    <div></div>
                    <div className="text-green-400">Back</div>
                </div>
            </div>
        </Box>
    );
}
