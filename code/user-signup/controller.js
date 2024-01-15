const { User } = require("./database/models");

const postUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const db_user = await User.create({ name, email });

        // add user to okta
        const response = await fetch(`${process.env.OKTA_URL}/api/v1/users?activate=false`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `SSWS ${process.env.OKTA_API_TOKEN}`
            },
            body: JSON.stringify({
                profile: {
                    firstName: name.split(" ")[0],
                    lastName: name.split(" ")[1],
                    email: email,
                    login: email
                }
            })
        });
        const okta_user = await response.json();
        // check for error response ? throw error : proceed

        // TODO - add user to gateway

        return res.status(201).json({
            message: "user created",
            data: {
                db_user: db_user,
                okta_user: okta_user,
                kong_user: null
            }
        });

    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    postUser
};
