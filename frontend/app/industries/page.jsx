import { IndustriesClient } from './IndustriesClient';

export const metadata = {
  title: 'Industry Solutions — SaaS, AI, Healthcare, E-commerce | Stratosport',
  description: 'Technology solutions tailored for SaaS, AI-native products, healthcare, education, travel, and e-commerce. Industry-specific AI transformation and platform engineering.',
  openGraph: {
    title: 'Industry Solutions | Stratosport',
    description: 'Sector-specific technology consulting for enterprises across SaaS, AI, healthcare, and more.',
    url: 'https://stratosport.in/industries',
  },
  alternates: {
    canonical: 'https://stratosport.in/industries',
  },
};

export default function Page() {
  return <IndustriesClient />;
}
