class MainPage {
    static get url(){
        return "127.0.0.1:3000/#/";
    }
    
    static visit(){
        cy.visit(this.url);
    }

    static get accountBtn(){
        return cy.get("#navbarAccount");
    }

    static get loginBtn(){
        return cy.get("#navbarLoginButton");
    }

    static get regSuccess(){
        return cy.get(".mat-simple-snack-bar-content");
    }

    static get clickToSearch(){
        return cy.get("#searchQuery");
    }

    static get searchField(){
        return cy.get(".mat-search_field");
    }
    
    static get filterList(){
        return cy.get('.mat-paginator-page-size-select');
    }

    static get filter12(){
        return cy.get("#mat-option-0");
    }

    static get filter24(){
        return cy.get("#mat-option-1");
    }

    static get filter36(){
        return cy.get("#mat-option-2");
    }

    static get productAmount(){
        return cy.get(".product");
    }
}

export default MainPage;
