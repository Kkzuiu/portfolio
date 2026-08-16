const leer = { de: '', en: '' }

export const projekte = [
  {
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/Kkzuiu/gaming_plattform',
    demoVideo: '',
    image: '/projekte/gaming.png',
    gallery: ['/projekte/gaming.png', '/projekte/gaming2.png', '/projekte/gaming3.png', '/projekte/gaming4.png'],
    title: 'Gaming Platform',
    short: {
      de: 'Web-App, um Games zu entdecken, zu sammeln und zu bewerten – mit Suche, Filtern und Preisen, über alle Genres und Plattformen.',
      en: 'Web app to discover, collect and review games – with search, filters and prices, across all genres and platforms.',
    },
    abstract: {
      idee: {
        de: 'Eine Plattform, auf der man Games entdecken, in die eigene Bibliothek aufnehmen, bewerten und sich mit anderen Spielenden verbinden kann.',
        en: 'A platform to discover games, add them to your own library, review them and connect with other players.',
      },
      beschreibung: {
        de: 'Startseite mit Hero und kuratierten Titeln, dazu ein durchsuchbarer Katalog mit Filtern (Genre, Plattform, Preis) und einer Detailkarte pro Spiel.',
        en: 'A landing page with a hero and curated titles, plus a searchable catalogue with filters (genre, platform, price) and a detail card per game.',
      },
      umsetzung: {
        de: 'Umgesetzt als Web-App mit React und TypeScript. Suche, Sortierung und Filter für rund 20 kuratierte Titel; modernes, dunkles UI.',
        en: 'Built as a web app with React and TypeScript. Search, sorting and filters for around 20 curated titles; a modern dark UI.',
      },
      ergebnis: {
        de: 'Eine flüssige Such- und Filterfunktion und ein aufgeräumtes, dunkles Design.',
        en: 'Smooth search and filtering and a clean, dark design.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },

  {
    tech: ['C#', 'WinForms'],
    github: 'https://github.com/Kkzuiu/Cuzzle',
    demoVideo: '',
    image: '/projekte/Cuzzle.png',
    gallery: ['/projekte/Cuzzle.png', '/projekte/Cuzzle2.png'],
    title: 'Cuzzle',
    short: {
      de: 'Puzzle-Spiel als Windows-Desktop-App mit Startmenü, mehreren Levels und eigenem Design.',
      en: 'Puzzle game as a Windows desktop app with a start menu, several levels and its own design.',
    },
    abstract: {
      idee: {
        de: 'Ein eigenes kleines Puzzle-Spiel von Grund auf selbst bauen.',
        en: 'Build my own little puzzle game from scratch.',
      },
      beschreibung: {
        de: 'Windows-Desktop-Spiel mit Startmenü, mehreren Levels (Level 1–3) und Navigation zurück zum Menü.',
        en: 'A Windows desktop game with a start menu, several levels (1–3) and navigation back to the menu.',
      },
      umsetzung: {
        de: 'Umgesetzt in C# als Desktop-Anwendung mit eigener Oberfläche, Level-Auswahl und Spiellogik.',
        en: 'Built in C# as a desktop application with a custom interface, level selection and game logic.',
      },
      ergebnis: {
        de: 'Ein spielbares Puzzle mit klarer Menüführung und mehreren Levels.',
        en: 'A playable puzzle with clear menu navigation and several levels.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },

  {
    tech: ['C#', 'Desktop-UI'],
    github: 'https://github.com/Kkzuiu/CTHangman',
    demoVideo: '',
    image: '/projekte/Hangman1.png',
    gallery: ['/projekte/Hangman1.png', '/projekte/Hangman2.png'],
    title: 'CT Hangman',
    short: {
      de: 'Galgenmännchen-Spiel als C#-Desktop-App: eigene Zeichenfläche für die Figur, Wortverwaltung und mehrere Fenster.',
      en: 'Hangman game as a C# desktop app: a custom drawing canvas, word management and multiple windows.',
    },
    abstract: {
      idee: {
        de: 'Ein kleines, vollständiges Spiel selbst von Grund auf bauen.',
        en: 'Build a small, complete game from scratch.',
      },
      beschreibung: {
        de: 'Klassisches Galgenmännchen mit Wörter-Raten, mehreren Fenstern (Start, Spiel, Dialog) und einer selbst gezeichneten Figur.',
        en: 'Classic hangman with word guessing, multiple windows (start, game, dialog) and a self-drawn figure.',
      },
      umsetzung: {
        de: 'C#-Desktop-Anwendung mit eigener Zeichenfläche (Canvas), Wortverwaltung und Fenster-Navigation.',
        en: 'C# desktop application with a custom drawing canvas, word repository and window navigation.',
      },
      ergebnis: {
        de: 'Ein vollständig spielbares Hangman mit eigener Grafik.',
        en: 'A fully playable hangman with custom graphics.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },

  {
    tech: ['Java', 'JavaFX'],
    github: 'https://github.com/Kkzuiu/HeatCalculatorFX',
    demoVideo: '',
    image: '/projekte/HeatCalculator.png',
    gallery: ['/projekte/HeatCalculator.png', '/projekte/HeatCalculator2.png', '/projekte/HeatCalculator3.png'],
    title: 'Heat Calculator FX',
    short: {
      de: 'Java-Desktop-App mit JavaFX-Oberfläche zur Berechnung von Wärme-/Energiewerten – mit grafischer Ein- und Ausgabe.',
      en: 'Java desktop app with a JavaFX interface for calculating heat / energy values – with graphical input and output.',
    },
    abstract: {
      idee: {
        de: 'Eine Desktop-App, die eine physikalische Berechnung einfach bedienbar macht.',
        en: 'A desktop app that makes a physics calculation easy to use.',
      },
      beschreibung: {
        de: 'Anwendung zur Berechnung von Wärme-/Energiewerten mit Eingabefeldern und grafischer Ausgabe.',
        en: 'An application for calculating heat / energy values with input fields and graphical output.',
      },
      umsetzung: {
        de: 'Umgesetzt in Java mit einer grafischen Oberfläche (JavaFX) für Eingaben, Berechnung und Ausgabe.',
        en: 'Built in Java with a graphical interface (JavaFX) for input, calculation and output.',
      },
      ergebnis: {
        de: 'Eine übersichtliche Oberfläche, die Berechnungen schnell und verständlich anzeigt.',
        en: 'A clear interface that shows calculations quickly and understandably.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },

  {
    tech: ['C#', '.NET MAUI', 'XAML'],
    github: 'https://github.com/Kkzuiu/MuseumApp-',
    demoVideo: '',
    image: '/projekte/HKM.png',
    gallery: ['/projekte/HKM.png', '/projekte/HKM2.png', '/projekte/HKM3.png'],
    title: 'HKM – Museum App',
    short: {
      de: 'Museums-App fürs Historische Museum Bern (HKM): Registrierung/Login und digitaler Rundgang – Wissen entdecken, einfach und digital.',
      en: 'Museum app for the Bern History Museum (HKM): sign-up/login and a digital tour – discover knowledge, simply and digitally.',
    },
    abstract: {
      idee: {
        de: 'Ein digitaler Museumsführer, der Besuchende einfach und modern durch die Ausstellung begleitet.',
        en: 'A digital museum guide that accompanies visitors through the exhibition simply and in a modern way.',
      },
      beschreibung: {
        de: 'Plattformübergreifende App mit Registrierung und Login, Willkommensbereich und digitalem Rundgang durchs Museum.',
        en: 'A cross-platform app with sign-up and login, a welcome area and a digital tour through the museum.',
      },
      umsetzung: {
        de: 'Cross-Plattform-App mit .NET MAUI und C# (Oberfläche in XAML), inklusive Benutzerkonten und mehreren Seiten.',
        en: 'Cross-platform app with .NET MAUI and C# (UI in XAML), including user accounts and several pages.',
      },
      ergebnis: {
        de: 'Eine funktionierende App mit Anmeldung, die auf mehreren Geräten läuft.',
        en: 'A working app with sign-in that runs on several devices.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },

  {
    tech: ['React', 'TypeScript', 'PocketBase'],
    github: 'https://github.com/Kkzuiu/MatchaAfterDark',
    demoVideo: '',
    image: '/projekte/Matchafterdark.png',
    gallery: ['/projekte/Matchafterdark.png'],
    title: 'Matcha After Dark',
    short: {
      de: 'Web-App für Event-Anmeldungen: öffentliches Anmeldeformular mit Programm und Menü, plus Admin-Bereich zum Verwalten der Gästeliste. Mit Dark Mode.',
      en: 'Web app for event registration: a public sign-up form with schedule and menu, plus an admin area to manage the guest list. With dark mode.',
    },
    abstract: {
      idee: {
        de: 'Gäste sollen sich einfach anmelden können, und die Organisation soll die Gästeliste bequem verwalten können.',
        en: 'Guests should be able to register easily, and organisers should manage the guest list conveniently.',
      },
      beschreibung: {
        de: 'Öffentlicher Bereich mit Anmeldeformular, Programm und Menü; Admin-Bereich zum Erstellen, Bearbeiten, Löschen und Nachverfolgen der Gäste.',
        en: 'A public area with a registration form, schedule and menu; an admin area to create, edit, delete and track guests.',
      },
      umsetzung: {
        de: 'Frontend mit React und TypeScript, PocketBase als Datenbank/Backend. Inklusive Dark Mode und Status-Updates.',
        en: 'Frontend with React and TypeScript, PocketBase as the database/backend. Includes dark mode and status updates.',
      },
      ergebnis: {
        de: 'Ein kompletter Ablauf von der Anmeldung bis zur Verwaltung – sauber getrennt in öffentlichen und Admin-Bereich.',
        en: 'A complete flow from registration to management – cleanly split into a public and an admin area.',
      },
      aufwand: leer,
      erkenntnisse: leer,
    },
  },
]
