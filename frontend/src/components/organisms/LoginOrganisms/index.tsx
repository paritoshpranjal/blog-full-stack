import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import TextfiledWithTypography from '../../molecules/TextFieldWithTypography';
import {
    Button,
    IconButton,
    Typography,
    useStepperContext
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    emailRegexPattern,
    passwordRegexPattern
} from '../../../utils/constant';
import { postUser } from '../../../services/calls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)({
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // gap: '.5rem'
});

const LoginOrganisms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmail = (e: any) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setEmailError(validateEmail(emailValue) ? '' : 'Enter correct email');
    };

    const handlePassword = (e: any) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        setPasswordError(
            validatePassword(passwordValue) ? '' : 'Enter correct password'
        );
    };

    const validateEmail = (value: any) => {
        return emailRegexPattern.test(value);
    };
    const validatePassword = (value: any) => {
        return passwordRegexPattern.test(value);
    };

    const handleEyeClick = () => {
        setShowPassword(!showPassword);
    };

    const handleButtonClick = async () => {
        if (validateEmail(email) && validatePassword(password)) {
            try {
                const data = { email: email, password: password };
                const response = await axios.post(
                    'http://localhost:8080/api/v1/user/register',
                    data
                );
                console.log(response);
                console.log('login successfull');
                navigate('/blog');
            } catch (error) {
                console.error('error', error);
            }
        }
    };

    return (
        <StyledBox>
            <TextfiledWithTypography
                placeholder="Enter you email"
                label={'Email'}
                header="Email"
                value={email}
                onTextfiledChange={handleEmail}
                type="email"
                helperText={emailError}
            />

            <TextfiledWithTypography
                placeholder="Enter you password"
                label={'Password'}
                header="Password"
                value={password}
                onTextfiledChange={handlePassword}
                type={showPassword ? 'text' : 'password'}
                helperText={passwordError}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={handleEyeClick}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    )
                }}
            />
            <Button onClick={handleButtonClick} variant="contained" >
                <Typography>Login</Typography>
            </Button>
        </StyledBox>
    );
};

export default LoginOrganisms;
