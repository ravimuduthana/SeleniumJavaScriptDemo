const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const assert = require ('assert');
async function example() 
{
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try 
  {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    
    //assert
    let todotext= await driver.findElement(By.name('q')).getText().then(function(value)
    {
      return value
    });
    assert.strictEqual(todotext,'webdriver');
  } finally {
    await driver.quit();
  }
}
example();