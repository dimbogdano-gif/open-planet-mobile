// The browser can open in portrait; gameplay waits until the phone is sideways.
globalThis.openPlanetOrientationGuard = function installOrientationGuard(game) {
  if (!game.touchControls.isTouch) return;
  const portrait = matchMedia('(orientation: portrait)');
  const style = document.createElement('style');
  style.textContent = `
    body.portrait-locked > :not(#orientation-guard) { visibility:hidden!important; }
    #orientation-guard { position:fixed; inset:0; z-index:10000; display:grid;
      place-content:center; padding:32px; text-align:center; background:#101915;
      color:#f2f8e9; font-family:Manrope,Arial,sans-serif; touch-action:none; }
    #orientation-guard[hidden] { display:none; }
    #orientation-guard .rotate-phone { color:#dafa42; font-size:72px; line-height:1; }
    #orientation-guard h2 { margin:22px 0 12px; font-size:26px; }
    #orientation-guard p { margin:0; font-size:16px; line-height:1.6; color:#c2cbbb; }
  `;
  document.head.append(style);
  const overlay = document.createElement('section');
  overlay.id = 'orientation-guard';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = '<div class="rotate-phone" aria-hidden="true">↻ ▯</div><h2>Поверни телефон боком</h2><p>В Open Planet можно играть<br>только с горизонтальным экраном.</p>';
  document.body.append(overlay);
  let locked = false;
  let previousInput = false;
  const synchronize = () => {
    const next = portrait.matches;
    if (next && !locked) {
      previousInput = game.input.enabled;
      game.pauseGame();
      game.input.enabled = false;
      game.input.keys.clear();
      game.touchControls.reset();
      game.input.endFrame();
    } else if (!next && locked && game.ui.startScreen.classList.contains('is-hidden')) {
      game.input.enabled = previousInput;
    }
    locked = next;
    game.portraitLocked = locked;
    overlay.hidden = !locked;
    document.body.classList.toggle('portrait-locked', locked);
  };
  const update = game.update.bind(game);
  game.update = function(dt) {
    if (locked) { game.input.endFrame(); return; }
    return update(dt);
  };
  const start = game.startGame.bind(game);
  game.startGame = function(...args) { if (!locked) return start(...args); };
  const blockInput = event => {
    if (!locked) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  };
  for (const name of ['keydown', 'pointerdown', 'touchstart', 'wheel']) {
    window.addEventListener(name, blockInput, {capture:true, passive:false});
  }
  portrait.addEventListener('change', synchronize);
  synchronize();
};