# Tab Extract

A flexible & simple Chrome extension to dramatically reduce tab clutter.

## Overview

Tab Extract helps you organize your browser tabs by automatically grouping and extracting them into separate windows based on keywords. It features a completely unobtrusive UI, using just the address bar for interaction.

## Features

- Extract tabs into new windows based on keywords
- Clean, unobtrusive interface integrated with Chrome's address bar
- Lightweight and fast performance
- Simple to use with no complex configuration

## Installation

### From Chrome Web Store

*(Coming soon)*

### Manual Installation (Developer Mode)

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/Tab-Extract.git
   cd Tab-Extract
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run build
   ```

4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" in the top right corner
6. Click "Load unpacked" and select the `dist` folder from this project
7. The extension is now installed and ready to use

## Development

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Setup Development Environment

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Tab-Extract.git
   cd Tab-Extract
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Build for Production

To build the extension for production:

```
npm run build
```

This will create a `dist` directory with the built extension. The build process uses Vite to bundle the JavaScript files and copies the necessary static files (manifest.json and icons) to the output directory.

### Preview the Build

To preview the built extension:

```
npm run preview
```

## Usage

1. Open Chrome and navigate to any webpage
2. Type your keyword in the address bar
3. Tab Extract will automatically organize your tabs based on the specified keyword

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

Modified from the original project created by:

https://github.com/monting/Tab-Extract
