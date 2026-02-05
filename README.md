# Pit Stop Challenge

A mobile-first multiplayer WebRTC racing game for EVOLVE 155 prep.

## How to Play

1. Open `index.html` in a web browser (preferably on mobile or tablet).
2. Enter your name.
3. Select question category and difficulty level.
4. Choose: **Play Solo** for single-player or **Create Room** for multiplayer.
5. For multiplayer: Share the room code with friends to join.
6. Host starts the race.
7. Race around the track, collect question pickups, answer correctly for speed boosts.
8. **Car stops automatically** when hitting a question - answer within 10 seconds!
9. First to 3 laps wins!

## Controls

- **Mobile/Touch**: Virtual joystick (left) for steering, tap right side to accelerate
- **Desktop/Keyboard**: Arrow keys (←→↑) for steering and acceleration
- **Cross-platform**: Works on phones, tablets, and computers with appropriate controls

## Question Sets

The game supports multiple question sets loaded from the `questions/` folder:

- **Organized Structure**: All question files stored in dedicated `questions/` directory
- **Current Set**: EVOLVE 155 Questions (30 questions)
- **Dynamic Loading**: Select question sets from the dropdown menu
- **Categories**: Service Information, Vehicle Preparation, After Work, Scenarios
- **Difficulties**: Easy, Medium, Hard
- **Selection**: Choose specific categories/difficulties or "All" in the lobby

### Adding New Question Sets

1. Create a new file in the `questions/` folder, e.g., `questions/advanced.js`
2. Define the `questionBank` array with your questions
3. Add an option to the dropdown in `index.html`:
   ```html
   <option value="advanced.js">Advanced Mechanics</option>
   ```
4. The game will automatically load and use the selected question set

### File Structure
```
car/
├── index.html
├── questions/
│   ├── questions.js (EVOLVE 155)
│   ├── advanced.js (future)
│   └── electrical.js (future)
└── README.md
```

## Mobile Optimization

- **Touch controls only**: Virtual joystick and accelerate button
- **No accidental activation**: Touch events properly contained to control areas
- **No scrolling/zooming**: Mobile gestures disabled during gameplay
- **Responsive design**: Adapts to different screen sizes

## Features

- **Centered camera view**: Camera positioned above and centered on your car for optimal track visibility
- **Professional racing track**: Ultra-smooth arced corners with 36 track points for fluid curves
- **Start/finish line**: Checkered line marks the beginning and end of laps
- **Collision detection**: Crash into barriers and get knocked back
- **Off-track reset**: Cars that stray too far are automatically reset to the start
- **Car-like sprites**: Detailed car shapes with body, front, and wheels
- **Question pause**: Car stops automatically when hitting questions
- Single-player mode: Race alone against the clock
- Touch controls for mobile
- WebRTC peer-to-peer multiplayer (2-6 players)
- 30 EVOLVE 155 questions integrated
- Workshop-themed track with obstacles
- Local storage for player names

## Technical Details

- Single HTML file with embedded CSS and JS
- Uses PeerJS for WebRTC
- Canvas-based rendering
- Responsive design

## Running Locally

Use a local server to serve the file:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/index.html in your browser.

For multiplayer, players need to be able to connect via WebRTC (same network or public IPs).