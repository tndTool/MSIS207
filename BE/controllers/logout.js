const logout = (req, res) => {
    res.clearCookie('userRegister');
    res.redirect('/');
}
module.exports = logout;
