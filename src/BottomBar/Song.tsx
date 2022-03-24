import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


export default function Song() {
    const [clicked, setClicked] = React.useState(false);

    const handleLikeClick = () => {
        setClicked(!clicked);
        // Add to liked or remove based on whats happening. Come back to it when learning backend stuff
    }

    return(
        <>
            {/* Album cover, song name, artist name, heart icon */}
            <Stack 
                direction="row"> 
                <Box
                    component="img"
                    sx={{
                        height:55,
                        width: 55
                    }}
                    src="https://t2.genius.com/unsafe/488x0/https%3A%2F%2Fimages.genius.com%2F774c218f9e0aab310f622ee742957c3d.1000x1000x1.jpg">
                </Box>
                <Stack 
                    direction="column"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "15px"
                        // border: "solid white 2px"

                    }}>
                    <Typography 
                        sx={{
                            color: "#fdfdfd",
                            fontSize: "14px",
                            // Disable highlighting for user
                            userSelect: "none"
                        }}>
                        Medusa
                    </Typography>
                    <Typography 
                        variant="caption"
                        sx={{
                            color: "#acacac",
                            lineHeight: ".7",
                            fontSize: "12px",
                            userSelect: "none"
                        }}>
                        H Magnum, GIMS
                    </Typography>
                </Stack>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "25px"
                    }}
                    display="flex"
                    justifyContent="center">
                    {clicked ? 
                    <FavoriteOutlinedIcon 
                        sx={{
                            color: "#1db954",
                        }}
                        onClick={handleLikeClick}>
                        
                    </FavoriteOutlinedIcon> 
                    :
                    <FavoriteBorderOutlinedIcon
                        sx={{
                            color: "white",
                        }}
                        onClick={handleLikeClick}>
                    </FavoriteBorderOutlinedIcon>}
                </Box>
            </Stack>
        </>
    );
}