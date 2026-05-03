import { GCCClient } from './GCCClient';

export const metadata = {
  title: 'AI-First GCC Setup & Global Capability Centers | Stratosport',
  description: 'Set up AI-first Global Capability Centers (GCCs) in India. Stratosport provides end-to-end GCC strategy, setup, and AI capability building for enterprises looking to scale engineering and AI teams.',
  openGraph: {
    title: 'AI-First GCC Setup & Global Capability Centers | Stratosport',
    description: 'Build AI-first Global Capability Centers in India with production-grade engineering and AI capabilities from day one.',
    url: 'https://stratosport.in/gcc',
  },
  alternates: {
    canonical: 'https://stratosport.in/gcc',
  },
};

export default function Page() {
  return <GCCClient />;
}
