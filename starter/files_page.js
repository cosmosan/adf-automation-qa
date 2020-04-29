var files_page = function () {

    this.clickOnContentButton = function () {
        element(by.css("mat-list-item[data-automation-id='Content Services']")).click();
    }

    this.getHeader = function () {
        return element(by.className("app-home-headline"));
    }

    this.clickOnNewFolder = function () {
        element(by.css("button[data-automation-id='create-new-folder']")).click();
    }

    this.checkThatListContainsFolder = function (folderName) {

        return element(by.css("[class='adf-datatable-body'] adf-datatable-row[aria-label='" + folderName + "']")).isDisplayed();
        
    }

    this.deleteFolder = function (folderName) {
        element(by.css("[class='adf-datatable-body'] adf-datatable-row[aria-label='" + folderName + "'] button[aria-label='Actions']")).click();
        element(by.css("button[aria-label='Delete']")).click();

    }
 
}
module.exports = new files_page();