import { GetMemberList } from "@server/lib/get_member_list";
import Layout from "../components/Layout";
import PersonInfo from "@src/components/PersonInfo";
import { PersonInfoSmall } from "@src/components/PersonInfo";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
export async function getServerSideProps() {
  const memberList = GetMemberList();
  // console.log(memberList)
  return {
    props: {
      teachers: memberList["PI"],
      coordinator: memberList["worker1"],
      ra: memberList["worker2"],
      postdocs: memberList["student1"],
      students: memberList["student2"],
      masterStudents: memberList["student3"],
      former: memberList["former_student"],
    },
  };
}

const Members = (props) => (
  <Layout>
    <Stack>
      <h1>Members</h1>
      <h2>Principle Investigator</h2>
      <Grid container spacing={2}>
        {props.teachers.map((item, index) => (
          <Grid item xs={6} key={index}>
            <PersonInfo props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Administrative Coordinator</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.coordinator.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PersonInfoSmall props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Technicians</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.ra.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PersonInfoSmall props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Postdocs</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.postdocs.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PersonInfoSmall props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Ph.D Students</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.students.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PersonInfoSmall props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Master Students</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.masterStudents.map((item, index) => (
          <Grid item xs={3} key={index}>
            <PersonInfoSmall props={item} />
          </Grid>
        ))}
      </Grid>
      <h2>Former Members</h2>
      <Grid container columnSpacing={2} rowSpacing={0}>
        {props.former.map((item, index) => (
          <Grid item xs={3} key={index}>
            <h3>{item.name}</h3>
          </Grid>
        ))}
      </Grid>
      <Grid container>&nbsp;</Grid>
    </Stack>
  </Layout>
);
export default Members;
