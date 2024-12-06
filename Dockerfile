# Étape 1 : Utiliser l'image officielle de Node.js
FROM node:18

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tout le reste du projet dans le conteneur
COPY . .

# Étape 6 : Exposer le port que l'application utilise
EXPOSE 3000

# Étape 7 : Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
