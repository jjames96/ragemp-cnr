import { setPlayerCursorState } from "../control/PlayerCursor";

const BASE_URL = "package://cnr/cef/index.html#/";

let browser: BrowserMp = null

export const openPage = (page: string) => {
    browser && browser.destroy();
    browser = mp.browsers.new(`${BASE_URL}${page}`);
}

export const closePage = (page: string) => {
    browser && browser.url === `${BASE_URL}${page}` && browser.destroy();
    browser = null;
    setPlayerCursorState(false);
}
