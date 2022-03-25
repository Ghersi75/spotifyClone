import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Slider from '@mui/material/Slider';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function PlayBar() {
    const [paused, setPaused] = React.useState(true);
    const [time, setTime] = React.useState(100);
    const [maxTime, setMaxTime] = React.useState(179)

    const handlePauseClick = () => {
        setPaused(!paused);
        // Pause and play track based on whats happening. Come back later
    }

    const formatTime = (time: number) => {
        if (time % 60 < 10) {
            return `${Math.floor(time / 60)}:0${time % 60}`
        }
        return `${Math.floor(time / 60)}:${time % 60}`
    }

    const handlePlayDrag = (e: React.SyntheticEvent | Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setTime(newValue);
        }
    }

    return(
        <>
            <Stack
                direction="column">
                <Stack
                    direction="row"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                        <ShuffleIcon sx={{ 
                            color: "#b3b3b3",
                            width: "18px" }}/>
                        <SkipPreviousIcon sx={{ color: "#b3b3b3",
                             }}/>
                        {paused ?
                        <PlayCircleIcon sx={{
                            color: "white",
                            width: "40px",
                            height: "40px"
                        }}
                        onClick={handlePauseClick}/>
                        :
                        <PauseCircleIcon sx={{
                            color: "white",
                            width: "40px",
                            height: "40px"
                        }}
                        onClick={handlePauseClick}/>}

                        <SkipNextIcon sx={{ color: "#b3b3b3" }}/>
                        <RepeatIcon sx={{ color: "#b3b3b3", width: "18px" }}/>
                </Stack>
                <Stack 
                    direction="row"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{

                    }}>
                        <Typography
                            sx={{
                                color: "#acacac",
                                fontSize: "12px",
                                userSelect: "none"
                            }}>
                            {formatTime(time)}
                        </Typography>
                        <Slider 
                            size="small"
                            defaultValue={time}
                            max={maxTime}
                            valueLabelDisplay="off"
                            sx={{
                                color: "#b3b3b3",
                            }}
                            onChange={handlePlayDrag}/>
                        <Typography
                            sx={{
                                color: "#acacac",
                                fontSize: "12px",
                                userSelect: "none"
                            }}>
                            {formatTime(maxTime)}
                        </Typography>
                </Stack>
            </Stack>
        </>
    );
}