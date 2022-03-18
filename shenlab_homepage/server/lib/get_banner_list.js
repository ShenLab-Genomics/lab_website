import fs from 'fs';
import path from 'path';
const listFile = path.join(process.cwd(), '@src/../../data/banner_picture_list.json');
export function GetBannerList() {
    const content = fs.readFileSync(listFile, 'utf8')
    const res = JSON.parse(content)
    return res;
}