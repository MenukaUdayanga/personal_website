import React from 'react';
import Button from '@mui/material/Button';
import { SvgIconComponent } from '@mui/icons-material'; 

interface ButtonProps {
  btnName: string;
  icon: SvgIconComponent;
}

function IconButton({ btnName, icon: Icon }: ButtonProps) {
  return (
    <Button
      variant="text"
      startIcon={<Icon className="text-black" style={{ fontSize: '1.5rem' }} />}
      className="normal-case md:text-[1.1rem] text-[0.8rem] border-b-4 border-cyan-600 text-black hover:text-blue-500"
      sx={{
        '&:hover': {
          borderColor: 'cyan.600'
        },
      }}
    >
  
      {btnName}
    </Button>
  );
}

export default IconButton;
