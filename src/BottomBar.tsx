import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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
                justifyContent: "center"
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        padding: "15px"
                    }}
                >
                    {/* Album cover, song name, artist name, heart icon */}
                    <Stack 
                        direction="row"> 
                        <Box
                            component="img"
                            sx={{
                                height:55,
                                width: 55
                            }}
                            src="https://i.pinimg.com/originals/85/26/ce/8526ced837dd850f7bd79e9e4ef6655a.jpg">

                        </Box>
                    </Stack>
                    
                    <Item> Nice two </Item>
                    <Item> Nice three </Item>
                </Grid>
            </Box>
        </>
    );
};