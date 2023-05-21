class LoginPage {
    static get url(){
        return "127.0.0.1:3000/#/login";
    }
    
    static visit(){
        cy.visit(this.url);
    }

    static get newAccount(){
        return cy.get("#newCustomerLink");
    }

    static get dismissBtn(){
        return cy.get(".close-dialog");
    }

    static get greenBtn(){
        return cy.get(".cc-dismiss");
    }

    static get emailField(){
        return cy.get("#email");
    }

    static get pswdField(){
        return cy.get("#password");
    }

    static get loginButton(){
        return cy.get("#loginButton");
    }

    static logInto(email, password){
        this.emailField.type(email);
        this.pswdField.type(password);
        this.loginButton.click();
    }

}

export default LoginPage;
