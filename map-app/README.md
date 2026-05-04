# Route Planner - USA Interactive Map 🗺️

An interactive route planning app designed for rural visitors navigating to cities. Click to set start and end points, then get turn-by-turn directions, distance, time estimates, and automatic toll warnings.

## 🎯 Features

✅ **Interactive Canvas Map** - Click anywhere to set routes  
✅ **Visual Route Display** - Blue line shows your path  
✅ **Distance & Time Calculation** - Automatic estimates  
✅ **Turn-by-Turn Directions** - 4-step guidance system  
✅ **Toll Detection** - Automatic warnings with pricing  
✅ **Travel Tips** - Helpful advice for drivers  
✅ **Mobile Responsive** - Works on iPad, tablet, mobile  
✅ **Beautiful UI** - Purple gradient design  

## 🚀 Quick Start

### Installation
```bash
cd map-app
npm install
npm start
```

App opens at `http://localhost:3000`

## 🎮 How to Use

1. **Click on the map** to set your START point (green 📍)
2. **Click another location** to set your DESTINATION (red 🎯)
3. **Blue line appears** showing your route
4. **View details** in the right panel:
   - 📏 Distance in miles
   - ⏱️ Estimated travel time
   - 📍 Turn-by-turn directions
   - ⚠️ Toll warnings with costs
   - 💡 Travel tips

## 🗺️ Major Cities Shown

- 🗽 New York City
- 🌴 Miami
- 🌞 Los Angeles
- 🏙️ Chicago
- 🤠 Houston

## 📁 Project Structure

```
map-app/
├── src/
│   ├── components/
│   │   ├── MapCanvas.js       # Interactive map
│   │   ├── RoutePanel.js      # Route information
│   │   └── TollWarnings.js    # Toll alerts
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js                 # Main component
│   └── index.js               # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🧠 Tech Stack

- **React 18** - Frontend framework
- **Canvas API** - Map rendering
- **CSS Flexbox/Grid** - Responsive layout

## 📊 Route Information

When you create a route, you'll see:

### Distance & Time
- Calculated based on map coordinates
- Roughly 60 mph average speed
- Displayed in miles and hours

### Turn-by-Turn Directions
1. Step-by-step navigation
2. Distance per segment
3. Clear, simple instructions

### Toll Warnings
- Automatic toll detection
- Multiple tolls per route
- Cost breakdown
- Payment method info

### Travel Tips
- Weather considerations
- Break recommendations
- Safety tips
- Fuel management

## 🎨 UI Elements

- **Green Marker (📍)** - Starting point
- **Red Marker (🎯)** - Destination
- **Blue Line** - Your route
- **Colored Dots** - Major cities

## 💡 Tips for iPad Air

- Use in landscape for better map view
- Pinch to zoom (coming soon)
- Two-finger tap for details
- External keyboard for testing

## 🔄 Reset Route

Click the **"Reset"** button to:
- Clear start point
- Clear destination
- Remove route
- Remove toll warnings
- Start fresh

## 🚧 Future Enhancements

- [ ] Real map tiles (OpenStreetMap)
- [ ] Zoom and pan functionality
- [ ] Traffic layer
- [ ] Alternative routes
- [ ] Real-time weather
- [ ] Gas station finder
- [ ] Rest stop locator
- [ ] Speed limit display
- [ ] Historical route saving
- [ ] Multi-stop routing

## 📱 Responsive Breakpoints

- **Desktop** (1024px+) - Full layout
- **Tablet** (768px-1023px) - Stacked layout
- **Mobile** (480px-767px) - Optimized
- **Small Mobile** (<480px) - Minimal

## 🎓 Learning Resources

- [Canvas API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [React Hooks](https://react.dev/reference/react)
- [Canvas Drawing Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

## 📝 License

MIT

## 👤 Developer

Created: May 2026

---

**Happy route planning! 🗺️🚗**
