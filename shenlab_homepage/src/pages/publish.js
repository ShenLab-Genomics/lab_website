import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Publish.module.css";
const patents = [
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2020. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. U.S. Patent 10,537,560.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2020. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. Israel Patent Offiece IL273589.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2019. P38 kinase inhibitors reduce DUX4 and downstream gene expression for the treatment of FSHD. U.S. Patent 10342786.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2019. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Japanese Patent Application 7012152.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2018. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Canadian Intellectual Property Office CA3077499.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2022. Use of p38 inhibitors to reduce expression of dux4. U.S. Patent Application 11479770B2.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2022. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. European Patent Office 3691620T3.",
  "Cacace, A.M., SOTO, L.G.A.R., Thompson III, L.A., Wallace, O.B., Ronco, L.V., Shen, N., Robertson, A.S. and Chang, A.N., Fulcrum Therapeutics Inc, 2023. P38 kinase inhibitors reduce dux4 and downstream gene expression for the treatment of fshd. Japanese Patent Application 2023081029A.",
];
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
      "MAGPIE: accurate pathogenic prediction for multiple variant types using machine learning approach",
    journal: "<b>Genome medicine</b>,16(1),3.",
    link: "https://doi.org/10.1186/s13073-023-01274-4",
    year: 2024,
  },
  {
    authors: "AAA",
    title: "BBB",
    journal: "CCC",
    link: "DDD",
    year: 2024,
  },
];
const _patents = [
  {
    authors: "AAA",
    title: "BBB",
  },
];
const Publish = () => (
  <Layout>
    <h2>Publications</h2>
    {_articles.map((item, idx) => (
      <div className={styles.row} key={idx}>
        <li>
          <span dangerouslySetInnerHTML={{ __html: item.authors }}></span>{" "}
          <span dangerouslySetInnerHTML={{ __html: item.title }}></span>{" "}
          <span dangerouslySetInnerHTML={{ __html: item.journal }}></span>{" "}
          <Link href={item.link}>
            <a>Link</a>
          </Link>
        </li>
      </div>
    ))}
    <div className={styles.row}>
      <li>
        Liu, Y. #, Zhang, T. #, You, N., Wu, S. *, & <b>Shen, N.*</b> (2024).
        MAGPIE: accurate pathogenic prediction for multiple variant types using
        machine learning approach.
        <b>Genome medicine</b>,16(1),3.{" "}
        <Link href="https://doi.org/10.1186/s13073-023-01274-4">
          <a>Link</a>
        </Link>
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Zhang, T., Jia, H., Song, T., Lv, L., Gulhan, D. C., Wang, H., Guo, W.,
        Xi, R., Guo, H., & Shen, N. (2023). De novo identification of expressed
        cancer somatic mutations from single-cell RNA sequencing data.
        <b>Genome Medicine</b>, 15(1), 115.{" "}
        <Link href="https://doi.org/10.1186/s13073-023-01269-1">
          <a>Link</a>
        </Link>
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Wu, L., Wang, H. S., Chen, Y. N., Zhang, X., Zhang, T.Y., Shen, N., Tao,
        G. Y., Sun, Z. Q., Ding, Y., Wang, W. L., Bu, J. J., (2023). Beyond
        radiologist-level liver lesion detection on multi-phase
        contrast-enhanced CT images by deep learning.
        <b>iScience</b>, 26 (11): 108183
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Lv, L., Zhang, T.Y., Jia, H.Y., Zhang, Y.Y., Ahsan, A., Zhao, X.Y.,
        Chen, T., Shen, Z.Q., Shen, N.(2022). Temporally integrated
        transcriptome analysis reveals ASFV pathology and host response
        dynamics. <b>Frontiers in Immunology</b>. 13:995998
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Jin, Z., Huang, W., Shen, N., Li, J., Wang, X., Dong, J., Park, P.J.,
        Xi, R. (2022). Single-cell gene fusion detection by scFusion. Nat
        Commun, 13(1084).
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Li, J., Cai, Z., Vaites, L. P., Shen, N., Mitchell, D. C., Huttlin, E.
        L., ... & Gygi, S. P. (2021). Proteome-wide mapping of short-lived
        proteins in human cells. Molecular Cell, 81(22), 4722-4735.
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Rojas, L.A., Valentine, E., Accorsi, A., Maglio, J., Shen, N.,
        Robertson, A., Kazmirski, S., Rahl, P., Tawil, R., Cadavid, D.,
        Thompson, L.A., Ronco, L., Chang, A., Cacace, A., and Wallace, O., 2020.
        P38α Regulates Expression of DUX4 in Facioscapulohumeral Muscular
        Dystrophy. Journal of Pharmacology and Experimental Therapeutics.
        119.264689
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Shen, N., Zhao, J., Schipper, J.L., Zhang, Y., Bepler, T., Leehr, D.,
        Bradley, J., Horton, J., Lapp, H. and Gordan, R., 2018. Divergence in
        DNA specificity among paralogous transcription factors contributes to
        their differential in vivo binding. Cell systems, 6(4), pp.470-483
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Sparks, E.E., Drapek, C.E., Gaudinier, A., Li, S., Ansariola, M., Shen,
        N., Matsumoto, N., Turco, G., Qiu, Y., Petricka, J.J., Foret, J., Chen,
        M., Gordân, R., Megraw, M. and Brady, S., Benfey, P.N., 2016.
        Establishment of expression in the SHORTROOT-SCARECROW transcriptional
        cascade through opposing activities of both activators and repressors.
        Developmental Cell 39(5):585-596
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Zhou, T.*, Shen, N.*, Yang, L., Horton, J., Bussemaker, H., Gordân, R.+
        and Rohs, R+., 2015. Quantitative modeling of transcription factor
        binding specificities using DNA shape. Proceedings of the National
        Academy of Science 112(15); 4654-4659
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Gordân, R., Shen, N., Dror, I., Zhou, T., Horton, J., Rohs, R. and
        Bulky, M.L., 2013. Genomic regions flanking E-box binding sites
        influence DNA binding specificity of bHLH transcription factors through
        DNA shape. Cell Reports 3(4):1093-104
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Chen, J., Ma, M., Shen, N., Xi, J. and Tian, W., 2013. Integration of
        cancer gene co-expression network and metabolic network to uncover
        potential cancer drug targets. Journal of Proteome Research 12(6):
        2354-2364
      </li>
    </div>
    <div className={styles.row}>
      <li>
        Qi, X., Disatnik, MH., Shen, N., Sobel, RA. and Mochly-Rosen, D., 2011.
        Aberrant Mitochondrial Fission in Neurons Induced by Delta Protein
        Kinase C under Oxidative Stress Conditions, in Vivo. Molecular Biology
        of the Cell 22(2):256-265
      </li>
    </div>
    <h2>Patents</h2>
    {patents.map((item, idx) => (
      <div className={styles.row} key={idx}>
        <li>{item}</li>
      </div>
    ))}
    <h2>Conference Proceedings</h2>
    {conference_Proceedings.map((item, idx) => (
      <div className={styles.row} key={idx}>
        <li>{item}</li>
      </div>
    ))}
  </Layout>
);
export default Publish;
