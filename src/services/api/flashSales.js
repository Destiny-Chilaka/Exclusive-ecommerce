// No need to import the image
const gamepadImagePath = '/images/Hv-G92-gamepad.png'

// This simulates an API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// This is our mock API service
export const flashSalesApi = {
  // Function to get flash sales products
  async getProducts() {
    // Simulate API delay of 1 second
    await delay(1000);
    
    // This is our "fake database" of products
    const mockProducts = [
      {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        originalPrice: 160,
        discountedPrice: 120,
        discount: 40,
        rating: 5,
        reviewCount: 88,
        image: gamepadImagePath,
        isWishlisted: false
      },
      // Add more mock products here if you want
    ];

    // Simulate successful API response
    return mockProducts;
  }
}; 