import { openPage, closePage, showError } from '../browser/Browser';

const showPlayerAuthView = () => {
    openPage('auth');
};

const hidePlayerAuthView = () => {
    closePage('auth');
};

const showPlayerAuthServerError = (error: string) => {
    showError(error);
};

const submitRegisterForm = (username: string, password: string, email?: string) => {
    mp.events.callRemote('submitRegisterForm', username, password, email);
};

mp.events.add('showPlayerAuthView', showPlayerAuthView);
mp.events.add('hidePlayerAuthView', hidePlayerAuthView);
mp.events.add('showPlayerAuthServerError', showPlayerAuthServerError);
mp.events.add('submitRegisterForm', submitRegisterForm);
