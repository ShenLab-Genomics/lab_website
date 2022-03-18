import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
const Contact: NextPage = () => (
    <Layout>
        <h2>Join us</h2>
        <p>We are actively looking to expand the lab at all levels! We&apos;re located at the  Zhejiang University Medical Center in 1369 Wenyixi Road, Yuhang , Hangzhou, Zhejiang.
            You can learn more about our lab&apos;s work on our <Link href="/publish"><a>Publications</a></Link> and <Link href="/research"><a>Research</a></Link> pages.</p>
        <p><a href='https://person.zju.edu.cn/shenning'>Requirements</a></p>
        <h2>Contact us</h2>
        <li>
            Email:  shenningzju@zju.edu.cn
        </li>
    </Layout>
)
export default Contact