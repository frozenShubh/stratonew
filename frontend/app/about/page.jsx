import { AboutClient } from './AboutClient';

export const metadata = {
  title: 'About Stratosport | AI-First Technology Consulting',
  description: 'Stratosport is a boutique technology consulting firm specializing in AI transformation, production AI systems, and GCC setup. Founded by senior technology operators with 15+ years of experience.',
  openGraph: {
    title: 'About Stratosport | AI-First Technology Consulting',
    description: 'Senior technology operators building systems that scale. AI transformation, GCC setup, and enterprise platform engineering.',
    url: 'https://stratosport.in/about',
  },
  alternates: {
    canonical: 'https://stratosport.in/about',
  },
};

export default function Page() {
  return <AboutClient />;
}
