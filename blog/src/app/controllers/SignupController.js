
class SignupController {

    // [GET] /signup
    index(req, res) {
        res.render("signup", { isAuthPage: true });
    }

}

export default new SignupController();