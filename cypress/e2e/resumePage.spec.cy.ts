describe("About Me Page", () => {
  const element = {
    navResume: '[href="/resume"]',
    name: ".name",
    subtitle: ".resume-subtitle",
    contatcs: ".contacts li",
    dowloadButton: ".download-button",

    photo: ".image-photo",
    changeLanguage: ".dropdown-toggle",
    selectEnglish: ".dropdown-menu > :nth-child(2) > span",
    selectItalian: ":nth-child(3) > span",
  };

  const texts = {
    commons: {
      name: "Rafael Lopes de Souza",
      email: "rls.rafaelsouza@gmail.com",
      linkLinkedin: "https://www.linkedin.com/in/rafael-souza-300449124",
      linkGithub: "https://github.com/rafaellopezsouza",
    },
    portuguese: {
      profession: "Analista de Teste Automatizado Sênior",
      title: "Sobre mim",
      downloadButton: "Download em PDF",
    },
    english: {
      title: "About Me",
    },
    italian: {
      title: "Chi sono",
    },
  };

  beforeEach("Access page", () => {
    cy.visit("/");
    cy.get(element.navResume).click();
  });

  it.only("Validate texts and classes in Portuguese", () => {
    cy.get(element.name).should("have.text", texts.commons.name);
    cy.get(element.subtitle).should("have.text", texts.portuguese.profession);
    cy.get(element.contatcs).first().should("have.text", texts.commons.email);
    cy.get(element.contatcs)
      .eq(1)
      .should("have.text", texts.commons.linkLinkedin);
    cy.get(element.contatcs)
      .eq(2)
      .should("have.text", texts.commons.linkGithub);
    cy.get(element.dowloadButton).should(
      "have.text",
      texts.portuguese.downloadButton
    );
  });

  it("Validate texts and classes in English", () => {
    cy.get(element.changeLanguage).click();
    cy.get(element.selectEnglish).click();
    cy.get(element.title).should("have.text", texts.english.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.photo).should("have.prop", "src");
  });

  it("Validate texts and classes in Italian", () => {
    cy.get(element.changeLanguage).click();
    cy.get(element.selectItalian).click();
    cy.get(element.title).should("have.text", texts.italian.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.photo).should("have.prop", "src");
  });
});
