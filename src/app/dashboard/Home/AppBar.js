import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { NavLink, Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function AppBar() {
    return (
        <Box className="menu drop-shadow-2xl" sx={{ flexGrow: 1 }}>
            <div className="grid grid-cols-4 gap-4  drop-shadow-2xl  justify-center ">
                <div className="border-r-2 border-500 space-x-2">
                    <div className="sm:flex  md:flex space-x-5  ml-8 p-4 border-b-4  border-green-500">
                        <div className="  hover:text-green-400 ">
                            <div>
                                <Link className="text-green-400" to="/primaryAcounts">
                                    Primarry Account
                                </Link>
                                <div className=" menu text-xl">-27088.2242 Kr</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-r-2 border-500 space-x-2">
                    <div className="sm:flex  md:flex space-x-5  ml-8 p-4">
                        <div className="hover:text-green-400 ">
                            <div>
                                <Link className="text-gray-400" to="/Actions">
                                    Budget Account
                                </Link>
                                <div className=" menu text-xl">-23.088,2242 Kr</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-r-2 border-500 space-x-2">
                    <div className="sm:flex  md:flex space-x-5  ml-8 p-4">
                        <div className="hover:text-green-400 ">
                            <div>
                                <Link className="text-gray-400" to="/Actions">
                                    Saving Account
                                </Link>
                                <div className=" menu text-xl">-23.088,2242 Kr</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex space-x-4 border-black-900 ">
                    <div></div>
                </div>
            </div>
        </Box>
    );
}
