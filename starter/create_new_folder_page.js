var create_new_folder_page = function () {

    this.getModalHeader = function () {
       return element(by.css("h2[class='mat-dialog-title']"));
    }

    this.checkNameField = function () {
        return element(by.css('input[id=adf-folder-name-input]')).getAttribute('aria-invalid');
    }

    this.fillNameField = function () {
        element(by.id('adf-folder-name-input')).sendKeys('cosmosan');
    }

    this.clickOnCreate = function () {
        element(by.id('adf-folder-create-button')).click();
    }

    this.clickOnCancel = function () {
        element(by.id('adf-folder-cancel-button')).click();
    }

}
module.exports = new create_new_folder_page();