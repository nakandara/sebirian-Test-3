import * as React from "react";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { Avatar } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import image3 from "../../accets/hshd.PNG";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export const SideCardAlert = (
    <Swiper
        direction={"vertical"}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  "
    >
        <SwiperSlide>
            <>
                <div style={{ position: "relative" }}>
                    <CardMedia
                        style={{ height: "200px", paddingTop: "2%", borderRadius: "18px" }}
                        component="img"
                        image={image3}
                        title="Pancakes"
                        alt="Pancakes"
                        className="m-0"
                    />
                    <div
                        className="text-xl "
                        style={{
                            position: "absolute",
                            color: "black",
                            top: 10,
                            left: "50%",
                            transform: "translateX(-90%)",
                        }}
                    >
                        <div className="text-white text-lg mt-6 font-bold font-lora text-left">
                            {" "}
                            Enjoy Your Finncial fredom with Bank You Cad
                        </div>

                        <Button
                            sx={{ backgroundColor: "white", borderRadius: 6, marginTop: 2 }}
                        >
                            Apply now
                        </Button>
                    </div>
                </div>
            </>
        </SwiperSlide>
    </Swiper>
);

export const DebitCArd = (
    <Swiper
        direction={"vertical"}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide>
            <>
                <div style={{ position: "relative" }}>
                    <CardMedia
                        style={{ height: "200px", paddingTop: "2%", borderRadius: "18px" }}
                        component="img"
                        image={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX669bNE5YaAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
                        }
                        title="Pancakes"
                        alt="Pancakes"
                    />
                    <div
                        className=" inline-block m-4 "
                        style={{
                            position: "absolute",
                            color: "black",
                            top: 10,
                            left: "50%",
                            transform: "translateX(-90%)",
                        }}
                    >
                        <div className="font-bold font-lora">Alert Center</div>
                        <div className="flex flex-row space-x-6 m-2 ">
                            <div>
                                <Avatar
                                    className="ml-1"
                                    sx={{ bgcolor: "gray", position: "left" }}
                                >
                                    <AssignmentIcon />
                                </Avatar>
                            </div>
                            <div style={{ width: "100px" }} className="text-xs w-16 ">
                                <div className="font-bold"> Bill Ready to pay</div>
                                <br />
                                <div
                                    style={{ width: "200px" }}
                                    className=" -mt-2 text-gray-400 w-16 text-left"
                                >
                                    {" "}
                                    You bill of 10000 kr to Name com Hosting is ready for payment
                                    other hnwwd ks payment other hnwwd ks
                                </div>
                            </div>
                        </div>

                        <Button
                            sx={{
                                backgroundColor: "green",
                                borderRadius: 6,
                                color: "white",
                                marginTop: 2,
                                marginLeft: 15,
                            }}
                        >
                            Pay
                        </Button>
                    </div>
                </div>
            </>
        </SwiperSlide>
    </Swiper>
);

export const EnjoyCart = (
    <Swiper
        direction={"vertical"}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide>
            <>
                <div className="w-80" style={{ position: "relative" }}>
                    <CardMedia
                        style={{ height: "200px", paddingTop: "2%", borderRadius: "18px" }}
                        component="img"
                        image={
                            "https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg?w=996"
                        }
                        title="Pancakes"
                        alt="Pancakes"
                    />
                    <div
                        className="font-bold font-lora"
                        style={{
                            position: "absolute",

                            top: 10,
                            left: "65%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <div className="text-white text-lg mt-6 mb-2 text-right  ">
                            20% off for BankYou Debit Card
                        </div>

                        <Button sx={{ backgroundColor: "white", borderRadius: 6 }}>
                            Apply now
                        </Button>
                    </div>
                </div>
            </>
        </SwiperSlide>
    </Swiper>
);
