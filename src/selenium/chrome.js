import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import path from "path";

export async function openChromeWithProfile() {
  const userProfile =
    "C:\\Users\\<your-user>\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1";

  const options = new chrome.Options();
  options.addArguments(`--user-data-dir=${path.dirname(userProfile)}`);
  options.addArguments(`--profile-directory=${path.basename(userProfile)}`);
  options.addArguments("--start-maximized");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  await driver.get("https://google.com");
  return driver;
}
