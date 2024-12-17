# 🚀 RemixJS Framework

Un framework Node.js élégant combinant les meilleures fonctionnalités de Spring Boot et Symfony.

## ✨ Caractéristiques

- **Décorateurs TypeScript** pour une configuration déclarative
- **Routage automatique** basé sur les annotations
- **ORM intégré** avec Sequelize
- **Gestion des réponses** standardisée
- **Architecture modulaire** inspirée des frameworks d'entreprise

## 🚀 Démarrage rapide

### Installation

```bash
git clone https://github.com/Tojo1512/RemixJS.git
```

### Exemple basique

```javascript
const { Controller, Get, createServer } = require('remixjs');

@Controller('/api/users')
class UserController {
    @Get('/')
    async getUsers(req, res) {
        res.json({ message: 'Liste des utilisateurs' });
    }
}
```

### Définition d'un modèle

```javascript
const { Table, Column } = require('./framework/orm/decorators');
const { DataTypes, Model } = require('sequelize');

@Table({ tableName: 'users' })
class User extends Model {
    @Column(DataTypes.STRING)
    name;

    @Column(DataTypes.INTEGER)
    age;
}
```

## 🛠 Configuration

### Configuration du serveur

```javascript
// .env
PORT=3000
AUTO_LOAD_ROUTES=true
```

## 📚 Documentation

### Décorateurs disponibles

#### Contrôleurs
- `@Controller(prefix)` - Définit un préfixe pour toutes les routes du contrôleur
- `@Get(path)`
- `@Post(path)`
- `@Put(path)`
- `@Delete(path)`

#### Modèles
- `@Table(options)`
- `@Column(type, options)`

### Repositories

Le framework fournit deux types de repositories :

- `GenericRepository` - Pour les opérations CRUD basiques
- `GeneralRepository` - Pour les requêtes personnalisées et complexes

```javascript
const repository = new GenericRepository(UserModel);
const users = await repository.findAll();
```

## 🔧 Structure du projet recommandée

```
project/
├── src/
│   ├── controllers/
│   ├── models/
│   └── config/
├── framework/
│   ├── orm/
│   ├── routes/
│   └── request/
└── server.js
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements :
 ### Hoseia Rabemanantsoa 

Inspiré par les meilleures pratiques de :
- Spring Boot
- Symfony
- Express.js
- Sequelize
``` 