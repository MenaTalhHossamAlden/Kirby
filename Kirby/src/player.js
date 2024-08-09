import { SCALE_FACTOR } from './constants';

export function makePlayer(k) {
  return k.make([
    k.sprite('kirby'),
    k.pos(),
    //define a hitbox
    k.area({ shape: new k.Rect(k.vec2(0, 1.5), 8, 5) }),
    k.anchor('center'),
    k.scale(SCALE_FACTOR),
    // body object makes game object susceptible to gravity and
    // allows it to have jump method which implements jumping automatically
    k.body({ jumpForce: 600 }),
    {
      isDead: false,
      speed: 600,
      inputControllers: [],
      setControls() {
        const jumpLogic = () => {
          k.play('jump');
          this.jump();
        };
        this.inputControllers.push(k.onKeyPress('space', jumpLogic));
        this.inputControllers.push(k.onClick(jumpLogic));
        this.inputControllers.push(k.onGamepadButtonPress('south', jumpLogic));
      },
      disableControls() {
        this.inputControllers.forEach((controller) => controller.cancel());
      },
    },
  ]);
}
