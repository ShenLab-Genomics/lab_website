import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { GetSortedPostsData } from '@server/lib/get_news_list'
import { GetBannerList } from '@server/lib/get_banner_list'
import StepBanner from '@src/components/StepBanner'

const PostLink = (props: any) => (
    <Link href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
    </Link>
)
export async function getServerSideProps() {
    const allPostsData = GetSortedPostsData();
    const picList = GetBannerList();
    return {
        props: {
            allPostsData,
            picList
        }
    }
}

export function Home(props: any) {
    return (
        <Layout>
            <div className="one-col separator">
                <StepBanner list={props.picList} />
            </div>
            <div className="one-col separator">
                <div className="col-wide">
                    <h2>About the lab</h2>
                    <p>
                        We are a genomics and bioinformatics research group at Zhejiang University Medical Center.
                        We are also part of the Undiagnosed Disease Division of Liangzhu Laboratory,
                        The First Affiliated Hospital in College of Medicine of Zhejiang University,
                        and Zhejiang University Medical School.
                    </p>
                    <p>
                        Our lab combines “wet-lab” experiments and “dry-lab” computational work.
                        Our aim is to empower precision medicine through computational and statistical analysis of various omics data.
                        We are particularly interested in genetic diagnosis and personalized therapeutic development for rare diseases.
                    </p>
                    <p>
                        We collaborate closely with clinicians and computer science research groups.
                        Our team is interdisciplinary and team members work closely with each other.
                        We believe Together Everyone Achieves More (TEAM)!
                        We are always seeking for motivated and talented research scientists, postdocs, and PhD students.
                        Please do not hesitate to contact us if interested!
                    </p>
                </div>
            </div>
            <div className="one-col separator">
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
            </div>
            <footer>
                <div className="footerleft">
                    {/* Developed by <a href="https://github.com/SilverNebula">SilverNebula</a> &nbsp; */}
                </div>
                <div className="footerright">
                    <a href="https://person.zju.edu.cn/shenning">中文主页</a> | <a href="/admin">Official</a> | <Link href="/contact"><a>Contact</a></Link>
                </div>
            </footer>
        </Layout>
    )
}
export default Home;