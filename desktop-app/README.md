# ENERGY Desktop App

A powerful desktop application for quick and secure access to the ENERGY Token platform.

## Features

### 🔐 **Secure Login**
- Email/password authentication
- Remember me functionality
- Auto-login option
- Secure credential storage
- Wallet connection support (coming soon)

### 💼 **Dashboard**
- Real-time portfolio overview
- Quick access to trading features
- Live price tracking
- Staking rewards monitoring
- Transaction history

### ⚡ **Quick Actions**
- Buy/Sell ENERGY tokens
- Stake tokens for rewards
- Swap between cryptocurrencies
- Send/Receive tokens
- Portfolio management

### 🔔 **System Tray Integration**
- Runs in background
- Quick access menu
- Instant notifications
- One-click dashboard access
- Minimize to tray option

### 🎨 **Modern UI**
- Beautiful dark theme
- Smooth animations
- Responsive design
- Intuitive navigation
- Clean, professional interface

### 🔄 **Auto-Updates**
- Automatic update checking
- Background downloads
- One-click installation
- Version management

## Installation

### Download Pre-built Binaries

1. Go to [Releases](https://github.com/energytoken/desktop-app/releases)
2. Download for your platform:
   - **Windows**: `ENERGY-Desktop-Setup-1.0.0.exe`
   - **macOS**: `ENERGY-Desktop-1.0.0.dmg`
   - **Linux**: `ENERGY-Desktop-1.0.0.AppImage`
3. Install and launch

### Build from Source

```bash
# Clone the repository
git clone https://github.com/energytoken/desktop-app.git
cd desktop-app

# Install dependencies
npm install

# Run in development
npm start

# Build for production
npm run build

# Build for specific platform
npm run build:win   # Windows
npm run build:mac   # macOS
npm run build:linux # Linux
```

## Usage

### First Launch

1. Launch ENERGY Desktop
2. Enter your ENERGY platform credentials
3. Check "Remember me" for auto-login
4. Click "Sign In"

### System Tray

- **Double-click**: Open main window
- **Right-click**: Access quick menu
  - Dashboard
  - Portfolio
  - Trading
  - Settings
  - Quit

### Keyboard Shortcuts

- `Ctrl/Cmd + Shift + E`: Show/hide window
- `Ctrl/Cmd + ,`: Open settings
- `Ctrl/Cmd + R`: Refresh dashboard
- `Ctrl/Cmd + Q`: Quit application

### Settings

Configure your preferences:
- **Auto-login**: Automatically sign in on launch
- **Minimize to tray**: Keep running in background
- **Launch at startup**: Start with system
- **Theme**: Dark/Light mode (coming soon)

## Security

- **Encrypted Storage**: Credentials stored securely using electron-store
- **Context Isolation**: Renderer process isolated from Node.js
- **Secure IPC**: Protected communication between processes
- **Auto-lock**: Optional timeout for security
- **2FA Support**: Two-factor authentication (coming soon)

## Development

### Project Structure

```
desktop-app/
├── main.js           # Main process
├── preload.js        # Preload script
├── login.html        # Login page
├── dashboard.html    # Dashboard
├── settings.html     # Settings page
├── assets/           # Icons and images
├── package.json      # Dependencies
└── README.md         # Documentation
```

### Technologies

- **Electron**: Cross-platform desktop framework
- **HTML/CSS/JS**: Frontend technologies
- **electron-builder**: Build and distribution
- **electron-store**: Secure storage
- **electron-updater**: Auto-updates

### API Integration

The app communicates with the ENERGY platform API:
- Authentication endpoint
- Portfolio data
- Trading operations
- Real-time price feeds
- Transaction history

## Troubleshooting

### Can't login?
- Check internet connection
- Verify credentials on web platform
- Try clearing stored data in Settings

### App won't start?
- Check system requirements
- Reinstall the application
- Check antivirus settings

### Tray icon missing?
- Check system tray settings
- Restart the application
- Reinstall if issue persists

## Support

- **Documentation**: [https://energytoken.io/docs](https://energytoken.io/docs)
- **Support**: [https://energytoken.io/support](https://energytoken.io/support)
- **GitHub Issues**: [Report bugs](https://github.com/energytoken/desktop-app/issues)

## License

MIT License - see LICENSE file for details

## Credits

Built with ❤️ by the ENERGY Token Team

---

**Version**: 1.0.0
**Platform**: Windows, macOS, Linux
**Requirements**: 4GB RAM, 100MB storage