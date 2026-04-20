

# V2 — Refonte design, animations & polish

Objectif : élever le rendu visuel (toujours sobre, inspiration Apple/Linear) sans toucher au **contenu textuel**, aux **données**, ni à la **structure des routes**. Focus : design system, micro-interactions, fluidité, lisibilité.

## 1. Design system (fondations)

**`src/index.css` + `tailwind.config.ts`** — refonte des tokens HSL :
- Palette plus riche : ajout d'un accent subtil (bleu nuit / violet froid désaturé) pour les hovers, bordures actives et glows — utilisé avec parcimonie.
- Nouveaux tokens sémantiques : `--surface`, `--surface-elevated`, `--border-subtle`, `--border-strong`, `--glow`, `--accent`, `--accent-foreground`.
- Typographie : importer **Inter** (variable, woff2 self-hosted via `@fontsource-variable/inter`) + **JetBrains Mono** pour accents techniques. Ajout d'une échelle typo (`text-display`, `text-hero`).
- Background global : remplacer le motif radial pointillé par un dégradé radial doux + grain SVG très subtil + 1-2 orbes flous fixes (au lieu de répétés par page).
- Radius harmonisés (`xl`, `2xl`), élévation par ombres douces multi-couches.

**Nouvelles utilitaires Tailwind** :
- `.glass`, `.glass-strong`, `.glass-subtle` (3 niveaux).
- `.gradient-text`, `.text-shimmer`.
- `.hover-lift`, `.hover-glow`, `.card-interactive`.
- Keyframes ajoutés : `fade-in-up`, `fade-in-scale`, `shimmer`, `aurora`, `glow-pulse`, `border-flow`.
- `tailwindcss-animate` déjà présent — on l'exploite mieux.

## 2. Animations & micro-interactions

- **Scroll reveal** : nouveau hook `useInView` (IntersectionObserver natif, zéro dépendance) → composant `<Reveal>` qui anime les sections au scroll (fade + translate). Remplace les `animate-fadeIn` statiques au mount.
- **Stagger** : enfants animés en cascade (cartes compétences, certifications, timeline).
- **Hover cards** : tilt léger (CSS transform 3D, sans lib), glow de bordure conique, scale subtil (1.01-1.02 max).
- **Tabs** : indicateur animé (barre lumineuse coulissante) au lieu du simple `data-[state=active]`.
- **Navigation** : underline animé sous lien actif, blur progressif au scroll (transparent → glass-dark), logo avec micro-anim au hover.
- **Boutons** : effet ripple/shine au hover (gradient qui traverse).
- **Page transitions** : fade léger entre routes via `Suspense` fallback amélioré (skeleton glass).
- **Hero icons** : animation float + glow pulsant subtil + gradient conic en arrière-plan tournant lentement.
- Respect de `prefers-reduced-motion` (toutes les anims désactivables).

## 3. Composants refondus

| Composant | Changements |
|---|---|
| `Navigation` | Glass adaptatif au scroll, indicateur de lien actif animé (layoutId-like via CSS), menu mobile avec slide+fade plus fluide |
| `HeroSection` (home) | Avatar avec ring conic gradient animé, titre avec shimmer, boutons sociaux avec tooltip et micro-bounce |
| `AboutSection` | Carte avec bordure dégradée animée au hover |
| `SkillSection` | Tags avec apparition staggered, hover glow, icônes catégorie agrandies |
| `CertificationsSection` | Cartes avec accent coloré par statut (obtenue/en cours), bouton "Télécharger" amélioré |
| `TimelineSection` / `TimelineItem` | Ligne timeline avec gradient animé, points avec pulse/glow, cartes reveal au scroll |
| `SectionTitle` | Icône dans cercle avec halo, titre avec gradient affiné |
| `Card` (shared) | Variantes (`default`, `interactive`, `feature`), tilt optionnel |
| `Footer` | Plus aéré, liens sociaux avec hover lift |
| Tous les `*Hero` (Bts/Stages/Veille/Situations/Contact/ModeProjet) | Factoriser dans un seul `<PageHero icon title subtitle/>` partagé pour cohérence + nouveau design (orbes + grid plus subtils, titre avec shimmer) |
| `Tabs` (Situations, ModeProjet) | Indicateur glissant animé, contenu avec fade-in au changement |
| `DocumentCard` | Hover plus riche (icône PDF animée, glow), focus visible amélioré |
| `ContactForm` | Inputs avec bordure animée au focus, transitions fluides, toast amélioré |

## 4. Optimisation & clarté code

- Extraire un `<PageLayout>` (Navigation + main + Footer + scroll-to-top) pour supprimer la répétition dans chaque page.
- Extraire `<PageHero>` partagé (supprime 6 fichiers Hero quasi-identiques).
- Supprimer les `useEffect(() => scrollTo(0,0))` redondants (déjà géré par `ScrollToTop`).
- Suspense fallback : skeleton glass au lieu du simple `bg-background`.
- Lazy-load des images (img loading="lazy", decoding="async").
- Préchargement des polices via `<link rel="preload">` self-hosted.
- Simplification des classes Tailwind redondantes via les nouvelles utilities.

## 5. Détails techniques

- **Aucune nouvelle dépendance lourde** : tout en CSS/Tailwind + IntersectionObserver natif.
- Ajout d'**un seul** package : `@fontsource-variable/inter` (~30 KB, self-hosted, supprime le besoin de CDN externe → améliore aussi le score SEO précédent).
- **Aucune modification de** : `resumeData.ts`, textes, chemins PDF, routes, logique métier, composants UI shadcn de base.
- Compatibilité responsive maintenue (mobile-first revérifié).
- Dark mode reste l'unique mode (cohérent avec l'identité actuelle).

## 6. Plan de livraison (ordre d'implémentation)

1. Tokens design + Tailwind config + index.css (fondations).
2. Composants partagés (`PageLayout`, `PageHero`, `Reveal` hook, `Card` v2, `SectionTitle` v2).
3. Navigation + Footer.
4. Page Accueil (Hero, About, Skills, Certifications, Timeline).
5. Pages secondaires (BTS SIO, Stages, Situations, Mode Projet, Veille, Contact) — refactor pour utiliser `PageLayout` + `PageHero`.
6. Polish final : transitions de page, reduced-motion, vérification mobile.

