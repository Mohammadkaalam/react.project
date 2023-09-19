import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/feed";
import { Box, Stack, createTheme } from "@mui/material";
import Navbar from "./components/navbar";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { rbar } from "./components/dummyData";
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Rightbar/>
          <Feed />
          <Sidebar
            setMode={setMode} mode={mode}
          />
        </Stack>
        <Add />

      </Box>

    </ThemeProvider>



  );
}


export default App;

