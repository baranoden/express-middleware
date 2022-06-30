exports.User = (req, res, next) => {
    const { username, password } = req.body;
    if (username !== "ismail" || password !== "123456") {
        res.status(400).json("Kullanıcı Adı Veya Şifre Yanlış");
    } else {
        next();
    }
};
