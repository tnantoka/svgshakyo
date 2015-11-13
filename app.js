var app = new Vue({
  el: '#app',
  data: {
    width: 320,
    height: 240,
    source: '',
    endTag: '</svg>',
    showSvg: true,
    showImage: true,
    image: ''
  },
  ready: function() {
    autosize($('.js-textarea'));
  },
  computed: {
    startTag: function () {
      return '<svg width="' + this.width + '" height="' + this.height + '">';
    }
  },
  methods: {
    preview: function() {
      return this.startTag + this.source + this.endTag; 
    },
    onToggleView: function(showSvg, showImage) {
      this.showSvg = showSvg;
      this.showImage = showImage;
      if (showSvg && showImage) {
        $(this.$el).addClass('shakyo');
      } else {
        $(this.$el).removeClass('shakyo');
      }
    },
    onChangeFile: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      var file = files[0];

      var reader = new FileReader();
      reader.readAsDataURL(file);

      var self = this;
      reader.onload = function(e) {
        self.image = e.target.result;
      };
    },
    onLoadImage: function(e) {
      this.width = e.target.width;
      this.height = e.target.height;
    }
  }
});

