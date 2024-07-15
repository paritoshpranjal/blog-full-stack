import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogPosts = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetchPost();
    }, []);
    const fetchPost = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/v1/blog'
            );
            setPosts(response.data);
        } catch (error) {
            console.error('error', error);
        }
    };

    const handleDelete = async (id: any) => {
        if (window.confirm('Are you sure you want to delete this post ?')) {
            try {
                await axios.delete(`http://localhost:8080/api/v1/blog/${id}`);
                fetchPost();
            } catch (error) {
                console.error('error', error);
            }
        }
    };

    const handleUpdate = async () => {

    }

    return (
        <Box>
            {posts.map((post) => (
                <Box
                    key={post.id}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography>{post.title}</Typography>
                    <Typography>{post.category}</Typography>
                    <Typography>{post.description}</Typography>
                    <Typography>{post.status}</Typography>
                    <Button
                        onClick={() => handleDelete(post.id)}
                        variant="contained"
                        sx={{ width: '10vw' }}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={() => window.location.href = `/edit/${post.id}`}
                        variant="contained"
                        sx={{ width: '10vw' }}
                    >
                        Edit
                    </Button>
                </Box>
            ))}
        </Box>
    );
};

export default BlogPosts;
