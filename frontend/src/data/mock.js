// Mock data and API functions

export const mockContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      // Store in localStorage for demo
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Math.random().toString(36).substr(2, 9),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      resolve({ success: true });
    }, 1000);
  });
};