import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Testing the login pade POP", () => {

beforeEach('Go to page GOIT', () => {
        loginPage.navigate();
    });

it("Test1: should login and log out with user888@gmail.com", () => {
    // login
    loginPage.login('user888@gmail.com', '1234567890');
  });

it("Test2: should login and log out with testowyqa@qa.team", () => {
    // login
    loginPage.login('testowyqa@qa.team', 'QA!automation-1');
});
  
afterEach('logout', ()=> {
    homePage.logout();
  })
});