import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import React from 'react';
import { Button, Slider, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const styles = {
    root: {
        position: 'relative',

    },
};

export default function StepBanner(props: any) {
    const theme = useTheme()
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
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{ height: '30%', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Box sx={styles.root}>
                <AutoPlaySwipeableViews index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={50000}
                    direction='incremental'
                    ignoreNativeScroll={true}
                >
                    {steps.map((step: string, idx: number) => (
                        <Box sx={{ textAlign: 'center', overflow: 'hidden', display: 'flex', justifyContent: 'center' }} key={idx}>
                            <img src={step} style={{ maxHeight: 400 }} />
                        </Box>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>

            {/* <Box sx={{ textAlign: 'center' }}>
                <img src={steps[activeStep]} style={{ maxHeight: 400 }} />
            </Box> */}

            <Box sx={{ width: 300, marginLeft: 'auto', marginRight: 'auto', alignItems: 'center' }}>
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