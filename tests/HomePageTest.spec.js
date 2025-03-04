import { test, expect } from '@playwright/test';

test('Home Page',async ({page})=>{

    await page.goto('https://www.ackodrive.com/');
    const currlinks=await page.$$("//a")
    for(const currlink of currlinks){
        const text=currlink.innerHTML;
        console.log(text);
    }
    await page.ge
    
} );