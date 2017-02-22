const Sequelize = require('sequelize')
const db = new Sequelize( 'bulletinboard', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	dialect: 'postgres'
});
 
const Messages = db.define('messages', {
    title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
    body: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	}
});

db.sync({
	force: true
})

.catch( (error) => console.log(error) );

module.exports = {
    db: db, 
    Messages: Messages
}