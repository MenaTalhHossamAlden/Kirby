import { appWindow } from '@tauri-apps/api/window';
import kaplay from 'kaplay';
import { makeBackground } from './utils';
import { SCALE_FACTOR } from './constants';

const k = kaplay({
  width: 1280,
  height: 720,
  letterbox: true,
  global: false,
  scale: 2,
});

k.loadSprite('kirby', './kirby.png');
k.loadSprite('obstacles', './obstacles.png');
k.loadSprite('background', './background.png');
k.loadSprite('clouds', './clouds.png');

k.loadSound('jump', './jump.wav');
k.loadSound('hurt', './hurt.wav');
k.loadSound('confirm', './confirm.wav');

// appwindow is ab object from Tauri JS API that allows you
// to access the main window and interact/manipulates it
addEventListener('keydown', async (key) => {
  if (key.code === 'F11') {
    if (await appWindow.isFullscreen()) {
      await appWindow.setFullscreen(false);
      return;
    }
    appWindow.setFullscreen(true);
  }
});

k.scene('start', async () => {
  makeBackground(k);
  const map = k.add([
    k.sprite('background'),
    k.pos(0, 0),
    k.scale(SCALE_FACTOR),
  ]);
});

k.scene('main', async () => {});

k.go('start');
