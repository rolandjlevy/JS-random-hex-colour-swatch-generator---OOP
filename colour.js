function Colour(max) {
  this.rand = (n) => Math.floor(Math.random() * Math.floor(n));
  this.r = this.rand(max);
  this.g = this.rand(max);
  this.b = this.rand(max);
  this.dec2hex = (s) => parseInt(s, 10).toString(16).padStart(2, '0').toUpperCase();
  this.hex2dec = (s) => parseInt(s, 16).toString(10);
  this.getHsl = function() {
    let r = this.r / 255;
    let g = this.g / 255;
    let b = this.b / 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) {
      h = 0;
    } else if (cmax == r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax == g) {
      h = ((b - r) / delta) + 2;
    } else {
      h = ((r - g) / delta) + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  }
  this.hex = `${this.dec2hex(this.r)}${this.dec2hex(this.g)}${this.dec2hex(this.b)}`
  this.rgb = `rgb(${this.r}, ${this.g}, ${this.b})`;
  this.hsl = this.getHsl();
}