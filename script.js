var x = document.getElementById('image');
var y = document.getElementById('foto-kiri');
var z = document.getElementById('foto-kanan');
var source = ['foto galery/foto1.jpeg', 'foto galery/foto2.jpeg', 'foto galery/foto3.jpeg', 'foto galery/foto4.jpeg', 'foto galery/foto5.jpeg', 'foto galery/foto6.jpeg', 'foto galery/foto7.jpeg', 'foto galery/foto8.jpeg'];
var fotoke = 0;
var fotokiri = source.length - 1;
var fotokanan = 1;

document.getElementById('foto-kiri').src = source[fotokiri];
document.getElementById('foto-kanan').src = source[fotokanan];

function next() {
  fotoke++;
  fotokiri++;
  fotokanan++;
  if (fotoke >= source.length) {
    fotoke = 0;
    fotokiri = source.length - 1;
    fotokanan = 1;
  }
  if (fotokiri >= source.length) {
    fotokiri = 0;
  }
  if (fotokanan >= source.length) {
    fotokanan = 0;
  }
  x.src = source[fotoke];
  y.src = source[fotokiri];
  z.src = source[fotokanan];
}
function prev() {
  fotoke--;
  fotokiri--;
  fotokanan--;
  if (fotoke < 0) {
    fotoke = source.length - 1;
    fotokiri = source.length - 2;
    fotokanan = 0;
  }
  if (fotokiri < 0) {
    fotokiri = source.length - 1;
  }
  if (fotokanan < 0) {
    fotokanan = source.length - 1;
  }
  x.src = source[fotoke];
  y.src = source[fotokiri];
  z.src = source[fotokanan];
}
