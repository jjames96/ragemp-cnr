import { setPlayerCursorState } from "../control/PlayerCursor";

const BASE_URL = "package://cnr/cef/index.html#/";

let browser: BrowserMp | undefined = undefined;

export const openPage = (page: string) => {
    browser && browser.destroy();
    browser = mp.browsers.new(`${BASE_URL}${page}`);
    setPlayerCursorState(true);
}

export const closePage = (page: string) => {
    browser && browser.url === `${BASE_URL}${page}` && browser.destroy();
    browser = undefined;
    setPlayerCursorState(false);
}

export const showError = (error: string) => {
    browser && browser.execute(`vm.$root.showError("${error}")`);
}
