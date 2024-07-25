describe("Home Page", () => {
  const element = {
    title: ".presentation-title",
    subtitle: ".home-subtitle",
    paragraph: ".presentation-paragraph",
    buttons: ".home-button",
    photo: ".image-photo",
    changeLanguage: ".dropdown-toggle",
    selectEnglish: ".dropdown-menu > :nth-child(2) > span",
    selectItalian: ":nth-child(3) > span",
  };

  const texts = {
    portuguese: {
      title: "Bem-vindo ao meu site! Sou Analista de Teste Automatizado.",
      subtitle: "Acesse minhas redes",
    },
    english: {
      title: "Welcome to my website! I am an Automated Test Analyst.",
      subtitle: "Access my networks",
    },
    italian: {
      title: "Benvenuto nel mio sito! Sono un Analista di Test Automatizzati.",
      subtitle: "Accedi alle mie reti",
    },
  };

  beforeEach("Access page", () => {
    cy.visit("/");
  });

  it("Validate texts and classes in Portuguese", () => {
    cy.get(element.title).should("have.text", texts.portuguese.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.subtitle)
      .should("have.prop", "tagName", "H2")
      .and("have.text", texts.portuguese.subtitle);
    cy.get(element.buttons)
      .first()
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/rafael-souza-300449124"
      )
      .and("contain", "Linkedin");
    cy.get(element.buttons)
      .eq(1)
      .should("have.attr", "href", "https://github.com/rafaellopezsouza")
      .and("contain", "Github");
    cy.get(element.photo).should("have.prop", "src");
  });

  it("Validate texts and classes in English", () => {
    cy.get(element.changeLanguage).click();
    cy.get(element.selectEnglish).click();
    cy.get(element.title).should("have.text", texts.english.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.subtitle)
      .should("have.prop", "tagName", "H2")
      .and("have.text", texts.english.subtitle);
    cy.get(element.buttons)
      .first()
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/rafael-souza-300449124"
      )
      .and("contain", "Linkedin");
    cy.get(element.buttons)
      .eq(1)
      .should("have.attr", "href", "https://github.com/rafaellopezsouza")
      .and("contain", "Github");
    cy.get(element.photo).should("have.prop", "src");
  });

  it("Validate texts and classes in Italian", () => {
    cy.get(element.changeLanguage).click();
    cy.get(element.selectItalian).click();
    cy.get(element.title).should("have.text", texts.italian.title);
    cy.get(element.paragraph).should("have.prop", "tagName", "P");
    cy.get(element.subtitle)
      .should("have.prop", "tagName", "H2")
      .and("have.text", texts.italian.subtitle);
    cy.get(element.buttons)
      .first()
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/rafael-souza-300449124"
      )
      .and("contain", "Linkedin");
    cy.get(element.buttons)
      .eq(1)
      .should("have.attr", "href", "https://github.com/rafaellopezsouza")
      .and("contain", "Github");
    cy.get(element.photo).should("have.prop", "src");
  });
});
