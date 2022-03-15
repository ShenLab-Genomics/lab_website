import Layout from '../components/Layout';
import Link from 'next/link';
import { GetSortedPostsData } from '@server/lib/test_table'

const PostLink = (props) => (
    <Link href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
    </Link>
)

export async function getStaticProps() {
    const allPostsData = GetSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
export default function News({ allPostsData }) {
    return (
        <Layout>
            <h2>News</h2>
            <ul>
                {allPostsData.map(({ id, date, title, content }) => (
                    <li key={id}>
                        <b>{date}</b> &nbsp; <PostLink id={id} title={title} content={content} />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}