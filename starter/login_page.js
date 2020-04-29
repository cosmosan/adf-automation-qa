var login_page = function () {

    this.getUsernameField = function () {
        return element(by.id('username'));
    }

    this.login = function () {
        element(by.id('username')).sendKeys('guest@example.com');
        element(by.id('password')).sendKeys('Password');
        element(by.id('login-button')).click();
    }

}
module.exports = new login_page();