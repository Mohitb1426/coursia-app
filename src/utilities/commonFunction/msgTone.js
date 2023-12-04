import Sound from 'react-native-sound';

export const playMsgTone = (msgToneLink) => {
  const sound = new Sound(msgToneLink, '', (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(`Failed to load sound: ${error.message}`);
      return;
    }
    sound.play(() => {
      sound.release();
    });
  });
};
