import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import { getPostContent } from '@server/lib/get_post';

export async function getServerSideProps({ query }) {
    var postData = await getPostContent(query.id);
    console.log(postData);
    return {
        props: {
            postData
        }
    }
}

const Page = ({ postData }) => (
    <Layout>
        <h2>{postData.title}</h2>
        <h3>{postData.date}</h3>
        <br />
        <div className='remark' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
)

export default Page