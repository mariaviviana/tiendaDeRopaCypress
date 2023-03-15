describe('Search elements',() =>{

    beforeEach(() =>{
        cy.visit('');
    })

    it('Search for elements with multiple results',()=>{
        cy.search('iphone');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','iphone');
        })
    })

    it('Search for elements without results',()=>{
        cy.search('pepe');
    })
})