# ALICE — Site institutionnel

Site web du groupe **ALICE** (*Alliance des Libéraux, Indépendants, Centristes de l'Étranger*), groupe d'élus à l'[Assemblée des Français de l'étranger](https://www.assemblee-afe.fr/) (AFE).

Ce dépôt est prêt pour publication sur **GitHub** et déploiement sur **Vercel**.

## Prérequis

- Node.js 20 LTS ou plus récent
- npm 10 ou plus récent

## Installation locale

```bash
git clone <url-du-depot>
cd ALICE-AFE
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Serveur de développement            |
| `npm run build` | Build de production                 |
| `npm run start` | Serveur après `npm run build`       |
| `npm run lint`  | Analyse ESLint                      |

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Lucide React

Aucune base de données, API payante ni authentification n'est requise pour cette version.

## Structure

```
src/
  app/           # Routes (Accueil, Convictions, Élus, Actions, Actualités, Contact)
  components/    # Composants réutilisables (Header, Footer, cartes, etc.)
  data/          # Contenu éditable (élus, articles, convictions, actions, site)
public/images/   # Logo et médias (placer alice-logo.png ici le cas échéant)
```

## Édition du contenu

Les textes et listes sont centralisés dans `src/data/` :

| Fichier            | Contenu                                      |
| ------------------ | -------------------------------------------- |
| `site.ts`          | Nom, description, e-mail, navigation         |
| `elus.ts`          | Profils des élus                             |
| `convictions.ts`   | Principes politiques                         |
| `actions.ts`       | Présentation des actions (brouillon)         |
| `actualites.ts`    | Articles (échantillons de démonstration)     |

## Contenu provisoire

- Les **noms des élus** sont réels ; circonscriptions, responsabilités, photos et biographies restent des **placeholders** clairement marqués.
- Les **actualités** sont des **contenus de démonstration** (`isDemo: true`), signalés dans l'interface.
- Les **actions** sont présentées comme **brouillons**, sans réalisations inventées.

## Déploiement GitHub → Vercel

1. Créez un dépôt GitHub et poussez ce projet.
2. Sur [vercel.com](https://vercel.com), importez le dépôt.
3. Vercel détecte Next.js automatiquement.
4. Laissez les réglages par défaut (`npm run build` / `.next`).
5. Déployez.

**Variables d'environnement :** aucune n'est nécessaire pour cette première version.

**Domaine :** configurez un domaine personnalisé dans le tableau de bord Vercel lorsque vous le souhaitez.

## Sécurité

- Ne commitez jamais de fichiers `.env`, clés API ou secrets.
- `.gitignore` exclut déjà `node_modules/`, `.next/`, `.env*`, `.vercel/` et les certificats `*.pem`.

## Identité visuelle

| Couleur              | Code      |
| -------------------- | --------- |
| Bleu institutionnel  | `#4D73A5` |
| Marine               | `#193451` |
| Corail               | `#F06468` |
| Blanc                | `#FFFFFF` |
| Gris très clair      | `#F7F8FA` |

## Licence

Contenu éditorial © ALICE. Tous droits réservés.
Ce site n'est pas un site officiel du gouvernement français ni de l'AFE en tant qu'institution.
