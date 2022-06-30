const express = require("express");
const { User } = require("./middleware/User");
const { Validation } = require("./middleware/Validation");
const app = express();

app.use(express.json());

//custom middleware
app.use(Validation);
app.use(User);
app.post("/login", (req, res) => {
    try {
        res.status(200).json("Giriş Başarılı");
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(8080, () => console.log("Server is started 8080 Port"));
