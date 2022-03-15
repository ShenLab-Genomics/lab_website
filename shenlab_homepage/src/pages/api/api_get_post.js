// import { GetPostContent } from "../../lib/get_post";

export default function Post(req,res){
    // const posts = await getPosts();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify("posts"));
    res.end();
}