const { getHtmlTemplate, sendHtmlEmail } = require('../../app/services/emailSender');
const { Controller, Post } = require("../../app/routes/routeDecorators");
const paths = require("../config/paths");
const ResponseHandler = require(paths.responseHandler);

@Controller('/email')
class EmailController {
    constructor() {
        this.defaultSender = "tojorakotoarimanana01@gmail.com";
        this.defaultPassword = "fpmf vybw oyuu ixhc";
    }

    @Post('/single')
    async sendSingle(req, res) {
        console.log("[emailController] sendSingle");
        const result = await sendHtmlEmail(this.defaultSender, this.defaultPassword, req.body.receiver, req.body.subject, getHtmlTemplate("Test Email","bibity misy tongotra"));
        res.json(ResponseHandler.success(result, "Email envoyé avec succès"));
    }
}

module.exports = EmailController; 