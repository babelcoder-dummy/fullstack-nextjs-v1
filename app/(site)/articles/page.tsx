import { findAll } from '@/features/articles/api';
import ArticleList from '@/features/articles/components/ArticleList';

const ArticlesPage = async () => {
  const articles = await findAll();

  return <ArticleList articles={articles}></ArticleList>;
};

export default ArticlesPage;

export const revalidate = 15;
