import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Publish.module.css";
import { Button, Container, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AbstractViewer from "../components/AbstractViewer";
const conference_Proceedings = [
  "Ronco, L., Wagner, K., Cadavid, D., Chang, A., Mellion, M., Robertson, A., Raines, S., Chadchankar, J., Rojas, A., Shieh, P., Shen, N., Statland, J., Tapscott, S., Tawil, R., Engelen, B., Wang, L., Johnson, N., Wallace, O., 2020, A biomarker of DUX4 activity to evaluate losmapimod treatment effect in FSHD phase 2 trials. Neuromuscular Disorders, 30, p.S113",
  "Ronco, L., Cadavid, D., Chang, A., Mellion, M., Rojas, A., Shen, N., Tawil, R., Tapscott, S., Wang, L. and Wallace, O., 2019. P. 47Design of a biomarker of DUX4 activity to evaluate losmapimod treatment effect in FSHD Phase 2 trials. Neuromuscular Disorders, 29, pp.S54-S55.",
  "Wallace, O., Accorsi, A., Barnes, R., Cacace, A., Cadavid, D., Chang, A., Eyerman, D., Gould, R., Kazmirski, S., Maglio, J., Mellion, M., Rahl, P., Rojas, L., Ronco, L., Shen, N., Thompson, L., and Valentine, E., 2019. P. 43Targeting DUX4 expression, the root cause of FSHD: identification of a drug target and development candidate. Neuromuscular Disorders, 29, pp.S53-S54.",
  "Mellion, M., Valentine, E., Accorsi, A., Maglio, J., Shen, N., Robertson, A., Barnes, R., Kazmirski, S., Chang, A., Eyerman, D. and Thompson, L., 2019. FTX-1821 for Treatment of FSHD at its Root Cause: Results of a Clinical Trial in a Dish Neurology 92 S23. 006.",
  "Leehr, D., Bradley, J., Gordan, R., Shen, N. and Lapp, H., 2018. iMADS: A sustainable software collaboration for predicting transcription factor binding specificity. F1000Research, 7.",
  "Rojas, L., Accorsi, A., Shen, N., Maglio, J., Chang, A., Rahl, P. and Cacace, A., 2017. Pharmacologic modulation of DUX4-dependent phenotypes in FSHD. Neuromuscular Disorders, 27, p.S200.",
];

const _articles = [
  {
    authors:
      "Liu, Y. #, Zhang, T. #, You, N., Wu, S. *, & <b>Shen, N.*</b> (2024).",
    title:
      "MAGPIE: accurate pathogenic prediction for multiple variant types using machine learning approach.",
    journal: "<b>Genome medicine</b>,16(1),3.",
    link: "https://doi.org/10.1186/s13073-023-01274-4",
    year: 2024,
    abstract:
      "Identifying pathogenic variants from the vast majority of nucleotide variation remains a challenge. We present a method named Multimodal Annotation Generated Pathogenic Impact Evaluator (MAGPIE) that predicts the pathogenicity of multi-type variants. MAGPIE uses the ClinVar dataset for training and demonstrates superior performance in both the independent test set and multiple orthogonal validation datasets, accurately predicting variant pathogenicity. Notably, MAGPIE performs best in predicting the pathogenicity of rare variants and highly imbalanced datasets. Overall, results underline the robustness of MAGPIE as a valuable tool for predicting pathogenicity in various types of human genome variations. MAGPIE is available at https://github.com/shenlab-genomics/magpie.",
  },
  {
    authors:
      "Zhang, T., Jia, H., Song, T., Lv, L., Gulhan, D. C., Wang, H., Guo, W., Xi, R., Guo, H., & <b>Shen, N.</b> (2023).",
    title:
      "De novo identification of expressed cancer somatic mutations from single-cell RNA sequencing data.",
    journal: "<b>Genome medicine</b>, 15(1), 115.",
    link: "https://doi.org/10.1186/s13073-023-01269-1",
    year: 2023,
    abstract:
      "Identifying expressed somatic mutations from single-cell RNA sequencing data de novo is challenging but highly valuable. We propose RESA - Recurrently Expressed SNV Analysis, a computational framework to identify expressed somatic mutations from scRNA-seq data. RESA achieves an average precision of 0.77 on three in silico spike-in datasets. In extensive benchmarking against existing methods using 19 datasets, RESA consistently outperforms them. Furthermore, we applied RESA to analyze intratumor mutational heterogeneity in a melanoma drug resistance dataset. By enabling high precision detection of expressed somatic mutations, RESA substantially enhances the reliability of mutational analysis in scRNA-seq. RESA is available at https://github.com/ShenLab-Genomics/RESA .",
  },
  {
    authors:
      "Wu, L., Wang, H., Chen, Y., Zhang, X., Zhang, T., <b>Shen, N.</b>, Tao, G., Sun, Z., Ding, Y. *, Wang, W. *, & Bu, J. * (2023).",
    title:
      "Beyond radiologist-level liver lesion detection on multi-phase contrast-enhanced CT images by deep learning.",
    journal: "<b>iScience, 26(11)<b>, 108183.",
    link: "https://doi.org/10.1016/j.isci.2023.108183",
    year: 2023,
    abstract:
      "Accurate detection of liver lesions from multi-phase contrast-enhanced CT (CECT) scans is a fundamental step for precise liver diagnosis and treatment. However, the analysis of multi-phase contexts is heavily challenged by the misalignment caused by respiration coupled with the movement of organs. Here, we proposed an AI system for multi-phase liver lesion segmentation (named MULLET) for precise and fully automatic segmentation of real-patient CECT images. MULLET enables effectively embedding the important ROIs of CECT images and exploring multi-phase contexts by introducing a transformer-based attention mechanism. Evaluated on 1,229 CECT scans from 1,197 patients, MULLET demonstrated significant performance gains in terms of Dice, Recall, and F2 score, which are 5.80%, 6.57%, and 5.87% higher than state of the arts, respectively. MULLET has been successfully deployed in real-world settings. The deployed AI web server provides a powerful system to boost clinical workflows of liver lesion diagnosis and could be straightforwardly extended to general CECT analyses.",
  },
  {
    authors:
      "Lv, L. #, Zhang, T. #, Jia, H., Zhang, Y., Ahsan, A., Zhao, X., Chen, T. *, Shen, Z. *, & <b>Shen, N.</b> * (2022).",
    title:
      "Temporally integrated transcriptome analysis reveals ASFV pathology and host response dynamics.",
    journal: "<b>Frontiers in immunology</b>, 13, 995998.",
    link: "https://doi.org/10.3389/fimmu.2022.995998",
    year: 2022,
  },
  {
    authors:
      "Jin, Z., Huang, W., <b>Shen, N.</b>, Li, J., Wang, X., Dong, J., Park, P. J., & Xi, R. (2022).",
    title: "Single-cell gene fusion detection by scFusion.",
    journal: "<b>Nature communications</b>, 13(1), 1084.",
    link: "https://doi.org/10.1038/s41467-022-28661-6",
    year: 2022,
  },
  {
    authors:
      "Li, J., Cai, Z., Vaites, L. P., <b>Shen, N.</b>, Mitchell, D. C., Huttlin, E. L., Paulo, J. A., Harry, B. L. *, & Gygi, S. P. * (2021).",
    title: "Proteome-wide mapping of short-lived proteins in human cells.",
    journal: "<b>Molecular cell</b>, 81(22), 4722-4735.e5.",
    link: "https://doi.org/10.1016/j.molcel.2021.09.015",
    year: 2021,
  },
  {
    authors:
      "Rojas, L. A., Valentine, E., Accorsi, A., Maglio, J., <b>Shen, N.<b>, Robertson, A., Kazmirski, S., Rahl, P., Tawil, R., Cadavid, D., Thompson, L. A., Ronco, L., Chang, A. N., Cacace, A. M., & Wallace, O. (2020).",
    title:
      "p38&alpha; Regulates Expression of DUX4 in a Model of Facioscapulohumeral Muscular Dystrophy.",
    journal:
      "<b>The Journal of pharmacology and experimental therapeutics</b>, 374(3), 489-498.",
    link: "https://doi.org/10.1124/jpet.119.264689",
    year: 2020,
  },
  {
    authors:
      "<b>Shen, N.</b>, Zhao, J., Schipper, J. L., Zhang, Y., Bepler, T., Leehr, D., Bradley, J., Horton, J., Lapp, H., & Gordan, R. (2018).",
    title:
      "Divergence in DNA Specificity among Paralogous Transcription Factors Contributes to Their Differential In Vivo Binding.",
    journal: "<b>Cell systems</b>, 6(4), 470-483.e8.",
    link: "https://doi.org/10.1016/j.cels.2018.02.009",
    year: 2018,
  },
  {
    authors:
      "Sparks, E. E., Drapek, C., Gaudinier, A., Li, S., Ansariola, M., <b>Shen, N.</b>, Hennacy, J. H., Zhang, J., Turco, G., Petricka, J. J., Foret, J., Hartemink, A. J., Gordân, R., Megraw, M., Brady, S. M., & Benfey, P. N. (2016).",
    title:
      "Establishment of Expression in the SHORTROOT-SCARECROW Transcriptional Cascade through Opposing Activities of Both Activators and Repressors.",
    journal: "<b>Developmental cell</b>, 39(5), 585-596.",
    link: "https://doi.org/10.1016/j.devcel.2016.09.031",
    year: 2016,
  },
  {
    authors:
      "Zhou, T. #, <b>Shen, N. #</b>, Yang, L., Abe, N., Horton, J., Mann, R. S., Bussemaker, H. J., Gordân, R. *, & Rohs, R. * (2015).",
    title:
      "Quantitative modeling of transcription factor binding specificities using DNA shape. ",
    journal:
      "<b>Proceedings of the National Academy of Sciences of the United States of America</b>, 112(15), 4654-4659.",
    link: "https://doi.org/10.1073/pnas.1422023112",
    year: 2015,
  },
  {
    authors:
      "Gordân, R., <b>Shen, N.</b>, Dror, I., Zhou, T., Horton, J., Rohs, R. *, & Bulyk, M. L. * (2013).",
    title:
      "Genomic regions flanking E-box binding sites influence DNA binding specificity of bHLH transcription factors through DNA shape.",
    journal: "<b>Cell reports</b>, 3(4), 1093-1104.",
    link: "https://doi.org/10.1016/j.celrep.2013.03.014",
    year: 2013,
  },
  {
    authors:
      "Chen, J., Ma, M., <b>Shen, N.</b>, Xi, J. J. *, & Tian, W. * (2013). ",
    title:
      "Integration of cancer gene co-expression network and metabolic network to uncover potential cancer drug targets.",
    journal: "<b>Journal of proteome research</b>, 12(6), 2354-2364.",
    link: "https://doi.org/10.1021/pr400162t",
    year: 2013,
  },
  {
    authors:
      "Qi, X., Disatnik, M. H., <b>Shen, N.</b>, Sobel, R. A., & Mochly-Rosen, D. (2011).",
    title:
      "Aberrant mitochondrial fission in neurons induced by protein kinase C{delta} under oxidative stress conditions in vivo.",
    journal: "<b>Molecular biology of the cell</b>, 22(2), 256-265.",
    link: "https://doi.org/10.1091/mbc.E10-06-0551",
    year: 2011,
  },
];

// 专利
const _patents = [
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2023. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Japanese Patent Application 2023113691A. ",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2020. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. U.S. Patent 10,537,560.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2020. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. Israel Patent Offiece IL273589.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2020. Use of p38 inhibitors to reduce expression of dux4. U.S. Patent 11479770B2.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      " Fulcrum Therapeutics Inc, 2019. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. U.S. Patent 10342786.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2019. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Japanese Patent Application 7012152.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2019. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. European Patent Office 3691620T3.",
  },
  {
    authors:
      "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., <b>Shen, N.</b>, Robertson, A.S. and Chang, A.N.",
    title:
      "Fulcrum Therapeutics Inc, 2018. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Canadian Intellectual Property Office CA3077499.",
  },
];
const Publish = () => (
  <Layout>
    <Grid container>
      <Grid xs={10}>
        <h2 id="Articles">Publications</h2>
        {_articles.map((item, idx) => (
          // <div className={styles.row} key={idx}>
          //   <li>
          //     <span dangerouslySetInnerHTML={{ __html: item.authors }}></span>{" "}
          //     <span dangerouslySetInnerHTML={{ __html: item.title }}></span>{" "}
          //     <span dangerouslySetInnerHTML={{ __html: item.journal }}></span>{" "}
          //     {/* <Link href={item.link}> */}
          //     {/* <a>Link</a> */}
          //     {/* <SearchOutlinedIcon></SearchOutlinedIcon> */}
          //     {/* </Link> */}
          //     <IconButton aria-label="detail" href={item.link} size="small">
          //       <SearchIcon />
          //     </IconButton>
          //   </li>
          // </div>
          <AbstractViewer
            title={item.title}
            authors={item.authors}
            journal={item.journal}
            abstract={item.abstract}
            url={item.link}
          />
        ))}

        <h2 id="Patents">Patents</h2>
        {_patents.map((item, idx) => (
          <div className={styles.row} key={idx}>
            <li>
              <span dangerouslySetInnerHTML={{ __html: item.authors }}></span>{" "}
              <span dangerouslySetInnerHTML={{ __html: item.title }}></span>{" "}
            </li>
          </div>
        ))}

        <h2 id="Conference_Proceedings">Conference Proceedings</h2>
        {conference_Proceedings.map((item, idx) => (
          <div className={styles.row} key={idx}>
            <li>{item}</li>
          </div>
        ))}
      </Grid>
      <Grid xs={2}>
        <h3>Contents</h3>
        <nav className={styles.jss123}>
          <li>
            <a href="#Articles">Articles ({_articles.length})</a>
          </li>
          <li>
            <a href="#Patents">Patents ({_patents.length})</a>
          </li>
          <li>
            <a href="#Conference_Proceedings">
              Conference Proceedings ({conference_Proceedings.length})
            </a>
          </li>
        </nav>
      </Grid>
    </Grid>
  </Layout>
);
export default Publish;
