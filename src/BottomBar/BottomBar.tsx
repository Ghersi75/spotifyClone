import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Song from "./Song";
import { styled } from '@mui/material/styles';
import "./BottomBar.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Sidebar() {
    return (
        <>
            <Box sx={{
                backgroundColor: "#181818",
                width: 1,
                height: 90,
                position: "fixed",
                bottom: 0,
                left: 0, 
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}>
                <Grid
                    container
                    sx={{
                        padding: "15px"
                    }}
                >
                    <Grid item xs={4}>
                        <Song />
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center" alignItems="center" sx={{border: "white solid 1px", height: 1, width: 1}}>
                            <Box sx={{color: "white", }}>
                                Nice?
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Item> Nice three </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};