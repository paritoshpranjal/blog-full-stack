import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Technology', 'Health', 'Lifestyle'];

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [status, setStatus] = useState('PENDING');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const data = {
                title: title,
                description: description,
                category: category,
                status: status
            };
            console.log(data)
            const response = await axios.post('http://localhost:8080/api/v1/blog',data);
            console.log(response);

        } catch (error) {
            console.error('error', error);
        }
    };

    const handleAllPost = () => {
        navigate("/all-post");
    }

    return (
        <Box sx={{
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',
             gap: '2rem'
        }}>
            <TextField
                label="Title"
                value={title}
                onChange={(e: any) => {
                    setTitle(e.target.value);
                }}
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e: any) => {
                    setDescription(e.target.value);
                }}
                rows={4}
            />
            <TextField
                label="Category"
                value={category}
                onChange={(e: any) => {
                    setCategory(e.target.value);
                }}
                SelectProps={{ native: true }}
            >
                {categories.map((category: any) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </TextField>
            <TextField
                label="Status"
                value={status}
                onChange={(e: any) => {
                    setStatus(e.target.value);
                }}
            >
                <option value={'PENDING'}>PENDING</option>
                <option value={'APPROVED'}>APPROVED</option>
                <option value={'REJECTED'}>REJECTED</option>
            </TextField>
            <Button type="submit" onClick={handleSubmit} variant='contained' sx={{ width: '25vw'}}>
                Save
            </Button>
            <Button type="submit" onClick={handleAllPost} variant='contained' sx={{ width: '25vw'}}>
                See all  Post
            </Button>
        </Box>
    );
};

export default BlogPostForm;
