const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, './dist/browser/en/');
const routes = ['404', 'development', 'crowdfunding', 'coworking', 'freelancers', 'community'];
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("Error: No se encontró index.html en " + buildDir);
  process.exit(1);
}

routes.forEach(route => {
  const routePath = path.join(buildDir, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  fs.copyFileSync(indexHtmlPath, path.join(routePath, 'index.html'));
  console.log(`✔ Copiado index.html en ${routePath}`);
});

console.log("✅ Se han creado copias de index.html para cada ruta.");
