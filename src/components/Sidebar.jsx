import { AccountBox, AutoStories, DarkMode, Diversity1, Groups, Home, LocalGroceryStore, Pages, Settings } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = ({ mode, setMode }) => {

    return (
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}

        >
            <Box position="fixed" >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">



                            <ListItemText primary="صفحه نخست" />

                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="صفحه" />


                            <ListItemIcon>
                                <AutoStories />
                            </ListItemIcon>


                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="گروه " />


                            <ListItemIcon>
                                <Groups />
                            </ListItemIcon>


                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="بازار" />

                            <ListItemIcon>
                                <LocalGroceryStore />
                            </ListItemIcon>


                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="دوستان" />

                            <ListItemIcon>
                                <Diversity1 />
                            </ListItemIcon>



                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="تنظیمات" />


                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>


                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemText primary="پروفایل" />

                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>



                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <DarkMode />
                            </ListItemIcon>

                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />

                        </ListItemButton>

                    </ListItem>
                    
                        <Stack sx={{width:"100px",}}>
                            <Button sx={{backgroundColor:"gray"}}  variant="contained"> <ExpandMoreIcon />بیشتر</Button>
                        </Stack>
                    
                </List>
            </Box>
        </Box>
    );
};
export default Sidebar