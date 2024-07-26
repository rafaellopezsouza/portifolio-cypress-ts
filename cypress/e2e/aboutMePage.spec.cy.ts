describe("About Me Page", () => {
  const element = {
    navAboutMe: '[href="/about"]',
    title: ".presentation-title",
    subtitle: ".home-subtitle",
    paragraph: ".presentation-paragraph",
    photo: ".image-photo",
    changeLanguage: ".dropdown-toggle",
    selectEnglish: ".dropdown-menu > :nth-child(2) > span",
    selectItalian: ":nth-child(3) > span",
  };

  const texts = {
    portuguese: {
      title: "Sobre mim",
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
    cy.get(element.navAboutMe).click();
  });

  it("Validate texts and classes in Portuguese", () => {
    cy.get(element.title).should("have.text", texts.portuguese.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.photo).should("have.prop", "src");
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
