import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { GetSortedPostsData } from '@server/lib/get_news_list'
import StepBanner from '@src/components/StepBanner'

const PostLink = (props: any) => (
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

export function Home(props: any) {
    return (
        <Layout>
            <div className="one-col separator">
                <StepBanner />
            </div>
            <div className="one-col separator">
                <div className="col">
                    <h2>Welcome to the Shen Lab</h2>
                    <p>Our goals are:<br />
                        &nbsp;1. Through the integration of large-scale genome transcriptome and other multi-omics data for computational biology analysis <br />&nbsp; &nbsp;&nbsp; and algorithm development.<br />
                        &nbsp;2. To study the biological mechanism of genome expression regulation in different diseases.<br />
                        &nbsp;3. To predict and screen drug targets for Rare diseases or cancer and diagnosis biomarkers.<br />
                        &nbsp;4. To develop nucleic acid therapy and small molecule therapy for diseases such as rare genetic diseases.<br />
                        <br />
                        We're located at the  Zhejiang University Medical Center in 1369 Wenyixi Road, Yuhang , Hangzhou, Zhejiang.</p>
                </div>
                <div><br /><br /></div>
            </div>
            <div className="two-col separator">
                <div className="col">
                    <h2>Lab News</h2>
                    <ul>
                        {props.allPostsData.map(({ id, date, title, content }: any) => (
                            <li key={id}>
                                <b>{date}</b> &nbsp; <PostLink id={id} title={title} content={content} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col last">
                    <img src="images/evolution.png" alt="monkeyman" height="142" width="400" />
                </div>
            </div>
            <footer>
                <div className="footerleft">
                    Developed by <a href="https://github.com/SilverNebula">SilverNebula</a> &nbsp;
                </div>
                <div className="footerright">
                    <a href="https://person.zju.edu.cn/shenning">中文主页</a> | <a href="/admin">Official</a> | <Link href="/contact"><a>Contact</a></Link>
                </div>
            </footer>
        </Layout>
    )
}
export default Home;