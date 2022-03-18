import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NextPage } from "next"
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetCardsList } from '@server/lib/get_link_cards.js';
import { LinkCard, LinkCardProps } from "@src/components/LinkCard";
import Divider from "@mui/material/Divider";

export async function getServerSideProps() {
    const memberList = GetCardsList();
    return {
        props: {
            memberList,
        }
    }
}
function Home({ memberList }: any) {
    console.log(memberList)
    return (
        <Container maxWidth='lg'>
            <Box>
                <Typography variant="h2">Some Links</Typography>
                <Divider sx={{ marginTop: '30px', marginBottom: '30px' }} />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {memberList.map((item: any, index: number) => (<LinkCard props={item as LinkCardProps} key={index} />))}
                </Grid>
            </Box>
        </Container>
    )
}
// const Home: NextPage = ({ memberList }: any) => (

// )
export default Home;