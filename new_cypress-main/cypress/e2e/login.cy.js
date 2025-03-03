describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('/'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
         
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти


         cy.get('#message').contains('Авторизация прошла успешно'); // Проверяю, что вижу текст после авторизации
         cy.get('#message').should('be.visible'); // Текст есть и он виден 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
     })


     it('Неверный пароль и верный логин', function () {
        cy.visit('/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти


        cy.get('#message').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст после авторизации
        cy.get('#message').should('be.visible'); // Текст есть и он виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
        
        cy.get('#mail').type('german@dolnikova.ru'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст есть и он виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })
   

    it('Проверка, что в логине есть @', function () {
        cy.visit('/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
        
        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти


        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что вижу текст после авторизации
        cy.get('#message').should('be.visible'); // Текст есть и он виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
        
        cy.get('#forgotEmailButton').click(); // Нажала кнопку восстановления пароля
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления 
        cy.get('#restoreEmailButton').click(); // Нажала кнопку отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст есть и он виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })

    it('Проверку на приведение к строчным буквам в логине', function () {
        cy.visit('/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль 
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти


        cy.get('#message').contains('Авторизация прошла успешно'); // Проверяю, что вижу текст после авторизации
        cy.get('#message').should('be.visible'); // Текст есть и он виден 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })


 })

 