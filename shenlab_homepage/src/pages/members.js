import { GetMemberList } from '@server/lib/get_member_list';
import Layout from '../components/Layout'
import PersonInfo from '@src/components/PersonInfo'
import Grid from '@mui/material/Grid';
export async function getServerSideProps() {
    const memberList = GetMemberList();
    // console.log(memberList)
    return {
        props: {
            teachers: memberList['teacher'],
            students: memberList['student'],
        }
    }
}

const Members = (props) => (
    <Layout>
        <h2>Members</h2>
        <Grid container spacing={2}>
            {props.teachers.map((item, index) => (
                <Grid item xs={6} key={index}>
                    <PersonInfo props={item} />
                </Grid>
            ))}
        </Grid>
        <Grid container columnSpacing={2} rowSpacing={0}>
            {props.students.map((item, index) => (
                <Grid item xs={6} key={index}>
                    <PersonInfo props={item} />
                </Grid>
            ))}
        </Grid>
    </Layout>
)
export default Members