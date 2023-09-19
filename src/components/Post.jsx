import React, { useState } from "react"
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Menu, MenuItem, Popover, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';


const Post = ({ post }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    console.log(post);
    return (



        <Card sx={{ margin: 5, direction: "rtl" }} >

            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                avatar={
                    <Avatar sx={{ bgcolor: "red", margin: 2 }} aria-label="recipe"
                        src={post.imgprofile}
                    >
                    </Avatar>
                }

                title={post.username}
                subheader={post.data}
            />
            <CardMedia
                component="img"
                height="20%"
                image={post.photo}
                alt="portable"
                sx={{ marginTop: "-20px", borderRadius: "3px" }}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {post.desc}
                </Typography>
            </CardContent><hr width="70%" color="lightblue" />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ color: "red" }}>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                </IconButton>
                <IconButton aria-label="share">
                    <Share onClick={handleClick} />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Typography sx={{ p: 1, borderRadius: "6px", color: "pink" }}><InstagramIcon /> </Typography>
                        <Typography sx={{ p: 1, borderRadius: "6px", color: "green" }}><WhatsAppIcon /></Typography>
                        <Typography sx={{ p: 1, borderRadius: "6px", color: "blue" }}><TelegramIcon /></Typography>

                    </Popover>
                </IconButton>

            </CardActions>


        </Card>
    )
}
export default Post
