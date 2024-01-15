const Sequelize = require('sequelize');

const connectDB = async () => {
    const sequelize = new Sequelize(process.env.PGSQL_URI);
    try {
        await sequelize.authenticate();
        console.log("DB connected");
    } catch (err) {
        console.error('DB connection failed:', err);
        return;
    }

    // const Company = sequelize.define('company', {
    //     company_name: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //         unique: true
    //     },
    //     primary_email: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //         unique: true
    //     },
    //     created_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     },
    //     updated_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     }
    // });

    // const Organisation = sequelize.define('organisation', {
    //     organization_name: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     primary_email: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //         unique: true
    //     },
    //     created_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     },
    //     updated_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     }
    // });

    // const Account = sequelize.define('account', {
    //     account_name: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     primary_email: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //         unique: true
    //     },
    //     created_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     },
    //     updated_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     }
    // });

    // const User = sequelize.define('user', {
    //     first_name: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     last_name: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     email: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //         unique: true
    //     },
    //     created_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     },
    //     updated_at: {
    //         type: Sequelize.DATE,
    //         allowNull: false,
    //         defaultValue: Sequelize.NOW
    //     }
    // });

    // Company.hasMany(Organisation);
    // Organisation.belongsTo(Company);
    // Organisation.hasMany(Account);
    // Account.belongsTo(Organisation);
    // Account.hasMany(User);
    // User.belongsTo(Account);

    // (async () => {
    //     try {
    //         await sequelize.sync({ force: true });
    //         console.log("tables created");
    //     } catch (err) {
    //         console.error(err);
    //     }
    // })();

}

module.exports = connectDB;
