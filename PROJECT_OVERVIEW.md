# Zoom Parallax Component Demo - Project Overview

## 🎯 **Project Purpose**
This is a **Next.js 15** application showcasing an advanced **Zoom Parallax Effect** component built with modern React and animation technologies. The project demonstrates smooth scrolling interactions where images scale and animate at different rates as the user scrolls, creating an immersive visual experience.

## 🏗️ **Project Structure**

```
my-app/
├── app/                    # Next.js App Router directory
│   ├── page.tsx           # Main demo page with zoom parallax implementation
│   ├── layout.tsx         # Root layout component
│   └── globals.css        # Global styles and Tailwind CSS imports
├── components/
│   └── ui/
│       └── zoom-parallax.tsx  # Core parallax component with Framer Motion
├── lib/
│   └── utils.ts           # Utility functions (cn helper for className merging)
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── components.json        # Shadcn/ui configuration
```

## 🛠️ **Technology Stack**

- **Framework**: Next.js 15.5.4 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.22
- **Smooth Scrolling**: Lenis 1.3.11
- **UI Components**: Shadcn/ui with class-variance-authority
- **Runtime**: React 19.1.0

## 🎨 **Key Features**

### **Zoom Parallax Component**
- **Multi-layer Animation**: 7 different scaling speeds (4x, 5x, 6x, 8x, 9x)
- **Scroll-based Triggers**: Uses Framer Motion's `useScroll` and `useTransform`
- **Responsive Positioning**: Dynamic viewport-based positioning for each image
- **Smooth Performance**: Optimized with `useRef` and efficient re-renders

### **Smooth Scrolling Integration**
- **Lenis Library**: Provides buttery-smooth scrolling experience
- **RAF Loop**: Custom requestAnimationFrame loop for optimal performance
- **Cross-browser Compatibility**: Works across modern browsers

## 🚀 **How to Run**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application runs on `http://localhost:3000`

## 📱 **User Experience**

1. **Landing Section**: Hero text "Scroll Down for Zoom Parallax" with radial spotlight effect
2. **Parallax Section**: 7 high-quality Unsplash images that scale at different rates during scroll
3. **Spacing**: Additional viewport height for comfortable scrolling experience

## 🎭 **Visual Effects**

- **Radial Gradient Spotlight**: CSS-based atmospheric lighting effect
- **Staggered Image Scaling**: Each image scales at different multipliers
- **Sticky Container**: 300vh scroll distance with sticky positioning
- **Responsive Images**: Dynamically positioned with viewport units (vw/vh)

## 🔧 **Configuration**

The project uses **Shadcn/ui** configuration with:
- **Base Color**: Stone theme
- **CSS Variables**: Stored in `globals.css`
- **Component Library**: Pre-configured utilities and styling system

This project is perfect for portfolios, creative websites, or any application requiring sophisticated scroll-based animations and modern web interactions.