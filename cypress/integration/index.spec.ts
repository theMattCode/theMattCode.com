import { name, role, location } from './../../content/metadata';

describe('Index', () => {
  it('displays crucial information', () => {
    cy.visit('').get('main').contains(name);
  });
});
