import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import React from 'react';
import { Button, Slider, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const steps = [
    '/images/photo/photo1113.jpg',
    '/images/photo/photo1.png',
]
export default function StepBanner() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        if (activeStep >= 1) {
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        if (activeStep <= 0) {
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleChange = (e: Event, value: number, activeThumb: number) => {
        setActiveStep(value);
    }
    return (
        <Box sx={{ height: '30%', width: '100%' }}>
            <Box sx={{ textAlign: 'center' }}>
                <img src={steps[activeStep]} style={{ maxHeight: 400 }} />
            </Box>

            <Box sx={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}>
                <Stack direction={"row"} spacing={2}>
                    <Button onClick={handleBack}><ArrowBackIosNewIcon /></Button>
                    <Slider aria-label="Temperature"
                        value={activeStep}
                        valueLabelDisplay="off"
                        step={1}
                        marks
                        min={0}
                        max={1}
                        onChange={handleChange}
                    />
                    <Button onClick={handleNext}><ArrowForwardIosIcon /></Button>
                </Stack>
            </Box>
        </Box>
    )
}