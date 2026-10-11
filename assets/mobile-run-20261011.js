// Connect to the game's existing startup hook without replacing its orientation guard.
(() => {
  function installMobileRun(game) {
    const controls = game.touchControls;
    if (!controls?.isTouch || controls.runButton) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.action = 'run';
    controls.runButton = button;
    controls.root.querySelector('.touch-actions').append(button);
    let running = false;
    const render = () => {
      button.textContent = running ? 'Бег ✓' : 'Бег';
      button.setAttribute('aria-pressed', String(running));
      button.setAttribute('aria-label', running ? 'Выключить бег' : 'Включить бег');
      button.classList.toggle('is-pressed', running);
      button.hidden = Boolean(game.player.inVehicle);
    };
    const stop = () => {
      running = false;
      game.input.setTouchKey('shift', false);
      render();
    };
    button.addEventListener('click', event => {
      event.preventDefault();
      if (!controls.active || !game.input.enabled || game.player.inVehicle) return;
      running = !running;
      game.input.setTouchKey('shift', running);
      render();
    });
    const reset = controls.reset.bind(controls);
    controls.reset = function(...args) { stop(); return reset(...args); };
    const update = controls.update.bind(controls);
    controls.update = function(...args) {
      const result = update(...args);
      if (!controls.active || game.player.inVehicle || !game.input.touchKeys.has('shift')) stop();
      else render();
      return result;
    };
    const hint = controls.help?.querySelector('.welcome-controls__touch');
    if (hint) {
      const p = document.createElement('p');
      p.textContent = 'Бег — нажми один раз, чтобы бежать. Нажми ещё раз, чтобы ходить.';
      hint.append(p);
    }
    render();
  }
  const wrap = guard => function(game) {
    guard(game);
    installMobileRun(game);
  };
  let guard = globalThis.openPlanetOrientationGuard;
  let wrapped = typeof guard === 'function' ? wrap(guard) : guard;
  Object.defineProperty(globalThis, 'openPlanetOrientationGuard', {
    configurable: true,
    get: () => wrapped,
    set: next => { guard = next; wrapped = typeof next === 'function' ? wrap(next) : next; }
  });
})();