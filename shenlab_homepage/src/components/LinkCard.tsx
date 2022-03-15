import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NextPage } from "next"
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export interface LinkCardProps {
    name: string,
    detail?: string,
    url: string,
}
export function LinkCard({ props }: any) {
    return (
        <Grid item xs={2} sm={4} md={4} key={0}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
                        {props.name}
                    </Typography>
                    <Typography variant="body1">
                        {props.detail}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={props.url}>Link</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default LinkCard;