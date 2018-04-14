describe('Test Example Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should found button', async () => {
    await expect(element(by.id('button'))).toBeVisible()
  })

  it('Should found map element on tap button', async () => {
    await element(by.id('button')).tap()
    await expect(element(by.id('map'))).toBeVisible()
  })
})