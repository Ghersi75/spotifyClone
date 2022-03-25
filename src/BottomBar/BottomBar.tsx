import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Song from "./Song";
import PlayBar from "./PlayBar";
import { styled } from '@mui/material/styles';
import VolumeAndExtras from "./VolumeAndExtras";

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
                        margin: "15px"
                    }}
                >
                    <Grid item xs={4} sx={{ height: 1}}>
                        <Song />
                    </Grid>
                    
                    <Grid item xs={4} sx={{ height: 1}}>
                        <PlayBar />
                    </Grid>

                    <Grid item xs={4} sx = {{ height: 1 }}>
                        <VolumeAndExtras />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};