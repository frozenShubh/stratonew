import { ServicesClient } from './ServicesClient';

export const metadata = {
  title: 'Technology Services & AI Solutions | Stratosport',
  description: 'Strategic technology advisory, AI systems development, platform engineering, and GCC setup. From AI-first digital transformation to production-grade platform delivery.',
  openGraph: {
    title: 'Technology Services & AI Solutions | Stratosport',
    description: 'End-to-end technology services from AI strategy to production. Senior-only consulting for enterprises.',
    url: 'https://stratosport.in/services',
  },
  alternates: {
    canonical: 'https://stratosport.in/services',
  },
};

export default function Page() {
  return <ServicesClient />;
}
