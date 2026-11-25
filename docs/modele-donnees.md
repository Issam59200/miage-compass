# Modèle de données : MIAGE Compass

Ce document décrit le format des données de candidature affichées sur le site.
Il sert de référence commune à la collecte (Cyrille), au front (Issam) et au back (Hossein).

## Principe

- Toutes les données de candidature sont dans **un seul fichier** : `data/candidatures.json`.
- Le fichier contient un **tableau d'objets**. Chaque objet est **une candidature possible**, c'est-à-dire une combinaison **MIAGE × niveau × voie**.
- Une même MIAGE a donc plusieurs entrées (par exemple M1 initiale et M1 alternance).
- Les données sont **neutres en langue** (dates, liens, noms propres). Les textes de l'interface sont dans `i18n/fr.json` et `i18n/en.json`.

## Champs

| Champ | Type | Obligatoire | Description |
|---|---|---|---|
| `id` | texte | oui | Identifiant unique, en minuscules et tirets : `ville-niveau-voie` (ex. `lille-m1-alternance`). |
| `miage` | texte | oui | Nom de la MIAGE (ex. `MIAGE Lille`). |
| `universite` | texte | oui | Nom de l'université de rattachement. |
| `ville` | texte | oui | Ville où se déroule la formation. |
| `niveau` | texte | oui | Valeurs autorisées : `L3`, `M1`, `M2`. |
| `voie` | texte | oui | Valeurs autorisées : `initiale`, `alternance`. |
| `ouverture` | date | non | Date d'ouverture des candidatures, au format `AAAA-MM-JJ`. `null` si inconnue. |
| `cloture` | date | non | Date de clôture des candidatures, au format `AAAA-MM-JJ`. `null` si inconnue. |
| `cfa` | texte | non | Nom du CFA. `null` si la voie est `initiale` ou si l'information est inconnue. |
| `lien_officiel` | URL | oui | Page officielle que le candidat doit consulter pour candidater. |
| `source` | texte | oui | D'où vient l'information (ex. `Page officielle de la formation`, `Réponse par mail du secrétariat`). Permet de revérifier. |
| `date_verification` | date | oui | Date de la dernière vérification de la ligne, au format `AAAA-MM-JJ`. |

## Règles de format

1. **Dates** : toujours au format ISO `AAAA-MM-JJ`. Le site les met en forme selon la langue (FR ou EN).
2. **Valeurs fermées** : `niveau` et `voie` n'acceptent que les valeurs listées, en minuscules pour `voie`. Pas de variantes (`Alternance`, `alt.`, `M 1`).
3. **Information inconnue** : utiliser `null`. Ne jamais écrire `""`, `"?"` ou `"N/A"`.
4. **Pas d'invention** : une date non confirmée reste `null`.
5. **Liens** : URL complètes commençant par `https://`.
6. **Identifiant** : unique dans tout le fichier, et il ne change plus une fois créé.
7. **Données personnelles** : aucun nom ni mail de personne. Seuls des contacts génériques ou d'associations peuvent être publiés (RGPD).

## Exemple

```json
[
  {
    "id": "lille-m1-alternance",
    "miage": "MIAGE Lille",
    "universite": "Université de Lille",
    "ville": "Villeneuve-d'Ascq",
    "niveau": "M1",
    "voie": "alternance",
    "ouverture": "2027-02-01",
    "cloture": "2027-05-15",
    "cfa": "Nom du CFA",
    "lien_officiel": "https://sciences-technologies.univ-lille.fr/informatique/formation/master-miage",
    "source": "Page officielle de la formation",
    "date_verification": "2026-11-25"
  },
  {
    "id": "amiens-m1-initiale",
    "miage": "MIAGE Amiens",
    "universite": "Université de Picardie Jules Verne",
    "ville": "Amiens",
    "niveau": "M1",
    "voie": "initiale",
    "ouverture": null,
    "cloture": null,
    "cfa": null,
    "lien_officiel": "https://miage-amiens.fr/",
    "source": "Site de la MIAGE",
    "date_verification": "2026-11-25"
  }
]
```

(Les dates et le CFA de cet exemple sont fictifs.)

## Champs optionnels à valider avec l'équipe

Ces informations sont déjà collectées dans le tableau de collecte et seraient utiles dans le guide. Elles ne font pas partie du modèle tant que l'équipe ne les a pas validées.

| Champ | Type | Description |
|---|---|---|
| `parcours` | liste de textes | Parcours proposés (ex. `["IPI-NT"]`, `["OSIE", "ITD", "IDD"]`). |
| `choix_parcours` | texte | Moment du choix du parcours (ex. `deuxième année`). |
| `rythme_alternance` | texte | Rythme cours / entreprise (ex. `2 jours / 3 jours`). |
| `periode_stage` | texte | Période de stage éventuelle (ex. `mi-avril à septembre`). |
| `date_rentree` | date | Date de rentrée de la formation. |
| `annee_campagne` | nombre | Année de la campagne de candidature (ex. `2027`), pour ne pas mélanger les années. |

## Mise à jour et relecture

- Chaque modification passe par une pull request relue par une autre personne.
- Toute ligne ajoutée ou modifiée doit avoir un `lien_officiel`, une `source` et une `date_verification` à jour.
- Avant chaque campagne, toutes les lignes sont revérifiées et leur `date_verification` est mise à jour.
- Le fichier est contrôlé par le script de validation dans `scripts/` (champs obligatoires, valeurs autorisées, format des dates).
