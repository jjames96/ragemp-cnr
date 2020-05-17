export class Command {
    constructor(
        private commandName: string,
        private callback: (player: PlayerMp, ...args: string[]) => void
    ) { }

    public getCommandName(): string {
        return this.commandName;
    }

    public invoke(player: PlayerMp, ...args: string[]): void {
        this.callback(player, ...args);
    }
}

const commands: Command[] = [];

export function addCommand(command: Command): void {
    commands.push(command);
}

mp.events.add('playerCommand', (player: PlayerMp, command: string) => {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];

    const cmd = commands.find(
        (command: Command) => command.getCommandName().toLocaleLowerCase() === commandName.toLocaleLowerCase()
    );
    
    if (cmd) {
        cmd.invoke(player, ...args);
    } else {
        player.outputChatBox(`Command '/${commandName} not found!`);
    }
});