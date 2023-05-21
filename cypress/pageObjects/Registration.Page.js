class RegistrationPage {
    static get url(){
        return "127.0.0.1:3000/#/register";
    }
    
    static visit(){
        cy.visit(this.url);
    }


    static get emailRandom(){
        return cy.get("#emailControl");
    }

    static get setPassword(){
        return cy.get('#passwordControl');
    }

    static get repeatPassword(){
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestionOpen(){
        return cy.get("#mat-select-2");
    }

    static get securityQuestionSelect(){
        return cy.get("#mat-option-3");
    }

    static get inputSecurityQuestion(){
        return cy.get("#securityAnswerControl");
    }

    static get registerBtn(){
        return cy.get("#registerButton");
    }
}

export default RegistrationPage;
