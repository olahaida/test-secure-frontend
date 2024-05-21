Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.body))
        cy.setCookie('token', response.body.token)
        cy.wrap(response.body.token).as('jwtToken')
    })

    cy.visit('http://localhost:8081')
})

Cypress.Commands.add('register', (user) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup',
        body: user
    })
})

Cypress.Commands.add('deleteUser', (username, token) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:4001/users/${username}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})

Cypress.Commands.add('getUserDetails', (username, token) => {
    return cy.request({
        method: 'GET',
        url: `http://localhost:4001/users/${username}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})

