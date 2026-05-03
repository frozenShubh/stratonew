import { AITransformationClient } from './AITransformationClient';

export const metadata = {
  title: 'AI Transformation & Digital Strategy | Stratosport',
  description: 'Transform your enterprise into an AI-first company. Stratosport delivers production AI systems, AI strategy, and end-to-end digital transformation for organizations that demand real outcomes.',
  openGraph: {
    title: 'AI Transformation & Digital Strategy | Stratosport',
    description: 'Transform your enterprise into an AI-first company with production-grade AI systems, strategy, and governance.',
    url: 'https://stratosport.in/ai-transformation',
  },
  alternates: {
    canonical: 'https://stratosport.in/ai-transformation',
  },
};

export default function Page() {
  return <AITransformationClient />;
}
