import { togglePlayerCursor } from "./PlayerCursor";

const keys = {
    F2: 0x71
};

function handleKeyPressed(keyCode: number) {
    switch(keyCode) {
        case keys.F2:
            togglePlayerCursor();
            break;
    }
}

mp.keys.bind(keys.F2, true, () => {
    handleKeyPressed(keys.F2);
});
