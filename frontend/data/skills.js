// Skill-Daten für die Tastatur-Ansicht.
// niveau: sehr | gut | grund. icon = devicon-Klasse, legend = Kurztext ohne Logo. desc = persönlich, frei anpassen.
export const skills = [
  {
    name: "HTML", niveau: "sehr", cat: { de: "Web Dev", en: "Web dev" }, icon: "html5-plain colored", legend: "", projekte: ["Matcha After Dark"],
    desc: {
      de: "Eine der ersten Sachen, die ich in der Ausbildung gelernt habe, und heute geht es mir völlig locker von der Hand. Wenn ich eine Seite aufbaue, achte ich ganz automatisch auf sauberen, logischen Aufbau.",
      en: "One of the first things I learned in my apprenticeship, and today it comes completely naturally to me. When I build a page I automatically pay attention to a clean, logical structure.",
    },
  },
  {
    name: "CSS", niveau: "sehr", cat: { de: "Web Dev", en: "Web dev" }, icon: "css3-plain colored", legend: "", projekte: ["Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "Hier lebe ich mich richtig aus. Diese ganze Website habe ich von Hand in CSS gestaltet, mit Layouts, Animationen und Farben, und genau dieses Gestalten macht mir am meisten Spass.",
      en: "This is where I really let loose. I designed this whole website by hand in CSS, with layouts, animations and colours, and that styling is the part I enjoy most.",
    },
  },
  {
    name: "JavaScript", niveau: "gut", cat: { de: "Web Dev", en: "Web dev" }, icon: "javascript-plain colored", legend: "", projekte: ["Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "Meine tägliche Sprache im Frontend. Damit habe ich unter anderem die Gaming Platform und Matcha After Dark interaktiv gemacht, und bei kniffligen, asynchronen Sachen lerne ich noch dazu.",
      en: "My everyday frontend language. I made the Gaming Platform and Matcha After Dark interactive with it, among others, and I’m still learning on the trickier async parts.",
    },
  },
  {
    name: "UI/UX Design", niveau: "gut", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "", legend: "UX", projekte: [],
    desc: {
      de: "Ich habe früher viel gezeichnet und gestaltet, daher liegt es mir am Herzen, dass meine Projekte schön und angenehm zu bedienen sind, für andere und für mich selbst.",
      en: "I used to draw and design a lot, so it matters to me that my projects look good and feel nice to use, for others and for myself.",
    },
  },
  {
    name: "Markdown", niveau: "gut", cat: { de: "Weiteres", en: "More" }, icon: "markdown-original", legend: "", projekte: [],
    desc: {
      de: "Schreibe ich flüssig, egal ob Dokumentation, Notizen oder READMEs. Struktur und Codeblöcke gehen mir leicht von der Hand.",
      en: "I write it fluently, whether documentation, notes or READMEs. Structure and code blocks come easily to me.",
    },
  },
  {
    name: "Git", niveau: "gut", cat: { de: "Versionierung", en: "Version control" }, icon: "git-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Mit Git halte ich meine Projekte fest und arbeite ganz selbstverständlich mit Commits und Branches.",
      en: "I keep my projects under control with Git and work with commits and branches as a matter of course.",
    },
  },
  {
    name: "GitHub", niveau: "gut", cat: { de: "Versionierung", en: "Version control" }, icon: "github-original", legend: "", projekte: [],
    desc: {
      de: "Auf GitHub liegen fast alle meine Projekte, und auch dieses Portfolio wird darüber deployt.",
      en: "Almost all my projects live on GitHub, and this portfolio is deployed through it too.",
    },
  },
  {
    name: "GitLab", niveau: "grund", cat: { de: "Versionierung", en: "Version control" }, icon: "gitlab-plain colored", legend: "", projekte: [],
    desc: {
      de: "GitLab kenne ich aus Team Projekten in der Ausbildung, inklusive der CI/CD Pipelines.",
      en: "I know GitLab from team projects in my training, including the CI/CD pipelines.",
    },
  },
  {
    name: "VS Code", niveau: "sehr", cat: { de: "IDEs", en: "IDEs" }, icon: "vscode-plain colored", legend: "", projekte: [],
    desc: {
      de: "Mein Zuhause beim Coden, das ich in und auswendig kenne. Shortcuts, Extensions und Debugging nutze ich, um schnell zu arbeiten.",
      en: "My home when coding, which I know inside out. I use shortcuts, extensions and debugging to work fast.",
    },
  },
  {
    name: "Visual Studio", niveau: "gut", cat: { de: "IDEs", en: "IDEs" }, icon: "visualstudio-plain colored", legend: "", projekte: [],
    desc: {
      de: "Meine IDE für alles rund um C#. Dort habe ich meine C#- und .NET-Projekte erstellt, zum Beispiel Cuzzle, CT Hangman und die HKM Museum App. Zum Debuggen und für grössere Projektmappen nutze ich sie gern.",
      en: "My IDE for everything around C#. That’s where I built my C# and .NET projects, for example Cuzzle, CT Hangman and the HKM Museum App. I like using it for debugging and larger solutions.",
    },
  },
  {
    name: "Windows", niveau: "gut", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "windows11-original colored", legend: "Win", projekte: [],
    desc: {
      de: "Auf Windows sind die meisten meiner Projekte entstanden. Es begleitet mich schon seit der 5. Klasse, vom Tastaturschreiben bis heute, und ich bin sehr vertraut damit.",
      en: "Most of my projects were built on Windows. It has been with me since 5th grade, from touch typing to today, and I know it very well.",
    },
  },
  {
    name: "macOS", niveau: "gut", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "apple-original", legend: "", projekte: [],
    desc: {
      de: "Ich bin vor Kurzem von Windows auf macOS gewechselt und mache seither meine Projekte darauf. So ganz 100% vertraut bin ich auf dem MacBook noch nicht, aber es passt schon ganz gut.",
      en: "I recently switched from Windows to macOS and have been doing my projects on it since. I’m not quite 100% at home on the MacBook yet, but it’s going well.",
    },
  },
  {
    name: "Linux", niveau: "grund", cat: { de: "Betriebssysteme", en: "Operating systems" }, icon: "linux-plain", legend: "", projekte: [],
    desc: {
      de: "Seit ich mit Informatik angefangen habe, arbeite ich immer wieder mit Linux, in der Schule wie privat, zum Beispiel auf den Systemen der GIBB. Auf der Kommandozeile fühle ich mich wohl.",
      en: "Ever since I started with computer science I keep working with Linux, at school and privately, for example on the GIBB systems. I’m comfortable on the command line.",
    },
  },
  {
    name: "Canva", niveau: "gut", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "canva-original colored", legend: "", projekte: [],
    desc: {
      de: "Canva benutze ich meistens für meine Design Projekte, aber auch für Präsentationen in der Schule.",
      en: "I mostly use Canva for my design projects, but also for presentations at school.",
    },
  },
  {
    name: "Figma", niveau: "gut", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "figma-plain colored", legend: "", projekte: [],
    desc: {
      de: "In Figma bringe ich meine Ideen zu Papier, egal ob Websites, Spiele oder Apps, bevor ich sie umsetze.",
      en: "In Figma I get my ideas down, whether websites, games or apps, before I build them.",
    },
  },
  {
    name: "C#", niveau: "gut", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "csharp-plain colored", legend: "", projekte: ["Cuzzle", "CT Hangman", "HKM Museum App"],
    desc: {
      de: "C# war nach HTML, CSS und JavaScript die nächste Sprache, die ich gelernt habe. Damit habe ich einige Projekte gebaut, zum Beispiel Cuzzle, CT Hangman und Teile der HKM Museum App, und mit objektorientiertem Denken fühle ich mich sicher.",
      en: "After HTML, CSS and JavaScript, C# was the next language I learned. I built several projects with it, for example Cuzzle, CT Hangman and parts of the HKM Museum App, and I feel confident with object oriented thinking.",
    },
  },
  {
    name: "3D Printing", niveau: "grund", cat: { de: "Hardware & 3D", en: "Hardware & 3D" }, icon: "", legend: "3D", projekte: [],
    desc: {
      de: "Ein Hobby, in das ich mich Schritt für Schritt einarbeite, vom Modell am Rechner bis zum fertigen Druck. Ich probiere viel aus mit Einstellungen und Material.",
      en: "A hobby I’m getting into step by step, from the model on the computer to the finished print. I experiment a lot with settings and material.",
    },
  },
  {
    name: "WinForms", niveau: "grund", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "WinF", projekte: ["Cuzzle", "CT Hangman"],
    desc: {
      de: "Für Cuzzle und CT Hangman habe ich damit die Windows Oberflächen gebaut. Für Formulare und einfache Spiele hat es gut gepasst.",
      en: "I built the Windows interfaces for Cuzzle and CT Hangman with it. It fit well for forms and simple games.",
    },
  },
  {
    name: "XAML", niveau: "grund", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "XAML", projekte: ["HKM Museum App"],
    desc: {
      de: "In der HKM Museum App habe ich damit zusammen mit MAUI die Oberfläche beschrieben. Bindings und Layouts verstehe ich, sicherer werde ich mit jedem Projekt.",
      en: "In the HKM Museum App I described the UI with it together with MAUI. I understand bindings and layouts, and I get more confident with every project.",
    },
  },
  {
    name: "MySQL", niveau: "gut", cat: { de: "Datenbanken", en: "Databases" }, icon: "mysql-original colored", legend: "", projekte: [],
    desc: {
      de: "Damit habe ich in der Schule und in einer ÜK mit relationalen Datenbanken gearbeitet. Tabellen aufbauen und Abfragen schreiben geht mir gut von der Hand, die Bewertung der ÜK liegt in meinem geschützten Dokumente Bereich.",
      en: "I worked with relational databases with it at school and in an inter company course (ÜK). Building tables and writing queries comes easily to me, and the course grade is in my protected documents area.",
    },
  },
  {
    name: ".NET", niveau: "gut", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "dot-net-plain colored", legend: ".NET", projekte: [],
    desc: {
      de: "Das Umfeld rund um C#, in dem ich meine Desktop- und App-Projekte gebaut habe. Ich bewege mich sicher darin und lerne stetig dazu.",
      en: "The world around C# where I built my desktop and app projects. I move around it confidently and keep learning.",
    },
  },
  {
    name: ".NET MAUI", niveau: "grund", cat: { de: "C# / .NET", en: "C# / .NET" }, icon: "", legend: "MAUI", projekte: ["HKM Museum App"],
    desc: {
      de: "Damit ist die HKM Museum App entstanden, mein erster grösserer Ausflug in plattformübergreifende Apps. Ein Bereich, in dem ich noch dabei bin, sicherer zu werden.",
      en: "The HKM Museum App was built with it, my first bigger step into cross platform apps. An area where I’m still getting more confident.",
    },
  },
  {
    name: "IntelliJ IDEA", short: "IntelliJ", niveau: "grund", cat: { de: "IDEs", en: "IDEs" }, icon: "intellij-plain colored", legend: "", projekte: [],
    desc: {
      de: "In IntelliJ habe ich Python und Java gelernt und damit an Projekten wie dem Heat Calculator FX gearbeitet.",
      en: "In IntelliJ I learned Python and Java and worked on projects like the Heat Calculator FX with it.",
    },
  },
  {
    name: "Java", niveau: "gut", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "java-plain colored", legend: "", projekte: ["Heat Calculator FX", "HKM Museum App"],
    desc: {
      de: "Aus der Ausbildung und einer ÜK. Damit habe ich den Heat Calculator FX und Teile der HKM Museum App umgesetzt, die objektorientierten Grundlagen sitzen bei mir.",
      en: "From my training and an inter company course (ÜK). I built the Heat Calculator FX and parts of the HKM Museum App with it, and the object oriented basics are solid for me.",
    },
  },
  {
    name: "JavaFX", niveau: "grund", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "", legend: "FX", projekte: ["Heat Calculator FX"],
    desc: {
      de: "Für den Heat Calculator FX habe ich damit die Oberfläche gebaut, mein erster Kontakt mit Java Desktop Apps.",
      en: "I built the interface for the Heat Calculator FX with it, my first contact with Java desktop apps.",
    },
  },
  {
    name: "Python", niveau: "gut", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "python-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Python habe ich mir selbst beigebracht und lerne bis heute dazu. Für mein Tic Tac Toe habe ich damit die Logik gebaut, und für schnelle Skripte greife ich gern dazu.",
      en: "I taught myself Python and I’m still learning to this day. I built the logic for my Tic Tac Toe with it, and I like reaching for it for quick scripts.",
    },
  },
  {
    name: "Bash", niveau: "grund", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "bash-plain colored", legend: "", projekte: ["Tic Tac Toe"],
    desc: {
      de: "Mein Tic Tac Toe läuft komplett in der Konsole, dabei habe ich Bash Scripting geübt. Kleine Abläufe automatisiere ich gern damit.",
      en: "My Tic Tac Toe runs entirely in the console, which is how I practised Bash scripting. I like automating small things with it.",
    },
  },
  {
    name: "PowerShell", niveau: "grund", cat: { de: "Sprachen & Scripting", en: "Languages & scripting" }, icon: "powershell-plain colored", legend: "PS", projekte: ["Matcha After Dark"],
    desc: {
      de: "Nutze ich für kleine Automatisierungen unter Windows, unter anderem in Matcha After Dark. Hier stehe ich noch eher am Anfang.",
      en: "I use it for small automations on Windows, including in Matcha After Dark. I’m still rather at the beginning here.",
    },
  },
  {
    name: "Docker", niveau: "gut", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "docker-plain colored", legend: "", projekte: ["Matcha After Dark"],
    desc: {
      de: "Docker nutze ich, um Projekte in Containern laufen zu lassen, unter anderem in Matcha After Dark. Damit komme ich inzwischen gut zurecht.",
      en: "I use Docker to run projects in containers, including in Matcha After Dark. I’m fairly comfortable with it by now.",
    },
  },
  {
    name: "SQL", niveau: "gut", cat: { de: "Datenbanken", en: "Databases" }, icon: "", legend: "SQL", projekte: [],
    desc: {
      de: "SQL habe ich in der Schule und in einer ÜK gelernt. Mit Abfragen, Joins und einem sauberen Datenmodell komme ich gut zurecht.",
      en: "I learned SQL at school and in an inter company course (ÜK). I’m comfortable with queries, joins and a clean data model.",
    },
  },
  {
    name: "SQLite", niveau: "grund", cat: { de: "Datenbanken", en: "Databases" }, icon: "sqlite-plain colored", legend: "", projekte: [],
    desc: {
      de: "SQLite habe ich in der Schule gelernt. Ich nutze es, wenn ich schnell eine kleine lokale Datenbank ohne Server brauche.",
      en: "I learned SQLite at school. I use it when I need a small local database without a server quickly.",
    },
  },
  {
    name: "MongoDB", niveau: "grund", cat: { de: "Datenbanken", en: "Databases" }, icon: "mongodb-plain colored", legend: "", projekte: ["Gaming Platform"],
    desc: {
      de: "MongoDB habe ich in der GIBB gelernt und in der Gaming Platform eingesetzt, um flexible Daten zu speichern.",
      en: "I learned MongoDB at the GIBB and used it in the Gaming Platform to store flexible data.",
    },
  },
  {
    name: "Redis", niveau: "grund", cat: { de: "Datenbanken", en: "Databases" }, icon: "redis-plain colored", legend: "", projekte: [],
    desc: {
      de: "Redis habe ich in der GIBB kennengelernt, vor allem fürs schnelle Zwischenspeichern von Daten. Für mich noch recht neu.",
      en: "I got to know Redis at the GIBB, mostly for quickly caching data. Still fairly new to me.",
    },
  },
  {
    name: "Neo4j", niveau: "grund", cat: { de: "Datenbanken", en: "Databases" }, icon: "neo4j-plain colored", legend: "", projekte: [],
    desc: {
      de: "Neo4j habe ich in der GIBB gelernt. Das Denken in Knoten und Kanten bei Graphdatenbanken finde ich spannend.",
      en: "I learned Neo4j at the GIBB. I find thinking in nodes and edges with graph databases exciting.",
    },
  },
  {
    name: "Prototyping", niveau: "gut", cat: { de: "UI/UX & Design", en: "UI/UX & design" }, icon: "", legend: "PT", projekte: [],
    desc: {
      de: "Bevor ich losprogrammiere, mache ich meine Ideen gern sichtbar. So hole ich mir früh Feedback und spare mir Umwege.",
      en: "Before I start coding I like to make my ideas visible. That way I get feedback early and save myself detours.",
    },
  },
  {
    name: "PocketBase", niveau: "grund", cat: { de: "Datenbanken", en: "Databases" }, icon: "", legend: "PB", projekte: ["Matcha After Dark"],
    desc: {
      de: "In Matcha After Dark im Einsatz. Ich fand cool, wie schnell man damit ein Backend mit Datenbank und Login hat, und lerne die Möglichkeiten noch kennen.",
      en: "Used in Matcha After Dark. I liked how quickly you get a backend with database and login, and I’m still getting to know what it can do.",
    },
  },
  {
    name: "Node.js", niveau: "gut", cat: { de: "Backend", en: "Backend" }, icon: "nodejs-plain colored", legend: "", projekte: [],
    desc: {
      de: "Nutze ich, wenn ich mal etwas serverseitig brauche oder ein kleines Tool schreibe. Hier baue ich mein Wissen gerade Richtung grösserer Backends aus.",
      en: "I use it when I need something on the server side or write a small tool. I’m building my knowledge here towards bigger backends.",
    },
  },
  {
    name: "Express", niveau: "grund", cat: { de: "Backend", en: "Backend" }, icon: "express-original", legend: "", projekte: [],
    desc: {
      de: "Damit setze ich einfache Server und Routen auf. Bisher habe ich es eher am Rande genutzt, aber ich baue mein Backend Wissen damit weiter aus.",
      en: "I set up simple servers and routes with it. So far I’ve only used it here and there, but I’m building my backend knowledge with it.",
    },
  },
  {
    name: "REST APIs", niveau: "gut", cat: { de: "Backend", en: "Backend" }, icon: "", legend: "REST", projekte: [],
    desc: {
      de: "APIs anzubinden und Daten zu holen gehört für mich einfach zum Web Alltag dazu. Ich hole Daten aus dem Backend und bringe sie im Frontend sauber zur Anzeige.",
      en: "Connecting to APIs and fetching data is just part of everyday web work for me. I pull data from the backend and display it cleanly in the frontend.",
    },
  },
  {
    name: "Firebase", niveau: "gut", cat: { de: "Backend", en: "Backend" }, icon: "firebase-plain colored", legend: "", projekte: ["Dressify", "Matcha After Dark", "Evently"],
    desc: {
      de: "Firebase habe ich in mehreren Projekten für Login und Daten eingesetzt, unter anderem in Dressify, Matcha After Dark und Evently. Damit bekommt eine App schnell ein Backend, ohne eigenen Server.",
      en: "I used Firebase for login and data in several projects, including Dressify, Matcha After Dark and Evently. It gives an app a backend quickly, without your own server.",
    },
  },
  {
    name: "React Native", niveau: "grund", cat: { de: "Mobile", en: "Mobile" }, icon: "react-original colored", legend: "", projekte: ["Evently"],
    desc: {
      de: "Damit habe ich Evently als App für iOS und Android gebaut. Es war spannend zu sehen, wie sich React auf dem Handy anfühlt.",
      en: "I built Evently as an iOS and Android app with it. It was exciting to see how React feels on a phone.",
    },
  },
  {
    name: "Expo", niveau: "grund", cat: { de: "Mobile", en: "Mobile" }, icon: "", legend: "Expo", projekte: ["Evently"],
    desc: {
      de: "Hat mir bei Evently das Entwickeln und Testen auf dem Handy stark vereinfacht. Praktisch, um schnell etwas auszuprobieren.",
      en: "It made developing and testing Evently on a phone much easier for me. Handy for trying things out quickly.",
    },
  },
  {
    name: "React", niveau: "gut", cat: { de: "Web Dev", en: "Web dev" }, icon: "react-original colored", legend: "", projekte: ["Dressify", "Gaming Platform", "Matcha After Dark"],
    desc: {
      de: "React habe ich in einer ÜK gelernt und seither in fast allen meinen Web Projekten eingesetzt, zum Beispiel Dressify und die Gaming Platform. Ich baue gern alles aus wiederverwendbaren Komponenten auf.",
      en: "I learned React in an inter company course (ÜK) and have used it in almost all my web projects since, for example Dressify and the Gaming Platform. I like building everything from reusable components.",
    },
  },
  {
    name: "TypeScript", niveau: "gut", cat: { de: "Web Dev", en: "Web dev" }, icon: "typescript-plain colored", legend: "", projekte: ["Dressify", "Gaming Platform", "Matcha After Dark", "Evently"],
    desc: {
      de: "TypeScript habe ich in einer ÜK gelernt und nutze es, sobald ein Projekt grösser wird, weil ich Fehler früher sehe. Es war in Dressify, der Gaming Platform, Matcha After Dark und Evently dabei.",
      en: "I learned TypeScript in an inter company course (ÜK) and use it as soon as a project gets bigger, because I catch mistakes earlier. It was part of Dressify, the Gaming Platform, Matcha After Dark and Evently.",
    },
  },
  {
    name: "Firestore", niveau: "gut", cat: { de: "Datenbanken", en: "Databases" }, icon: "firebase-plain colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "In Dressify habe ich damit die App Daten und Konten in Echtzeit synchron gehalten. Mit Sammlungen und Live Updates komme ich gut zurecht.",
      en: "In Dressify I used it to keep app data and accounts in sync in real time. I’m comfortable with collections and live updates.",
    },
  },
  {
    name: "Next.js", niveau: "gut", cat: { de: "Web Dev", en: "Web dev" }, icon: "", legend: "Next", projekte: ["Gaming Platform"],
    desc: {
      de: "Damit habe ich die Gaming Platform gebaut und auch dieses Portfolio hier. Das Routing und die Struktur mag ich, an den serverseitigen Möglichkeiten arbeite ich noch.",
      en: "I built the Gaming Platform with it, and this portfolio too. I like the routing and the structure, and I’m still working on the server side features.",
    },
  },
  {
    name: "Vite", niveau: "grund", cat: { de: "Web Dev", en: "Web dev" }, icon: "vitejs-plain colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "Mein Setup, wenn ich ein React Projekt ausserhalb von Next.js starte, so wie bei Dressify. Ich nutze es vor allem, damit beim Entwickeln alles schnell läuft.",
      en: "My setup when I start a React project outside of Next.js, like Dressify. I use it mainly to keep everything fast while developing.",
    },
  },
  {
    name: "Tailwind CSS", short: "Tailwind", niveau: "gut", cat: { de: "Web Dev", en: "Web dev" }, icon: "tailwindcss-original colored", legend: "", projekte: ["Dressify"],
    desc: {
      de: "In Dressify habe ich damit gestaltet. Ich mag, wie schnell man damit ein einheitliches Ergebnis hinbekommt, auch wenn ich pures CSS oft noch lieber mag.",
      en: "I styled Dressify with it. I like how fast you get a consistent result, even though I often prefer plain CSS.",
    },
  },
  {
    name: "Scrum", niveau: "gut", cat: { de: "Projektmanagement", en: "Project management" }, icon: "", legend: "Scr", projekte: [],
    desc: {
      de: "Aus Team Projekten in der Ausbildung kenne ich die Sprints und Rollen. Ich lerne, die Abläufe noch bewusster einzusetzen.",
      en: "I know the sprints and roles from team projects in my training. I’m learning to use the process even more deliberately.",
    },
  },
  {
    name: "Azure", niveau: "grund", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "azure-plain colored", legend: "", projekte: [],
    desc: {
      de: "Erste Schritte mit Hosting und Cloud Diensten. Da baue ich mein Wissen gerade ganz bewusst weiter auf.",
      en: "First steps with hosting and cloud services. I’m deliberately building my knowledge here.",
    },
  },
  {
    name: "Vercel", niveau: "grund", cat: { de: "Cloud & DevOps", en: "Cloud & DevOps" }, icon: "vercel-original", legend: "▲", projekte: [],
    desc: {
      de: "Damit bringe ich meine Frontend- und Next.js-Projekte schnell online, direkt aus Git. Diese Seite hier läuft darüber.",
      en: "I get my frontend and Next.js projects online quickly with it, straight from Git. This site runs on it.",
    },
  },
]
