# DOCUMENTAȚIE SITE WEB
# VRG POWER DASH

---

**Student:** Rusu Andrei Ioan  
**Anul universitar:** 2025-2026  
**Facultatea:** Automatică și Calculatoare  
**Disciplina:** Proiectarea Interfețelor Utilizator Grafice

---

## 1. DESCRIEREA TEMATICII ALESE ȘI ARGUMENTAREA ALEGERII

### 1.1 Tema Aleasă
Site-ul **VRG Power Dash** reprezintă o platformă web pentru gestionarea și monitorizarea unui stabilizator de tensiune inteligent pentru uz casnic, integrat cu funcționalități IoT (Internet of Things).

### 1.2 Argumentarea Alegerii
Am ales această temă din următoarele motive:

**Relevanță practică:**
- Problemele de fluctuație a tensiunii electrice sunt frecvente în România, afectând echipamentele electronice casnice
- Necesitatea unei soluții accesibile pentru monitorizarea consumului energetic
- Tendința crescândă de smart home și automatizare casnică

**Potențial educațional:**
- Integrarea conceptelor de IoT cu interfețe web moderne
- Aplicarea practică a principiilor de usability și design UI/UX
- Dezvoltarea unei platforme complete care combină hardware și software

**Inovație:**
- Dashboard interactiv cu monitorizare în timp real
- Sistem de autentificare pentru gestionarea utilizatorilor
- Interfață responsive adaptată pentru dispozitive mobile și desktop

---

## 2. DESCRIEREA SITE-ULUI ȘI APLICAREA PRINCIPIILOR DE DESIGN

### 2.1 Principiile lui Nielsen (Jakob's Usability Heuristics)

#### **1. Visibility of System Status (Vizibilitatea Stării Sistemului)**
**Implementare:**
- **Dashboard cu valori în timp real:** Afișarea continuă a parametrilor electrici (tensiune, curent, putere, temperatură) cu actualizare la fiecare 3 secunde
- **Indicatori vizuali:** Utilizarea culorilor (verde pentru normal, roșu pentru alertă) pentru starea dispozitivelor
- **Feedback imediat:** Mesaje de confirmare la login, register, trimitere formular de contact
- **Bara de progres:** În secțiunea de programare dispozitive

**Exemplu concret:** Când utilizatorul activează un dispozitiv pe dashboard, switch-ul schimbă culoarea și afișează starea "Activ" imediat.

#### **2. Match Between System and Real World (Concordanța cu Lumea Reală)**
**Implementare:**
- **Terminologie familiară:** Utilizarea termenilor "Tensiune", "Curent", "Putere" în loc de termeni tehnici complicați
- **Icoane intuitive:** 
  - Bec pentru iluminat
  - Frigider pentru electrocasnice
  - Computer pentru echipamente IT
  - Soare/Lună pentru modul dark/light
- **Metafore vizuale:** Switch-uri care imită întrerupătoare fizice
- **Limbaj natural:** Mesaje de eroare clare în limba română

#### **3. User Control and Freedom (Control și Libertate pentru Utilizator)**
**Implementare:**
- **Buton "Înapoi la începutul paginii":** Prezent pe toate paginile pentru navigare rapidă
- **Logout accesibil:** Opțiune de deconectare vizibilă în meniul utilizator
- **Modificare temă:** Comutare instantanee între dark/light mode cu persistență
- **Editare date:** Posibilitatea de a modifica setările dispozitivelor oricând
- **Anulare acțiuni:** Buton "Reset" în formulare

#### **4. Consistency and Standards (Consistență și Standarde)**
**Implementare:**
- **Bootstrap 5.3.2:** Framework standard pentru consistență vizuală
- **Navigare uniformă:** Același meniu de navigare pe toate cele 7 pagini
- **Butoane standardizate:** Culori consistente (primary pentru acțiuni principale, secondary pentru acțiuni secundare)
- **Layout consistent:** Același antet, footer și structură pe toate paginile
- **Iconografie uniformă:** Bootstrap Icons folosite consecvent

#### **5. Error Prevention (Prevenirea Erorilor)**
**Implementare:**
- **Validare formular contact:**
  - Verificare format email (regex)
  - Validare număr telefon românesc (format: 07XXXXXXXX)
  - Câmpuri obligatorii marcate cu *
- **Validare autentificare:**
  - Verificare format email la register
  - Cerințe parolă (minim 6 caractere)
  - Confirmare parolă (verificare match)
- **Confirmări:** Checkbox pentru acord termeni și condiții
- **Placeholder-uri explicative:** În toate câmpurile de input

#### **6. Recognition Rather Than Recall (Recunoaștere în Loc de Memorare)**
**Implementare:**
- **Meniu vizibil permanent:** Navigarea fixă în partea de sus
- **Breadcrumbs vizuale:** Pagina activă evidențiată în navbar
- **Icoane descriptive:** Fiecare secțiune are iconița corespunzătoare
- **Labels vizibile:** Toate câmpurile formularelor au etichete clare
- **Afișare username:** După login, numele utilizatorului apare în dropdown

#### **7. Flexibility and Efficiency of Use (Flexibilitate și Eficiență)**
**Implementare:**
- **Dark/Light Mode:** Pentru preferințele utilizatorilor
- **Funcție de căutare:** Găsește rapid informații pe site
- **Remember me:** Opțiune de memorare credențiale
- **Shortcuts vizuale:** Butoane UP/DOWN pentru scroll rapid
- **Responsive design:** Adaptare automată pentru mobile/tablet/desktop

#### **8. Aesthetic and Minimalist Design (Design Estetic și Minimalist)**
**Implementare:**
- **Spațiere generoasă:** Utilizarea white space pentru claritate
- **Hierarchy vizuală:** Titluri H1, H2, H3 ierarhizate logic
- **Paleta de culori simplă:**
  - Primar: #007bff (albastru professional)
  - Success: #28a745 (verde pentru confirmare)
  - Danger: #dc3545 (roșu pentru alertă)
  - Dark: #212529 / Light: #f8f9fa
- **Elemente esențiale:** Fiecare element are un scop funcțional
- **Animații subtile:** Hover effects și tranziții smooth (0.3s)

#### **9. Help Users Recognize, Diagnose, and Recover from Errors (Ajutor pentru Erori)**
**Implementare:**
- **Mesaje de eroare clare:**
  - "Email invalid! Vă rugăm introduceți un email valid."
  - "Numărul de telefon trebuie să înceapă cu 07 și să aibă 10 cifre."
  - "Parolele nu coincid!"
- **Culoare roșie pentru erori:** Alert-uri vizibile
- **Sugestii de rezolvare:** Indică ce trebuie corectat
- **Validare în timp real:** Feedback imediat la completare

#### **10. Help and Documentation (Ajutor și Documentație)**
**Implementare:**
- **Buton "Ajutor":** Modal cu informații despre funcționalitățile site-ului
- **Pagina About:** Explicații despre tehnologia folosită
- **Pagina Contact:** Formulare de contact pentru suport
- **README.md:** Documentație tehnică completă
- **QUICK_START.md:** Ghid rapid de utilizare

### 2.2 Principii de Proiectare Vizuală

#### **Aliniere (Alignment)**
- Toate elementele sunt aliniate pe grid-ul Bootstrap (12 coloane)
- Text aliniat left pentru lizibilitate
- Elemente centrate pentru echilibru vizual (hero section, cards)

#### **Contrast**
- Contrast ridicat între text și fundal pentru lizibilitate
- Butoane cu culori contrastante pentru call-to-action
- Dark mode cu contrast optimizat (#ffffff text pe #1a202c background)

#### **Repetare (Repetition)**
- Card-uri uniforme pentru dispozitive și statistici
- Structură consistentă a formularelor
- Footer prezent pe toate paginile

#### **Proximitate (Proximity)**
- Gruparea informațiilor conexe (stats cards împreună)
- Spațiere între secțiuni pentru separare logică
- Form fields grupate logic (date personale, date contact)

### 2.3 Paletă de Culori

**Tema Light (Implicit):**
- **Background Principal:** #ffffff (alb pur)
- **Text Principal:** #212529 (gri închis)
- **Accent Primary:** #007bff (albastru)
- **Success:** #28a745 (verde)
- **Danger:** #dc3545 (roșu)
- **Warning:** #ffc107 (galben)

**Tema Dark:**
- **Background Principal:** #1a202c (gri foarte închis)
- **Background Secundar:** #2d3748 (gri mediu)
- **Text Principal:** #ffffff (alb)
- **Text Secundar:** #a0aec0 (gri deschis)
- **Accent:** #4299e1 (albastru deschis)

**Justificare alegere culori:**
- **Albastru (#007bff):** Inspiră încredere, profesionalism și tehnologie
- **Verde (#28a745):** Asociat cu eficiență energetică și eco-friendly
- **Roșu (#dc3545):** Atrage atenția pentru alerte și erori
- **Contrast ridicat:** WCAG AA compliant pentru accesibilitate

---

## 3. DESCRIEREA PAGINILOR WEB

### 3.1 Pagina Index (Homepage)

**URL:** `http://localhost:8000/index.html`

**Funcționalitate:**
- **Hero Section animat:** Prezentare principală cu device mockup și statistici live
- **Carousel imagine:** 5 imagini cu produse (p1.jpeg - p5.jpeg) cu controale automate și manuale
- **Secțiune Features:** 3 carduri cu beneficii principale (Real-Time Monitoring, Smart Control, Energy Efficiency)
- **CTA (Call-to-Action):** Butoane pentru "Începe Acum" și "Vezi Produse"

**Elemente adaptive mobile:**
- Hero section: Text redus, imagini scalate
- Carousel: Indicatori simplificați
- Cards: Stack vertical pe mobile (col-12), orizontal pe desktop (col-md-4)

**Capturi de ecran:** [Vezi Anexa - Index Desktop & Mobile]

---

### 3.2 Pagina Products

**URL:** `http://localhost:8000/products.html`

**Funcționalitate:**
- **Tabel componente:** Lista detaliată cu 8 componente hardware (microcontroller, senzori, relee, etc.)
- **Specificații tehnice:** Coloane pentru Model, Specificații, Cantitate, Preț
- **Design responsive:** Tabel scrollable pe mobile
- **Sortare vizuală:** Alternanță culori rânduri pentru lizibilitate

**Elemente adaptive mobile:**
- Tabel: Scroll orizontal cu container `.table-responsive`
- Font size redus pentru mobile
- Padding optimizat pentru touch screens

**Capturi de ecran:** [Vezi Anexa - Products Desktop & Mobile]

---

### 3.3 Pagina Monitoring (Dashboard) - 100% Funcțională

**URL:** `http://localhost:8000/monitoring.html`

**Funcționalitate:**
- **Monitorizare real-time:** 4 carduri cu parametri electrici actualizați la 3 secunde
  - Tensiune (V)
  - Curent (A)
  - Putere (W)
  - Temperatură (°C)
- **Control dispozitive:** 6 switch-uri pentru controlul individual
  - Living Room Light
  - Kitchen Appliances
  - Bedroom AC
  - Office Computer
  - Bathroom Heater
  - Garden Pump
- **Grafic consum:** Chart.js - grafic liniar cu consumul ultimelor 7 zile
- **Programare:** Scheduler pentru automatizare dispozitive

**Elemente adaptive mobile:**
- Grid: 2 coloane pe mobile, 4 pe desktop
- Switch-uri: Mai mari pentru touch
- Grafic: Height redus pe mobile

**Capturi de ecran:** [Vezi Anexa - Dashboard Desktop & Mobile]

---

### 3.4 Pagina About

**URL:** `http://localhost:8000/about.html`

**Funcționalitate:**
- **Video YouTube:** Prezentare tehnologie (embedded, responsive)
- **Misiune și Viziune:** Secțiuni text cu iconițe
- **Tehnologii folosite:** Grid cu 6 tehnologii (IoT, AI, Cloud, etc.)
- **Timeline:** Etape dezvoltare proiect

**Elemente adaptive mobile:**
- Video: Aspect ratio 16:9 menținut cu `.ratio-16x9`
- Cards tehnologii: Stack vertical pe mobile
- Text: Font size ajustat

**Capturi de ecran:** [Vezi Anexa - About Desktop & Mobile]

---

### 3.5 Pagina Contact

**URL:** `http://localhost:8000/contact.html`

**Funcționalitate:**
- **Formular contact validat:**
  - Nume (required)
  - Email (validation regex)
  - Telefon (format românesc 07XXXXXXXX)
  - Subiect (required)
  - Mesaj (required, textarea)
- **Google Maps:** Hartă embedded pentru locație
- **Informații contact:** Email, telefon, adresă
- **Social Media:** Link-uri către Facebook, Twitter, Instagram, LinkedIn, YouTube

**Validare JavaScript:**
```javascript
// Email regex
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Telefon regex (format românesc)
/^07[0-9]{8}$/
```

**Elemente adaptive mobile:**
- Formular: Full width pe mobile
- Hartă: Height redus (300px vs 400px)
- Butoane social: Stack mai mic

**Capturi de ecran:** [Vezi Anexa - Contact Desktop & Mobile]

---

### 3.6 Pagina Login

**URL:** `http://localhost:8000/login.html`

**Funcționalitate:**
- **Formular autentificare:**
  - Email (validation)
  - Parolă (toggle visibility)
  - Remember me checkbox
- **Demo credentials:** `demo@vrgpowerdash.ro` / `demo123`
- **Session management:** localStorage + sessionStorage
- **Link către register:** Pentru utilizatori noi

**Securitate:**
- Password field cu tip `password`
- Toggle visibility cu icon
- Session expiry handling

**Elemente adaptive mobile:**
- Formular: Centrat, width optimizat
- Butoane: Full width pe mobile
- Input fields: Touch-friendly height

**Capturi de ecran:** [Vezi Anexa - Login Desktop & Mobile]

---

### 3.7 Pagina Register

**URL:** `http://localhost:8000/register.html`

**Funcționalitate:**
- **Formular înregistrare complet:**
  - Nume complet
  - Email (validation)
  - Telefon (format românesc)
  - Parolă (min 6 caractere)
  - Confirmare parolă (match checking)
  - Acord termeni și condiții (required)
- **Validare real-time:** Feedback imediat la completare
- **Formatare automată:** Număr telefon formatat automat

**Validare JavaScript:**
```javascript
// Password match
password === confirmPassword

// Phone formatting
input.addEventListener('input', formatPhoneNumber);
```

**Elemente adaptive mobile:**
- Layout: Single column pe mobile
- Input spacing: Optimizat pentru touch
- Checkbox: Mărită pentru mobile

**Capturi de ecran:** [Vezi Anexa - Register Desktop & Mobile]

---

## 4. DESCRIEREA ELEMENTELOR ADAPTIVE (RESPONSIVE DESIGN)

### 4.1 Breakpoints Bootstrap Folosite

```css
/* Extra small devices (phones, less than 576px) */
@media (max-width: 575.98px) { }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }
```

### 4.2 Elemente Specifice Adaptive

#### **Navigare:**
- **Desktop:** Navbar expandată cu toate link-urile vizibile
- **Mobile:** Hamburger menu (collapse) cu meniu vertical

#### **Grid Layout:**
- **Desktop:** Cards în 3-4 coloane (col-md-3, col-md-4)
- **Tablet:** 2 coloane (col-sm-6)
- **Mobile:** 1 coloană (col-12)

#### **Tipografie:**
- **Desktop:** H1 (2.5rem), H2 (2rem), text (1rem)
- **Mobile:** H1 (1.75rem), H2 (1.5rem), text (0.875rem)

#### **Imagini:**
- **Toate imaginile:** `.img-fluid` pentru scaling automat
- **Carousel:** Height variabil (500px desktop, 300px mobile)

#### **Tabele:**
- **Desktop:** Tabel complet vizibil
- **Mobile:** `.table-responsive` cu scroll orizontal

#### **Forms:**
- **Desktop:** Layout pe 2 coloane unde e cazul
- **Mobile:** Single column, butoane full-width

#### **Buttons:**
- **Desktop:** Dimensiune standard
- **Mobile:** Mai mari pentru touch (min-height: 44px - Apple HIG)

#### **Spacing:**
- **Desktop:** Padding și margin mai generoase
- **Mobile:** Spacing redus pentru optimizare spațiu

---

## 5. TEMPLATE ȘI SURSE

### 5.1 Template
**NU s-a folosit un template pre-făcut.** Site-ul a fost dezvoltat de la zero folosind:
- Bootstrap 5.3.2 (framework CSS)
- Structură HTML5 custom
- CSS custom în `css/style.css` și `css/auth.css`
- JavaScript custom în `js/main.js`, `js/dashboard.js`, `js/contact.js`, `js/auth.js`

### 5.2 Resurse Externe Folosite

**Frameworks și Librării:**
- **Bootstrap 5.3.2:** https://getbootstrap.com/
- **Bootstrap Icons 1.11.1:** https://icons.getbootstrap.com/
- **Chart.js 4.4.0:** https://www.chartjs.org/

**CDN-uri:**
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
```

**Imagini:**
- p1.jpeg - p5.jpeg (imagini produse - create/găsite de autor)

**Fonturi:**
- **System fonts stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`

---

## 6. TEHNOLOGII FOLOSITE

### 6.1 Frontend

#### **HTML5**
- Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Accessibility features (aria-labels, alt texts)
- Forms cu validation attributes

#### **CSS3**
- Custom properties (CSS variables) pentru theme switching
- Flexbox pentru layout
- Grid pentru componente complexe
- Media queries pentru responsive
- Animations și transitions
- Dark mode implementation

```css
:root {
    --primary-color: #007bff;
    --bg-light: #ffffff;
    --bg-dark: #1a202c;
    --text-light: #212529;
    --text-dark: #ffffff;
}
```

#### **JavaScript ES6+**
- Vanilla JavaScript (fără jQuery)
- Module pattern pentru organizare cod
- Local Storage pentru persistență date
- Session Storage pentru autentificare
- Event listeners pentru interactivitate
- Async/Await pentru operații asincrone (simulare API)

**Funcții principale:**
```javascript
// Dark mode toggle
toggleTheme()

// Authentication
checkAuth(), login(), logout()

// Search functionality
performSearch()

// Form validation
validateEmail(), validatePhone()

// Real-time updates
updateDashboardValues()
```

### 6.2 Backend (Simulat)

**Python HTTP Server:**
```bash
python3 -m http.server 8000
```
- Hosting local pentru dezvoltare și testare
- Acces desktop: `http://localhost:8000`
- Acces mobile: `http://172.20.10.3:8000`

### 6.3 Analytics și Tracking

**Google Analytics 4 (GA4):**
- Measurement ID: `G-X24TFZW7DD`
- Page views tracking
- Custom events:
  - `form_submission` (contact form)
  - `login` / `login_failed`
  - `sign_up`
  - `logout`

### 6.4 Version Control

**Git + GitHub** (opțional, pentru management cod)

### 6.5 Tools și Environment

- **Editor:** Visual Studio Code
- **Browser Testing:** Chrome, Safari, Firefox
- **Mobile Testing:** iOS Safari, Android Chrome
- **Debugging:** Chrome DevTools, Firefox Developer Tools

---

## 7. CONCLUZII

### 7.1 Obiective Îndeplinite

✅ **Toate cele 16 cerințe obligatorii:**
1. Navigation bar funcțional
2. Funcție de căutare
3. Carousel imagini
4. Tabel componente
5. Formulare cu validare
6. Video integrat
7. Social media links
8. Buton ajutor
9. Butoane UP/DOWN scroll
10. Responsive design
11. Dark/Light mode
12. Google Analytics
13. 7 pagini web (> 5 cerute)
14. User panel 100% funcțional
15. Bootstrap integrat
16. Hosting localhost

✅ **Principii de usability aplicate:**
- Toate cele 10 euristici Nielsen implementate
- Design consistent și intuitiv
- Feedback vizual pentru toate acțiunile
- Prevenire și gestionare erori

✅ **Responsive design complet:**
- Testare pe multiple dispozitive
- Adaptare automată layout
- Optimizare pentru mobile și desktop

### 7.2 Aspecte Inovatoare

- **Animații CSS moderne:** Hero section cu floating shapes
- **Sistem autentificare complet:** Login, register, session management
- **Dashboard interactiv:** Monitorizare real-time cu Chart.js
- **Dark mode avansat:** Persistență și switch smooth

### 7.3 Îmbunătățiri Viitoare (Opțional)

- Integrare backend real (Node.js/PHP/Python)
- Bază de date pentru utilizatori
- API REST pentru dispozitive IoT
- Notificări push pentru alerte
- Export rapoarte PDF
- Multilingv (EN/RO)

---

**Data finalizării:** 20 Noiembrie 2025  
**Autor:** Rusu Andrei Ioan  
**Contact:** andrei.rusu@student.upt.ro

---

## ANEXE

### Anexa A: Capturi de Ecran

**Index - Desktop:**
[Inserează screenshot homepage desktop - vizualizare completă]

**Index - Mobile:**
[Inserează screenshot homepage mobile - vizualizare completă]

**Dashboard - Desktop:**
[Inserează screenshot dashboard cu toate cardurile și grafikul]

**Dashboard - Mobile:**
[Inserează screenshot dashboard mobile cu layout vertical]

**Login - Desktop:**
[Inserează screenshot pagina login]

**Register - Mobile:**
[Inserează screenshot pagina register pe mobile]

**Contact - Desktop:**
[Inserează screenshot formular contact și hartă]

### Anexa B: Structura Proiectului

```
STDC_DeiuVRG/
│
├── index.html
├── products.html
├── monitoring.html
├── about.html
├── contact.html
├── login.html
├── register.html
│
├── css/
│   ├── style.css
│   └── auth.css
│
├── js/
│   ├── main.js
│   ├── dashboard.js
│   ├── contact.js
│   └── auth.js
│
├── img/
│   ├── p1.jpeg
│   ├── p2.jpeg
│   ├── p3.jpeg
│   ├── p4.jpeg
│   └── p5.jpeg
│
└── docs/
    ├── README.md
    ├── QUICK_START.md
    ├── GOOGLE_ANALYTICS_SETUP.md
    └── BOOTSTRAP_VERIFICATION.md
```

### Anexa C: Checklist Verificare

- [x] Toate paginile funcționează corect
- [x] Responsive design testat pe mobile/tablet/desktop
- [x] Dark mode funcționează pe toate paginile
- [x] Formulare validate corect
- [x] Google Analytics configurat și activ
- [x] Căutare funcțională
- [x] Autentificare funcțională
- [x] Dashboard cu date real-time
- [x] Video embedded funcționează
- [x] Social media links active
- [x] Documentație completă

---

**FIN DOCUMENTAȚIE**
