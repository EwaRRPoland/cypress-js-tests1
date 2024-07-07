describe('logging in and out of different users', ()=> {
    beforeEach('Go to page GOIT', () => {
        cy.visit('https://www.edu.goit.global/account/login')
    });


    it('logging in and out user888@gmail.com', ()=> {
        const user1 = 'user888@gmail.com'
        cy.get('#user_email').type(`${user1}`)
        const password1 = '1234567890'
        cy.get('#user_password').type(`${password1}`)
        cy.get('.eckniwg2').click()

        cy.get('#open-navigation-menu-mobile').click()
        cy.get(':nth-child(12) > .next-bve2vl').click()
    })

    it('logging in and out testowyqa@qa.team', ()=> {
        const user1 = 'testowyqa@qa.team'
        cy.get('#user_email').type(`${user1}`)
        const password1 = 'QA!automation-1'
        cy.get('#user_password').type(`${password1}`)
        cy.get('.eckniwg2').click()

        cy.get('#open-navigation-menu-mobile').click()
        cy.get(':nth-child(8) > .next-bve2vl').click()
    })

})