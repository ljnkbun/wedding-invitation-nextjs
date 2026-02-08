#!/bin/bash

echo "🎉 Wedding Invitation Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   npm run dev"
    echo ""
    echo "   Then open http://localhost:3000 in your browser"
    echo ""
    echo "📝 To build for production, run:"
    echo "   npm run build"
    echo "   npm start"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
