import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
export async function getPostContent(id) {
    const fname = path.join(process.cwd(), '../data/news', `${id}.md`);
    // console.log(fname);
    const fileContents = fs.readFileSync(fname, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}