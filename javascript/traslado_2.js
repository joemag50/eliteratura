// JCGE: este es como un click and find del poema

var titulo_juego = [
  String.raw`::::::::::: :::::::::      :::      ::::::::  `,
  String.raw`    :+:     :+:    :+:   :+: :+:   :+:    :+: `,
  String.raw`    +:+     +:+    +:+  +:+   +:+  +:+        `,
  String.raw`    +#+     +#++:++#:  +#++:++#++: +#++:++#++ `,
  String.raw`    +#+     +#+    +#+ +#+     +#+        +#+ `,
  String.raw`    #+#     #+#    #+# #+#     #+# #+#    #+# `,
  String.raw`    ###     ###    ### ###     ###  ########  `,
  String.raw`:::            :::     :::::::::   ::::::::   `,
  String.raw`:+:          :+: :+:   :+:    :+: :+:    :+:  `,
  String.raw`+:+         +:+   +:+  +:+    +:+ +:+    +:+  `,
  String.raw`+#+        +#++:++#++: +#+    +:+ +#+    +:+  `,
  String.raw`+#+        +#+     +#+ +#+    +#+ +#+    +#+  `,
  String.raw`#+#        #+#     #+# #+#    #+# #+#    #+#  `,
  String.raw`########## ###     ### #########   ########   `,
  String.raw`  :::   ::::::::   ::::::::  :::    :::       `,
  String.raw`:+:+:  :+:    :+: :+:    :+: :+:    :+:       `,
  String.raw`  +:+  +:+    +:+ +:+    +:+  +:+  +:+        `,
  String.raw`  +#+   +#++:++#+  +#++:++#+   +#++:+         `,
  String.raw`  +#+         +#+        +#+  +#+  +#+        `,
  String.raw`  #+#  #+#    #+# #+#    #+# #+#    #+#       `,
  String.raw`####### ########   ########  ###    ###       `
]

var JuegoTraslado3 = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function MenuTraslado3() {
    Phaser.Scene.call(this, { key: 'JuegoTraslado3', active: true });
  },
  preload: function(){
    this.load.scenePlugin('rexuiplugin', '../javascript/rexuiplugin.min.js', 'rexUI', 'rexUI');
    this.load.image('background', '../img/fondo_tv-blanco.png');
  },
  create: function(){
    this.cameras.main.setBackgroundColor(background_color);
    this.add.text(180, 90, 'Encuentra con el mouse mi poema con un click', font_vars);
    var salir = this.add.text(size_w-200, 90, 'X', font_vars);
    salir.setInteractive();
    salir.once('pointerdown', function () {
      salir.setStyle(font_vars_selected);
      this.scene.remove('MenuTraslado3');
      this.scene.add('MenuTraslado3', MenuTraslado3, true);
    }, this);

    var scrollablePanel = this.rexUI.add.scrollablePanel({
        x: 0,
        y: 0,
        anchor: {
            centerX: 'center',
            centerY: 'center'
        },
        width: size_w-240,
        height: size_h-220,
        scrollMode: 0,
        background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_PRIMARY),
        panel: {
          child: this.rexUI.add.fixWidthSizer({
              space: {
                  left: 3,
                  right: 3,
                  top: 3,
                  bottom: 3,
                  item: 8,
                  line: 8,
              }
          }),
          mask: {
              padding: 1
          },
        },
        slider: {
            track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
            thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT),
        },
        space: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
          panel: 10,
        }
    }).layout()
    
    updatePanel(scrollablePanel, poema1);

    background = this.add.image(0, 0, 'background');
    background.setOrigin(0,0);
    background.setScale(size_w/128, size_h/128);
  }
});

var MenuTraslado3 = new Phaser.Class({
  Extends: Phaser.Scene,
  key: 'MenuTraslado3',
  initialize: function MenuTraslado3(config) {
    Phaser.Scene.call(this, { key: 'MenuTraslado3', active: true });
  },
  preload: function(){
    this.load.image('background', '../img/fondo_tv-blanco.png');
  },
  create: function(){
    this.cameras.main.setBackgroundColor(background_color);

    posX = 100
    for (var i = 0; i < titulo_juego.length; i++) {
      posX += 25;
      this.add.text(140, posX, titulo_juego[i], font_vars);
    }

    // texto = this.add.text((size_w/2) - 100, (size_h/2) + 170, 'Segundo juego tal vez?', font_vars);

    background = this.add.image(0, 0, 'background');
    background.setOrigin(0,0);
    background.setScale(size_w/128, size_h/128);

    // Un boton que al darle click, cree la siguiente escena... de juego 1
    text_juego1 = this.add.text(size_w - 400, (size_h/2) + 100, 'Encuentra mi poema', font_vars);
    text_juego1.setInteractive();
    text_juego1.once('pointerdown', function () {
      text_juego1.setStyle(font_vars_selected);

      this.scene.remove('JuegoTraslado3');
      this.scene.add('JuegoTraslado3', JuegoTraslado3, true);
    }, this);

    // Debug line
    // var graphics = this.add.graphics();
    // graphics.lineStyle(2, 0x00ff00, 1);
    // graphics.lineBetween(size_w/2, 0, size_w/2, size_h);
    // graphics.lineBetween(0, size_h/2, size_w, size_h/2);
    // graphics.lineBetween(0, (size_h/2) + 150, size_w, (size_h/2) + 150);
  }
});

var updatePanel = function (panel, content) {
    var sizer = panel.getElement('panel');
    var scene = panel.scene;

    sizer.clear(true);
    var lines = content
    for (var li = 0, lcnt = lines.length; li < lcnt; li++) {
      var words = lines[li].split(' ');
      for (var wi = 0, wcnt = words.length; wi < wcnt; wi++) {
        sizer.add(
          scene.add.text(0, 0, words[wi], font_vars_hidden)
            .setInteractive()
            .on('pointerdown', function () {
                this.setStyle(font_vars);
            })
        );
      }
      if (li < (lcnt - 1)) {
        sizer.addNewLine();
      }
    }

    panel.layout();
    return panel;
}

var config = {
    type: Phaser.AUTO,
    width: size_w,
    height: size_h,
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
    scene: MenuTraslado3
};

var game = new Phaser.Game(config);
