declare module 'splide' {
    interface SplideOptions {
      // Define the options based on Splide.js documentation
      type?: string;
      heightRatio?: number;
      // Add other options as needed
    }
  
    class Splide {
      constructor(element: string | HTMLElement, options?: SplideOptions);
      mount(): void;
      // Add other methods as needed
    }
  
    export = Splide;
  }
  