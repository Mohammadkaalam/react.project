import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" }, direction: "rtl" }}
        >
            <Box position="absulot" width={300} >
                <Typography variant="h6" fontSize={20} mb={1} sx={{ backgroundColor: "lightblue", width: "35%", borderRadius: "50px" }}>-دوستان انلاین</Typography>

                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEf3-4Wtn7xm9OFPcXy1P1I40gjLd58-x4yzKeAShAnOrofS0Sata56QiIAJr6sKzfp4&usqp=CAU"
                    />
                      <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEf3-4Wtn7xm9OFPcXy1P1I40gjLd58-x4yzKeAShAnOrofS0Sata56QiIAJr6sKzfp4&usqp=CAU"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=828&q=75"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShe3wCajdHZI-jlpufLNBh4l58nRfPqrGtiQN15YH1vjJnvSXoK77fJDEOK2gfJBcMv4o&usqp=CAU"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://static01.nyt.com/images/2018/05/24/arts/24clairo1/24clairo1-facebookJumbo.jpg?year=2018&h=550&w=1050&s=ea77b2ffece047c958d8df92ffcb4b52249b0ee3a3acf2e7a0a2fad6666d8ac3&k=ZQJBKqZ0VN"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://w0.peakpx.com/wallpaper/883/1001/HD-wallpaper-hannah-elzahed-arab-super-star-baby-face-beautiful-eyes-beautiful-face-beautiful-women-cute-girl-egypt-egypt-actress-pretty-girl.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontSize={20} mt={2} mb={2} sx={{ backgroundColor: "lightblue", width: "40%", borderRadius: "50px" }}>
                    -عکس های جدید
                </Typography>


                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://anestisxasapotaverna.gr/wp-content/uploads/2021/12/ARTICLE-1.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontSize={20} mt={2} sx={{ backgroundColor: "lightblue", width: "35%", borderRadius: "50px" }}>
                    -آخرین گفتگو
                </Typography>




                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary=" هفته پیش"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        fontSize="19px"
                                    >
                                        علی نوایی_
                                    </Typography>
                                    {"من در همسایگی شما هستم.اگر کاری داشتید حتما خبرم کنید"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bSwk22Gl_lAMwGEl-hniCA9G4v3Fv1tCcR2CQbRPgXXNclQF3-tEWzs58hosBSJABbQ&usqp=CAU"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary=" ماه پیش"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        fontSize="19px"
                                    >
                                        محمد کاعلم
                                    </Typography>
                                    {" — ای کاش می توانستم بیایم، اما من خارج از شهر هستم…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Girl-With-Cap-Profile-Picture-For-Facebook.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="سال پیش"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        fontSize="19px"
                                    >
                                        سارا کریمی
                                    </Typography>
                                    {' - آیا توصیه هایی در رابطه با پاریس دارید ؟ تا حالا شده…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}
export default Rightbar
