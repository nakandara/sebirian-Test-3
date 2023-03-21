import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import image2 from "../../accets/jdnfnf.PNG";

export default function CardLandAsso() {
    return (
        <Box
            className="menu font-semibold not-italic"
            sx={{ flexGrow: 1, marginTop: 6 }}
        >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Paper>
                        <Card>
                            <div style={{ position: "relative" }}>
                                <CardMedia
                                    className="p-4"
                                    style={{ height: "250px" }}
                                    component="img"
                                    image={image2}
                                    title="Pancakes"
                                    alt="Pancakes"
                                />
                                <div
                                    className=""
                                    style={{
                                        position: "absolute",
                                        color: "black",
                                        top: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",

                                        fontSize: "20px",
                                    }}
                                >
                                    <div style={{ paddingRight: "120px" }}></div>
                                    <div className=" text-[#202330]  "> Card Associate</div>

                                    <Stack
                                        direction="row"
                                        spacing={4}
                                        sx={{ marginTop: "180px" }}
                                    >
                                        <Typography>Standard</Typography>
                                        <Typography>premium</Typography>
                                    </Stack>
                                </div>
                            </div>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <Card>
                            <div style={{ position: "relative" }}>
                                <CardMedia
                                    style={{ height: "250px" }}
                                    title="Pancakes"
                                    alt="Pancakes"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        color: "black",
                                        top: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",

                                        fontSize: "20px",
                                    }}
                                >
                                    <div style={{ paddingRight: "120px" }}></div>
                                    Lans Associate
                                    <div className="text-gray-300 text-sm mt-6">
                                        Currently no loand associated with your primarry accounts{" "}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
