module.exports = {
  // Décorateurs de routage
  ...require('./app/routes/routeDecorators'),
  // Expose @Controller, @Get, @Post, @Put, @Delete
  
  // Décorateurs ORM
  ...require('./app/orm/decorators'),
  // Expose @Table, @Column
  
  // Repositories
  GenericRepository: require('./app/orm/GenericRepository'),
  GeneralRepository: require('./app/orm/GeneralRepository'),
  
  // Gestionnaire de réponses
  ResponseHandler: require('./app/request/respondHandler'),
  
  // Fonction de démarrage du serveur
  createServer: require('./server'),
  
  EmailService: require('./app/services/EmailService')
}; 