# PitStop Arena - Premium F1 Poster Shop

![PitStop Arena](img/logo.png)

## 🏁 Welcome to PitStop Arena

PitStop Arena is a modern, production-ready Formula 1 poster shop website featuring premium F1 memorabilia, drivers, teams, and legendary race tracks.

## ✨ Features

- **📱 Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **🎨 Modern F1-Themed UI** - Sleek racing aesthetics with F1 red and black color scheme
- **🛒 Shopping Cart System** - Full cart management with localStorage persistence
- **⚡ Dynamic Product Catalog** - JavaScript-powered product grid with 17+ items
- **🏆 Premium Collections** - Curated tracks, teams, and drivers collections
- **💳 Interactive Features** - Add to cart, quantity management, smooth animations
- **🍪 Cookie Consent** - GDPR-compliant cookie banner
- **📧 Contact Integration** - Email copy-to-clipboard functionality

## 🚀 Quick Start

### Option 1: Direct Browser Open
Simply open `index.html` in your web browser to view the site immediately.

### Option 2: Local Server (Recommended)
For best experience, run with a local server:

```bash
# If you have Python installed:
python -m http.server 8000

# If you have Node.js/npm:
npx http-server

# Then visit: http://localhost:8000
```

## 📁 Project Structure

```
f1 website/
├── index.html              # Main homepage
├── cart.html               # Shopping cart page
├── css/                    # Compiled stylesheets
│   ├── main.css           # Main site styles
│   └── cart.css           # Cart page styles
├── sass/                   # SCSS source files
│   ├── main.scss
│   ├── _colors.scss
│   ├── _mixins.scss
│   ├── _reset.scss
│   ├── _sizes.scss
│   ├── _medium.scss
│   ├── _large.scss
│   └── cart/
│       ├── cart.scss
│       ├── _medium.scss
│       └── _large.scss
├── js/                     # JavaScript files
│   ├── main.js            # Main functionality
│   ├── data.js            # Product database
│   ├── cart.js            # Cart management
│   └── footer.js          # Footer utilities
└── img/                    # Images & assets
    ├── logo.png
    └── cars/              # Product images
        ├── drivers/
        ├── teams/
        └── tracks/
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3/SCSS** - Modern styling with Sass preprocessing
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Font Awesome** - Icon library
- **Google Fonts** - Roboto typography

## 🎨 Color Palette

- **F1 Racing Red**: `#e10600` - Primary brand color
- **Deep Red Accent**: `#c62828` - Hover states
- **Dark Background**: `#1a1a1a` - Primary dark
- **Darker**: `#0d0d0d` - Footer and nav
- **Light Gray**: `#f5f5f5` - Section backgrounds

## 🏎️ Product Catalog

The site features 17 premium F1 posters across three categories:

### 🏁 Drivers (8 items)
- Lewis Hamilton - 7x Champion
- Max Verstappen - Red Bull Racing
- Fernando Alonso - Legend
- Ayrton Senna - Icon
- Michael Schumacher - 7x Champion
- George Russell - Mercedes
- Kimi Räikkönen - Iceman
- Sebastian Vettel - 4x Champion

### 🏆 Teams (6 items)
- Red Bull Racing
- Ferrari Scuderia
- Mercedes-AMG Petronas
- McLaren Racing
- Alpine F1 Team
- Williams Racing

### 🛣️ Tracks (3 items)
- Monaco Grand Prix
- Silverstone Circuit
- Spa-Francorchamps

## 💻 Development

### SCSS Compilation

If you want to modify the styles, you'll need to compile SCSS to CSS:

```bash
# Install Sass globally
npm install -g sass

# Compile main styles
sass sass/main.scss css/main.css

# Compile cart styles
sass sass/cart/cart.scss css/cart.css

# Watch for changes (auto-compile)
sass --watch sass:css
```

### Customization

#### Change Colors
Edit `sass/_colors.scss` to customize the color scheme:

```scss
$main: #e10600;        // Your primary color
$accent: #c62828;      // Your accent color
```

#### Add Products
Edit `js/data.js` to add more products to the catalog:

```javascript
{
    id: 18,
    title: "Your Product Name",
    price: 49.99,
    image: "img/cars/category/product.jpg",
    category: "drivers" // or "teams" or "tracks"
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px  
- **Desktop**: 992px+

## 🌟 Key Features Deep Dive

### Shopping Cart
- Add products from homepage
- View cart with item details
- Update quantities (+ / -)
- Remove individual items
- Clear entire cart
- Persistent storage (localStorage)
- Real-time total calculations

### Interactive Elements
- Mobile navigation toggle
- Smooth scroll navigation
- Hover effects and transitions
- Product image zoom on hover
- Notification system for cart additions
- Cookie consent banner

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created for the ultimate F1 fan experience.

## 🚧 Adding Images

**Note**: The current version includes placeholder references for images. To complete the website, add the following images:

### Required Images:
- `img/background.jpg` - Hero section background
- `img/background2.jpg` - Special offer section background
- `img/tracks_top.jpg` - Tracks collection header
- `img/teams_top.jpg` - Teams collection header
- `img/drivers_top.jpg` - Drivers collection header
- `img/cars/drivers/*.jpg` - Driver poster images
- `img/cars/teams/*.jpg` - Team poster images
- `img/cars/tracks/*.jpg` - Track poster images

**Recommended**: Source high-quality F1 images from licensed stock photo sites or official F1 media.

## 🔧 Troubleshooting

### Images not loading?
- Ensure image paths are correct
- Add your own F1 images to the `img/` directory
- Check browser console for 404 errors

### Cart not persisting?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Styles not applying?
- Verify CSS files are in the correct location
- Check browser developer tools for CSS errors

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Enjoy racing through our premium F1 collection!** 🏁
