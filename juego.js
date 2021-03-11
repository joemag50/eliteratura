// JCGE: 2021-02-27
// Juego para e-literatura
const COLOR_PRIMARY = 0x0e0d0d;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var size_w = 1000,
    size_h = 750,
    background_color = '#0e0d0d',
    left_margin = 120,
    top_margin = 95,
    line_space = 0;

var font_vars = {
    fontFamily: 'space_mono',
    fill: '#1ecd36'
}

var font_vars_selected = {
    fontFamily: 'space_mono',
    fill: '#FFFFFF'
}

var font_vars_hidden = {
  fontFamily: 'space_mono',
  fill: '#0e0d0d'
}

var poema1 = [
  "Te pienso como una nube dentro",
  "esponjada en tu cabello en mi boca",
  "contigo todo interior cosa de carne",
  "una isla mi pecho tu paisaje",
  "una guía de mi barrio tus piernas",
  "escrita en la cintura y la frente la manera de tu voz y los planetas",
  "los descubre alrededor del sol",
  "como un pedazo de coágulo",
  "en las encías de una boca abierta",
  "de tu boca que y sin embargo se mueve",
  "se gira hacia la izquierda",
  "mi voz poco visitada",
  "mis canciones de niño lindo",
  "que no mato",
  "que no mató más que animales más que hormigas",
  "solo nos dio azoteas",
  "donde mirábamos las calles",
  "las ventanas encendidas",
  "era bueno tener una luz",
  "qué fue de la lluvia",
  "de tus labios en mi cejas",
  "de tener los pies pequeños bañados en alcohol",
  "envueltos como el calor entre las manos",
  "eso sabías de las flores entre el concreto que florecen",
  "las arrancamos",
  "y veíamos desde el puente",
  "iremos que te extraño a cortarlas",
  "caminando en fila india por el tren",
  "te diré que no volverán a perseguirte",
  "pegados tus dedos a los míos",
  "era yo un chiquillo",
  "y no iba a la escuela porque no aguantaba",
  "despierto porque las flores no se abren",
  "son seis horas porque el paisaje se oye",
  "nomás por verte",
  "iremos a la frontera se garapiña",
  "como en la lengua un dulce de leche",
  "sobre mi infancia de glaciar mesopotámico",
  "como piratas dueños de la isla iremos",
  "a cada cajero cada llave buscando esa casa",
  "por el tesoro aquel",
  "vamos por un cuerpo",
  "era el mío en la banqueta con la sangre",
  "era mi cuerpo sobre la tinta",
  "sobre el cañón pelado",
  "¿no me reconoces?",
  "ahora felices de miseria",
  "éramos una hendidura",
  "por donde soplaba todo",
  "era rojo como pitaya",
  "era esa cavidad",
  "se me abría en la piel",
  "se me abría en la frente",
  "un agujero ancho por donde todo entraba",
  "por donde todo se nos hundió",
  "hacia afuera",

  "Qué hermosa es la desviación de los instintos",
  "sostenerme el corazón así por fuera",
  "a un costado",
  "de su ritmo es mi sombra la pared",
  "aquel gesto de mi mano",
  "consumido por el fuego",
  "del fuego por sí mismo consumido",
  "lo que quiero es la luz del movimiento",
  "aquí en la piel que arranca sangre a socavones",
  "de angustiosa encarnación",
  "el ser aglutinado y desteñido",
  "en la abisal distancia de pronombres",
  "mi cara otra vez nomas que atravesada",
  "por esta estéril procreación",
  "enterrada y tupida entre la sal",
  "mi renuncia llamarada en el ritmo de lo humano",
  "mirruñita entre las manos",
  "es tu gesto de un paso",
  "es el hombre es quien pisa",
  "es el testigo entre la fiebre",
  "el primero de los cambios sucede en el registro de la venas",
  "se me alargan",
  "es la que se me abre entre la carne",
  "y duele",

  "En el mundo todo tiene su ritmo",
  "las palabras se estrellan en sí mismas",
  "cada una se deshace en su forma",
  "conteniendo materialmente los sentidos",
  "los vagones, el corazón, sus afectos",
  "todo encuentra su cabida",
  "no hay ciudad en el planeta",
  "que pare de sonar",
  "el latido simplemente es una cosa de acentos",
  "de respiración",
  "en Estambul cincuenta mil perros fueron capturados",
  "y abandonados en una isla",
  "se comieron unos a otros",
  "los aullidos se escucharon por semanas",
  "y nadie volvió por ellos",
  "volteo mi gato ronronea",
  "ha venido a buscarme:",
  "Camelia, gracias por seguir buscándome."
]

var titulo_juego3 = [
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
  String.raw`   ::::::::   :::::::   :::::::   :::::::     `,
  String.raw`  :+:    :+: :+:   :+: :+:   :+: :+:   :+:    `,
  String.raw`        +:+  +:+  :+:+ +:+  :+:+ +:+  :+:+    `,
  String.raw`      +#+    +#+ + +:+ +#+ + +:+ +#+ + +:+    `,
  String.raw`    +#+      +#+#  +#+ +#+#  +#+ +#+#  +#+    `,
  String.raw`   #+#       #+#   #+# #+#   #+# #+#   #+#    `,
  String.raw`  ##########  #######   #######   #######     `,
]

var Juego1 = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function Menu() {
    Phaser.Scene.call(this, { key: 'Juego1', active: true });
  },
  preload: function(){
    this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
    this.load.image('background', 'img/fondo_tv-blanco.png');
  },
  create: function(){
    this.cameras.main.setBackgroundColor(background_color);
    this.add.text(180, 90, 'Encuentra con el mouse mi poema', font_vars);
    var salir = this.add.text(size_w-200, 90, 'X', font_vars);
    salir.setInteractive();
    salir.once('pointerdown', function () {
      salir.setStyle(font_vars_selected);
      this.scene.remove('Menu');
      this.scene.add('Menu', Menu, true);
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

var Menu = new Phaser.Class({
  Extends: Phaser.Scene,
  key: 'Menu',
  initialize: function Menu(config) {
    Phaser.Scene.call(this, { key: 'Menu', active: true });
  },
  preload: function(){
    this.load.image('background', 'img/fondo_tv-blanco.png');
  },
  create: function(){
    this.cameras.main.setBackgroundColor(background_color);

    posX = 100
    for (var i = 0; i < titulo_juego3.length; i++) {
      posX += 25;
      this.add.text(140, posX, titulo_juego3[i], font_vars);
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

      this.scene.remove('Juego1');
      this.scene.add('Juego1', Juego1, true);
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
    scene: Menu
};

var game = new Phaser.Game(config);
