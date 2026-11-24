# Charte graphique de MIAGE Compass

Palette retenue : **« Pétrole profond »** (variation B3, voir `docs/charte-demo.html`).
Idée : un pétrole très sombre pour l'en-tête et l'accueil, un corail lumineux pour l'action, et le contenu sur un fond clair et chaud, comme une carte.

Toutes les couleurs sont des variables CSS dans `:root` (`css/style.css`). Pour changer une couleur, on change la variable, pas les règles.

## Couleurs

| Variable | Valeur | Usage |
|---|---|---|
| `--couleur-petrole-nuit` | `#0c3036` | Fond de l'en-tête et du bloc d'accueil (hero) |
| `--couleur-principale` | `#12505a` | Liens et éléments de structure sur fond clair |
| `--couleur-corail` | `#ff8f73` | Bouton principal, « Compass » du logo, soulignement du menu (sur fond sombre uniquement) |
| `--couleur-corail-texte` | `#ad3a25` | Corail utilisable en texte sur fond clair, contour de focus |
| `--couleur-corail-doux` | `#fde3db` | Fond des badges « vérifié le … », sélection de texte |
| `--couleur-creme` | `#f4efe6` | Texte sur fond sombre |
| `--couleur-creme-doux` | `#c3d2d0` | Texte secondaire sur fond sombre |
| `--couleur-texte` | `#14262a` | Texte principal |
| `--couleur-texte-doux` | `#4a5d61` | Texte secondaire (descriptions, pied de page) |
| `--couleur-fond` | `#faf7f2` | Fond des pages |
| `--couleur-fond-alt` | `#efe9df` | Bandeaux, pied de page |
| `--couleur-carte` | `#ffffff` | Fond des cartes |
| `--couleur-bordure` | `#ddd4c6` | Bordures des cartes et séparateurs |
| `--couleur-motif` | `#17444b` | Lignes de niveau décoratives du hero |

Couleurs de statut (pour le calendrier) :

| Variable | Texte | Fond | Usage |
|---|---|---|---|
| `--couleur-confirme` | `#166534` | `#dcfce7` | Date confirmée |
| `--couleur-a-confirmer` | `#92400e` | `#fef3c7` | Date à confirmer |

**Règle importante :** le corail clair `#ff8f73` ne s'utilise que sur fond sombre. Sur fond clair, on utilise `--couleur-corail-texte`.

## Contrastes (accessibilité)

Vérifiés sur le site (règle WCAG, niveau AA : 4,5:1 minimum pour le texte).

| Élément | Contraste |
|---|---|
| Menu et titre sur l'en-tête / le hero | 12,3:1 |
| Texte secondaire du hero | 9,0:1 |
| Bouton principal (corail) | 8,1:1 |
| « Compass » en corail sur l'en-tête | 6,3:1 |
| Liens des cartes | 9,0:1 |
| Texte secondaire des cartes | 6,9:1 |
| Texte des bandeaux et du pied de page | 5,7:1 |

## Typographie

- Police système (`system-ui`, Segoe UI, Roboto, Arial) : aucune police à télécharger, affichage rapide, pas de dépendance.
- Titres en gras, interlignage serré (1,2). Le titre de l'accueil s'adapte à l'écran (`clamp`, de 1,8 à 2,6 rem).
- Texte courant : interlignage 1,5.
- Une police personnalisée pourra être proposée plus tard (à valider avec l'équipe).

## Formes et composants

- **Coins arrondis** : 10 px pour les cartes, bandeaux et hero (`--rayon`) ; boutons en forme de pilule.
- **Boutons** : principal en corail plein ; secondaire avec un contour crème (sur fond sombre).
- **Cartes** : fond blanc, bordure fine, titre en lien.
- **Bandeaux** : fond `--couleur-fond-alt`, sans bordure colorée.
- **Motif** : lignes de niveau (comme sur une carte topographique) en fond du hero, très discrètes, rappel de l'idée d'orientation. Décoratif uniquement (`aria-hidden`).
- **Logo** : pour l'instant, le nom seul, « MIAGE » en crème et « Compass » en corail. Pas de logo dessiné, et on ne reprend pas les logos de l'université ni de MIAGE Connection.

## Accessibilité intégrée au gabarit

- Lien « Aller au contenu » au début de chaque page (visible au premier Tab).
- Contour de focus visible : rouille sur fond clair, corail clair sur fond sombre.
- `aria-current="page"` sur le lien de la page active.
- Menu mobile utilisable même sans JavaScript, et fermeture avec la touche Échap.

## Gabarit de page

Pour créer une nouvelle page : copier `docs/gabarit-page.html` dans `pages/` et suivre les instructions en commentaire en haut du fichier.
