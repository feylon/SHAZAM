<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js"></script>
<script>
    var sound = new Howl({
      src: ['https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'],
      volume: 0.5,
      onend: function () {
        alert('Finished!');
      }
    });
    sound.play()
</script>