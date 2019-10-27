module.exports = {
	port: process.env.PORT || 3070,
	db: {
		database: process.env.DB_NAME || 'Flex',
		user: process.env.DB_USER || 'flexiapp',
		password: process.env.DB_PASS || 'GranCzk2qUBNpqM3D36qIt27',
		options: {
			dialect: 'mysql',
			host: process.env.HOST || 'localhost'/* ,
			storage: './tabtracker.sqlite' */
		}
	},
	authentication: {
		jwtSecrect: process.env.JWT_SECRECT || 'secrect'
	},
	logistuzbot: {
		port: 3070,
		url: 'https://profimed.medlux.uz/bot_profimed',
		token: '1010946008:AAEPL8Sdx0Optr5V-AJZC76thqwCFnf_cYs'
	}
}
		