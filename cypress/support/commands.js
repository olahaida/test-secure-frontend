Cypress.Commands.add('login', (username, password) => {
    // Te 3 akcje robi przeglądarka i chcemy je wykonać z poziomu kodu testu Cypressowego

    // 1. Wysłanie requestu logowania (taki sam jak w login.api.cy.js)
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username: username,
            password: password,
        },
    }).then((response) => {
        expect(response.status).to.equal(200)
        // 2. Ustawić token z odpowiedzi jako ciastko o nazwie token
        cy.setCookie('token', response.body.token)
        // 3. Ustawić odpowiedź w localStorage jak "spłaszczony" JSON
        localStorage.setItem('user', JSON.stringify(response.body))
        cy.wrap(response.body.token).as('token')
    })

    // 4. Wchodzimy na stronę główną frontendu i zakładamy ze powinniśmy być zalogowani
    cy.visit('http://localhost:8081')
})

Cypress.Commands.add('register', (user) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup',
        body: user,
    }).then((response) => {
        expect(response.status).to.equal(201)
    })
})
