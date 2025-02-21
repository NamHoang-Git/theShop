
class LoginController {

    // [GET] /login
    index(req, res) {
        res.render("login", { isAuthPage: true });
    }

}

export default new LoginController();