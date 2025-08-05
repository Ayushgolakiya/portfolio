# Ayush Golakiya - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a fluid design system that adapts seamlessly across all device sizes.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile (360-480px), tablet (768-834px), small desktop (1024-1280px), and large desktop (1440-1920px)
- **Fluid Design System**: CSS custom properties with `clamp()` for fluid typography, spacing, and component sizing
- **Modern UI/UX**: Dark theme with glass morphism effects and smooth animations
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **Accessibility**: WCAG 2.2 AA compliant with proper focus states and semantic HTML
- **SEO Ready**: Meta tags, structured data, and optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS with custom fluid design system
- **UI Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## 🎨 Design System

### Fluid Typography Scale
- Responsive text sizing using `clamp()` functions
- Scales from mobile to ultra-wide screens
- Maintains readability across all devices

### Fluid Spacing System
- Dynamic padding and margins
- Consistent spacing ratios
- Optimized for touch and mouse interactions

### Responsive Grid System
- Auto-fit CSS Grid layouts
- Minimum width constraints for optimal mobile experience
- Fluid breakpoints for seamless transitions

## 📱 Responsive Breakpoints

- **Mobile**: 360-480px
- **Tablet**: 768-834px  
- **Small Desktop**: 1024-1280px
- **Large Desktop**: 1440-1920px

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and fluid design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── experience.tsx    # Work experience
│   ├── skills.tsx        # Skills section
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Footer
├── content/              # Static content
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎯 Key Components

### Hero Section
- Animated typing effect
- Responsive background effects
- Social media links
- Call-to-action buttons

### Projects Showcase
- Featured projects with detailed case studies
- Technology badges
- Live demo and GitHub links
- Responsive grid layout

### Skills & Experience
- Timeline-based experience display
- Skill categories with proficiency indicators
- Responsive card layouts

### Contact Form
- Functional contact form with validation
- Multiple contact methods
- Responsive layout

## 🎨 Customization

### Colors & Theme
The design system uses CSS custom properties for easy customization:

```css
:root {
  --accent-primary: #9b5cf6;
  --accent-secondary: #1be0e6;
  --bg-default: #0b0f14;
  /* ... more variables */
}
```

### Fluid Design Variables
Adjust the fluid scaling by modifying the clamp values:

```css
--text-5xl: clamp(2.75rem, 2.2rem + 1.5vw, 3.5rem);
--space-8: clamp(2rem, 1.6rem + 0.8vw, 2.5rem);
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js built-in optimizations
- **Image Optimization**: Next.js Image component with automatic optimization

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for version control

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: golakiyaayush29@gmail.com
- **LinkedIn**: [Ayush Golakiya](https://www.linkedin.com/in/ayush-golakiya-a03407255/)
- **GitHub**: [@Ayushgolakiya](https://github.com/Ayushgolakiya)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion 