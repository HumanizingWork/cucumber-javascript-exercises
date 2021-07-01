const { Given, When, Then } = require("@cucumber/cucumber");
const PatronAccount = require('../../domains/library/patron-account');
const expect = require('expect');

Given('a new patron, John, has joined the library', function () {
    this.currentPatron = new PatronAccount("John");
});

Given('John has been fined ${float} for a late return', function (amount) {
    this.currentPatron.chargeAccount(amount);
});

Given('John has been charged ${float} for a lost book', function (amount) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('John checks his account balance', function () {
    this.actualBalance = this.currentPatron.balance;
});

Then('the balance should be ${float}', function (expectedBalance) {
    expect(this.actualBalance).toEqual(expectedBalance);
});
