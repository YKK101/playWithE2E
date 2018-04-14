describe('Test Example Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should found button', async () => {
    await expect(element(by.id('button'))).toBeVisible()
  })
})