import { executeQuery } from "../data/Sql";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { isRegisterUsernameValid, isRegisterEmailValid, isRegisterPasswordValid } from "./PlayerCredentialsValidation";

const showPlayerAuthView = (player: PlayerMp) => {
    player.call('showPlayerAuthView');
};

const submitRegisterForm = (player: PlayerMp, username: string, password: string, email?: string) => {
    const emailOrNull = email === '' ? null : email;

    if (!isRegisterUsernameValid(username)) {
        player.call('showPlayerAuthServerError', ['Username is invalid']);
        return;
    }

    if (!isRegisterEmailValid(emailOrNull)) {
        player.call('showPlayerAuthServerError', ['Email is invalid']);
        return;
    }

    if (!isRegisterPasswordValid(password)) {
        player.call('showPlayerAuthServerError', ['Password is invalid']);
        return;
    }

    const id = uuid();
    const hashedPassword = bcrypt.hashSync(password, 10);

    console.log(`About to execute query with params ${username}, ${emailOrNull}, ${hashedPassword}`)

    executeQuery(
        'INSERT INTO users (id, username, email, password) VALUES (?)',
        [
            id,
            username,
            emailOrNull,
            hashedPassword
        ],
        () => onUserCreated(player)
    );
};

const onUserCreated = (player: PlayerMp) => {
    player.call('hidePlayerAuthView');
};

mp.events.add('playerJoin', showPlayerAuthView);
mp.events.add('submitRegisterForm', submitRegisterForm);
