import Layout from '../components/Layout'
import PersonInfo from '../components/PersonInfo'
const member_info = [
    {
        name: "沈宁",
        class: "PI",
        photo: "/images/photo/person/shenning.png",
        email: "shenningzju@zju.edu.cn",
    },
    {
        name: "吕林",
        class: "Postdoc",
        photo: "/images/photo/person/lvlin.jpeg",
    },
    {
        name: "Md Asif Ahsan",
        class: "Postdoc",
        photo: "/images/photo/person/asif.jpg",
    },
    {
        name: "贾晗颖", class: "PhD", photo: "/images/photo/person/hanying.jpeg",
    },
    {
        name: "赵晓阳", class: "PhD", photo: "/images/photo/person/xiaoyang.jpeg",
    },
    {
        name: "游宁远", class: "Undergraduate", photo: "/images/photo/person/ningyuan.jpg",
    },
    {
        name: "张天韵", class: "RA", photo: "/images/photo/person/tianyun.jpg",
    },

];
const Members = () => (
    <Layout>
        <h2>Members</h2>
        {/* TODO:替换所有外链，解决跨域 */}
        {member_info.map((item) => (<PersonInfo props={item} />))}
    </Layout>
)
export default Members