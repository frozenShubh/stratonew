import { ContactClient } from './ContactClient';

export const metadata = {
  title: 'Contact Stratosport | Start Your AI Transformation',
  description: 'Get in touch with Stratosport for AI transformation, GCC setup, and enterprise technology consulting. Senior-only engagements with response within 24 hours.',
  openGraph: {
    title: 'Contact Stratosport | Start Your AI Transformation',
    description: 'Connect with senior technology leaders for AI transformation and enterprise platform consulting.',
    url: 'https://stratosport.in/contact',
  },
  alternates: {
    canonical: 'https://stratosport.in/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}
