import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import React from 'react';
import { Button, Slider, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function StepBanner(props: any) {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = props.list;
    const handleNext = () => {
        if (activeStep >= steps.length - 1) {
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
    const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
        setActiveStep(value as number);
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
                        max={steps.length - 1}
                        onChange={handleChange}
                    />
                    <Button onClick={handleNext}><ArrowForwardIosIcon /></Button>
                </Stack>
            </Box>
        </Box>
    )
}