describe('Profile creation', () => {

  it('Should be able to type the name into the name box', async () => {
    await expect(element(by.id('nameInput'))).toBeVisible();
    await element(by.id('nameInput')).typeText('TestUser');
  });

  it('Should be able to continue to next step', async () => {
    await element(by.id('initialContinue')).tap()
  });

  it('Cuisines list should be visible', async () => {
    await expect(element(by.id('cuisinesList'))).toBeVisible();
  });

  it('Should be able to select food cuisines', async () => {
    await element(by.id('item_4')).tap()
    await element(by.id('item_0')).tap()
    await element(by.id('item_1')).tap()

    await element(by.id('initialContinue1')).tap()
  });

  it('Should be able to select food allergies', async () => {
    await element(by.id('allergies_2')).tap()
    await element(by.id('allergies_0')).tap()
    await element(by.id('allergies_1')).tap()
    await element(by.id('initialContinue2')).tap()
  });

});
