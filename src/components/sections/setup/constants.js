export const MOCK_SCRAPED_PAGES = [
    { 
      url: '/home',
      status: 'completed',
      chunks: [
        { id: 1, content: 'Welcome to our company. We specialize in innovative solutions...', type: 'header' },
        { id: 2, content: 'Our mission is to transform businesses through technology...', type: 'body' }
      ]
    },
    { 
      url: '/about',
      status: 'completed',
      chunks: [
        { id: 3, content: 'Founded in 2020, we have grown to serve...', type: 'body' },
        { id: 4, content: 'Meet our experienced team of professionals...', type: 'section' }
      ]
    },
    { url: '/pricing', status: 'pending', chunks: [] },
    { 
      url: '/contact',
      status: 'scraping',
      chunks: [{ id: 5, content: 'Get in touch with our support team...', type: 'header' }]
    }
  ];
  
  export const ANIMATION_VARIANTS = {
    container: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  };