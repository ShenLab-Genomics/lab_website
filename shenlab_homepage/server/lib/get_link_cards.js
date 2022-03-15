import fs from 'fs';
import path from 'path';
const listFile = path.join(process.cwd(), '@src/../../data/link_cards_list.json');
export function GetCardsList() {
    const content = fs.readFileSync(listFile, 'utf8')
    const res = JSON.parse(content)
    return res;
}