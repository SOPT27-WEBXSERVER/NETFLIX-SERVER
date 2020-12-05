const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Content = require('./content')(sequelize, Sequelize);
db.Actor = require('./actor')(sequelize, Sequelize);
db.Series = require('./series')(sequelize, Sequelize);

db.Actor.belongsTo(db.Content);
db.Series.belongsTo(db.Content);
db.Content.hasMany(db.Series, { onDelete: 'cascade' });
db.Content.hasMany(db.Actor, { onDelete: 'cascade' });

module.exports = db;
