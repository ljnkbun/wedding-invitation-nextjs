# Wedding Invitation - Thanh Diệp Xanh Theme

A beautiful Vietnamese wedding invitation website built with Next.js, featuring an elegant green leaf theme.

## Features

✨ **Modern Design**
- Elegant Vietnamese wedding invitation theme
- Soft green color palette (Thanh Diệp Xanh - "Fresh Green Leaf")
- Beautiful typography with Google Fonts (Cormorant Garamond, Lora, Quicksand)
- Smooth animations and transitions

🎭 **Interactive Elements**
- Animated cover page with opening effect
- Scroll-triggered reveal animations
- Floating leaf decorations
- Responsive design for all devices

📱 **Mobile Optimized**
- Fully responsive layout
- Touch-friendly interactions
- Optimized for mobile viewing

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Google Fonts (Next.js Font Optimization)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
wedding-invitation-nextjs/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Cover.tsx
│   │   ├── Cover.module.css
│   │   ├── Content.tsx
│   │   └── Content.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── public/
│   └── images/
├── next.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Update Wedding Details

Edit the components to update:
- Couple names in `Cover.tsx`
- Wedding date in `Cover.tsx`
- Event details in `Content.tsx`
- Contact information in `Content.tsx`

### Change Colors

Modify CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #2d5a4a;
  --color-secondary: #4a7c66;
  --color-accent: #8fbc8f;
  /* ... */
}
```

### Add Images

Place images in `public/images/` directory and import them in your components.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Other Deployment Options

- **Netlify**: Connect your Git repository
- **Railway**: Deploy via CLI or Git
- **DigitalOcean App Platform**: Connect your repository

## License

MIT License - feel free to use this template for your own wedding invitation!

## Credits

Inspired by the Chung Đôi wedding invitation platform.

---

Made with ❤️ for celebrating love
