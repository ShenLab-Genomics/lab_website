import style from '../styles/PersonInfo.module.css'
import Card from '@mui/material/Card'
import { CardContent, Divider, Grid, Typography } from '@mui/material';
import Layout from './Layout';
export function PersonInfoSmall({ props }) {
    return (
        <Card className={style.photodiv_small} sx={{ backgroundColor: '#d5d5d520' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid container direction="column" spacing={0}>
                    <Grid className={style.img_grid}>
                        {props.photo && (
                            <img className={style.photo1} src={props.photo} />
                        )}
                    </Grid>
                    <Grid>
                        <Typography variant='h5' sx={{ display: 'inline-block' }}>{props.name} </Typography>
                        <br />
                        {/* <Typography variant='p'>  {props.class}</Typography> */}
                        {props.email ? (<Typography variant='p'>{props.email}</Typography>) : null}


                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
const PersonInfo = ({ props }) => (
    <span>
        {/* <div className={style.photodiv}> */}
        <Card className={style.photodiv} sx={{ backgroundColor: '#d5d5d520' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid container direction="row" spacing={0}>
                    <Grid className={style.img_grid} item xs={8} >
                        {props.photo && (
                            <img className={style.photo} src={props.photo} />
                        )}
                    </Grid>
                    {/* <Grid item xs={4}> */}
                    <Grid item xs={4} container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant='h5' sx={{ display: 'inline-block' }}>{props.name} </Typography>
                            {/* <Typography variant='p'>  {props.class}</Typography> */}
                        </Grid>
                        <Grid item>
                            {props.email ? (<Typography variant='p'>Email: {props.email}</Typography>) : null}
                            <br />
                            {props.interest ? (<Typography variant='p'>Research interest: {props.interest}</Typography>) : null}
                        </Grid>
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </CardContent>
        </Card>
        {/* </div> */}
        <br />
    </span >
)
export default PersonInfo;