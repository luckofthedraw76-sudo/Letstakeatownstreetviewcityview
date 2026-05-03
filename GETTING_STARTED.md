# Getting Started with Letstakeatownstreetviewcityview 🚀

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **A code editor** - Visual Studio Code recommended

## Step 1: Clone the Repository

```bash
git clone https://github.com/luckofthedraw76-sudo/Letstakeatownstreetviewcityview.git
cd Letstakeatownstreetviewcityview
```

## Step 2: Install Dependencies

```bash
npm install
```

This will download and install all required packages listed in `package.json`.

## Step 3: Start the Development Server

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## Step 4: Make Your First Change

1. Open `src/App.js` in your editor
2. Change the app title or description
3. Save the file - the browser will automatically reload!

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build
```bash
npm build
```
Builds the app for production to the `build` folder.

### Testing
```bash
npm test
```
Runs the test suite.

## Project Structure Explained

```
src/
├── components/           # Reusable React components
│   ├── CitySelector.js  # City selection interface
│   ├── Map.js           # Map display component
│   ├── Navigation.js    # Navigation/directions component
│   └── TollWarning.js   # Toll alert component
├── styles/              # CSS stylesheets
│   ├── App.css          # Main app styles
│   └── index.css        # Global styles
├── services/            # API and utility functions (future)
├── App.js               # Main app component
└── index.js             # Entry point
```

## Understanding React Components

Each component is a reusable piece of UI:
- **CitySelector**: Displays city options
- **Map**: Shows the city map (currently a placeholder)
- **Navigation**: Handles route input and directions
- **TollWarning**: Alerts about upcoming tolls

## Adding New Features

### Example: Add a New City

1. Open `src/components/CitySelector.js`
2. Find the `cities` array
3. Add a new city object:

```javascript
{ id: 6, name: 'Miami, FL', image: '🌴' }
```

4. Save and see it appear in your app!

## Next Steps

1. **Learn React**: [React Official Docs](https://react.dev)
2. **Integrate Maps API**: Add Mapbox GL or Google Maps
3. **Add Backend**: Set up Node.js + Express server
4. **Connect Database**: Use PostgreSQL for storing routes/tolls
5. **Deploy**: Push to Vercel or Heroku

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# macOS/Linux:
lsof -ti :3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Won't Install
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### Changes Not Reflecting
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Check the terminal for errors

## Need Help?

- Check the [React Documentation](https://react.dev)
- Review [Create React App Docs](https://create-react-app.dev)
- Open an issue on GitHub

---

**Happy coding! 🎉**
