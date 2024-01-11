import { findById } from '@/features/articles/api';
import ArticleDetails from '@/features/articles/components/ArticleDetails';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '3' }];
};

const ArticlePage = async ({ params: { id } }: ArticlePageProps) => {
  const article = await findById(+id);

  if (!article) return <div>No article found</div>;
  return <ArticleDetails article={article}></ArticleDetails>;
};

export default ArticlePage;
