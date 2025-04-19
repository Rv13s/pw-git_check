import { chromium, test } from "@playwright/test";


test('Login Demo', async()=>{
    const browser = await chromium.launch({
        headless: false
    });
    const context =  await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

    //a[@data-toggle='dropdown']//span[contains(text(),'My account')] 
    // 1. write in own xpath because My Account text in 3 locations .
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
    //await page.click("Login");
    await page.click("'Login'");


    await page.fill("input[name='email']", 'koushik350@gmail.com')
    await page.fill("input[type='password']",'Pass123$')
    await page.click("input[value='Login']")

     await page.waitForTimeout(5000);

    //const page1 = await context.newPage(); //

    const newContext = await browser.newContext(); 
    const newpage = await newContext.newPage(); // clear cookies and cache
    await newpage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

    await newpage.waitForTimeout(5000);
})