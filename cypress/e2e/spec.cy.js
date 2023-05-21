import MainPage from "../pageObjects/Main.Page.js";
import LoginPage from "../pageObjects/Login.Page.js";
import RegistrationPage from "../pageObjects/Registration.Page.js";
import SearchResultsPage from "../pageObjects/SearchResults.Page.js";

describe("Juice-shop scenarios", () => {
    context("With no login", () => {
        beforeEach(() => {
            cy.visit("/");
            LoginPage.dismissBtn.click();
            LoginPage.greenBtn.click();
        });

        it.only("Registration", () => {
            MainPage.accountBtn.click();
            MainPage.loginBtn.click();
            LoginPage.newAccount.click();
            RegistrationPage.emailRandom.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
            RegistrationPage.setPassword.type("sheesh123");
            RegistrationPage.repeatPassword.type("sheesh123");
            RegistrationPage.securityQuestionOpen.click();
            RegistrationPage.securityQuestionSelect.click();
            RegistrationPage.inputSecurityQuestion.type("testink");
            RegistrationPage.registerBtn.click();
            MainPage.regSuccess.should("have.text", "Registration completed successfully. You can now log in.");
        });
    });

    context("With login", () => {
        beforeEach(() => {
            LoginPage.visit();
            LoginPage.dismissBtn.click();
            LoginPage.greenBtn.click();
            LoginPage.logInto("demo", "demo");
        });

        it("Search for lemon", () => {
            MainPage.clickToSearch.click();
            MainPage.searchField.type("lemon{enter}");
            SearchResultsPage.validateItem.contains("Juice").click();
            SearchResultsPage.validateItem.should("have.text"," Lemon Juice (500ml) ");
        });

        it("Search 500ml", () => {
            MainPage.clickToSearch.click();
            MainPage.searchField.type("500ml{enter}");
            SearchResultsPage.validateItem.contains("Eggfruit").click();
            SearchResultsPage.validateName.should("have.text","Eggfruit Juice (500ml)");
            SearchResultsPage.closeDialog.click();
            SearchResultsPage.validateItem.contains("Lemon").click();
            SearchResultsPage.validateName.should("have.text","Lemon Juice (500ml)");
            SearchResultsPage.closeDialog.click();
            SearchResultsPage.validateItem.contains("Strawberry").click();
            SearchResultsPage.validateName.should("have.text","Strawberry Juice (500ml)");
            SearchResultsPage.closeDialog.click();
        });
     
        it("Filter product amount", () => {
            MainPage.filterList.click();
            MainPage.filter12.click();
            MainPage.productAmount.should("have.length", 12);
            MainPage.filterList.click();
            MainPage.filter24.click();
            MainPage.productAmount.should("have.length", 24);
            MainPage.filterList.click();
            MainPage.filter36.click();
            MainPage.productAmount.should("have.length", 35);
        });

        it("Validate item review", () => {
            MainPage.clickToSearch.click();
            MainPage.searchField.type("king{enter}");
            SearchResultsPage.validateItem.contains("King").click();
            cy.wait(200);
            SearchResultsPage.openReviews.click();
            SearchResultsPage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
        });
    });
});