export const projekte = [
  {
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Gemini AI"
    ],
    "github": "https://github.com/Kkzuiu/Dressify",
    "demoVideo": "",
    "image": "/projekte/Dressify.png",
    "gallery": [
      "/projekte/Dressify.png"
    ],
    "title": "Dressify",
    "short": {
      "de": "Eine Webapp als persönlicher KI Stylist und nachhaltiger Kleiderschrank Manager, mit der man seine Kleidung digital verwaltet, sie per Foto automatisch erfassen lässt und passende Outfits vorgeschlagen bekommt.",
      "en": "A web app that acts as a personal AI stylist and sustainable wardrobe manager, letting you organise your clothes digitally, add them automatically by photo and get matching outfit suggestions."
    },
    "abstract": {
      "idee": {
        "de": "Den eigenen Kleiderschrank digital abbilden und mit Hilfe von KI besser nutzen, also passende Outfits finden, den Überblick behalten und bewusster einkaufen.",
        "en": "To map your own wardrobe digitally and use it better with the help of AI, so you can find matching outfits, keep an overview and shop more consciously."
      },
      "beschreibung": {
        "de": "Die App hat mehrere Bereiche. Auf dem Dashboard sieht man eine Übersicht, im Kleiderschrank sind alle Kleidungsstücke nach Kategorie wie Oberteile, Hosen, Kleider, Schuhe oder Accessoires sortiert, jeweils mit Farbe, Preis und wie oft man das Stück schon getragen hat. Neue Kleidung fügt man über ein Foto hinzu, das die KI analysiert und daraus automatisch Name, Kategorie und Farbe ausfüllt. Im Bereich ShopSmart bekommt man passende Kombinationen und Einkaufsvorschläge, und im Profil hinterlegt man den eigenen Stil, damit die Vorschläge besser passen.",
        "en": "The app has several areas. The dashboard shows an overview, the wardrobe holds every clothing item sorted by category such as tops, bottoms, dresses, shoes or accessories, each with colour, price and how often it has been worn. New clothes are added through a photo that the AI analyses to fill in the name, category and colour automatically. The ShopSmart area gives matching combinations and shopping suggestions, and in the profile you store your own style so the suggestions fit better."
      },
      "umsetzung": {
        "de": "Umgesetzt als Webapp mit React und TypeScript, gebaut mit Vite und gestaltet mit Tailwind CSS. Die Navigation läuft über React Router, die Daten und Konten liegen in Firebase mit Firestore. Für den KI Stylisten ist die Google Gemini API angebunden, die Kleiderfotos erkennt und Outfit Vorschläge liefert. Die App ist sauber in Screens, Komponenten und Services aufgeteilt.",
        "en": "Built as a web app with React and TypeScript, bundled with Vite and styled with Tailwind CSS. Navigation runs through React Router, while data and accounts live in Firebase with Firestore. For the AI stylist the Google Gemini API is connected, which recognises clothing photos and delivers outfit suggestions. The app is cleanly split into screens, components and services."
      },
      "ergebnis": {
        "de": "Ein digitaler Kleiderschrank mit automatischer Kleidererkennung per Foto, Kategorien und Nutzungsverlauf, dazu Outfit und Einkaufsvorschläge mit KI und ein persönliches Profil, sauber in Bereiche gegliedert.",
        "en": "A digital wardrobe with automatic clothing recognition by photo, categories and usage history, plus AI outfit and shopping suggestions and a personal profile, cleanly split into areas."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für React und TypeScript, das Anbinden einer KI Schnittstelle wie Google Gemini, die Arbeit mit Firebase und Firestore und den Aufbau einer App aus mehreren Screens mit Router.",
        "en": "A good exercise in React and TypeScript, connecting an AI interface like Google Gemini, working with Firebase and Firestore and building an app from several screens with a router."
      }
    },
    "featured": true,
    "meta": {
      "team": {
        "de": "Gruppenprojekt",
        "en": "Group project"
      },
      "zeitraum": "2025",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "UI/UX, React Frontend sowie die Firebase und Gemini Anbindung.",
        "en": "UI/UX, the React frontend and the Firebase and Gemini integration."
      },
      "herausforderung": {
        "de": "Die automatische Erkennung von Kleidungsstücken über die Google Gemini API und das Umwandeln in strukturierte Daten.",
        "en": "Automatically recognising clothing items via the Google Gemini API and turning the result into structured data."
      }
    }
  },
  {
    "tech": [
      "TypeScript",
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
      "MongoDB"
    ],
    "github": "https://github.com/Kkzuiu/gaming_plattform",
    "demoVideo": "",
    "image": "/projekte/gaming.png",
    "gallery": [
      "/projekte/gaming.png",
      "/projekte/gaming2.png",
      "/projekte/gaming3.png",
      "/projekte/gaming4.png"
    ],
    "title": "Gaming Platform",
    "short": {
      "de": "Eine Webapp, um Games zu entdecken, in die eigene Bibliothek aufzunehmen und zu bewerten, mit Suche, Filtern und Preisen über alle Genres und Plattformen hinweg.",
      "en": "A web app to discover games, add them to your own library and review them, with search, filters and prices across all genres and platforms."
    },
    "abstract": {
      "idee": {
        "de": "Eine Plattform, auf der man Games entdecken, in die eigene Bibliothek aufnehmen, bewerten und sich mit anderen Spielenden austauschen kann.",
        "en": "A platform to discover games, add them to your own library, review them and connect with other players."
      },
      "beschreibung": {
        "de": "Eine Startseite mit Hero Bereich und kuratierten Titeln führt in die App. Dazu gibt es einen durchsuchbaren Katalog, den man nach Genre, Plattform und Preis filtern kann, sowie eine Detailkarte pro Spiel mit den wichtigsten Infos. Über rund 20 kuratierte Titel lässt sich stöbern, suchen und sortieren.",
        "en": "A landing page with a hero area and curated titles introduces the app. There is also a searchable catalogue that can be filtered by genre, platform and price, plus a detail card per game with the key information. Around 20 curated titles can be browsed, searched and sorted."
      },
      "umsetzung": {
        "de": "Umgesetzt als Webapp mit Next.js, TypeScript und CSS, die Daten liegen in MongoDB. Die Titel werden geladen und über Suche, Sortierung und Filter dynamisch angezeigt. Die Oberfläche ist komponentenbasiert aufgebaut und in einem modernen, dunklen Design gehalten.",
        "en": "Built as a web app with Next.js, TypeScript and CSS, with the data stored in MongoDB. The titles are loaded and shown dynamically through search, sorting and filters. The interface is component based and kept in a modern, dark design."
      },
      "ergebnis": {
        "de": "Eine flüssige Suche und Filterung, eine klare Detailansicht pro Spiel und ein aufgeräumtes, dunkles Design.",
        "en": "Smooth search and filtering, a clear detail view per game and a clean, dark design."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für Next.js und React, Zustandsverwaltung, Filter und Suchlogik sowie den Umgang mit TypeScript und einer Datenbank.",
        "en": "A good exercise in Next.js and React, state management, filter and search logic and working with TypeScript and a database."
      }
    },
    "meta": {
      "team": {
        "de": "Groppenprojekt",
        "en": "Group project"
      },
      "zeitraum": "2025",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Frontend mit Next.js und React, dazu Katalog, Suche und Filter mit MongoDB.",
        "en": "Frontend with Next.js and React, plus catalogue, search and filters with MongoDB."
      },
      "herausforderung": {
        "de": "Ein durchsuchbarer Katalog mit Filtern nach Genre, Plattform und Preis.",
        "en": "A searchable catalogue with filters by genre, platform and price."
      }
    }
  },
  {
    "tech": [
      "C#",
      "WinForms"
    ],
    "github": "https://github.com/Kkzuiu/Cuzzle",
    "demoVideo": "",
    "image": "/projekte/cuzzle_game.png",
    "gallery": [
      "/projekte/cuzzle_game.png",
      "/projekte/Cuzzle.png",
      "/projekte/Cuzzle2.png"
    ],
    "title": "Cuzzle",
    "short": {
      "de": "Ein Puzzlespiel als Windows Desktop App mit Startmenü, mehreren Levels, Zeitlimit und eigenem Design.",
      "en": "A puzzle game as a Windows desktop app with a start menu, several levels, a time limit and its own design."
    },
    "abstract": {
      "idee": {
        "de": "Ein eigenes kleines Puzzlespiel von Grund auf selbst bauen.",
        "en": "Build my own little puzzle game from scratch."
      },
      "beschreibung": {
        "de": "Ein Windows Desktop Spiel mit Startmenü, mehreren Levels und einer Navigation zurück zum Menü. Man wählt einen Schwierigkeitsgrad, hat ein Zeitlimit und setzt die verschobenen Kacheln wieder zum ganzen Bild zusammen.",
        "en": "A Windows desktop game with a start menu, several levels and navigation back to the menu. You pick a difficulty, play against a time limit and put the shuffled tiles back together into the full picture."
      },
      "umsetzung": {
        "de": "Umgesetzt in C# mit WinForms als Desktopanwendung. Eine eigene Oberfläche mit Menü, Levelauswahl, Timer und Spiellogik, aufgeteilt in mehrere Fenster und Ereignishandler.",
        "en": "Built in C# with WinForms as a desktop application. A custom interface with a menu, level selection, timer and game logic, split into several windows and event handlers."
      },
      "ergebnis": {
        "de": "Ein spielbares Puzzle mit klarer Menüführung, mehreren Levels, Zeitlimit und eigenem Look.",
        "en": "A playable puzzle with clear menu navigation, several levels, a time limit and its own look."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für C#, ereignisbasierte Programmierung, Fensternavigation und den Aufbau einer Desktopoberfläche.",
        "en": "A good exercise in C#, event based programming, window navigation and building a desktop interface."
      }
    },
    "meta": {
      "team": {
        "de": "Einzelprojekt",
        "en": "Solo project"
      },
      "zeitraum": "2023",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Spiellogik und Windows Oberfläche mit WinForms in C#.",
        "en": "Game logic and Windows UI with WinForms in C#."
      },
      "herausforderung": {
        "de": "Die Spiellogik sauber von der Oberfläche trennen.",
        "en": "Cleanly separating the game logic from the UI."
      }
    }
  },
  {
    "tech": [
      "C#",
      "WinForms"
    ],
    "github": "https://github.com/Kkzuiu/CTHangman",
    "demoVideo": "",
    "image": "/projekte/hangman_light.png",
    "gallery": [
      "/projekte/hangman_light.png",
      "/projekte/hangman_dark.png"
    ],
    "title": "CT Hangman",
    "short": {
      "de": "Ein Galgenmännchenspiel als C# Desktop App mit eigener Zeichenfläche für die Figur, Buchstabenanzeige, Fehlerzähler und Dark Mode.",
      "en": "A hangman game as a C# desktop app with a custom drawing canvas for the figure, a letter display, an error counter and a dark mode."
    },
    "abstract": {
      "idee": {
        "de": "Ein kleines, vollständiges Spiel von Grund auf selbst bauen.",
        "en": "Build a small, complete game from scratch."
      },
      "beschreibung": {
        "de": "Klassisches Galgenmännchen. Man rät die Buchstaben eines versteckten Wortes, bereits geratene Buchstaben werden angezeigt und ein Zähler hält die Fehler fest (zum Beispiel 4 von 6). Bei jedem Fehler wird die Figur Schritt für Schritt weitergezeichnet. Dazu gibt es einen Neustart, eine Anleitung und einen Dark Mode.",
        "en": "Classic hangman. You guess the letters of a hidden word, already guessed letters are shown and a counter keeps track of the mistakes (for example 4 of 6). With every mistake the figure is drawn step by step. There is also a restart, an instructions screen and a dark mode."
      },
      "umsetzung": {
        "de": "Umgesetzt als C# Desktopanwendung. Die Figur wird selbst auf einer Zeichenfläche gezeichnet, geratene Buchstaben und Fehler werden verwaltet, und die Oberfläche lässt sich zwischen hellem und dunklem Modus umschalten.",
        "en": "Built as a C# desktop application. The figure is drawn on a custom canvas, guessed letters and mistakes are managed, and the interface can be switched between a light and a dark mode."
      },
      "ergebnis": {
        "de": "Ein vollständig spielbares Hangman mit eigener Grafik, Fehlerzähler, Buchstabenanzeige und Dark Mode.",
        "en": "A fully playable hangman with custom graphics, an error counter, a letter display and a dark mode."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für C#, das Zeichnen auf einer Oberfläche, das Umschalten von Themes und das Verwalten von Spielzuständen.",
        "en": "A good exercise in C#, drawing on a surface, switching themes and managing game state."
      }
    },
    "meta": {
      "team": {
        "de": "Einzelprojekt",
        "en": "Solo project"
      },
      "zeitraum": "2023",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Das komplette Spiel: Logik, Wortverwaltung und WinForms Oberfläche.",
        "en": "The whole game: logic, word handling and the WinForms UI."
      },
      "herausforderung": {
        "de": "Den Spielzustand mit Versuchen und geratenen Buchstaben sauber verwalten.",
        "en": "Managing the game state with attempts and guessed letters cleanly."
      }
    }
  },
  {
    "tech": [
      "Java",
      "JavaFX",
      "Maven"
    ],
    "github": "https://github.com/Kkzuiu/HeatCalculatorFX",
    "demoVideo": "",
    "image": "/projekte/HeatCalculator.png",
    "gallery": [
      "/projekte/HeatCalculator.png",
      "/projekte/HeatCalculator2.png",
      "/projekte/HeatCalculator3.png"
    ],
    "title": "Heat Calculator FX",
    "short": {
      "de": "Eine Java Desktop App mit JavaFX Oberfläche zur Berechnung von Wärmewerten und Energiewerten, mit grafischer Eingabe und Ausgabe.",
      "en": "A Java desktop app with a JavaFX interface for calculating heat and energy values, with graphical input and output."
    },
    "abstract": {
      "idee": {
        "de": "Eine Desktop App, die eine physikalische Berechnung einfach und verständlich bedienbar macht.",
        "en": "A desktop app that makes a physics calculation easy and clear to use."
      },
      "beschreibung": {
        "de": "Über Eingabefelder gibt man die nötigen Werte ein, die App berechnet daraus die Wärmewerte und Energiewerte und zeigt das Ergebnis grafisch an. So wird aus einer Formel ein Werkzeug, das man ohne Rechnen von Hand benutzen kann.",
        "en": "You enter the required values into input fields, the app calculates the heat and energy values from them and shows the result graphically. This turns a formula into a tool you can use without doing the maths by hand."
      },
      "umsetzung": {
        "de": "Umgesetzt in Java mit einer grafischen Oberfläche in JavaFX. Eingabe, Berechnung und Ausgabe sind sauber getrennt, die Oberfläche ist übersichtlich aufgebaut.",
        "en": "Built in Java with a graphical interface in JavaFX. Input, calculation and output are cleanly separated, and the interface is laid out clearly."
      },
      "ergebnis": {
        "de": "Eine übersichtliche Oberfläche, die Berechnungen schnell, verständlich und nachvollziehbar anzeigt.",
        "en": "A clear interface that shows calculations quickly, understandably and transparently."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für Java, den Aufbau einer JavaFX Oberfläche, Eingabeprüfung und das Umsetzen einer Formel in Code.",
        "en": "A good exercise in Java, building a JavaFX interface, input validation and turning a formula into code."
      }
    },
    "meta": {
      "team": {
        "de": "Einzelprojekt",
        "en": "Solo project"
      },
      "zeitraum": "2023",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Berechnungslogik und JavaFX Oberfläche, aufgesetzt mit Maven.",
        "en": "Calculation logic and JavaFX UI, set up with Maven."
      },
      "herausforderung": {
        "de": "Eingaben prüfen und das Ergebnis übersichtlich anzeigen.",
        "en": "Validating input and displaying the result clearly."
      }
    }
  },
  {
    "tech": [
      "LLVM",
      "Java",
      "C#",
      ".NET MAUI",
      "XAML"
    ],
    "github": "https://github.com/Kkzuiu/MuseumApp-",
    "demoVideo": "",
    "image": "/projekte/HKM.png",
    "gallery": [
      "/projekte/HKM.png",
      "/projekte/HKM2.png",
      "/projekte/HKM3.png"
    ],
    "title": "HKM Museum App",
    "short": {
      "de": "Eine Museumsapp fürs Historische Museum Bern mit Registrierung und Login sowie einem digitalen Rundgang, um Wissen einfach und digital zu entdecken.",
      "en": "A museum app for the Bern History Museum with sign up and login as well as a digital tour, to discover knowledge simply and digitally."
    },
    "abstract": {
      "idee": {
        "de": "Ein digitaler Museumsführer, der Besuchende einfach und modern durch die Ausstellung begleitet.",
        "en": "A digital museum guide that accompanies visitors through the exhibition simply and in a modern way."
      },
      "beschreibung": {
        "de": "Eine plattformübergreifende App mit Registrierung und Login, einem Willkommensbereich und einem digitalen Rundgang durchs Museum. Über mehrere Seiten kann man sich anmelden und die Inhalte der Ausstellung entdecken.",
        "en": "A cross platform app with sign up and login, a welcome area and a digital tour through the museum. Across several pages you can sign in and discover the content of the exhibition."
      },
      "umsetzung": {
        "de": "Umgesetzt als plattformübergreifende App mit .NET MAUI, C# und Java, die Oberfläche in XAML. Enthält Benutzerkonten, mehrere Seiten und eine Navigation zwischen ihnen.",
        "en": "Built as a cross platform app with .NET MAUI, C# and Java, the interface in XAML. Includes user accounts, several pages and navigation between them."
      },
      "ergebnis": {
        "de": "Eine funktionierende App mit Anmeldung, die auf mehreren Geräten läuft und den Rundgang übersichtlich darstellt.",
        "en": "A working app with sign in that runs on several devices and presents the tour clearly."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für C# und .NET MAUI, das Gestalten von Oberflächen mit XAML und den Aufbau von Login und Seitennavigation.",
        "en": "A good exercise in C# and .NET MAUI, designing interfaces with XAML and building login and page navigation."
      }
    },
    "meta": {
      "team": {
        "de": "Teamprojekt",
        "en": "Team project"
      },
      "zeitraum": "2024",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Oberfläche mit XAML und Teile der App Logik in .NET MAUI.",
        "en": "UI with XAML and parts of the app logic in .NET MAUI."
      },
      "herausforderung": {
        "de": "Eine plattformübergreifende App mit .NET MAUI aufbauen und die Inhalte klar darstellen.",
        "en": "Building a cross platform app with .NET MAUI and presenting the content clearly."
      }
    }
  },
  {
    "tech": [
      "React",
      "HTML",
      "CSS",
      "TS",
      "PowerShell",
      "Dockerfile",
      "Go",
      "JS",
      "PocketBase",
      "Firebase"
    ],
    "github": "https://github.com/Kkzuiu/MatchaAfterDark",
    "demoVideo": "",
    "image": "/projekte/Matchafterdark.png",
    "gallery": [
      "/projekte/Matchafterdark.png"
    ],
    "title": "Matcha After Dark",
    "short": {
      "de": "Eine Webapp für Eventanmeldungen mit öffentlichem Anmeldeformular samt Programm und Menü sowie einem Adminbereich zum Verwalten der Gästeliste, inklusive Dark Mode.",
      "en": "A web app for event registration with a public sign up form including schedule and menu, plus an admin area to manage the guest list, including dark mode."
    },
    "abstract": {
      "idee": {
        "de": "Gäste sollen sich einfach anmelden können, und die Organisation soll die Gästeliste bequem verwalten können.",
        "en": "Guests should be able to register easily, and organisers should manage the guest list conveniently."
      },
      "beschreibung": {
        "de": "Der öffentliche Bereich zeigt ein Anmeldeformular, das Programm und das Menü. Im Adminbereich lassen sich Gäste erstellen, bearbeiten, löschen und ihr Status nachverfolgen. So ist der ganze Ablauf von der Anmeldung bis zur Verwaltung abgedeckt.",
        "en": "The public area shows a registration form, the schedule and the menu. In the admin area, guests can be created, edited and deleted, and their status tracked. This covers the whole flow from registration to management."
      },
      "umsetzung": {
        "de": "Frontend mit React, HTML, CSS und TypeScript, PocketBase und Firebase im Hintergrund, dazu Skripte in PowerShell und Go sowie ein Dockerfile für die Umgebung. Enthält einen Dark Mode und Statusupdates für die Gäste.",
        "en": "Frontend with React, HTML, CSS and TypeScript, PocketBase and Firebase in the background, plus scripts in PowerShell and Go and a Dockerfile for the environment. Includes a dark mode and status updates for the guests."
      },
      "ergebnis": {
        "de": "Ein kompletter Ablauf von der Anmeldung bis zur Verwaltung, sauber getrennt in einen öffentlichen und einen Adminbereich.",
        "en": "A complete flow from registration to management, cleanly split into a public and an admin area."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für React und TypeScript, die Anbindung von PocketBase und Firebase und den Aufbau von öffentlichem und geschütztem Bereich.",
        "en": "A good exercise in React and TypeScript, connecting PocketBase and Firebase and building a public and a protected area."
      }
    },
    "meta": {
      "team": {
        "de": "Teamprojekt",
        "en": "Team project"
      },
      "zeitraum": "2024",
      "status": {
        "de": "In Arbeit",
        "en": "In progress"
      },
      "rolle": {
        "de": "Frontend mit React und die Anbindung an das Backend mit PocketBase und Firebase.",
        "en": "Frontend with React and the connection to the backend with PocketBase and Firebase."
      },
      "herausforderung": {
        "de": "Viele Technologien von Frontend über Backend bis Container im Team zusammenbringen.",
        "en": "Bringing many technologies from frontend to backend to containers together as a team."
      }
    }
  },
  {
    "tech": [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase"
    ],
    "github": "https://github.com/Kkzuiu/Evently",
    "demoVideo": "",
    "image": "/projekte/evently.png",
    "gallery": [
      "/projekte/evently.png",
      "/projekte/evently_screen.png"
    ],
    "title": "Evently",
    "short": {
      "de": "Eine Mobile App, um Events in der Nähe zu entdecken, zu bewerten und zu speichern, mit Suche, Kategorienfilter, Standort und Login.",
      "en": "A mobile app to discover, review and save events nearby, with search, category filters, location and login."
    },
    "abstract": {
      "idee": {
        "de": "Eine App, mit der man passende Events in der Nähe findet, sie bewertet und die liebsten speichert.",
        "en": "An app to find suitable events nearby, review them and save your favourites."
      },
      "beschreibung": {
        "de": "Auf der Startseite werden Events angezeigt, die man durchsuchen und nach Kategorie filtern kann (zum Beispiel Musik Festival, Comedy oder Food). Zu jedem Event gibt es eine Detailseite mit Infos, Bewertungen und Sternen. Man kann eine eigene Bewertung mit Kommentar und Foto abgeben, Favoriten speichern, sein Profil bearbeiten und über den Standort die Distanz zu einem Event sehen.",
        "en": "The home screen shows events that can be searched and filtered by category (for example music festival, comedy or food). Each event has a detail page with information, reviews and stars. You can leave your own review with a comment and a photo, save favourites, edit your profile and see the distance to an event based on your location."
      },
      "umsetzung": {
        "de": "Umgesetzt als plattformübergreifende Mobile App mit React Native und Expo in TypeScript, im Team entwickelt. Registrierung, Login und Daten laufen über Firebase (Authentication, Firestore und Storage), Favoriten werden lokal auf dem Gerät gespeichert. Die App nutzt Standort, Kamera und Galerie sowie haptisches Feedback und ist in Screens, Navigation, Komponenten und Services aufgeteilt.",
        "en": "Built as a cross platform mobile app with React Native and Expo in TypeScript, developed in a team. Sign up, login and data run through Firebase (Authentication, Firestore and Storage), favourites are stored locally on the device. The app uses location, camera and gallery as well as haptic feedback, and is split into screens, navigation, components and services."
      },
      "ergebnis": {
        "de": "Eine vollständige App mit Anmeldung, Eventliste, Suche und Filter, Bewertungen mit Foto, Favoriten und Standortdistanz, sauber strukturiert und auf echten Geräten lauffähig.",
        "en": "A complete app with sign in, an event list, search and filters, reviews with photos, favourites and location distance, cleanly structured and running on real devices."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für React Native und Expo, die Anbindung von Firebase, Navigation zwischen Screens und den Umgang mit Standort, Kamera und lokalem Speicher.",
        "en": "A good exercise in React Native and Expo, connecting Firebase, navigation between screens and working with location, camera and local storage."
      }
    },
    "meta": {
      "team": {
        "de": "Einzelprojekt",
        "en": "Solo project"
      },
      "zeitraum": "2024",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Mobile App mit React Native und Expo, Daten und Login über Firebase.",
        "en": "Mobile app with React Native and Expo, data and login via Firebase."
      },
      "herausforderung": {
        "de": "Eine native App für iOS und Android aus einer Codebasis mit Expo bauen.",
        "en": "Building a native app for iOS and Android from one codebase with Expo."
      }
    }
  },
  {
    "tech": [
      "Bash",
      "Python",
      "Konsole",
      "Git"
    ],
    "github": "https://github.com/Kkzuiu/TicTacToe",
    "demoVideo": "",
    "image": "/projekte/tictactoe.png",
    "gallery": [
      "/projekte/tictactoe.png"
    ],
    "title": "Tic Tac Toe",
    "short": {
      "de": "Ein Tic Tac Toe für zwei Spieler in der Konsole, bewusst zweimal umgesetzt, einmal in Bash und einmal in Python, mit protokollierten Zügen.",
      "en": "A two player tic tac toe in the console, deliberately built twice, once in Bash and once in Python, with logged moves."
    },
    "abstract": {
      "idee": {
        "de": "Dasselbe Spiel bewusst zweimal umgesetzt: einmal in Bash, einmal in Python.",
        "en": "The same game deliberately built twice: once in Bash, once in Python."
      },
      "beschreibung": {
        "de": "Beide Spieler geben zuerst ihren Namen ein und setzen dann abwechselnd X und O auf ein 3×3 Feld (Felder 1 bis 9). Nach jedem Zug wird das aktualisierte Spielfeld angezeigt, bis eine Reihe, Spalte oder Diagonale voll ist oder alle neun Felder belegt sind. Jeder Zug wird mit Zeitstempel protokolliert. Am Spielende kann das Protokoll behalten oder gelöscht werden.",
        "en": "Both players first enter their name, then take turns placing X and O on a 3×3 board (fields 1 to 9). After every move the updated board is shown, until a row, column or diagonal is complete or all nine fields are taken. Every move is logged with a timestamp. At the end of the game the log can be kept or deleted."
      },
      "umsetzung": {
        "de": "Als Konsolenanwendung in zwei Sprachen umgesetzt. Das Spielfeld liegt in einem Array (Bash) beziehungsweise einer Liste (Python) und wird nach jedem Zug neu gezeichnet. Eingaben werden geprüft (gültige Zahl 1 bis 9, Feld noch frei), der Zug wechselt zwischen den Spielern, und nach jedem Zug testet das Programm alle acht Gewinnkombinationen sowie auf Unentschieden. Die Logik ist in Funktionen aufgeteilt (Spielfeld ausgeben, Zug setzen, Gewinner prüfen, protokollieren).",
        "en": "Built as a console application in two languages. The board is held in an array (Bash) or a list (Python) and redrawn after every move. Input is validated (valid number 1 to 9, field still free), turns alternate between players, and after each move the program checks all eight winning combinations as well as for a draw. The logic is split into functions (print board, place move, check winner, log)."
      },
      "ergebnis": {
        "de": "Zwei lauffähige Versionen mit identischem Verhalten, sauberer Konsolenausgabe, robuster Eingabeprüfung und zuverlässiger Gewinnerkennung.",
        "en": "Two working versions with identical behaviour, clean console output, robust input validation and reliable win detection."
      },
      "aufwand": {
        "de": "",
        "en": ""
      },
      "erkenntnisse": {
        "de": "Gute Übung für Arrays und Listen, Schleifen, Funktionen, Eingabevalidierung und Dateizugriff.",
        "en": "A good exercise in arrays and lists, loops, functions, input validation and file access."
      }
    },
    "meta": {
      "team": {
        "de": "Einzelprojekt",
        "en": "Solo project"
      },
      "zeitraum": "2023",
      "status": {
        "de": "Abgeschlossen",
        "en": "Completed"
      },
      "rolle": {
        "de": "Konsolenspiel in Bash und Python, versioniert mit Git.",
        "en": "Console game in Bash and Python, versioned with Git."
      },
      "herausforderung": {
        "de": "Die Spiellogik komplett im Terminal umsetzen.",
        "en": "Implementing the whole game logic in the terminal."
      }
    }
  }
]
