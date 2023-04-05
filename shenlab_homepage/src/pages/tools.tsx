import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Publish.module.css";
const Tools: NextPage = () => (
  <Layout>
    <h2>Public Tools</h2>
    <div className={styles.row}>
      <li>
        <b>MAGPIE</b>{" "}
        <Link href="http://tools.shenlab-genomics.org/tools/MAGPIE">
          MAGPIE
        </Link>
      </li>
    </div>
  </Layout>
);
export default Tools;
