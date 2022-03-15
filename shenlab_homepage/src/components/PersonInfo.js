import style from '../styles/PersonInfo.module.css'
import Card from '@mui/material/Card'
import { CardContent, Divider, Grid, Typography } from '@mui/material';
import Layout from './Layout';
function PersonInfo1(props) {
    console.log(props);
    return (
        <p>1</p>
    )
}
const PersonInfo = ({ props }) => (
    <span>
        <div className={style.photodiv}>
            <Card><CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={6} >
                        {props.photo && (
                            <img className={style.photo} src={props.photo} />
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item>
                                <Typography variant='h5' sx={{ display: 'inline-block' }}>{props.name} </Typography>
                                <Typography variant='p'>  {props.class}</Typography>
                            </Grid>
                            <Grid item>
                                {props.email ? (<Typography variant='p'>Email: {props.email}</Typography>) : null}
                                <br />
                                {props.interest ? (<Typography variant='p'>Research interest: {props.interest}</Typography>) : null}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            </Card>
        </div>
        <br />
    </span >
)
export default PersonInfo