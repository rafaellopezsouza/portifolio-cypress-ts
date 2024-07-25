const currentYear = new Date().getFullYear();

describe("Smoke Tests", () => {
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
  const texts = {
    communs: {
      home: "Home",
      name: "Rafael Lopes de Souza",
    },
    portuguese: {
      abouteMe: "Sobre mim",
      resume: "Curriculo",
    },
    english: {
      abouteMe: "About Me",
      resume: "Resume",
    },
    italian: {
      abouteMe: "Chi sono",
      resume: "Curriculum",
    },
  };

  beforeEach("Access page", () => {
    cy.visit("/");
  });

  it("Smoke Page Home", () => {
    cy.get(data.navHome).should("have.text", texts.communs.home);
    cy.get(data.image).should("be.visible");
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Smoke Page About me", () => {
    cy.get(data.navAboutMe)
      .click()
      .should("have.text", texts.portuguese.abouteMe);
    cy.get(data.image).should("be.visible");
    cy.get(data.titleAboutMe).should("have.text", texts.portuguese.abouteMe);
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Smoke Page Resume", () => {
    cy.get(data.navResume).click().should("have.text", texts.portuguese.resume);
    cy.get(data.resumeTitle).should("have.text", texts.communs.name);
    cy.get(data.footer).should("contain.text", currentYear);
  });

  it("Change Language to English", () => {
    cy.get(data.changeLanguage).click();
    cy.get(data.selectEnglish).click();
    cy.get(data.navHome).should("have.text", texts.communs.home);
    cy.get(data.navAboutMe).should("have.text", texts.english.abouteMe);
    cy.get(data.navResume).should("have.text", texts.english.resume);
  });

  it("Change Language to Italian", () => {
    cy.get(data.changeLanguage).click();
    cy.get(data.selectItalian).click();
    cy.get(data.navHome).should("have.text", texts.communs.home);
    cy.get(data.navAboutMe).should("have.text", texts.italian.abouteMe);
    cy.get(data.navResume).should("have.text", texts.italian.resume);
  });
});
