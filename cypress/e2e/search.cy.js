describe('Search elements',() =>{

    beforeEach(() =>{
        cy.visit('');
    })

    it('Search for elements with multiple results',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('iphone');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','iphone');
        })
    })

    it('Search for elements without results',()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('autos');
            cy.get(index.searchButton).click();
        })

    })
})