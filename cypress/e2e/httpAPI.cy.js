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

  //3. nieprawidłowe url, GET

  const request1a = {
    url: 'https://httpbin.com/123',
    failOnStatusCode: false
  };

  it('response code should be 404', () => {
    cy.request(request1a).then(response => {
      const status = response.status;

      assert.equal(404, status);
    })
  })

  //4. Zwraca pytającego adres IP 

  const request1b = {
    url: 'http://httpbin.org/ip',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request1b).then(response => {
      const status = response.status;

      assert.equal(200, status);
    })
  })

  //5. Zwraca zestaw nagłówków odpowiedzi z ciągu zapytania

  const request1c = {
    method: 'POST',
    url: 'https://httpbin.org/response-headers?freeform=',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request1c).then(response => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal('87', response.headers['content-length']);
    })
  })

  //6. Zwraca wszystko, co zostało przekazane w danych żądania.

  const request1d = {
    method: 'DELETE',
    url: 'https://httpbin.org/anything/{anything}',
    failOnStatusCode: false
  };

  it('Returns anything passed in request data - DELETE', () => {
    cy.request(request1d).then(response => {
      const status = response.status;
      assert.equal(200, status);
    })
  })

  //7. Zwraca wszystko, co zostało przekazane w danych żądania.

  const request1e = {
    method: 'PUT',
    url: 'https://httpbin.org/anything/{anything}',
    failOnStatusCode: false
  };

  it('Returns anything passed in request data - PUT', () => {
    cy.request(request1e).then(response => {
      const status = response.status;
      assert.equal(200, status);
    })
  })

  //8. Zwraca wszystko, co zostało przekazane w danych żądania.

  const request1f = {
    method: 'GET',
    url: 'https://httpbin.org/anything/{anything}',
    failOnStatusCode: false
  };

  it('Returns anything passed in request data - GET', () => {
    cy.request(request1f).then(response => {
      const status = response.status;
      assert.equal(200, status);
    })
  })

  //9. Zwraca wszystko, co zostało przekazane w danych żądania.

  const request1g = {
    method: 'PATCH',
    url: 'https://httpbin.org/anything/{anything}',
    failOnStatusCode: false
  };

  it('Returns anything passed in request data - PATCH', () => {
    cy.request(request1g).then(response => {
      const status = response.status;
      assert.equal(200, status);
    })
  })

  //10. Zwraca wszystko, co zostało przekazane w danych żądania.

  const request1h = {
    method: 'POST',
    url: 'https://httpbin.org/anything/{anything}',
    failOnStatusCode: false
  };

  it('Returns anything passed in request data - POST', () => {
    cy.request(request1h).then(response => {
      const status = response.status;
      assert.equal(200, status);
    })
  })
  
  //11. Test, w którym wysyłamy żądanie do adresu URL https://httpbin.org/get z jednym parametrem "key", 
  //a wartość tego parametru to "value", GET

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

  //12. Przekazujemy parametr "username"  o wartości "ewarr" za pomocą POST

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

  //13. Sprawdzamy, czy ciąło odpowiedzi jest identyczne z ciałem żadania
  //Oczekujemy, że serwer przetworzy dane i dostarczy odpowiedż różną od pierwotnego obiektu. 
  //Załozenie czynione dla bezpiecznej i elastycznej komunikacji między klientem a serwerem

  const bodyData = {
    bodyKey: "figlarna kotka swawoli do woli"
  };

  const request4 = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: bodyData,
    failOnStatusCode: false
  };

  it('complex post test', () => {
    cy.request(request4).then(response => {
      const status = response.status;
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    })
  })

  //14.To kompleksowy test, który ustawia nagłówki i sprawdza ich poprawność
  //(wszystkie nagłówki żądania httpbin podaje w polu responseHeaders.customHeader)
  //Mogą zawierać niestandardowe dane, takie jak tokeny uwierzytelniające, identyfikatory sesji, metadane lub inne informacje.
 
  const request5 = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      "customHeader": "Kotki dwa, TRATA TA"
    },
    failOnStatusCode: false
  };

  it('test that header set correctly', () => {
    cy.request(request5).then(response => {
      assert.equal(200, response.status);
      assert.equal("Kotki dwa, TRATA TA", response.requestHeaders.customHeader);
    })
  })

  //15. Często potrzebujemy symulować żądania z różnych przeglądarek. 
  //Aby to zrobić, należy ustawić właściwość User - Agent (np. zasymulowanie konkretnego sprzętu)

  const request6 = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
    },
    failOnStatusCode: false
  };

  it('test that user-agent set correctly', () => {
    cy.request(request6).then(response => {
      assert.equal(200, response.status);
      assert.equal("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0", response.requestHeaders['user-agent']);
    })
  })

  //16.Niektóre testy wymagają wysłania pliku cookie w żądaniu.
  //Ten plik to informacja, która jest przechowywana w przeglądarce
  //i którą przeglądarka automatycznie wysyła przy każdym żądaniu.Jeśli użyjemycy.request(),
  //to wysłanie Cookie jest wysłaniem nagłówka z nazwą Cookie, oraz wartości w formacie klucz = znaczenie.
  //W nagłówku żądania ustawiamy ciasteczko o nazwie cookieName i wartości cookieValue (np. zasymulowanie użytkownika pracującego  na urzadzeniu)
  
  const request7 = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'Cookie': 'cookieName=cookieValue'
    },
    failOnStatusCode: false
  };

  it('test send cookie', () => {
    cy.request(request7).then(response => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
    })
  })

  //17. Autoryzacja użytkownika przy użyciu protokołu HTTP Basic Auth
  //testy nie przechodzą, pomimo 401 - nieudane uwierzytelnienie., że na API przechodzą

  const request8 = {
    method: 'GET',
    url: 'https://httpbin.org/basic-auth/testuser/testpassword',
    
    failOnStatusCode: false
  };

  it('logging in testuser', () => {
       
    cy.request(request8).then(response => {
      assert.equal(401, response.status);

    })
  })

//18. Zwraca zestaw nagłówków odpowiedzi z ciągu zapytania.

  const request9 = {
    method: 'POST',
    url: 'https://httpbin.org/response-headers?freeform=dupa',
    
    failOnStatusCode: false
  };

  it('Returns a set of response headers from the query string', () => {
       
    cy.request(request9).then(response => {
      assert.equal(200, response.status);
       assert.equal('dupa', response.headers['freeform']);

    })
  })

//18. Zwraca zestaw nagłówków odpowiedzi z ciągu zapytania.

  const request10 = {
  method: 'GET',
  url: 'https://httpbin.org/json',
  failOnStatusCode: false
};

it('Returns a simple JSON document', () => {
  cy.request(request10).then(response => {
    assert.equal(200, response.status);
    assert.equal('Wake up to WonderWidgets!', response.body.slideshow.slides[0].title);
    //można sprawdzić, czy czas trwania żądania nie przekracza 800 milisekund:
    cy.log("test duration <= 800ms");
    assert.isTrue(response.duration <= 800)
  });
}); 
  
  //19. czas trwania żądania- - asercja, aby sprawdzić, czy czas trwania odpowiedzi jest mniejszy niż określony limit (np. 1 sekunda)

  const request11 = {
  method: 'GET',
  url: 'https://httpbin.org/json',
  failOnStatusCode: false
};

  it('time response', () => {
    cy.request(request11).then(response => {
      expect(response.duration).to.not.be.greaterThan(1000); // Oczekiwany czas trwania w milisekundach
    });
  });

//20. testu, który wysyła 10 żądań z losowymi identyfikatoram

  it('test random ids', () => {
    for(let i = 0; i < 10; i++) {
      const randomId = getRandomInt(10000000);

      const request12 = {
        url: 'https://httpbin.org/headers',
        id: randomId
      }

      cy.request(request12).then(response => {
        assert.isTrue(response.status == 200);
        cy.log("ID:", randomId);
      })
    } 
  })
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

