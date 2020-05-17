import * as _ from 'lodash';
import { addCommand, Command } from "./CommandHandler";

addCommand(new Command('spawnCar', (player, ...args) => {
    const vehicleId = _.get(args, 0, "Adder");
    const vehicleHash = mp.joaat(vehicleId);

    const vehicle = mp.vehicles.new(vehicleHash, player.position, {
        heading: player.heading
    });

    player.putIntoVehicle(vehicle, 0);
}));
