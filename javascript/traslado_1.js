var rotate_pls = 0,
    actual_video = 1;

var JuegoTraslado1 = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function JuegoTraslado1() {
    Phaser.Scene.call(this, { key: 'JuegoTraslado1', active: true });
  },
  preload: function(){
    this.load.image('view_master_device', '../img/view_master_device_1.png');
    this.load.image('view_master_card', '../img/view_master_card.png');
    this.load.spritesheet('view_master', '../img/view_master_device_animation.png', { frameWidth: 128, frameHeight: 128 });

    // load videos
    this.load.video('video2', '../videos/video2.mp4', 'loadeddata', false, true);
    this.load.video('video3', '../videos/video3.mp4', 'loadeddata', false, true);
    this.load.video('video4', '../videos/video4.mp4', 'loadeddata', false, true);
    this.load.video('video5', '../videos/video5.mp4', 'loadeddata', false, true);
    this.load.video('video6', '../videos/video6.mp4', 'loadeddata', false, true);
    this.load.video('video7', '../videos/video7.mp4', 'loadeddata', false, true);
    this.load.video('video8', '../videos/video8.mp4', 'loadeddata', false, true);
    this.load.video('video9', '../videos/video9.mp4', 'loadeddata', false, true);
    this.load.video('video10', '../videos/video10.mp4', 'loadeddata', false, true);
    this.load.video('video11', '../videos/video11.mp4', 'loadeddata', false, true);
    this.load.video('video12', '../videos/video12.mp4', 'loadeddata', false, true);
    this.load.video('video13', '../videos/video13.mp4', 'loadeddata', false, true);
    this.load.video('video14', '../videos/video14.mp4', 'loadeddata', false, true);
    this.load.video('video15', '../videos/video15.mp4', 'loadeddata', false, true);
    this.load.video('video16', '../videos/video16.mp4', 'loadeddata', false, true);
    this.load.video('video17', '../videos/video17.mp4', 'loadeddata', false, true);
  },
  create: function(){
    master_card = this.add.image(size_w/2, 305, 'view_master_card');
    master_card.setScale(4.8, 4.8);
    master_card.setOrigin(0.5, 0.5);

    view_master_device = this.add.image(0, 0, 'view_master_device');
    view_master_device.setOrigin(0,0);
    view_master_device.setScale(size_w/128, size_h/128);

    // Animation set
    this.anims.create({
      key: 'roll-tape',
      frames: this.anims.generateFrameNumbers('view_master', { frames: [ 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0 ] }),
      frameRate: 24,
      repeat: 0
    });

    view_master_device.setInteractive();
    view_master_device.on('pointerdown', function () {
      rotate_pls = 1;
      view_master_device.visible = false;
      cody = this.add.sprite(size_w/2, size_h/2);
      cody.setScale(size_w/128, size_h/128);
      cody.on(Phaser.Animations.Events.ANIMATION_COMPLETE, function (anim) {
        cody.destroy();
        view_master_device.visible = true;
        rotate_pls = 0;

        // initialize video
        if (actual_video+1 == 18) {
          actual_video = 1;
        }
        actual_video += 1;
        var vid = this.add.video(0, 0, 'video' + actual_video);
        vid.setOrigin(0, 0);
        vid.setScale(2, 2);
        vid.play();
        vid.on(Phaser.GameObjects.Events.VIDEO_COMPLETE, () => {
          vid.destroy();
        }, this);
      }, this);
      cody.play('roll-tape');
    }, this);

    // Debug line
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0x00ff00, 1);
    graphics.lineBetween(size_w/2, 0, size_w/2, size_h);
    graphics.lineBetween(0, size_h/2, size_w, size_h/2);
    graphics.lineBetween(0, (size_h/2) + 150, size_w, (size_h/2) + 150);
  },
  update: function() {
    if (rotate_pls == 1) {
      master_card.rotation += 0.05;
    }
  }
});

var config = {
    type: Phaser.AUTO,
    width: size_w,
    height: size_h,
    transparent: true,
    scale: {
      parent: 'gameDiv',
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: JuegoTraslado1
};

var game = new Phaser.Game(config);
