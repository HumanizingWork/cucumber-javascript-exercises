const { Before, Given, When, Then } = require("@cucumber/cucumber");
const expect = require('expect');
const FineCalculator = require('../../domains/library/fine-calculator');

Before(function () {
    this.calculatedFine = -1;
});

Given('the standard fine per day is ${float}', function (finePerDay) {
    this.fineCalculator = new FineCalculator(finePerDay);
});

When('the patron returns a book on time', function() {
    this.calculatedFine = this.fineCalculator.calculateFine(0);
});

When('the patron returns a book {int} days late', function (daysLate) {
    this.calculatedFine = this.fineCalculator.calculateFine(daysLate);
});

Then('the there should be no fine', function() {
    const expectedFine = 0;
    expect(this.calculatedFine).toEqual(expectedFine);
});

Then('there should be a ${float} fine', function (expectedFine) {
    expect(this.calculatedFine).toEqual(expectedFine);
});
