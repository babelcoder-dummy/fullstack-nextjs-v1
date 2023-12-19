import * as api from '@/features/articles/admin/api';
import { revalidatePath } from 'next/cache';

export const POST = async (req: Request) => {
  const formData = await req.formData();
  const image = formData.get('image') as File | null;
  const article = api.add({
    title: formData.get('title') as string,
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    image,
  });

  revalidatePath('/articles');

  return new Response(JSON.stringify(article), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};
