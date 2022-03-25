import React from "react";
import Stack from "@mui/material/Stack";
import Slider from '@mui/material/Slider';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import LyricsIcon from '@mui/icons-material/Lyrics';

export default function VolumeAndExtras() {
    const [volume, setVolume] = React.useState(50);

    const handleVolumeChange = (e: React.SyntheticEvent | Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setVolume(newValue);
        }
    }

    return(
        <>
            <Stack 
                direction="row"
                spacing={1}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                sx={{
                    height: 1   
                }}>

                <LyricsIcon 
                    sx={{
                        color: "#b3b3b3"
                    }}/>

                {volume == 0 ? 
                <VolumeOffIcon sx={{ color: "#b3b3b3" }} /> :
                volume < 34 ? 
                <VolumeMuteIcon sx={{ color: "#b3b3b3" }} /> :
                volume < 67 ? 
                <VolumeDownIcon sx={{ color: "#b3b3b3" }} /> : 
                <VolumeUpIcon sx={{ color: "#b3b3b3" }} />}

                <Slider 
                    size="small"
                    defaultValue={volume}
                    max={100}
                    valueLabelDisplay="off"
                    sx={{
                        color: "#b3b3b3",
                        maxWidth: "100px"
                    }}
                    onChange={handleVolumeChange}/>
                
                <OpenInFullIcon 
                    sx={{
                        color: "#b3b3b3"
                    }}/>

            </Stack>
        </>
    );
}