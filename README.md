# lab_website
public website(demo) of ShenLab at Zhejiang University

文件结构：
```cpp
data //存放可即时编辑数据
shenlab_homepage //源码

```


## Run

```
yarn build
yarn start
```

## Maintain
- **新闻文档**存放在`data/news/`文件夹下，以markdown格式存储，每个.md文档对应一条新闻。其中，每个文档页首应有title和date字段，对应这篇文档在网页中显示的标题和日期。

- **首页照片墙**的照片列表存放在`data/banner_picture_list.json` 文件中，以json文件的形式存储，json数组中每个元素代表一张图片的路径。

- **成员列表页面**的成员名单信息存放在`data/member_list.json` 文件中，以json文件的形式存储，数组中每个元素（字典）代表一名成员，有name，class，photo，email，interest五个字段，其中前三个为必选，后两个为可选。

- `link_card_list.json` 当中存储导航页面的网页链接信息。有name，detail，url三个字段。

**所有的图片存储在**`shenlab_homepage/public/`文件夹下，整个工程中对图片的引用均以此路径为根目录。详见member_list.json示例。

注意json数组当中，除最后一个element外，每个element的结尾需要有逗号标识。