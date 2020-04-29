var settings_page = function () {


    this.getDropdown = function () {
        return element(by.id('adf-provider-selector'));
    }

    this.clickOnDropdown = function () {
        element(by.id('adf-provider-selector')).click();
    }

    this.selectOption = function (){
       element.all(by.css("[class='mat-option-text']")).then(function (dropdownListOptions) {
            dropdownListOptions[1].click();
        });
  

    }

    this.clickOnApply = function () {
        element(by.id('host-button')).click();
    }



}
module.exports = new settings_page();