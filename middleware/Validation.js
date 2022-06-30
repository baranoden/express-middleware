exports.Validation = (req, res, next) => {
    if (req.body?.username === undefined || req.body?.password === undefined) {
        res.status(400).json("Kullanıcı Adı Veya Şifre Zorunlu Alandır");
    } else {
        next();
    }
};
