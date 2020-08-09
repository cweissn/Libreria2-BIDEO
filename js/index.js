  (function () {

    var bv = new Bideo();
    bv.init({
      // elemento
      videoEl: document.querySelector('#background_video'),
  
      src: [
        {
          src: 'night.mp4',
          type: 'video/mp4'
        },
      ],

    });
  }());
  