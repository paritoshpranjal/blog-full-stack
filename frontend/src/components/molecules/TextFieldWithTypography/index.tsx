import React from 'react';
import { Box, TextField, TextFieldProps, Typography, styled } from '@mui/material';

type TextfiledWithTypographyProps = TextFieldProps & {
    placeholder: string;
    label: string;
    header: string;
    value?: string;
    InputProps?: object;
    onTextfiledChange?: (e:any) => void;
    type: string;
};

const StyledBox = styled(Box)({
    width: '100%',
    height: '100%',
    marginBottom: '1.5rem',
    gap: '.5rem'
});

const TextfiledWithTypography = ({
    placeholder,
    label,
    header,
    value,
    InputProps,
    onTextfiledChange,
    type,
    ...rest
}: TextfiledWithTypographyProps) => {
    return (
        <StyledBox>
            <Typography sx={{ marginBottom: '10px'}}>{header}</Typography>
            <TextField
                placeholder={placeholder}
                label={label}
                value={value}
                InputProps={InputProps}
                onChange={onTextfiledChange}
                type={type}
                {...rest}
            />
        </StyledBox>
    );
};

export default TextfiledWithTypography;
