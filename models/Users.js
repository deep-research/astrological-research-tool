module.exports = (sequelize, DataTypes) => {
	//establish the User table in the MySQL database w/ Sequelize
	const Users = sequelize.define("Users", {
		user_name: {
			type: DataTypes.STRING(25),
            allowNull: false,
            validate: {
                len: [5,25]
            }
        },
		//password
		password: {
			type: DataTypes.STRING(25),
            allowNull: false,
            validate: {
                len: [5,25]
            }
        }  
	});
	return Users
};