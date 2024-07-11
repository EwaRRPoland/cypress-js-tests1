//1. istniejące url, GET
describe('httpbin tests', () => {
  it('response code should be 200', () => {
    cy.request('https://httpbin.org').then(response => {
      const status = response.status;

      assert.equal(200, status);
    })
  })



//2. nieistniejące url, GET

  const request1 = {
    url: 'https://httpbin.org/non-existing-url',
    failOnStatusCode: false
  };

  it('response code should be 404', () => {
    cy.request(request1).then(response => {
      const status = response.status;

      assert.equal(404, status);
    })
  })


//3. Test, w którym wysyłamy żądanie do adresu URL https://httpbin.org/get z jednym parametrem "key", a wartość tego parametru to "value", GET


  const request2 = {
    url: 'https://httpbin.org/get',
    qs: {
      "key": "value"
    },
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request2).then(response => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal("value", response.body.args.key);
    })
  })

//4. Przekazujemy parametr "username"  o wartości "ewarr" za pomocą POST

  const request3 = {
  method: 'POST',
    url: 'https://httpbin.org/post',
    qs: {
      "username": "ewarr"
    },
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request3).then(response => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal("ewarr", response.body.args.username);
    })
  })
//})

//5.
//describe('httpbin tests', () => {
  const bodyData = {
    bodyKey: "bodyValue"
  };

  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: bodyData,
    failOnStatusCode: false
  };

  it('complex post test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    })
  })
})