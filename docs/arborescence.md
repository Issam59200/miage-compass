# Arborescence du site MIAGE Compass

Site statique (HTML, CSS, JS), sans serveur. Page d'accueil à la racine, les autres pages dans `pages/`.

```
Accueil (index.html)
├── Calendrier des candidatures   pages/calendrier.html
├── Guide du candidat              pages/guide.html
│   ├── Comprendre la MIAGE et ses voies d'accès
│   ├── Candidater en L3 et en M1
│   ├── L'alternance et le CFA
│   └── Étudiants étrangers
├── FAQ                            pages/faq.html
├── Les MIAGE de France            pages/miages.html
└── À propos et partenaires        pages/a-propos.html
    └── Mentions légales et RGPD   pages/mentions-legales.html
```

## Rôle de chaque page

| Page | Contenu | Données |
|---|---|---|
| Accueil | Message principal, accès rapide au calendrier, au guide et à la FAQ | aucune |
| Calendrier | Tableau des dates de candidature, filtres (niveau, voie, ville, date) | `data/miages.json` |
| Guide | Les 4 parties du guide, avec un sommaire | texte |
| FAQ | Questions dépliables, classées par thème | texte |
| Les MIAGE de France | Liste des MIAGE filtrable par ville, liens vers les sites officiels et l'annuaire existant | `data/miages.json` |
| À propos | Le projet, l'équipe, les partenaires (MIAGE Connection, AML) | texte |
| Mentions légales | Éditeur, hébergeur, données personnelles | texte |

## Navigation

- Menu présent sur toutes les pages : Calendrier, Guide, FAQ, Les MIAGE, À propos.
- Pied de page : mentions légales et partenaires.
- Sélecteur de langue FR / EN : prévu dans l'en-tête, mis en place avec la carte « Multilingue FR/EN ».
