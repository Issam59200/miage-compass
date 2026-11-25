# MIAGE Compass

Tout savoir pour candidater en MIAGE, partout en France.
Site web statique et bilingue (FR/EN) qui regroupe les informations de candidature des MIAGE : calendrier, guide du candidat, FAQ.

Projet de communication, M1 MIAGE, Université de Lille.

## Équipe

Noé Loisel (chef de projet), Issam Atrari (front-end), Mohammad Hossein Eslahi (back-end), Cyrille Riguet (collecte de données).

## Stack

HTML, CSS et JavaScript uniquement.
Les données sont dans `data/candidatures.json` (format décrit dans `docs/modele-donnees.md`).

## Lancer en local

Depuis le dossier `miage-compass/` :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Contribuer

1. Une branche par modification, puis une pull request.
2. La pull request est relue par une autre personne que l'auteur.
3. Chaque donnée a un lien officiel, une source et une date de vérification à jour.
4. Aucune donnée personnelle : uniquement des contacts d'associations (RGPD).

## Licence

Voir le fichier LICENSE.