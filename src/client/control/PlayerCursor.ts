export const togglePlayerCursor = () => {
    const shouldShowCursor = !mp.gui.cursor.visible;
    setPlayerCursorState(shouldShowCursor);
}

export const setPlayerCursorState = (isShown: boolean) => {
    mp.gui.cursor.show(isShown, isShown);
}
