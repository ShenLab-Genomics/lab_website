import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
const Contact: NextPage = () => (
    <Layout>
        <h2>Join us</h2>
        <p>Dr. Shen, the principal investigator of the research group,
            is currently a Principle Investigator of Hundred Talents Program Investigator of Zhejiang University Medical Center.
            Shen&apos;s laboratory has a free academic research atmosphere,
            which supports research team members to independently explore the topics of interest.
        </p><p>
            The research group has organized a number of students with multidisciplinary specialty background,
            and has long-term cooperation with world-class research institutions and scholars at home and abroad,
            providing international development space for students. Due to the development needs of the laboratory,
            we are looking for a group of young researchers who are interested in bioinformatics, pharmacogenetics,
            and genomic analysis of transcriptional Regulation.
        </p>
        <p>
            You can learn more about our lab&apos;s work on our <Link href="/publish"><a>Publications</a></Link> and <Link href="/research"><a>Research</a></Link> pages.</p>
        <p><b>Click here <a href='https://person.zju.edu.cn/shenning'>here</a> to get the position information!</b></p>
        <h2>Contact us</h2>
        <li>
            Email:  shenningzju@zju.edu.cn
        </li>
        <br />
    </Layout>
)
export default Contact