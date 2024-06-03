//CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'c:\\Users\\zuhay\\OneDrive\\globestat\\root\\stylesheets\\titlebar.css';
document.head.appendChild(link);
//Navbar element
const tb = document.createElement('nav');
tb.style.display = ('flex');
tb.innerHTML = `
    <img src="c:\\Users\\zuhay\\OneDrive\\globestat\\gslogo.png" id="logo" class="tlink">
    <a href="c:\\Users\\zuhay\\OneDrive\\globestat\\root\\index.html" class="tlink">
        <h1 id="title">Exonet</h1>
    </a>
    <a href="c:\\Users\\zuhay\\OneDrive\\globestat\\root\\pages\\search.html" style="order: 1; margin-left: 10%;" class="tlink"> Search </a>
    <a href="c:\\Users\\zuhay\\OneDrive\\globestat\\root\\pages\\create.html" style="order: 2;" class="tlink"> Create </a>
    <a href="c:\\Users\\zuhay\\OneDrive\\globestat\\root\\pages\\maps.html" style="order: 3;" class="tlink"> Maps </a>
`;
let titlebars = document.getElementsByClassName('titlebar');
for (let i = 0; i < titlebars.length; i++) {
    titlebars[i].appendChild(tb.cloneNode(true));
}