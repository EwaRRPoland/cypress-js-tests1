describe('logging in and out of different users', () => {
    beforeEach('Go to page GOIT', () => {
        cy.visit('https://www.edu.goit.global/account/login')
    });

    it('checking user data user888@gmail.com', () => {
        const user1 = 'user888@gmail.com';
        cy.get('#user_email').type(`${user1}`);
        const password1 = '1234567890';
        cy.get('#user_password').type(`${password1}`);
        cy.get('.eckniwg2').click();
//wejście do navigation-menu 
        cy.get('#open-navigation-menu-mobile').click();
        //klikniecie na "Profil"
        cy.get(':nth-child(7) > .next-bve2vl').click();
        //kliknięcie na "dae osobiste"
        cy.get(':nth-child(1) > .next-w7v3p3').click();
      
        // Sprawdź, czy wyświetlany jest prawidłowy adres e-mail
        cy.get('.next-1ce5qp8 > :nth-child(2)').should('contain', 'user888@gmail.com');
         // Sprawdź, czy wyświetlany są prawidłowe imię i nazwisko
        cy.get('.next-1ce5qp8 > :nth-child(1)').should('contain', 'Тарас Шевченко (ТЕСТ)');
    });

    it('checking user data testowyqa@qa.team', () => {
        const user1 = 'testowyqa@qa.team';
        cy.get('#user_email').type(`${user1}`);
        const password1 = 'QA!automation-1';
        cy.get('#user_password').type(`${password1}`);
        cy.get('.eckniwg2').click();
        //wejście do navigation-menu 
        cy.get('#open-navigation-menu-mobile').click();
        //klikniecie na "Profil"
        cy.get(':nth-child(5) > .next-bve2vl').click();
        //kliknięcie na "dae osobiste"
        cy.get(':nth-child(1) > .next-w7v3p3').click();
      
        // Sprawdź, czy wyświetlany jest prawidłowy adres e-mail
        cy.get('.next-1ce5qp8 > :nth-child(2)').should('contain', 'testowyqa@qa.team');
        // Sprawdź, czy wyświetlany są prawidłowe imię i nazwisko
        cy.get('.next-1ce5qp8 > :nth-child(1)').should('contain', 'testowy qa');
    });
})