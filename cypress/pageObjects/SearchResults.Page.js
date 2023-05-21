class SearchResultsPage {
    static get url(){
        return "127.0.0.1:3000/#/search";
    }
    
    static visit(){
        cy.visit(this.url);
    }


    static get validateItem(){
        return cy.get(".item-name");
    }

    static get validateName(){
        return cy.get("h1");
    }

    static get closeDialog(){
        return cy.get('[aria-label="Close Dialog"]');
    }

    static get openReviews(){
        return cy.get('[aria-label="Expand for Reviews"]')
    }

    static get reviewText(){
        return cy.get("p");
    }

}

export default SearchResultsPage;
