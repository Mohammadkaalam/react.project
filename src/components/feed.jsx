
import { Box, Card } from "@mui/material";
import React from "react";
import Post from "./Post";
import { posts } from "./dummyData";
const Feed = () => {
    return (
        
        <Box flex={5} p={2} >
            {posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
            



        </Box>
    )
}
export default Feed