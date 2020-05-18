const showPlayerAuthView = () => {
    const browser = mp.browsers.new('package://cnr/cef/index.html#/auth');
    mp.gui.chat.push('test!');
};

mp.events.add('showPlayerAuthView', showPlayerAuthView);