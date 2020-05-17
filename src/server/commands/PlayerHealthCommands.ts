import { addCommand, Command } from "./CommandHandler";

addCommand(new Command('hp', (player, ...args) => {
    player.health = 100;
}));

addCommand(new Command('armour', (player, ...args) => {
    player.armour = 100;
}));

addCommand(new Command('kill', (player, ...args) => {
    player.health = 0;
}));
