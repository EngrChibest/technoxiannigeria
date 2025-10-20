import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Data from "./Data";
import ServicesCard from "./ServiceCard";


export default function Services (){
    return (
        <div className="container-sm">
            {Data.map((item) => (
                <ServicesCard
                    image={item.img}
                    tag={item.tag}
                    title={item.title}
                    body={item.body}
                    link={item.link}
                    face={item.face}
                />
            ))}
        </div>
    )
}