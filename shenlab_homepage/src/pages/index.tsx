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
                <div className="col">
                    <h2>Welcome to the Shen&apos;s Lab</h2>
                    <p>
                        Dr. Ning Shen received her B.S. majoring in Biological Science from Fudan University in 2010,
                        followed by a Ph.D. in Pharmacology with a Certificate in Computational Biology from Duke University in 2016.
                        After her PhD, she joined Fulcrum Therapeutics as computational biologist.
                    </p>
                    <p>
                        During her industry work, she developed drug target identification algorithms for rare diseases,
                        which was recommended by Professor James Collins at MIT, a world well-known scientist holding members of five American Academies,
                        and was applied to several disease projects of the company.
                        In particular, she worked on FSHD drug development from early screening all the way to phase II clinical trials.
                    </p>
                    <p>
                        As one of the inventors, more than 20 international patents have been declared, 5 of which have been granted by the United States,
                        Canada, Japan and other countries.
                        In 2019, she joined the Park Lab in the department of Biomedical Informatics at Harvard Medical School as research fellow.
                        In March 2021, Dr. Shen started her faculty position as principal investigator at Zhejiang University Medical Center in Hangzhou, China.
                    </p>
                    <p>
                        Up to now, she has published 9 papers in top journals like Molecular Cell, PNAS, Cell Systems.
                        Her first author papers have received commentary from the same issue of PNAS, and recommended by F1000 Prime Peers.
                        Her research areas focus on pharmacogenomics, bioinformatics and regulatory genomics.
                    </p>
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
                    <img src="images/evolution.png" alt="monkeyman" height="106" width="300" />
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