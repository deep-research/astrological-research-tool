module.exports = (sequelize, DataTypes) => {
	//establish the User table in the MySQL database w/ Sequelize
	const Users = sequelize.define("Users", {
		user_name: {
			type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
            isAlphanumeric: true,
            validate: {
                len: [5,25]
            }
        },
		//password
		password: {
			type: DataTypes.STRING(25),
            allowNull: false,
            isAlphanumeric: true,
            validate: {
                len: [5,25]
            }
        }  
	});
	return Users
};