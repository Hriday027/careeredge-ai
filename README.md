# CareerEdge AI — Frontend

AI-powered career preparation platform for students and freshers.

---

## 📁 Project Structure

```
careeredge-ai/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   ├── features.js          # All 6 AI tool configs (Voiceflow URLs, colors, etc.)
│   │   ├── stats.js             # Hero stats (50+ students, etc.)
│   │   └── howSteps.js          # How It Works step content
│   │
│   ├── hooks/
│   │   └── useScrollSpy.js      # Scroll detection hook for sticky nav
│   │
│   ├── styles/
│   │   └── globals.js           # Shared inline style tokens & keyframes
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Logo.jsx         # CareerEdge AI logo mark
│   │   │   ├── Badge.jsx        # Pill badge (Most Popular, New)
│   │   │   └── TypingIndicator.jsx  # Animated dots while AI responds
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWindow.jsx   # Full chat UI (header + messages + input)
│   │   │   ├── MessageBubble.jsx  # Individual message with markdown bold
│   │   │   └── ChatInput.jsx    # Auto-expanding textarea + send button
│   │   │
│   │   ├── landing/
│   │   │   ├── Navbar.jsx       # Fixed nav with smooth scroll links
│   │   │   ├── HeroSection.jsx  # Hero headline, CTA, stats row
│   │   │   ├── FeaturesSection.jsx  # 6-feature grid
│   │   │   ├── HowItWorks.jsx   # 4-step expandable accordion
│   │   │   ├── AboutSection.jsx # About + 6-card value grid
│   │   │   ├── Testimonials.jsx # 3 student story cards
│   │   │   ├── CtaBanner.jsx    # Bottom CTA banner
│   │   │   └── Footer.jsx       # Footer with nav links
│   │   │
│   │   └── dashboard/
│   │       ├── DashboardNav.jsx     # Filter tabs + back button
│   │       ├── StatsRow.jsx         # 4 quick-stat cards
│   │       └── FeatureCard.jsx      # Hoverable tool card → opens chat
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx      # Assembles all landing sections
│   │   ├── DashboardPage.jsx    # Dashboard with filter + feature grid
│   │   └── ChatPage.jsx         # Chat window page wrapper
│   │
│   └── App.jsx                  # Root router (landing → dashboard → chat)
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

---

## 🔌 Connecting Voiceflow

Open `src/data/features.js` and replace each `voiceflowUrl` value with your actual Voiceflow project API key:

```js
{
  id: "mock-interview",
  voiceflowUrl: "YOUR_ACTUAL_VOICEFLOW_API_KEY_HERE",
  ...
}
```

Each feature has its own Voiceflow bot URL so you can run separate bots per tool.

---

## 🎨 Customization

| File | What to change |
|------|---------------|
| `src/data/features.js` | Tool names, descriptions, colors, Voiceflow URLs |
| `src/data/stats.js` | Hero stats numbers |
| `src/data/howSteps.js` | How It Works content |
| `src/styles/globals.js` | Font, base colors, keyframes |
| `src/components/landing/AboutSection.jsx` | About text & value cards |
| `src/components/landing/Testimonials.jsx` | Student quotes |

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **Inline styles** — No CSS framework dependency, fully portable
- **Voiceflow** — Backend AI chat (you configure)
- **Google Fonts** — Outfit typeface

---

Built for students, by students. 🎓
