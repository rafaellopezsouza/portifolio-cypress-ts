const data = {
  navHome: '[href="/"]',
  navAboutMe: '[href="/about"]',
  navResume: '[href="/resume"]',
  titleAboutMe: ".presentation-title",
  resumeTitle: ".name",
  resumeSubtitle: ".resume-subtitle",
  image: ".image-photo",
  footer: "footer.rodape > .rodape",
  changeLanguage: ".dropdown-toggle",
  selectEnglish: ".dropdown-menu > :nth-child(2) > span",
  selectItalian: ":nth-child(3) > span",
};

const currentYear = new Date().getFullYear();

describe("Smoke Tests", () => {
  beforeEach("Access page", () => {
    cy.visit("/");
  });

  it("Smoke Page Home", () => {
    cy.get(data.navHome).should("have.text", "Home");
    cy.get(data.image).should("be.visible");
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Smoke Page About me", () => {
    cy.get(data.navAboutMe).click().should("have.text", "Sobre mim");
    cy.get(data.image).should("be.visible");
    cy.get(data.titleAboutMe).should("have.text", "Sobre mim");
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Smoke Page Resume", () => {
    cy.get(data.navResume).click().should("have.text", "Curriculo");
    cy.get(data.resumeTitle).should("have.text", "Rafael Lopes de Souza");
    cy.get(data.resumeSubtitle).should(
      "have.text",
      "Analista de Teste Automatizado Sênior"
    );
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Change Language to English", () => {
    cy.get(data.changeLanguage).click();
    cy.get(data.selectEnglish).click();
    cy.get(data.navHome).should("have.text", "Home");
    cy.get(data.navAboutMe).should("have.text", "About Me");
    cy.get(data.navResume).should("have.text", "Resume");
  });

  it("Change Language to Italian", () => {
    cy.get(data.changeLanguage).click();
    cy.get(data.selectItalian).click();
    cy.get(data.navHome).should("have.text", "Home");
    cy.get(data.navAboutMe).should("have.text", "Chi sono");
    cy.get(data.navResume).should("have.text", "Curriculum");
  });
});
