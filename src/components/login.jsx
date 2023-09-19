import styled from "@emotion/styled";
import { Box, Button, Grid, ListItem, Paper, Stack, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';





const Item = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    width: "70%",
    margin: "100px",



}));




const Sign = () => {
    return (
        <Box sx={{ marginRight: "100px", }}>
            <Grid container spacing={2} columns={12} >


                <Grid item xs={6}>
                    <Box sx={{ margin: '200px', boxShadow: 'inherit' }}>
                        <Typography color="blue" fontSize={50} >Mohammad </Typography>
                        <Typography fontSize={15} >connect with friends and the world  around you on mohammad</Typography>

                    </Box>

                </Grid>


                <Grid item xs={6}  >
                    <Box sx={{ margin: '90px', marginRight: '1px' }}>

                        <Box
                            sx={{ '& > :not(style)': { m: 1, width: '50ch', }, borderRadius: "6px", border: "1px solid black", padding: "10px" }}
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Username" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="password" variant="outlined" />
                            <TextField id="outlined-basic" label="password again" variant="outlined" />

                            <Stack spacing={2} direction="column" alignItems={"center"}>


                                <Button
                                    variant="text"
                                    endIcon={<SendIcon />}
                                    sx={{ backgroundColor: "blue", width: "460px", }}

                                >
                                    text
                                </Button>

                                <Button
                                    sx={{ backgroundColor: "green", width: "230px", }}

                                    variant="contained"
                                >
                                    Contained
                                </Button>

                            </Stack>



                        </Box>
                    </Box>
                </Grid>






            </Grid>
        </Box>





    );
}

export default Sign;