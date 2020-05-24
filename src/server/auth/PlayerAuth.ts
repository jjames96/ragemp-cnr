import { executeQuery } from "../data/Sql";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

const showPlayerAuthView = (player: PlayerMp) => {
    player.call('showPlayerAuthView');
};

const submitRegisterForm = (player: PlayerMp, username: string, password: string, email?: string) => {
    const id = uuid();
    const emailOrNull = email === '' ? null : email;
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
