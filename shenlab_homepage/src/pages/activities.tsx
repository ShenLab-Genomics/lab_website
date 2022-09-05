import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
const piclist = [
    '/images/activities/p1.jpg',
    '/images/activities/p2.jpg',
    '/images/activities/p3.jpg',
    '/images/activities/p4.jpg',
    '/images/activities/p5.jpg',
    '/images/activities/p6.jpg',
    '/images/photo/photo2207x1.jpg',
    '/images/photo/photo2207x2.jpg'
]
const Activities: NextPage = () => (
    <Layout>
        <h2>Lab Activities</h2>
        <Box>
            <Grid container spacing={2} justifyContent="center"
                alignItems="center">
                {piclist.map((url, idx: number) => (
                    <Grid item key={idx} xs={6}>
                        <Box sx={{ width: 400 }}>

                            <Paper sx={{
                                width: 500,
                                height: 350,
                                backgroundImage: `url(` + url + `)`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }} />
                        </Box>
                        {/* <img src={url} style={{ maxWidth: '500px' }} /> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Layout>
)
export default Activities