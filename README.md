# Portfolio Website - Next.js + React

A modern, responsive portfolio website built with Next.js 14, React 18, and TypeScript.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 App Router, React 18, and TypeScript
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Fade-in and hover effects throughout
- **Dynamic Routing**: Project detail pages with dynamic routes
- **SEO-Friendly**: Built-in Next.js SEO optimization
- **Type-Safe**: Full TypeScript support

## 📁 Project Structure

```
site/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── experience/          # Experience page
│   ├── projects/            # Projects page + dynamic routes
│   │   └── [id]/           # Individual project pages
│   ├── contact/             # Contact page
│   └── not-found.tsx        # 404 page
├── components/              # Reusable components
│   ├── Navigation.tsx       # Navigation component
│   ├── Navigation.module.css
│   └── Layout.tsx           # Layout wrapper
├── data/                    # Data and types
│   └── projects.ts          # Project data and interfaces
├── styles/                  # Global styles
│   └── globals.css
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages

- **Home** (`/`) - Landing page with hero section
- **Experience** (`/experience`) - Timeline of work experience and skills
- **Projects** (`/projects`) - Grid of all projects
- **Project Detail** (`/projects/[id]`) - Individual project pages
- **Contact** (`/contact`) - Contact information and form

## 🎨 Customization

### Adding New Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: '7',
  icon: '🎯',
  title: 'Your Project',
  description: 'Brief description',
  tags: ['React', 'TypeScript'],
  // ... other fields
}
```

### Styling

- Global styles: `styles/globals.css`
- Component styles: Use CSS Modules (`.module.css` files)

### Contact Information

Update the contact details in `app/contact/page.tsx`:
- Email address
- LinkedIn URL
- GitHub URL

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder and `package.json` to your hosting platform.

## 📝 License

This project was originally based on the Spectral template by HTML5 UP.

## 🤝 Contributing

Feel free to customize this portfolio for your own use!
