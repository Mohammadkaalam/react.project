import { AppBar, Avatar, Badge, Box, Drawer, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography, createTheme, styled } from "@mui/material";
import React, { useState } from "react";
import { Home, Mail, Notifications, Pets } from "@mui/icons-material";
import Derawer from "./Derawer";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    marginRight: "200px"
}));
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));
const UserSide = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [side, setSide] = useState(false)

    return (
        <AppBar position="sticky">
            <StyledToolbar>

                <Avatar sx={{ display: { xs: "none", sm: "block" }, width: 30, height: 30 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HPTntcspqMm1Vy1l_Hkru3Cj_roRgnhqiA&usqp=CAU"
                />

                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }, marginRight: "200px" }} >mohammad klm</Typography>


                <UserSide onClick={(e) => setSide(true)}>
                    <Pets />
                </UserSide>

                <Search>   <InputBase placeholder="search..." /></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>

                    <MenuIcon
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>


                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HPTntcspqMm1Vy1l_Hkru3Cj_roRgnhqiA&usqp=CAU"
                    />
                    <Typography variant="span">mhmd</Typography>

                    <MenuIcon />

                </UserBox>


            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClick={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

            <Drawer
                anchor="left"
                open={side}
                onClick={(e) => setSide(false)}
            >
                <Box p={2} width="200px" textAlign="center" role="presentation" >

                    <Derawer />

                </Box>

            </Drawer>



        </AppBar>
    )
}
export default Navbar