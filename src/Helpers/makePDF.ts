import puppeteer from "puppeteer";

export const makePDF = async (templateString: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(templateString, {
    waitUntil: "networkidle2",
  });
  const pdf = await page.pdf({ format: "a4", printBackground: true });
  await browser.close();

  return pdf;
};

// To Save PDF on Server for some reason idk why i made this...
// export const savePDF = async (templateString: string) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(templateString, {
//     waitUntil: "networkidle2",
//   });
//   await page.pdf({ path: "../file.pdf", format: "a4", printBackground: true });
//   await browser.close();
// };
