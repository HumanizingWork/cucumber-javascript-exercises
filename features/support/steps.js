const {Given, When, Then} = require("@cucumber/cucumber");
const expect = require('expect');

import AdvancedSearchPage from '../../pages/AdvancedSearch.page';
import ResultsPage from '../../pages/Results.page';

When('I do an advanced search with Title {string}', function (query) {
    AdvancedSearchPage.open();
    AdvancedSearchPage.titleField.setValue(query);
    AdvancedSearchPage.searchButton.click();
});

Then('the only result should be:', function (table) {
    expect(ResultsPage.numberOfResults).toEqual(1);

    const firstResult = ResultsPage.firstResult;
    expect(firstResult['Title']).toEqual(table.rowsHash()['Title']);
    expect(firstResult['Author']).toEqual(table.rowsHash()['Author']);
});
