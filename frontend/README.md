# Portfolio – Nguyen Cat Tuong

Persönliche Portfolio-Website, gebaut mit **Next.js** (App Router), React und JavaScript.
Der geschützte Dokumente-Bereich nutzt **Supabase** als Datenbank und Speicher.

## Projektstruktur

```
frontend/
├─ app/                     Seiten (Next.js Routes). Jede Route ist ein Ordner mit page.js
│  ├─ page.js               Startseite  (/)
│  ├─ about/page.js         Über mich   (/about)
│  ├─ projekte/page.js      Projekte    (/projekte)
│  ├─ skills/page.js        Skills      (/skills)
│  ├─ kontakt/page.js       Kontakt     (/kontakt)
│  ├─ dokumente/page.js     Geschützter Bereich (/dokumente)
│  ├─ layout.js             Gemeinsames Layout (Nav, Footer, Provider)
│  ├─ globals.css           Zentrales Stylesheet
│  └─ api/                  Backend-Routen für Login und Dokumente (lesen/schreiben in Supabase)
│
├─ components/              Wiederverwendbare Bausteine (Nav, Footer, Modal, RadarChart …)
│  └─ sections/             Die Abschnitte, aus denen die Seiten zusammengesetzt sind
│
├─ data/                   Inhalte als Daten (Projekte, Skills, Werdegang, Hobbys, Texte)
├─ lib/                    Hilfsfunktionen (auth, supabase, i18n)
│
└─ public/                 Statische Bilder (von Next.js zwingend "public" benannt)
   ├─ start/               Bilder der Startseite
   ├─ about/               Bild + hobbys/ für die Über-mich-Seite
   └─ projekte/            Projekt-Cover und Galerien
```

## Lokal starten

```
npm install
npm run dev      # http://localhost:3000
```

## Deployment

Automatisch über Vercel bei jedem Push auf `main`.
