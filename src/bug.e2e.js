Feature('Bug');

Before(async (I) => {
    I.mockRequest('ANY', 'https://codecept.io/img/*', 200);
    I.amOnPage(`/`);
    I.refreshPage();
    I.waitForText('Supercharged');
});

Scenario('Images from githubassets.com does not load', async (I) => {
    pause();
});
