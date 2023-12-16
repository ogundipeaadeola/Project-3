const fs = require('fs');
const path = require('path');

const componentsDir = './src/app'; // Path to your components directory
const outputDir = './dist'; // Output directory for generated CSS

const componentCssFiles = [
  "app.component.css",
  "womens-details/womens-details.component.css",
  "women/women.component.css",
  "wishlist/wishlist.component.css",
  "top-bar/top-bar.component.css",
  "sportsinfo/sportsinfo.component.css",
  "shipping/shipping.component.css",
  "product-list/product-list.component.css",
  "product-details/product-details.component.css",
  "mens-details/mens-details.component.css",
  "men/men.component.css",
  "discount-bar/discount-bar.component.css",
  "cart/cart.component.css"
];

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

componentCssFiles.forEach(file => {
  const componentCssPath = path.join(componentsDir, file);
  const componentName = path.basename(file, '.css'); // Extract file name without extension

  if (fs.existsSync(componentCssPath)) {
    const cssContent = fs.readFileSync(componentCssPath, 'utf8');
    const outputPath = path.join(outputDir, `${componentName}.css`);

    fs.writeFileSync(outputPath, cssContent, 'utf8');
  }
});
