// spec.js
var settings_page = require('../starter/settings_page.js');
var login_page = require('../starter/login_page.js');
var files_page = require('../starter/files_page.js');
var create_new_folder_page = require('../starter/create_new_folder_page.js');


describe('ADF Demo App', function () {

    var until = protractor.ExpectedConditions;


    it('test', function () {
        browser.get('http://qaexercise.envalfresco.com/settings');
        browser.wait(until.presenceOf(settings_page.getDropdown()));

        settings_page.clickOnDropdown();
        settings_page.selectOption();
        settings_page.clickOnApply();
        browser.wait(until.presenceOf(login_page.getUsernameField()));

        login_page.login();
        browser.wait(until.presenceOf(files_page.getHeader()));

        files_page.clickOnContentButton();
        files_page.clickOnNewFolder();
        expect(create_new_folder_page.getModalHeader().isDisplayed()).toBe(true);

        create_new_folder_page.fillNameField();
        expect(create_new_folder_page.checkNameField()).toBe("false");

        create_new_folder_page.clickOnCreate();
        expect(files_page.checkThatListContainsFolder("cosmosan")).toBe(true);

        files_page.clickOnNewFolder();
        expect(create_new_folder_page.getModalHeader().isDisplayed()).toBe(true);

        create_new_folder_page.fillNameField();
        expect(create_new_folder_page.checkNameField()).toBe("false");

        create_new_folder_page.clickOnCreate();
        expect(element(by.tagName("simple-snack-bar")).isDisplayed()).toBe(true);
        expect(element(by.tagName("simple-snack-bar")).getText()).toBe("There's already a folder with this name. Try a different name.");
        create_new_folder_page.clickOnCancel();

        files_page.deleteFolder("cosmosan");
        expect(element(by.css("[class='adf-datatable-body'] adf-datatable-row[aria-label='cosmosan']")).isPresent()).toBe(false);

    });
});