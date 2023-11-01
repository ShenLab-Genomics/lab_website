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
        <Link href="http://tools.shenlab-genomics.org/tools">Webserver</Link>
        <p>Multimodal Analysis Generated Pathogenic Impact Evaluator</p>
      </li>
      <li>
        <b>SpTransformer</b>{" "}
        <Link href="http://tools.shenlab-genomics.org/tools">Webserver</Link>
        <p>
          The SpliceTransformer (SpTransformer) is a deep learning tool designed
          to predict tissue-specific splicing sites from pre-mRNA sequences.
        </p>
      </li>
      <li>
        <b>Anchored-fusion</b>{" "}
        <Link href="https://github.com/ShenLab-Genomics/Anchored-Fusion">
          Github repository
        </Link>
        <p>
          The Anchored-fusion is a bioinformatic tool which detects fusion genes
          bases on paired-end RNA-sequence with ultrahigh sensitivity.
          Anchored-fusion target on the gene you choose, it will give the fusion
          genes including the target gene. Other fusion genes will not be
          represented in the output file.
        </p>
      </li>
      <li>
        <b>RESA</b>{" "}
        <Link href="https://github.com/ShenLab-Genomics/RESA">
          Github repository
        </Link>
        <p>
          RESA detects somatic mutation with high precision directly from
          scRNA-seq data. The key assumption of this method is that cancer cells
          evolve in a clonal manner and thus expressed somatic mutations have
          cross-cell recurrence, whereas the noise and artefacts are likely
          distributed randomly with small probability of recurrence across the
          cell population. RESA is composed of three main steps: initial variant
          calling, filtering and labeling, and modeling and refinement.
        </p>
      </li>
    </div>
  </Layout>
);
export default Tools;
