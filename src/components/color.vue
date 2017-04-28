<template>
  <div id="color" class="color" :style={backgroundColor:color}>
    <h1>{{color}}</h1>
    <div id="toast" :class="{open:open}">Copied!</div>
    <svg viewBox="0 0 250 250" id="githubLink" class="cornerSVG">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" id="githubLink"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" id="githubLink"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'color',
  data () {
    return {
      color: this.colorGen(),
      open: false
    }
  },
  methods: {
    colorGen () {
      return '#' + Math.random().toString(16).slice(2, 8)
    },
    copy (text) {
      var doc = document
      var el = doc.createElement('input')
      el.value = text
      doc.body.appendChild(el)
      el.select()
      doc.execCommand('copy')
      el.remove()
    },
    close () {
      var _this = this
      setTimeout(function () {
        _this.open = false
      }, 1000)
    }
  },
  created: function () {
    var self = this
    var doc = document
    doc.onclick = function (e) {
      if (e.target.tagName === 'H1') {
        self.copy(e.target.innerText)
        self.open = true
        self.close()
      }
      self.color = self.colorGen()
    }
  }
}
</script>

<style>
.color{width: 100%;height: 100%;}
body{
  font-size: 1.5em;
  line-height: 1.6;
  font-weight: 400;
  font-family: "Quicksand", "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .cornerSVG{
    cursor: pointer;
    width: 80px;
    height: 80px;
    fill: rgba(0, 0, 0, .4);
    color: #fff;
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 999;
  }
h1{
  font-size: 5.0rem;
  font-family: "Quicksand";
  font-weight: 300;
  margin: 0 0 2.0rem 0;
  user-select:none;
  cursor: pointer;
  position: fixed;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#toast {
    position: fixed;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(33, 33, 33, 0.12), 0 1px 2px rgba(33, 33, 33, 0.24);
    transition: -webkit-transform .3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s,
    -webkit-transform .3s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    will-change: transform;
    border-radius: 2px;
    padding: 0.75em 1.5em;
    font-weight: 700;
    top: -4em;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 1;
}
#toast.open {
    -webkit-transform: translate(-50%, 4.375em);
    transform: translate(-50%, 4.375em)
}
</style>
