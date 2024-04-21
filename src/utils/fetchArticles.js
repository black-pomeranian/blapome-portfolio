import { Client } from '@notionhq/client';

export const fetchArticles = async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID 
    });
    const articlesData = response.results.map(page => {
      return {
        id: page.id,
        title: page.properties.Name.title[0]?.plain_text,
        //publishedAt: page.properties.PublishedAt.date.start,
      };
    });
    
    return articlesData;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    return [];  // エラーが発生した場合は空のリストを返します
  }
};
