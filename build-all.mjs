/* Builds all three Vite apps into a single ./dist for one Vercel deployment:
     /dist/index.html      → landing page
     /dist/meridian/...     → agency site   (base /meridian/)
     /dist/chaika/...       → Hotel Chaika   (base /chaika/)
     /dist/calypso/...      → Hotel Calypso  (base /calypso/)
   Each app reads VITE_BASE so its assets + router resolve under the subpath. */
import { execSync } from "node:child_process";
import { cpSync, rmSync, mkdirSync, writeFileSync, existsSync } from "node:fs";

const APPS = [
  { dir: "meridian-site", name: "meridian", base: "/meridian/" },
  { dir: "chaika-site", name: "chaika", base: "/chaika/" },
  { dir: "calypso-site", name: "calypso", base: "/calypso/" },
];

const run = (cmd, cwd, env = {}) =>
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, ...env } });

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

for (const app of APPS) {
  console.log(`\n▸ Building ${app.name}  (base ${app.base})`);
  if (!existsSync(`${app.dir}/node_modules`)) run("npm install --no-audit --no-fund", app.dir);
  run("npm run build", app.dir, { VITE_BASE: app.base });
  cpSync(`${app.dir}/dist`, `dist/${app.name}`, { recursive: true });
  console.log(`  ✓ ${app.name} → dist/${app.name}`);
}

writeFileSync("dist/index.html", LANDING());
console.log("\n✓ Wrote landing → dist/index.html");
console.log("✓ Done. Output in ./dist\n");

function LANDING() {
  const card = (href, name, place, tag, accent) => `
      <a class="card" href="${href}" style="--accent:${accent}">
        <span class="eyebrow">${place}</span>
        <span class="name">${name}</span>
        <span class="tag">${tag}</span>
        <span class="go">Open&nbsp;&rarr;</span>
      </a>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#08222c" />
<title>Meridian Hotels — Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,500&family=JetBrains+Mono:wght@400;500&family=Onest:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  :root{--ink:#eaf2f3}
  body{min-height:100vh;background:radial-gradient(120% 120% at 50% 0%,#0c3a4b 0%,#08222c 55%,#061821 100%);color:var(--ink);font-family:"Onest",system-ui,sans-serif;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6vh 24px;gap:48px}
  .head{text-align:center;max-width:640px}
  .kicker{font-family:"JetBrains Mono",monospace;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:#7fb7c2}
  h1{font-family:"Cormorant",serif;font-weight:500;font-size:clamp(2.6rem,7vw,5rem);line-height:1.0;margin-top:18px;letter-spacing:.01em}
  h1 em{font-style:italic;color:#ff7a64}
  .sub{margin-top:18px;color:#a9c4ca;font-size:1.02rem;line-height:1.6}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;width:100%;max-width:1040px}
  .card{position:relative;display:flex;flex-direction:column;gap:6px;padding:30px 28px 26px;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:rgba(255,255,255,.03);text-decoration:none;color:var(--ink);overflow:hidden;transition:transform .4s cubic-bezier(.16,1,.3,1),border-color .4s,background .4s}
  .card::before{content:"";position:absolute;left:0;top:0;height:100%;width:3px;background:var(--accent);opacity:.0;transition:opacity .4s}
  .card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.06)}
  .card:hover::before{opacity:1}
  .card .eyebrow{font-family:"JetBrains Mono",monospace;font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:#7fb7c2}
  .card .name{font-family:"Cormorant",serif;font-size:2rem;font-weight:600;line-height:1.05;margin-top:6px}
  .card .tag{color:#a9c4ca;font-size:.92rem;margin-top:4px}
  .card .go{margin-top:18px;font-family:"JetBrains Mono",monospace;font-size:.72rem;letter-spacing:.12em;color:var(--accent)}
  footer{font-family:"JetBrains Mono",monospace;font-size:.66rem;letter-spacing:.18em;color:#6f9aa3;text-transform:uppercase}
</style>
</head>
<body>
  <div class="head">
    <span class="kicker">Black Sea · Bulgaria</span>
    <h1>Premium hotel <em>websites</em></h1>
    <p class="sub">A portfolio of three sites — one agency, two hotels — built to a world-class standard. Pick a property.</p>
  </div>
  <div class="grid">
    ${card("/calypso/", "Calypso Blue", "Primorsko", "Seafront hotel · pool · restaurant", "#ff7a64")}
    ${card("/chaika/", "Chaika", "Primorsko", "Boutique seafront hotel", "#c8a24e")}
    ${card("/meridian/", "Meridian", "Agency", "Hotel growth studio", "#3e8fa0")}
  </div>
  <footer>Meridian Hotels — Black Wolf</footer>
</body>
</html>`;
}
