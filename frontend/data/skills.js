// Skill-Daten für die Tastatur-Ansicht.
// Reihenfolge = Lern-Reihenfolge (oben zuerst gelernt, unten zuletzt). Einfach Blöcke verschieben zum Umsortieren.
// icon = devicon-Klasse (Logo via CDN), legend = Kurztext für Tasten ohne Logo. desc frei anpassen.
export const skills = [
  {
    name: "HTML", cat: { de: "Web Dev", en: "Web dev" }, icon: "html5-plain colored", legend: "", projekte: ["Matcha After Dark"],
    desc: {
      de: "Die Grundstruktur jeder Website, für mich absolute Basis. Ich schreibe sauberes, semantisches Markup, achte auf klare Struktur, Barrierefreiheit und dass der Aufbau auch für andere nachvollziehbar bleibt. Damit bin ich sehr sicher und muss kaum nachschlagen. Zusammen mit CSS und JavaScript war HTML eine der ersten Sprachen, die ich zu Beginn meiner Ausbildung an der IMS gelernt habe.",
      en: "The backbone of every website and total basics for me. I write clean, semantic markup and care about clear structure, accessibility and keeping the layout easy for others to follow. I’m very confident here and rarely need to look things up. Together with CSS and JavaScript, HTML was one of the first languages I learned at the start of my studies at IMS.",
    },
  },
  {
    name: "CSS", cat: { de: "Web Dev", en: "Web dev" }, icon: "css3-plain colored", legend: "", projekte: ["Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "Eine meiner stärksten Seiten. Ich gestalte Layouts mit Flexbox und Grid, baue Animationen und Farbverläufe und arbeite mit Design Tokens für ein einheitliches Aussehen. Dieses Portfolio ist komplett von Hand in CSS gebaut, ganz ohne Framework, da steckt viel von meinem Gespür für Details drin. Zusammen mit HTML und JavaScript eine der ersten Sprachen, die ich ganz am Anfang gelernt habe.",
      en: "One of my strongest areas. I build layouts with flexbox and grid, create animations and gradients, and work with design tokens for a consistent look. This whole portfolio is hand written CSS with no framework, a lot of my eye for detail lives in there. Together with HTML and JavaScript, one of the first languages I learned right at the beginning.",
    },
  },
  {
    name: "JavaScript", cat: { de: "Web Dev", en: "Web dev" }, icon: "javascript-plain colored", legend: "", projekte: ["Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "Meine tägliche Sprache im Frontend. Ich setze damit Interaktivität, Logik und dynamische Inhalte um und arbeite mit dem DOM, Events und modernem ES6+. Ich fühle mich sehr wohl damit und lerne laufend dazu, vor allem bei komplexeren asynchronen Abläufen. Gehörte zusammen mit HTML und CSS zu den ersten Sprachen, mit denen ich angefangen habe.",
      en: "My everyday frontend language. I use it for interactivity, logic and dynamic content, working with the DOM, events and modern ES6+. I’m very comfortable with it and keep learning, especially around more complex async flows. Along with HTML and CSS, it was one of the first languages I started out with.",
    },
  },
  {
    name: "UI/UX Design", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "", legend: "UX", projekte: [],
    desc: {
      de: "Mir ist wichtig, dass etwas nicht nur schön aussieht, sondern sich auch gut und logisch bedienen lässt. Ich denke in Nutzerflüssen und achte auf Klarheit, Konsistenz und Details. Das ist einer meiner grössten Interessenbereiche, an dem ich ganz bewusst weiterarbeite.",
      en: "For me it’s not just about looking nice but about being easy and logical to use. I think in user flows and care about clarity, consistency and detail. It’s one of the areas I’m most passionate about and keep deliberately working on.",
    },
  },
  {
    name: "Markdown", cat: { de: "Weiteres", en: "More" }, icon: "markdown-original", legend: "", projekte: [],
    desc: {
      de: "Nutze ich flüssig für Dokumentation, READMEs und Notizen. Struktur, Codeblöcke, Tabellen und Links gehen mir leicht von der Hand.",
      en: "I write it fluently for documentation, READMEs and notes. Structure, code blocks, tables and links come easily to me.",
    },
  },
  {
    name: "Git", cat: { de: "Versionierung", en: "Version control" }, icon: "git-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Gehört fest zu meinem Alltag. Ich arbeite mit Branches, Commits und Merges und lerne, auch bei Konflikten oder in grösseren Teams den Überblick zu behalten. Im täglichen Gebrauch sicher, bei fortgeschrittenen Workflows arbeite ich mich noch tiefer ein.",
      en: "A firm part of my daily routine. I work with branches, commits and merges and I’m learning to stay on top of things during conflicts or in bigger teams. Confident day to day, still going deeper on advanced workflows.",
    },
  },
  {
    name: "GitHub", cat: { de: "Versionierung", en: "Version control" }, icon: "github-original", legend: "", projekte: [],
    desc: {
      de: "Meine Plattform für Repositories, Zusammenarbeit und Code Reviews. Fast alle meine Projekte liegen dort, und Pull Requests sowie Issues nutze ich regelmässig.",
      en: "My platform for repositories, collaboration and code reviews. Almost all my projects live there, and I use pull requests and issues regularly.",
    },
  },
  {
    name: "GitLab", cat: { de: "Versionierung", en: "Version control" }, icon: "gitlab-plain colored", legend: "", projekte: [],
    desc: {
      de: "Kenne ich aus Team Projekten in der Ausbildung, inklusive der integrierten CI/CD Pipelines. Solide Grundlagen, die ich bei Bedarf weiter ausbaue.",
      en: "I know it from team projects in my training, including its built in CI/CD pipelines. Solid basics that I extend when needed.",
    },
  },
  {
    name: "VS Code", cat: { de: "IDEs", en: "IDEs" }, icon: "vscode-plain colored", legend: "", projekte: [],
    desc: {
      de: "Mein Haupt Editor, den ich in und auswendig kenne. Shortcuts, Extensions, Debugging und die Git Integration nutze ich, um schnell und effizient zu arbeiten.",
      en: "My main editor, which I know inside out. I use shortcuts, extensions, debugging and Git integration to work fast and efficiently.",
    },
  },
  {
    name: "Visual Studio", cat: { de: "IDEs", en: "IDEs" }, icon: "visualstudio-plain colored", legend: "", projekte: [],
    desc: {
      de: "Die grosse IDE für meine C#- und .NET-Projekte. Ich nutze sie für Desktop- und App-Entwicklung, zum Debuggen und für das Verwalten grösserer Projektmappen.",
      en: "The full IDE for my C# and .NET projects. I use it for desktop and app development, debugging and managing larger solutions.",
    },
  },
  {
    name: "Windows", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "windows11-original colored", legend: "Win", projekte: [],
    desc: {
      de: "Mein Haupt Betriebssystem für die Entwicklung, besonders bei C# und .NET. Ich bin sicher im System, mit der Kommandozeile und beim Einrichten von Umgebungen.",
      en: "My main OS for development, especially for C# and .NET. I’m comfortable in the system, on the command line and setting up environments.",
    },
  },
  {
    name: "macOS", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "apple-original", legend: "", projekte: [],
    desc: {
      de: "Nutze ich ebenso im Alltag, vor allem für Web- und Mobile-Entwicklung. Terminal, Umgebung und die typischen Tools sind mir vertraut.",
      en: "I use it daily too, mostly for web and mobile development. I’m familiar with the terminal, the environment and the usual tooling.",
    },
  },
  {
    name: "Linux", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "linux-plain", legend: "", projekte: [],
    desc: {
      de: "Vor allem für Terminal, Server und Scripting. Ich bewege mich sicher auf der Kommandozeile und baue mein Wissen zu Servern und Automatisierung weiter aus.",
      en: "Mostly for terminal, servers and scripting. I’m comfortable on the command line and keep building my knowledge of servers and automation.",
    },
  },
  {
    name: "Canva", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "canva-original colored", legend: "", projekte: [],
    desc: {
      de: "Mein schnelles Tool für Grafiken, Posts und Präsentationen. Praktisch, wenn visuelle Inhalte abseits von Code gebraucht werden, und ich bin darin sehr routiniert.",
      en: "My quick tool for graphics, posts and presentations. Handy when visual content is needed outside of code, and I’m very fluent with it.",
    },
  },
  {
    name: "Figma", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "figma-plain colored", legend: "", projekte: [],
    desc: {
      de: "Mein Design Werkzeug für Mockups und Prototypen. Ich plane damit Layouts, bevor ich sie umsetze, und vertiefe mich weiter in Komponenten und Auto Layout.",
      en: "My design tool for mockups and prototypes. I plan layouts with it before building, and I’m going deeper into components and auto layout.",
    },
  },
  {
    name: "C#", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "csharp-plain colored", legend: "", projekte: ["Cuzzle", "CT Hangman", "HKM Museum App"],
    desc: {
      de: "Meine wichtigste Sprache in der Ausbildung. Damit habe ich Desktop- und mobile Apps gebaut, von Spielen wie Cuzzle und CT Hangman bis zur HKM Museum App. Ich fühle mich sicher mit objektorientierter Programmierung und baue mein Wissen laufend aus.",
      en: "My main language in my apprenticeship. I’ve built desktop and mobile apps with it, from games like Cuzzle and CT Hangman to the HKM Museum App. I’m confident with object oriented programming and keep expanding my knowledge.",
    },
  },
  {
    name: "3D Printing", cat: { de: "Hardware & 3D", en: "Hardware & 3D" }, icon: "", legend: "3D", projekte: [],
    desc: {
      de: "Ein Interesse, in das ich mich gerade aktiv einarbeite: vom digitalen Modell zum fertig gedruckten Objekt. Ich lerne Slicing, Materialien und Drucker Einstellungen und probiere viel aus.",
      en: "An interest I’m actively getting into right now: from a digital model to a finished printed object. I’m learning slicing, materials and printer settings, and experimenting a lot.",
    },
  },
  {
    name: "WinForms", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "WinF", projekte: ["Cuzzle", "CT Hangman"],
    desc: {
      de: "Klassische Windows Desktop Oberflächen mit C#. Für Cuzzle und CT Hangman habe ich damit die UIs gebaut. Solide für Formulare und ereignisbasierte Logik.",
      en: "Classic Windows desktop UIs with C#. I built the interfaces for Cuzzle and CT Hangman with it. Solid for forms and event driven logic.",
    },
  },
  {
    name: "XAML", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "XAML", projekte: ["HKM Museum App"],
    desc: {
      de: "Damit beschreibe ich .NET Oberflächen deklarativ, meist zusammen mit MAUI. Ich verstehe Bindings und Layouts und werde damit mit jedem Projekt sicherer.",
      en: "I use it to describe .NET interfaces declaratively, usually together with MAUI. I understand bindings and layouts and get more confident with every project.",
    },
  },
  {
    name: "MySQL", cat: { de: "Datenbanken", en: "Databases" }, icon: "mysql-original colored", legend: "", projekte: [],
    desc: {
      de: "Klassische relationale Datenbank für strukturierte Daten mit klaren Beziehungen. Ich modelliere Tabellen, schreibe Abfragen und lerne, auch komplexere Joins sauber zu lösen.",
      en: "A classic relational database for structured data with clear relationships. I model tables, write queries and I’m learning to handle more complex joins cleanly.",
    },
  },
  {
    name: ".NET", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "dot-net-plain colored", legend: ".NET", projekte: [],
    desc: {
      de: "Das Framework rund um C#. Es gibt mir Bibliotheken und Struktur für Desktop- und App-Entwicklung. Ich nutze es sicher in Projekten und vertiefe mich stetig weiter.",
      en: "The framework around C#. It gives me libraries and structure for desktop and app development. I use it confidently in projects and keep going deeper.",
    },
  },
  {
    name: ".NET MAUI", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "MAUI", projekte: ["HKM Museum App"],
    desc: {
      de: "Cross Platform UI Framework von .NET für mobile und Desktop-Apps. Damit ist die HKM Museum App entstanden. Ein Bereich, in dem ich mich noch aktiv weiterentwickle.",
      en: "A cross platform UI framework from .NET for mobile and desktop apps. The HKM Museum App was built with it. An area I’m still actively developing in.",
    },
  },
  {
    name: "IntelliJ IDEA", short: "IntelliJ", cat: { de: "IDEs", en: "IDEs" }, icon: "intellij-plain colored", legend: "", projekte: [],
    desc: {
      de: "Meine IDE für Java Projekte wie den Heat Calculator FX. Ich nutze die üblichen Tools zum Navigieren, Refactoren und Debuggen.",
      en: "My IDE for Java projects like the Heat Calculator FX. I use the usual tools for navigating, refactoring and debugging.",
    },
  },
  {
    name: "Java", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "java-plain colored", legend: "", projekte: ["Heat Calculator FX", "HKM Museum App"],
    desc: {
      de: "Objektorientierte Sprache aus der Ausbildung. Damit habe ich unter anderem den Heat Calculator FX und Teile der HKM Museum App umgesetzt. Solide Grundlagen, die ich weiter festige.",
      en: "An object oriented language from my training. I built the Heat Calculator FX and parts of the HKM Museum App with it, among others. Solid basics that I keep reinforcing.",
    },
  },
  {
    name: "JavaFX", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "", legend: "FX", projekte: ["Heat Calculator FX"],
    desc: {
      de: "UI Toolkit für Java Desktop Apps. Für den Heat Calculator FX habe ich damit die Oberfläche gebaut, inklusive Layouts und Ereignissteuerung.",
      en: "A UI toolkit for Java desktop apps. I built the interface of the Heat Calculator FX with it, including layouts and event handling.",
    },
  },
  {
    name: "Python", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "python-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Eine meiner Lieblingssprachen für Skripte, Automatisierung und schnelle Logik. Angenehm zu lesen und vielseitig, ich greife oft dazu, wenn ich etwas rasch umsetzen will, und lerne stetig neue Bibliotheken kennen.",
      en: "One of my favourite languages for scripts, automation and quick logic. Pleasant to read and versatile, I often reach for it to build something quickly, and I keep learning new libraries.",
    },
  },
  {
    name: "Bash", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "bash-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Shell Scripting für Terminal und Automatisierung. Mein Tic Tac Toe Projekt läuft komplett in der Konsole. Ich automatisiere gern kleine Abläufe und baue mein Wissen weiter aus.",
      en: "Shell scripting for the terminal and automation. My Tic Tac Toe project runs entirely in the console. I like automating small tasks and keep expanding my knowledge.",
    },
  },
  {
    name: "PowerShell", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "powershell-plain colored", legend: "PS", projekte: ["Matcha After Dark"],
    desc: {
      de: "Windows Scripting für Automatisierung und Setup Aufgaben. Hier stehe ich eher am Anfang und nutze es für kleinere Automatisierungen, lerne aber gezielt weiter.",
      en: "Windows scripting for automation and setup tasks. I’m rather at the beginning here and use it for smaller automations, but I’m actively learning more.",
    },
  },
  {
    name: "Docker", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "docker-plain colored", legend: "", projekte: ["Matcha After Dark"],
    desc: {
      de: "Anwendungen in Container packen, damit sie überall gleich laufen. Erste Erfahrung unter anderem in Matcha After Dark, ein Thema, in das ich mich gerade aktiv einarbeite.",
      en: "Packaging apps into containers so they run the same everywhere. First experience in Matcha After Dark, among others, a topic I’m actively getting into right now.",
    },
  },
  {
    name: "SQL", cat: { de: "Datenbanken", en: "Databases" }, icon: "", legend: "SQL", projekte: [],
    desc: {
      de: "Die Abfragesprache für relationale Datenbanken. Joins, Aggregationen und ein sauberes Datenmodell sind mir vertraut. Ich schreibe sicher Abfragen und denke gern in Datenstrukturen.",
      en: "The query language for relational databases. Joins, aggregations and a clean data model are familiar to me. I write queries confidently and like thinking in data structures.",
    },
  },
  {
    name: "SQLite", cat: { de: "Datenbanken", en: "Databases" }, icon: "sqlite-plain colored", legend: "", projekte: [],
    desc: {
      de: "Leichte, dateibasierte Datenbank, perfekt für kleine Apps und Prototypen ohne Server. Nutze ich für schnelle lokale Datenhaltung.",
      en: "A lightweight, file based database, perfect for small apps and prototypes without a server. I use it for quick local storage.",
    },
  },
  {
    name: "MongoDB", cat: { de: "Datenbanken", en: "Databases" }, icon: "mongodb-plain colored", legend: "", projekte: ["Gaming Platform"],
    desc: {
      de: "Dokumentenbasierte NoSQL Datenbank. In der Gaming Platform speichere ich damit flexible, verschachtelte Daten. Ich lerne, Datenmodelle bewusst NoSQL gerecht zu gestalten.",
      en: "A document based NoSQL database. In the Gaming Platform I use it to store flexible, nested data. I’m learning to design data models the NoSQL way.",
    },
  },
  {
    name: "Redis", cat: { de: "Datenbanken", en: "Databases" }, icon: "redis-plain colored", legend: "", projekte: [],
    desc: {
      de: "In Memory Datenbank für schnelles Caching und Key Value Daten. Ich arbeite mich gerade ein und schaue mir an, wo sie am meisten Tempo bringt.",
      en: "An in memory database for fast caching and key value data. I’m getting into it and exploring where it adds the most speed.",
    },
  },
  {
    name: "Neo4j", cat: { de: "Datenbanken", en: "Databases" }, icon: "neo4j-plain colored", legend: "", projekte: [],
    desc: {
      de: "Graphdatenbank für stark vernetzte Daten, Beziehungen als Knoten und Kanten. Ein neues Thema für mich, das ich gerade lerne und spannend finde.",
      en: "A graph database for highly connected data, relationships as nodes and edges. A new topic for me that I’m currently learning and find exciting.",
    },
  },
  {
    name: "Prototyping", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "", legend: "PT", projekte: [],
    desc: {
      de: "Ideen früh sichtbar machen, bevor programmiert wird. Das hilft mir, Feedback einzuholen und Umwege zu sparen. Ein Teil meiner Design Arbeit, den ich weiter ausbaue.",
      en: "Making ideas visible early, before coding. It helps me gather feedback and avoid detours. Part of my design work that I keep developing.",
    },
  },
  {
    name: "PocketBase", cat: { de: "Datenbanken", en: "Databases" }, icon: "", legend: "PB", projekte: ["Matcha After Dark"],
    desc: {
      de: "Kompaktes Open Source Backend mit Datenbank und Auth in einer Datei. In Matcha After Dark im Einsatz. Praktisch für schnelle Projekte, und ich lerne die Möglichkeiten weiter kennen.",
      en: "A compact open source backend with database and auth in a single file. Used in Matcha After Dark. Handy for quick projects, and I keep learning its capabilities.",
    },
  },
  {
    name: "Node.js", cat: { de: "Backend", en: "Backend" }, icon: "nodejs-plain colored", legend: "", projekte: [],
    desc: {
      de: "JavaScript auf dem Server. Damit baue ich kleine Backends, APIs und Tools ausserhalb des Browsers. Solide Grundlagen, die ich in Richtung grösserer Backends erweitere.",
      en: "JavaScript on the server. I build small backends, APIs and tools outside the browser with it. Solid basics that I’m extending towards larger backends.",
    },
  },
  {
    name: "Express", cat: { de: "Backend", en: "Backend" }, icon: "express-original", legend: "", projekte: [],
    desc: {
      de: "Schlankes Web Framework für Node.js. Damit setze ich REST Routen und einfache Server auf. Ich werde mit jedem Projekt routinierter.",
      en: "A minimal web framework for Node.js. I use it to set up REST routes and simple servers. I get more fluent with every project.",
    },
  },
  {
    name: "REST APIs", cat: { de: "Backend", en: "Backend" }, icon: "", legend: "REST", projekte: [],
    desc: {
      de: "Der Standard, wie Frontend und Backend Daten austauschen. Ich entwerfe und konsumiere REST Schnittstellen sicher und achte auf saubere Endpunkte und Statuscodes.",
      en: "The standard way frontend and backend exchange data. I design and consume REST endpoints confidently and care about clean routes and status codes.",
    },
  },
  {
    name: "Firebase", cat: { de: "Backend", en: "Backend" }, icon: "firebase-plain colored", legend: "", projekte: ["Dressify", "Matcha After Dark", "Evently"],
    desc: {
      de: "Backend as a Service von Google: Auth, Datenbank und Hosting ohne eigenen Server. Mein Go to für schnelle App Backends, in Dressify, Matcha After Dark und Evently im Einsatz. Damit fühle ich mich sehr wohl.",
      en: "Google’s backend as a service: auth, database and hosting without your own server. My go to for fast app backends, used in Dressify, Matcha After Dark and Evently. I’m very comfortable with it.",
    },
  },
  {
    name: "Responsive Design", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "", legend: "RWD", projekte: [],
    desc: {
      de: "Layouts, die auf Handy, Tablet und Desktop gleich gut funktionieren. Für mich Pflicht bei jedem Projekt, ich denke von Anfang an mobil und teste auf verschiedenen Grössen.",
      en: "Layouts that work equally well on phone, tablet and desktop. A must for me on every project, I think mobile first and test on different sizes.",
    },
  },
  {
    name: "Go", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "", legend: "Go", projekte: ["Matcha After Dark"],
    desc: {
      de: "Kompilierte Sprache von Google, schnell und schlank. In Matcha After Dark für Backend Teile im Einsatz. Ein Bereich, in dem ich meine Erfahrung noch ausbaue.",
      en: "A compiled language from Google, fast and lean. Used for backend parts in Matcha After Dark. An area where I’m still building experience.",
    },
  },
  {
    name: "React Native", cat: { de: "Mobile", en: "Mobile" }, icon: "react-original colored", legend: "", projekte: ["Evently"],
    desc: {
      de: "React für native Mobile Apps. Damit habe ich Evently für iOS und Android gebaut. Ich vertiefe mich weiter in native Komponenten und Navigation.",
      en: "React for native mobile apps. I built Evently for iOS and Android with it. I keep going deeper into native components and navigation.",
    },
  },
  {
    name: "Expo", cat: { de: "Mobile", en: "Mobile" }, icon: "", legend: "Expo", projekte: ["Evently"],
    desc: {
      de: "Toolkit rund um React Native, das Entwicklung und Testen auf dem Handy stark vereinfacht. In Evently genutzt, praktisch für schnelles Ausprobieren.",
      en: "A toolkit around React Native that greatly simplifies developing and testing on a phone. Used in Evently, great for quick iteration.",
    },
  },
  {
    name: "React", cat: { de: "Web Dev", en: "Web dev" }, icon: "react-original colored", legend: "", projekte: ["Dressify", "Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "Meine wichtigste Frontend Bibliothek. Ich baue Oberflächen gern aus kleinen, wiederverwendbaren Komponenten und arbeite mit Hooks und State. Fast jedes meiner Web Projekte läuft mit React, hier fühle ich mich stark und lerne trotzdem laufend Neues dazu.",
      en: "My most important frontend library. I like building UIs from small, reusable components and work with hooks and state. Almost every web project of mine runs on React, I feel strong here and still keep learning.",
    },
  },
  {
    name: "TypeScript", cat: { de: "Web Dev", en: "Web dev" }, icon: "typescript-plain colored", legend: "", projekte: ["Dressify", "Gaming Platform", "Matcha After Dark", "Evently"],
    desc: {
      de: "JavaScript mit Typen. Ich greife bei grösseren Projekten gern dazu, weil Fehler früher auffallen und der Code lesbarer bleibt. Nutze ich in Dressify, der Gaming Platform, Matcha After Dark und Evently.",
      en: "JavaScript with types. I reach for it on bigger projects because bugs surface earlier and the code stays readable. Used in Dressify, the Gaming Platform, Matcha After Dark and Evently.",
    },
  },
  {
    name: "Firestore", cat: { de: "Datenbanken", en: "Databases" }, icon: "firebase-plain colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "Die Echtzeit NoSQL Datenbank von Firebase. Damit halte ich App Daten und Nutzerkonten synchron, zum Beispiel in Dressify. Ich bin sicher im Umgang mit Sammlungen und Echtzeit Updates.",
      en: "Firebase’s real time NoSQL database. I use it to keep app data and user accounts in sync, e.g. in Dressify. I’m confident with collections and real time updates.",
    },
  },
  {
    name: "Next.js", cat: { de: "Web Dev", en: "Web dev" }, icon: "", legend: "Next", projekte: ["Gaming Platform"],
    desc: {
      de: "Das React Framework für Routing, Server Rendering und Struktur. Dieses Portfolio ist damit gebaut (App Router). Ich lerne die serverseitigen Möglichkeiten weiter kennen.",
      en: "The React framework for routing, server rendering and structure. This portfolio is built with it (App Router). I’m still getting to know its server side features.",
    },
  },
  {
    name: "Vite", cat: { de: "Web Dev", en: "Web dev" }, icon: "vitejs-plain colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "Schnelles Build Tool und Dev Server für moderne Web Apps. Mein Setup für React Projekte ausserhalb von Next.js, zum Beispiel in Dressify.",
      en: "A fast build tool and dev server for modern web apps. My setup for React projects outside of Next.js, e.g. in Dressify.",
    },
  },
  {
    name: "Tailwind CSS", short: "Tailwind", cat: { de: "Web Dev", en: "Web dev" }, icon: "tailwindcss-original colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "Utility First CSS, Styling direkt im Markup. Praktisch, wenn es schnell und konsistent gehen soll, zum Beispiel in Dressify. Ich mag den Ansatz und werde damit immer schneller.",
      en: "Utility first CSS, styling right in the markup. Handy when things need to be fast and consistent, e.g. in Dressify. I like the approach and keep getting faster with it.",
    },
  },
  {
    name: "Agile", cat: { de: "Projektmanagement", en: "Project management" }, icon: "", legend: "AG", projekte: [],
    desc: {
      de: "Iterative Arbeitsweise mit kurzen Feedback Schleifen. So arbeite ich am liebsten im Team, aus Projekten in der Ausbildung vertraut.",
      en: "An iterative way of working with short feedback loops. It’s how I like to work in a team, familiar from projects in my training.",
    },
  },
  {
    name: "Scrum", cat: { de: "Projektmanagement", en: "Project management" }, icon: "", legend: "Scr", projekte: [],
    desc: {
      de: "Agiles Framework mit Sprints, Rollen und regelmässigen Meetings. Aus Team Projekten in der Ausbildung vertraut; ich lerne, die Abläufe noch bewusster einzusetzen.",
      en: "An agile framework with sprints, roles and regular meetings. Familiar from team projects in my training; I’m learning to apply the process even more deliberately.",
    },
  },
  {
    name: "Azure", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "azure-plain colored", legend: "", projekte: [],
    desc: {
      de: "Microsofts Cloud Plattform. Ich mache erste Schritte mit Hosting und Cloud Diensten und baue mein Wissen bewusst aus.",
      en: "Microsoft’s cloud platform. I’m taking first steps with hosting and cloud services and deliberately building my knowledge.",
    },
  },
  {
    name: "Vercel", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "vercel-original", legend: "▲", projekte: [],
    desc: {
      de: "Hosting Plattform für Frontend- und Next.js-Projekte, direkt aus Git deploybar. Nutze ich, um Projekte schnell online zu bringen.",
      en: "A hosting platform for frontend and Next.js projects, deployable straight from Git. I use it to get projects online quickly.",
    },
  },
]
