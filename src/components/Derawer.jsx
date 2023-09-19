import { AccountBox, AutoStories, DarkMode, Diversity1, Groups, Home, LocalGroceryStore, Pages, Settings } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React, { useState } from "react";


const Derawer = ({ mode, setMode }) => {

    return (
        <Box
            flex={1}
            p={2}
        >
            <Box position="fixed" >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>

                            <ListItemText primary="Homepage" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <AutoStories />
                            </ListItemIcon>

                            <ListItemText primary="pages" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <Groups />
                            </ListItemIcon>

                            <ListItemText primary="groups" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <LocalGroceryStore />
                            </ListItemIcon>

                            <ListItemText primary="marketplace" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <Diversity1 />
                            </ListItemIcon>

                            <ListItemText primary="friends" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>

                            <ListItemText primary="settings" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>

                            <ListItemText primary="profile" />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton Component="a" href="#">

                            <ListItemIcon>
                                <DarkMode />
                            </ListItemIcon>

                            <Switch onChange={e=>setMode(mode==="light"?"dark":"light")} />

                        </ListItemButton>

                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
export default Derawer