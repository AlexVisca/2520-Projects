const Database = require("../database");

loginSubmit: (req, res) => {
    //
}


registerUser: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    database["Jace"] = {
        email: email,
        password: password;
    }
}