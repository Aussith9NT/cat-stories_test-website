window.onload = function() {
var miImagen = document.querySelector('img');
var todosMisBotones = document.querySelector('button');
var miBotonCambiarGato = document.getElementById('botonCambiar');
var miBotonVerPerfilGato = document.getElementById('botonPerfil');
var miTitulo = document.querySelector('title');
var miTitulo1 = document.querySelector('h1');
var miSubtitulo = document.querySelector('h3');
var todosMisParrafos = document.querySelector('p');
var miParrafo1 = document.getElementById('p1');
var miParrafo2 = document.getElementById('p2');
var miParrafoLista = document.getElementById('pLista');
var direccionActual = document.location.href;
var direccionPrincipal = "https://aussith9nt.github.io/cat-stories_test-website/";
var elNombre;

function corregirNombreGato() {
	return elNombre.substr(0,1).toUpperCase() + elNombre.substr(1,elNombre.length).toLowerCase();
}

function ingresarNombreGato() {
	elNombre = prompt('Por favor, ingrese el nombre del gato el cual desea conocer. Estos son los gatos existentes: Miau, Zimba, Glor, Kati, Kata, Kuntahg y Holo.');
	corregirNombreGato();
	localStorage.setItem('nombre', elNombre);
	miTitulo1.textContent = 'La historia de ' + elNombre;
	miSubtitulo.textContent = elNombre;
	return elNombre;
}

function cambiarImagen() {
  if (elNombre === 'Miau') {
    miImagen.setAttribute('src','../images/gato-saltando.png');
    miImagen.setAttribute('alt','Gato saltando');
    alert('Soy Miau.');
  }
  if (elNombre === 'Zimba') {
		miImagen.setAttribute('src','../images/gato-sombrero.png');
		miImagen.setAttribute('alt','Gato con sombrero');
		alert('Soy Zimba.');
	}
  if (elNombre === 'Glor') {
		miImagen.setAttribute('src','../images/gato-ojos-azules.png');
		miImagen.setAttribute('alt','Gato con ojos azules');
		alert('Soy Glor.');
	}
  if (elNombre === 'Kati') {
		miImagen.setAttribute('src','../images/gatas-gemelas.png');
		miImagen.setAttribute('alt','Gatas gemelas');
		alert('Soy Kati (la despierta) y ella es Kata.');
	}
  if (elNombre === 'Kata') {
		miImagen.setAttribute('src','../images/gatas-gemelas.png');
		miImagen.setAttribute('alt','Gatas gemelas');
		alert('*Bostezo* Soy Kata (la dormida) y *Bostezo* ella es Kati.');
	}
  if (elNombre === 'Kuntahg') {
    miImagen.setAttribute('src','../images/gato-bostezando-hambre.png');
    miImagen.setAttribute('alt','Gato bostezando por hambre');
    alert('Soy Kuntahg (*Suzurro* y tengo hambre *Suzurro*).');
  }
  if (elNombre === 'Holo') {
    miImagen.setAttribute('src','../images/gato-actor-viendo-reflejo.png');
    miImagen.setAttribute('alt','Gato viendo su reflejo en el espejo');
    alert('Soy Holo, prepárense para quedar fascinados.');
	}
}

if (!localStorage.getItem('nombre')) {
  ingresarNombreGato();
  corregirNombreGato();
  cambiarImagen();
} else {
  var nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo1.textContent = 'La historia de ' + nombreAlmacenado;
  miSubtitulo.textContent = nombreAlmacenado;
}

miBotonCambiarGato.onclick = function() {
  ingresarNombreGato();
  corregirNombreGato();
  cambiarImagen();
}

function redireccionar(direccion) {
	document.location.href = direccion;
}

miBotonVerPerfilGato.onclick = function() {
	var nombreGatoMin = elNombre.toLowerCase();
	if (direccionActual.substr(0,1) == "f") {
	redireccionar(direccionActual.substr(0,(direccionActual.length - 10)) + "gatos/" + nombreGatoMin + "/" + nombreGatoMin + ".html");
}
}
}