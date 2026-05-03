import { HomeClient } from './HomeClient';

export const metadata = {
  title: 'Stratosport | AI-First Technology Consulting & Digital Transformation',
  description: 'Stratosport partners with enterprises to build AI-first technology platforms, set up Global Capability Centers (GCCs), and deliver production-grade AI systems. Senior-only consulting for organizations that demand excellence.',
  openGraph: {
    title: 'Stratosport | AI-First Technology Consulting & Digital Transformation',
    description: 'Senior-only technology consulting for AI transformation, GCC setup, and production-grade platform engineering.',
    type: 'website',
    url: 'https://stratosport.in',
  },
  alternates: {
    canonical: 'https://stratosport.in',
  },
};

export default function Page() {
  return <HomeClient />;
}
