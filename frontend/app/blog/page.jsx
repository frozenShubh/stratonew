import { BlogClient } from './BlogClient';

export const metadata = {
  title: 'Insights & Blog | AI Transformation, GCC, Technology Strategy | Stratosport',
  description: "Insights on AI transformation, GCC setup, production AI systems, and enterprise technology strategy from Stratosport's senior technology leaders.",
  openGraph: {
    title: 'Insights & Blog | Stratosport',
    description: 'Expert insights on AI transformation, GCC setup, and enterprise technology strategy.',
    url: 'https://stratosport.in/blog',
  },
  alternates: {
    canonical: 'https://stratosport.in/blog',
  },
};

export default function Page() {
  return <BlogClient />;
}
