# cypress-js-tests1

# Wdrażanie lokalne Wymagania:

## dotyczące konfiguracji środowiska dla testów Cypress w projekcie. Oto kilka kroków, które powinieneś wykonać:

1. Zainstaluj `Node.js`: Upewnij się, że masz zainstalowany `Node.js` na swoim systemie. Jeśli nie, pobierz go ze strony` Node.js` i zainstaluj.

2. Sprawdź wersję `Node.js`: Upewnij się, że korzystasz z wersji `Node.js` 18 lub 20, ponieważ projekt został przetestowany na tych wersjach.

3. Zainstaluj `Git`: Jeśli jeszcze tego nie zrobiłeś, zainstaluj `Git` na swoim komputerze. Możesz pobrać go ze strony `Git`.

4. Otwórz katalog projektu: Przejdź do katalogu głównego swojego projektu za pomocą wiersza poleceń lub terminala.

5. Sklonuj repozytorium: Sklonuj repozytorium projektu za pomocą komendy` git clone <adres-repozytorium>`.

6. Zainstaluj moduły lokalnie: W katalogu projektu uruchom komendę `npm init -y`, aby zainstalować moduły zdefiniowane w pliku `package.json`.
 
7. Dodajemy do projektu Cypress lokalnie ``npm install cypress --save-dev``.

8. Uruchom testy: Aby uruchomić testy, użyj komendy `npx cypress open` - pierwsze uruchomienie.

9. W oknie startowym Cypress wybierz ``E2E Testing``.

10. Zostaną zaproponowane 4 pliki z testami, które automatycznie zostaną pobrane po kliknięciu ``continue``.

11. Wybierz domyślną przeglądarkę, sugestia ``Google Chrome`` i ``Start E2E Testing in Chrome``.

12. Po otwarciu interfejsu webowego Cypress wybierz ``Create new spec``.

13. ## Ponowne uruchomienia Cypress na komendę w VScode/terminal ``npx cypress open``.

# Gdzie znajdziesz początkowe testy?:

##  Struktura katalogów i plików:

```
## cypress-js-tests/
  │
 cypress/
    │
    ├── e2e/
    │ ├── 1-getting-started/
    │ ├── 2-advanced-examples/
    │ ├── login_tests.cy.js
    │ └── spec.cy.js
    │
    ├── fixtures/
    │
    ├── support/
    │
    ├── node_modules/
    │
    ├── cypress.config.js
    ├── package-lock.json
    └── package.json
```

## Plik z testami:

``login_tests.cy.js``

# Zestawienie tych samych testów z zastosowaniem Page object pattern i bez.

Dwa sposoby pisania testów, na tym samym zestawie testów. 

Wyjściowy zestaw testów `cypress-js-tests1/cypress/e2e/nonPOP.cy.js` 

i do niego stworzony odpowiednik z zastosowaniem POP `cypress-js-tests1/cypress/e2e/POP.cy.js` 
oraz z logiką `cypress-js-tests1/cypress/pages/OLDLogin.js`.

# Zastosowanie Page object pattern w testach.

1. Poprzednie testy z wykorzystaniem wzorca `Page object pattern` - `login.cy.js`.

2. Każda strona ma swój własny plik w folderze `pages`: 

a. Dla strony logowania istnieje plik `Login.js`. 

b. Dla strony głównej istnieje plik `HomePage.js`.
