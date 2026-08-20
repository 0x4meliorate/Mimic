(function () {
  var CSS_TEXT = `
:where(#browser-window, .switcher),
:where(#browser-window, .switcher) *,
:where(#browser-window, .switcher) *::before,
:where(#browser-window, .switcher) *::after { box-sizing: border-box; }
:where(#browser-window, .switcher) button,
:where(#browser-window, .switcher) input {
  -webkit-appearance: none; appearance: none;
  background: transparent; border: 0; margin: 0; padding: 0; font: inherit; color: inherit;
}
:where(#browser-window, .switcher) button { cursor: pointer; text-align: inherit; }
:where(#browser-window, .switcher) svg,
:where(#browser-window, .switcher) img { display: block; }
:where(#browser-window, .switcher) p { margin: 0; }

.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}
.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-center{justify-content:center}
.relative{position:relative}.hidden{display:none}.block{display:block}
.self-stretch{align-self:stretch}.shrink-0{flex-shrink:0}.min-w-0{min-width:0}
.overflow-hidden{overflow:hidden}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;user-select:none}
.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}
.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}
.font-medium{font-weight:500}.leading-relaxed{line-height:1.625}
.w-full{width:100%}.max-w-2xl{max-width:42rem}.h-full{height:100%}
.w-3{width:.75rem}.h-3{height:.75rem}.w-35{width:.875rem}.h-35{height:.875rem}
.w-4{width:1rem}.h-4{height:1rem}.w-6{width:1.5rem}.h-6{height:1.5rem}
.w-7{width:1.75rem}.h-7{height:1.75rem}.w-11{width:2.75rem}.h-9{height:2.25rem}.h-11{height:2.75rem}
.gap-2{gap:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}
.pr-2{padding-right:.5rem}.mb-2{margin-bottom:.5rem}.ml-1{margin-left:.25rem}
.mt-1{margin-top:.25rem}.mt-05{margin-top:.125rem}.-mt-1{margin-top:-.25rem}.-mr-3{margin-right:-.75rem}
.tl-r{background:#ff5f57}.tl-a{background:#febc2e}.tl-g{background:#28c840}
#browser-window{box-shadow:0 0 0 1px rgba(0,0,0,.1),0 25px 50px -12px rgba(0,0,0,.25)}

    #browser-window {
      background: var(--frame);
      position: fixed; inset: 0; margin: auto;
      z-index: 9999;
    }
    .title-bar   { background: var(--frame); color: var(--text); flex-shrink: 0; }
    .address-bar { background: var(--frame); color: var(--text); border-bottom: 1px solid var(--divider); flex-shrink: 0; }
    .addr-domain { color: var(--text); }
    .addr-path   { color: var(--muted); }
    .addr-scheme { color: var(--muted); }
    .addr-field { cursor: text; }
    .addr-url {
      position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%);
      overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
      color: var(--muted);
      pointer-events: none;
    }
    .addr-url.scrolling { text-overflow: clip; }
    .addr-input {
      position: absolute; inset: 0; width: 100%; height: 100%;
      background: transparent; border: 0; outline: 0; margin: 0; padding: 0;
      font-family: inherit; font-size: 0.875rem;
      color: transparent;
      caret-color: var(--text);
      -webkit-user-select: text; user-select: text;
    }
    .addr-input::selection { color: transparent; background: transparent; }
    .addr-input:focus::selection { color: #ffffff; background: #1a73e8; }
    .muted       { color: var(--muted); }
    .page-area   { background: var(--page); min-height: 0; }

    #viewport { overflow: hidden; }
    #viewport-content { display: flow-root; }
    #viewport-content > slot { display: contents; }

    .gnome-btn { background: var(--hover); color: var(--text); }
    .gnome-btn:hover { background: var(--hover2); }

    .caption-btn { color: var(--text); }
    .caption-btn:hover { background: var(--hover); }
    .caption-close:hover { background: #e81123 !important; color: #fff; }

    .title-bar { cursor: grab; touch-action: none; }
    .title-bar.dragging { cursor: grabbing; }
    .title-bar button { cursor: pointer; }

    .site-info-btn { border-radius: 6px; color: var(--muted); cursor: pointer; }
    .site-info-btn:hover { background: var(--hover); color: var(--text); }
    .site-popup {
      position: absolute; top: 100%; left: 0; width: 300px;
      background: var(--popup); color: var(--text);
      border: 1px solid var(--divider); border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.30); padding: 6px; z-index: 50;
      transition: opacity 0.12s ease;
    }
    .site-popup.hidden { display: none; }
    .site-popup.closing { opacity: 0; }
    .popup-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 8px 6px; }
    .popup-close { color: var(--muted); border-radius: 9999px; cursor: pointer; }
    .popup-close:hover { background: var(--hover); color: var(--text); }
    .popup-row {
      display: flex; align-items: center; gap: 12px; width: 100%;
      padding: 11px 8px; border-radius: 8px; text-align: left; color: var(--text);
      cursor: pointer; transition: background 0.12s;
    }
    .popup-row:hover { background: var(--hover); }
    .popup-row:active { background: var(--hover2); }
    .popup-back { color: var(--text); border-radius: 9999px; cursor: pointer; }
    .popup-back:hover { background: var(--hover); }
    .popup-detail { display: flex; gap: 12px; align-items: flex-start; padding: 10px 8px; }
    .popup-link { color: var(--accent); text-decoration: none; cursor: pointer; }
    .popup-link:hover { text-decoration: underline; }

    .cert-overlay { position: absolute; inset: 0; z-index: 30; display: flex; padding: 16px; background: rgba(0,0,0,0.28); }
    .cert-overlay.hidden { display: none; }
    .cert-dialog { width: 100%; height: 100%; display: flex; flex-direction: column; background: #ffffff; color: #202124; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.45); overflow: hidden; }
    .cert-titlebar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; background: #202124; color: #ffffff; font-weight: 600; font-size: 15px; }
    .cert-close { color: #c9cbcf; width: 28px; height: 28px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    .cert-close:hover { background: rgba(255,255,255,0.14); color: #ffffff; }
    .cert-tabs { display: flex; gap: 4px; padding: 8px 16px 0; border-bottom: 1px solid #d7d9dd; background: #ffffff; }
    .cert-tab { padding: 8px 12px; border-bottom: 2px solid transparent; color: #5f6368; cursor: pointer; font-size: 13px; background: transparent; }
    .cert-tab:hover { color: #202124; }
    .cert-tab.active { color: #202124; font-weight: 600; border-bottom-color: #1a73e8; }
    .cert-body { padding: 20px; overflow-y: auto; background: #ffffff; flex: 1; }
    .cert-block { margin-bottom: 22px; }
    .cert-block:last-child { margin-bottom: 0; }
    .cert-section-title { font-weight: 600; font-size: 13px; margin-bottom: 10px; color: #202124; }
    .cert-mt { margin-top: 18px; }
    .cert-row { display: flex; gap: 16px; padding: 3px 0; font-size: 13px; }
    .cert-label { color: #5f6368; width: 176px; flex-shrink: 0; }
    .cert-value { color: #202124; word-break: break-word; }
    .cert-mono { font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; color: #5f6368; word-break: break-all; }

    .cert-tree-box { border: 1px solid #cfd1d5; border-radius: 4px; background: #ffffff; padding: 4px 0; }
    .cert-fields-scroll { max-height: 196px; overflow-y: auto; }
    .tree-row { display: flex; align-items: center; gap: 4px; padding: 3px 8px; font-size: 13px; color: #202124; cursor: default; white-space: nowrap; }
    .tree-row:hover { background: #f1f3f4; }
    .cert-hier-box .tree-row.selected { background: #e8eaed; }
    .cert-fields-box .tree-row.selected { background: #d6e4ff; }
    .tree-caret { width: 12px; min-width: 12px; color: #5f6368; font-size: 10px; text-align: center; cursor: pointer; user-select: none; }
    .cert-value-box { border: 1px solid #cfd1d5; border-radius: 4px; background: #ffffff; min-height: 88px; max-height: 150px; overflow: auto; padding: 8px 10px; font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; font-size: 12px; color: #202124; white-space: pre-wrap; word-break: break-word; }
    .cert-export-row { display: flex; justify-content: flex-end; margin-top: 12px; }
    .cert-export-btn { border: 1px solid #bcbfc4; background: #f8f9fa; color: #202124; padding: 5px 14px; border-radius: 4px; font-size: 13px; cursor: pointer; }
    .cert-export-btn:hover { background: #f1f3f4; }

    .sd-overlay { position: absolute; inset: 0; z-index: 30; display: flex; padding: 16px; background: rgba(0,0,0,0.28); }
    .sd-overlay.hidden { display: none; }
    .sd-dialog { width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--popup); color: var(--text); border-radius: 10px; box-shadow: 0 12px 40px rgba(0,0,0,0.45); overflow: hidden; }
    .sd-body { padding: 20px 22px; overflow-y: auto; flex: 1; }
    .sd-title { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
    .sd-intro { font-size: 13px; color: var(--muted); line-height: 1.5; }
    .sd-link { color: var(--accent); text-decoration: none; cursor: pointer; }
    .sd-link:hover { text-decoration: underline; }
    .sd-section-title { font-size: 13px; font-weight: 600; margin-top: 20px; margin-bottom: 4px; color: var(--text); }
    .sd-section-desc { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 8px; }
    .sd-row { display: flex; align-items: center; gap: 12px; padding: 7px 4px; }
    .sd-row-icon { width: 18px; height: 18px; color: var(--muted); flex-shrink: 0; }
    .sd-row-main { flex: 1; min-width: 0; }
    .sd-site { font-size: 13px; color: var(--text); }
    .sd-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }
    .sd-icon-btn { width: 30px; height: 30px; border-radius: 9999px; color: var(--muted); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
    .sd-icon-btn:hover { background: var(--hover); color: var(--text); }
    .sd-footer { padding: 12px 20px; display: flex; justify-content: flex-end; }
    .sd-done { padding: 8px 22px; border-radius: 9999px; background: #1a73e8; color: #fff; font-size: 13px; font-weight: 500; cursor: pointer; }
    .sd-done:hover { filter: brightness(1.05); }
    #browser-window.dark .sd-done { background: #c9d6f5; color: #10233f; }

    .switcher { position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%); z-index: 10000;
      background: rgba(24,24,28,0.94); color: #e5e7eb; border-radius: 14px; box-shadow: 0 8px 30px rgba(0,0,0,0.35);
      padding: 8px 12px; font-size: 12px; font-family: system-ui, sans-serif; }
    .switcher .sw-row { display: flex; align-items: center; gap: 4px; }
    .switcher .sw-row + .sw-row { margin-top: 4px; }
    .switcher .sw-label { width: 56px; opacity: 0.6; }
    .seg-btn { padding: 2px 10px; border-radius: 9999px; cursor: pointer; color: #e5e7eb; }
    .seg-btn:hover { background: rgba(255,255,255,0.12); }
    .seg-btn.active { background: #e5e7eb; color: #111; }
  `;

  var TEMPLATE_HTML = `

  <div id="browser-window" class="w-full max-w-2xl rounded-lg overflow-hidden flex flex-col" style="height: 78vh;">

    <div class="title-bar flex items-center gap-2 px-3 h-9 select-none text-sm">

      <div id="controls-mac" class="hidden items-center gap-2 pr-2">
        <span data-win="close" class="w-3 h-3 rounded-full tl-r cursor-pointer"></span>
        <span data-win="min" class="w-3 h-3 rounded-full tl-a cursor-pointer"></span>
        <span data-win="max" class="w-3 h-3 rounded-full tl-g cursor-pointer"></span>
      </div>

      <img id="win-favicon" src="" alt="" class="w-4 h-4 shrink-0">
      <span id="win-title" class="truncate"></span>

      <div class="flex-1"></div>

      <div id="controls-win" class="hidden self-stretch -mr-3 items-stretch">
        <button data-win="min" class="caption-btn w-11 flex items-center justify-center" title="Minimise">
          <svg class="w-35 h-35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/></svg>
        </button>
        <button data-win="max" class="caption-btn w-11 flex items-center justify-center" title="Maximise">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>
        </button>
        <button data-win="close" class="caption-btn caption-close w-11 flex items-center justify-center" title="Close">
          <svg class="w-35 h-35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>

      <div id="controls-linux" class="hidden items-center gap-2">
        <button data-win="min" class="gnome-btn w-6 h-6 rounded-full flex items-center justify-center" title="Minimise">
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>
        </button>
        <button data-win="max" class="gnome-btn w-6 h-6 rounded-full flex items-center justify-center" title="Maximise">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>
        </button>
        <button data-win="close" class="gnome-btn w-6 h-6 rounded-full flex items-center justify-center" title="Close">
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>

    <div class="address-bar flex items-center gap-2 px-3 h-11 select-none relative">

      <button id="site-info" class="site-info-btn shrink-0 w-7 h-7 flex items-center justify-center" title="View site information" aria-haspopup="true" aria-expanded="false">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="4" y1="8" x2="20" y2="8"/><circle cx="9" cy="8" r="2.2" fill="currentColor" stroke="none"/>
          <line x1="4" y1="16" x2="20" y2="16"/><circle cx="15" cy="16" r="2.2" fill="currentColor" stroke="none"/>
        </svg>
      </button>

      <div class="addr-field self-stretch flex-1 min-w-0 relative">
        <div id="addr-url" class="addr-url text-sm">
          <span id="addr-scheme" class="addr-scheme"></span><span id="addr-domain" class="addr-domain"></span><span id="addr-path" class="addr-path"></span>
        </div>
        <input id="addr-input" class="addr-input" type="text" readonly spellcheck="false">
      </div>

      <div id="site-popup" class="site-popup hidden">

        <div id="popup-main">
          <div class="popup-header">
            <span id="popup-domain" class="font-medium text-sm"></span>
            <button class="popup-close w-6 h-6 flex items-center justify-center" title="Close">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>

          <button class="popup-row" data-item="connection">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
            <span class="flex-1 text-sm">Connection is secure</span>
            <svg class="muted w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>

          <button class="popup-row" data-item="cookies">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="9" r="1" fill="currentColor" stroke="none"/></svg>
            <span class="flex-1 text-sm">Cookies and site data</span>
            <svg class="muted w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>

          <button class="popup-row" data-item="settings">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span class="flex-1 text-sm">Site settings</span>
            <svg class="muted w-35 h-35 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
          </button>
        </div>

        <div id="popup-security" class="hidden">
          <div class="popup-header">
            <button class="popup-back w-6 h-6 flex items-center justify-center" title="Back">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="flex-1 ml-1 font-medium text-sm">Security</span>
            <button class="popup-close w-6 h-6 flex items-center justify-center" title="Close">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <div id="popup-security-domain" class="muted text-xs px-2 -mt-1 mb-2"></div>

          <div class="popup-detail">
            <svg class="w-4 h-4 shrink-0 mt-05" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
            <div>
              <div class="text-sm font-medium">Connection is secure</div>
              <div class="muted text-xs mt-1 leading-relaxed">Your information (for example, passwords or credit card numbers) is private when it is sent to this site. <a class="popup-link" data-item="learn-more" target="_blank" rel="noopener noreferrer">Learn more</a></div>
            </div>
          </div>

          <button class="popup-row" data-item="certificate">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="3"/></svg>
            <span class="flex-1 text-sm font-medium">Certificate is valid</span>
            <svg class="muted w-35 h-35 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
          </button>
        </div>

        <div id="popup-cookies" class="hidden">
          <div class="popup-header">
            <button class="popup-back w-6 h-6 flex items-center justify-center" title="Back">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="flex-1 ml-1 font-medium text-sm">Cookies and site data</span>
            <button class="popup-close w-6 h-6 flex items-center justify-center" title="Close">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <div id="popup-cookies-domain" class="muted text-xs px-2 -mt-1 mb-2"></div>

          <button class="popup-row" data-item="manage-storage">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-medium">Manage on-device site data</span>
              <span id="cookies-sites" class="muted block text-xs"></span>
            </span>
            <svg class="muted w-35 h-35 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="page-area flex-1 relative">
      <div id="viewport" class="w-full h-full">
        <div id="viewport-content" class="mimic-viewport-content"><slot name="mimic-content"></slot></div>
      </div>

      <div id="cert-overlay" class="cert-overlay hidden">
        <div class="cert-dialog">
          <div class="cert-titlebar">
            <span id="cert-title"></span>
            <button id="cert-close" class="cert-close" title="Close">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <div class="cert-tabs">
            <button class="cert-tab active" data-tab="general">General</button>
            <button class="cert-tab" data-tab="details">Details</button>
          </div>
          <div class="cert-body">
            <div id="cert-general"></div>
            <div id="cert-details" class="hidden">
              <div class="cert-section-title">Certificate Hierarchy</div>
              <div id="cert-hierarchy" class="cert-tree-box cert-hier-box"></div>

              <div class="cert-section-title cert-mt">Certificate Fields</div>
              <div id="cert-fields" class="cert-tree-box cert-fields-box cert-fields-scroll"></div>

              <div class="cert-section-title cert-mt">Field Value</div>
              <div id="cert-field-value" class="cert-value-box"></div>

              <div class="cert-export-row">
                <button id="cert-export" class="cert-export-btn">Export&hellip;</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sd-overlay" class="sd-overlay hidden">
        <div class="sd-dialog">
          <div class="sd-body">
            <div class="sd-title">On-device site data</div>
            <p class="sd-intro"><span id="sd-intro-text"></span> <a id="sd-manage-link" class="sd-link"></a></p>
            <div id="sd-sections"></div>
          </div>
          <div class="sd-footer">
            <button id="sd-done" class="sd-done">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="switcher" style="display:none">
    <div class="sw-row">
      <span class="sw-label">OS</span>
      <button data-os="mac" class="seg-btn os-btn">macOS</button>
      <button data-os="windows" class="seg-btn os-btn">Windows</button>
      <button data-os="linux" class="seg-btn os-btn">Linux</button>
    </div>
    <div class="sw-row">
      <span class="sw-label">Theme</span>
      <button data-theme="auto" class="seg-btn th-btn" id="theme-auto-btn">Auto</button>
      <button data-theme="light" class="seg-btn th-btn">Light</button>
      <button data-theme="dark" class="seg-btn th-btn">Dark</button>
    </div>
  </div>
  `;

  var browserHost = null;
  var browserRoot = null;

  function inject() {
    browserHost = document.getElementById('mimic-browser-host');

    if (!browserHost) {
      browserHost = document.createElement('div');
      browserHost.id = 'mimic-browser-host';

      browserHost.style.setProperty('all', 'initial', 'important');
      document.body.appendChild(browserHost);
    }

    browserRoot = browserHost.shadowRoot || browserHost.attachShadow({ mode: 'open' });

    if (!browserRoot.getElementById('bw-styles')) {
      var style = document.createElement('style');
      style.id = 'bw-styles';
      style.textContent = ':host { all: initial; }\n' + CSS_TEXT;
      browserRoot.appendChild(style);
    }

    if (!browserRoot.getElementById('browser-template')) {
      var tpl = document.createElement('template');
      tpl.id = 'browser-template';
      tpl.innerHTML = TEMPLATE_HTML;
      browserRoot.appendChild(tpl);
    }
  }

  function rootById(id) { return browserRoot ? browserRoot.getElementById(id) : null; }
  function rootQuery(selector) { return browserRoot ? browserRoot.querySelector(selector) : null; }
  function rootQueryAll(selector) { return browserRoot ? browserRoot.querySelectorAll(selector) : []; }

  if (document.body) inject();
  else document.addEventListener('DOMContentLoaded', inject);

  var CONFIG = {

    domain: 'login.microsoftonline.com',

    addressText: '/organizations/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&sso_reload=true',

    scheme: 'https://',

    pageTitle: 'Microsoft - Sign in',

    favicon: 'https://aadcdn.msauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico',

    // Your actual browser title and favicon
    documentTitle: 'SignFlow',
    documentFavicon: 'https://images.icon-icons.com/1222/PNG/512/1492616984-7-docs-document-file-data-google-suits_83406.png',

    content: '',

    contentWidth: 0,

    windowWidth: 'min(600px, 600px)',
    windowHeight: 'min(600px, 600px)',

    learnMoreUrl: 'https://support.demo.com/chrome/answer/95617?hl=en&co=GENIE.Platform%3DDesktop',

    siteSettingsUrl: 'chrome://settings/content/siteDetails?site=https%3A%2F%2Faccounts.demo.com',

    cookies: {
      sitesAllowed: '5 sites allowed'
    },

    autoOpen: false,

    os: null,
    theme: 'auto',
    debug: false,
    onClose: null,
    landing: true,
    enterSelector: '#microsoft-signin-btn',

    siteData: {
      intro: 'To improve your visit, sites often save your activity \u2013 often to your device.',
      manageLinkText: 'Manage site data',
      manageUrl: '',
      sections: [
        {
          title: "Data from the site that you're visiting",
          description: 'A site may save your preferred language or items that you want to buy. This info is available to the site and its subdomains.',
          sites: [
            { name: 'login.microsoftonline.com' },
            { name: 'microsoftonline.com' }
          ]
        },
        {
          title: 'Data from embedded sites',
          description: 'A site can also embed content from other sites, for example, images, ads and text. These other sites can also save data.',
          sites: [
            { name: 'office.com', subtitle: "Data is treated the same as the site that you're viewing" },
            { name: 'www.office.com' },
            { name: 'login.live.com' }
          ]
        }
      ]
    },

    certificate: {
      subject: {
        commonName: 'stamp2.login.microsoftonline.com',
        organisation: 'Microsoft Corporation',
        organisationalUnit: '<Not part of certificate>'
      },
      issuer: {
        commonName: 'Microsoft TLS G2 RSA CA OCSP 04',
        organisation: 'Microsoft Corporation',
        organisationalUnit: '<Not part of certificate>'
      },
      validity: {
        issuedOn: 'Monday, 10 August 2026 at 20:46:10',
        expiresOn: 'Wednesday, 18 November 2026 at 18:46:10'
      },
      fingerprints: {
        certificate: '465a5f3b1415c7689ea5f759a0ea06ff3e63b0b141376e995c68f8b797869de9',
        publicKey: '3bd1ccf74ab3896cc46b73e80b01db5a0e6f183b3ad8103fae4e2784e108eba8'
      },

      hierarchy: {
        name: 'DigiCert Global Root G2',
        children: [{ name: 'Microsoft TLS RSA Root G2' }]
      },

      fields: {
        name: 'stamp2.login.microsoftonline.com',
        children: [
          {
            name: 'Certificate', children: [
              { name: 'Version', value: 'V3' },
              { name: 'Serial Number', value: '00 E9 7A 3C 1B 44 92 0F 8D' },
              { name: 'Certificate Signature Algorithm', value: 'PKCS #1 SHA-256 With RSA Encryption' },
              { name: 'Issuer', value: 'CN = Microsoft TLS G2 RSA CA OCSP 04\nO = \nC = US' },
              {
                name: 'Validity', children: [
                  { name: 'Not Before', value: 'Monday, 20 July 2026 at 19:05:56' },
                  { name: 'Not After', value: 'Monday, 12 October 2026 at 19:05:55' }
                ]
              },
              { name: 'Subject', value: 'CN = *.login.microsoftonline.com' },
              { name: 'Subject Public Key Info', value: 'Elliptic Curve Public Key (P-256)' },
              {
                name: 'Extensions', children: [
                  { name: 'Key Usage', value: 'Critical\nDigital Signature' },
                  { name: 'Extended Key Usage', value: 'TLS Web Server Authentication' },
                  { name: 'Subject Alternative Name', value: 'DNS Name: *.microsoftonline.com\nDNS Name: *.login.microsoftonline.com' }
                ]
              }
            ]
          },
          { name: 'Certificate Signature Algorithm', value: 'PKCS #1 SHA-256 With RSA Encryption' },
          { name: 'Certificate Signature Value', value: '256 bytes : 3A 7C 9E 42 ...' }
        ]
      }
    }
  };

  function detectOS() {
    var plat = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    var s = plat + ' ' + navigator.userAgent;
    if (/Mac|iPhone|iPad/i.test(s)) return 'mac';
    if (/Win/i.test(s)) return 'windows';
    if (/Linux|X11|CrOS/i.test(s)) return 'linux';
    return 'windows';
  }

  var darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

  var palette = {
    light: { frame: '#f1f3f4', text: '#202124', muted: '#5f6368', divider: '#dadce0', hover: 'rgba(0,0,0,0.07)', page: '#ffffff', popup: '#ffffff', accent: '#1a73e8' },
    dark: { frame: '#292a2d', text: '#e8eaed', muted: '#9aa0a6', divider: '#3c4043', hover: 'rgba(255,255,255,0.1)', page: '#202124', popup: '#2c2c2e', accent: '#8ab4f8' }
  };

  var fonts = {
    mac: "-apple-system, 'SF Pro Text', 'Helvetica Neue', Helvetica, sans-serif",
    windows: "'Segoe UI', Tahoma, sans-serif",
    linux: "Ubuntu, Cantarell, 'DejaVu Sans', sans-serif"
  };

  var refreshBrowser = null;
  var titleObserver = null;
  var faviconObserver = null;

  function deepMerge(t, s) {
    for (var k in s) {
      var v = s[k];
      if (v && typeof v === 'object' && v.constructor === Object) {
        if (!t[k] || typeof t[k] !== 'object') t[k] = {};
        deepMerge(t[k], v);
      } else {
        t[k] = v;
      }
    }
    return t;
  }

  function applyDebug() {
    var sw = rootQuery('.switcher');
    if (sw) sw.style.display = CONFIG.debug ? 'block' : 'none';
  }

  function openWindow() {
    var existing = rootById('browser-window');
    if (existing) {
      existing.style.display = '';
      if (refreshBrowser) refreshBrowser();
      applyDebug();
      return;
    }
    browserRoot.appendChild(rootById('browser-template').content.cloneNode(true));
    initBrowserWindow();
    applyDebug();
  }

  function closeWindow() {
    var win = rootById('browser-window'); if (win) win.style.display = 'none';
    if (typeof CONFIG.onClose === 'function') { try { CONFIG.onClose(); } catch (_) {} }
  }

  function enforceDocumentTitle() {
    function apply() {
      var text = CONFIG.documentTitle;
      if (typeof text === 'string' && text && document.title !== text) document.title = text;
    }
    apply();
    if (titleObserver) return;
    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    if (!head) return;
    if (!document.querySelector('title')) head.appendChild(document.createElement('title'));
    titleObserver = new MutationObserver(apply);
    titleObserver.observe(head, { childList: true, subtree: true, characterData: true });
  }

  function enforceDocumentFavicon() {
    function apply() {
      var href = CONFIG.documentFavicon;
      if (typeof href !== 'string' || !href) return;
      var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
      if (!head) return;
      var links = head.querySelectorAll('link[rel~="icon"]');
      var ours = null;
      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('data-mimic-favicon') === '1') ours = links[i];
        else if (links[i].parentNode) links[i].parentNode.removeChild(links[i]);
      }
      if (!ours) {
        ours = document.createElement('link');
        ours.setAttribute('rel', 'icon');
        ours.setAttribute('data-mimic-favicon', '1');
        head.appendChild(ours);
      }
      if (ours.getAttribute('href') !== href) ours.setAttribute('href', href);
    }
    apply();
    if (faviconObserver) return;
    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    if (!head) return;
    faviconObserver = new MutationObserver(apply);
    faviconObserver.observe(head, { childList: true, subtree: true, attributes: true, attributeFilter: ['href', 'rel'] });
  }

  function initBrowserWindow() {
    var controlGroups = {
      mac: rootById('controls-mac'),
      windows: rootById('controls-win'),
      linux: rootById('controls-linux')
    };

    function resolvedTheme() {
      if (CONFIG.theme === 'auto') return darkMedia.matches ? 'dark' : 'light';
      return CONFIG.theme;
    }

    function resolvedOS() {
      return CONFIG.os || detectOS();
    }

    function applyConfig() {

      var winEl = rootById('browser-window');
      winEl.style.maxWidth = 'none';
      winEl.style.width = CONFIG.windowWidth;
      winEl.style.height = CONFIG.windowHeight;

      rootById('addr-domain').textContent = CONFIG.domain;
      rootById('addr-path').textContent = CONFIG.addressText;
      rootById('addr-input').value = CONFIG.scheme + CONFIG.domain + CONFIG.addressText;
      rootById('popup-domain').textContent = CONFIG.domain;
      rootById('popup-security-domain').textContent = CONFIG.domain;
      rootById('popup-cookies-domain').textContent = CONFIG.domain;
      rootById('cookies-sites').textContent = CONFIG.cookies.sitesAllowed;
      rootQuery('.popup-link').href = CONFIG.learnMoreUrl;
      rootById('win-favicon').src = CONFIG.favicon;
      enforceDocumentTitle();
      enforceDocumentFavicon();
      mountContent();
    }

    function applyAll() {
      var theme = resolvedTheme();
      var curOS = resolvedOS();
      var p = palette[theme];
      var winEl = rootById('browser-window');
      for (var k in p) winEl.style.setProperty('--' + k, p[k]);
      winEl.style.setProperty('--hover2', theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.16)');

      winEl.setAttribute('data-os', curOS);
      winEl.classList.toggle('dark', theme === 'dark');

      for (var os in controlGroups) {
        var show = os === curOS;
        controlGroups[os].classList.toggle('hidden', !show);
        controlGroups[os].classList.toggle('flex', show);
      }

      winEl.style.fontFamily = fonts[curOS];
      rootById('win-title').textContent = CONFIG.pageTitle;

      rootQueryAll('.os-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.os === curOS); });
      rootQueryAll('.th-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.theme === CONFIG.theme); });
      var autoBtn = rootById('theme-auto-btn');
      if (autoBtn) autoBtn.textContent = 'Auto (' + (darkMedia.matches ? 'dark' : 'light') + ')';
    }

    rootQueryAll('.os-btn').forEach(function (b) {
      b.addEventListener('click', function () { CONFIG.os = b.dataset.os; applyAll(); });
    });
    rootQueryAll('.th-btn').forEach(function (b) {
      b.addEventListener('click', function () { CONFIG.theme = b.dataset.theme; applyAll(); });
    });
    darkMedia.addEventListener('change', function () { applyAll(); });

    var vpOffsetX = 0, vpOffsetY = 0, vpMaxX = 0, vpMaxY = 0;
    var vpScale = 1, vpBaseWidth = 0;
    var vpMountedEl = null, vpMountedIsPage = false;
    var vpBound = false, vpObserver = null, vpDebounce = null, vpHardTimeout = null;
    var VP_DEBOUNCE_MS = 500, VP_MAX_WAIT_MS = 10000;

    function vpClip() { return rootById('viewport'); }
    function vpContent() { return rootById('viewport-content'); }

    function vpUpdateTransform() {
      var c = vpContent();
      if (!c) return;
      c.style.transformOrigin = '0 0';
      c.style.transform = 'translate(' + (-vpOffsetX) + 'px, ' + (-vpOffsetY) + 'px) scale(' + vpScale + ')';
    }

    function vpApplyScale() {
      var clip = vpClip(), c = vpContent();
      if (!clip || !c) return;
      var clipW = clip.clientWidth;
      var baseW = vpBaseWidth > 0 ? vpBaseWidth : clipW;
      c.style.width = baseW + 'px';
      vpScale = (baseW > 0) ? (clipW / baseW) : 1;
      if (!isFinite(vpScale) || vpScale <= 0) vpScale = 1;
      vpUpdateTransform();
    }

    function vpMeasure() {
      var clip = vpClip(), c = vpContent();
      if (!clip || !c) return;
      vpApplyScale();
      void c.offsetWidth;
      var clipW = clip.clientWidth, clipH = clip.clientHeight;
      var baseW = vpBaseWidth > 0 ? vpBaseWidth : clipW;

      if (vpMountedEl && vpMountedIsPage) {
        var minH = Math.max(0, Math.round(clipH / vpScale)) + 'px';
        if (vpMountedEl.style.minHeight !== minH) vpMountedEl.style.minHeight = minH;
      }

      var naturalW = Math.max(c.scrollWidth, baseW);
      var naturalH = c.scrollHeight;
      vpMaxX = Math.max(0, Math.round(naturalW * vpScale - clipW));
      vpMaxY = Math.max(0, Math.round(naturalH * vpScale - clipH));
      vpOffsetX = Math.min(vpOffsetX, vpMaxX);
      vpOffsetY = Math.min(vpOffsetY, vpMaxY);
      vpUpdateTransform();
    }

    function vpInside(x, y) {
      var clip = vpClip();
      if (!clip) return false;
      var r = clip.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    }

    function vpWheel(e) {
      if (!vpInside(e.clientX, e.clientY)) return;

      var cov = rootById('cert-overlay'), sov = rootById('sd-overlay');
      if ((cov && !cov.classList.contains('hidden')) || (sov && !sov.classList.contains('hidden'))) return;
      e.preventDefault();
      vpOffsetX = Math.min(vpMaxX, Math.max(0, vpOffsetX + e.deltaX));
      vpOffsetY = Math.min(vpMaxY, Math.max(0, vpOffsetY + e.deltaY));
      vpUpdateTransform();
    }

    function vpSettle() {
      clearTimeout(vpHardTimeout);
      vpMeasure();
    }

    function mountContent() {
      var c = vpContent();
      if (!c) return;
      var source = CONFIG.content;
      if (typeof source === 'function') { try { source = source(); } catch (err) { source = ''; } }

      vpOffsetX = 0; vpOffsetY = 0;

      Array.prototype.slice.call(browserHost.children).forEach(function (node) {
        if (node.getAttribute && node.getAttribute('slot') === 'mimic-content') node.remove();
      });

      var el = null;
      if (source instanceof Element) {
        el = source;
      } else if (typeof source === 'string' && source) {
        if (source.replace(/^\s+/, '').charAt(0) === '<') {
          el = document.createElement('div');
          el.innerHTML = source;
        } else {
          el = document.querySelector(source);
        }
      }

      var pageArea = rootQuery('.page-area');
      function paintSurface(surf) {
        if (!surf) return;
        var s = (source === hostContent && framedStyle) ? framedStyle : null;
        surf.style.backgroundColor = s ? s.backgroundColor : '';
        surf.style.backgroundImage = s ? s.backgroundImage : '';
        surf.style.backgroundSize = s ? s.backgroundSize : '';
        surf.style.backgroundPosition = s ? s.backgroundPosition : '';
        surf.style.backgroundRepeat = s ? s.backgroundRepeat : '';
        surf.style.backgroundOrigin = s ? s.backgroundOrigin : '';
        surf.style.backgroundClip = s ? s.backgroundClip : '';
        surf.style.backgroundBlendMode = s ? s.backgroundBlendMode : '';
        surf.style.backgroundAttachment = s ? s.backgroundAttachment : '';
      }
      paintSurface(pageArea);
      paintSurface(vpClip());

      if (CONFIG.contentWidth && CONFIG.contentWidth > 0) {
        vpBaseWidth = CONFIG.contentWidth;
      } else {

        vpBaseWidth = 0;
      }

      vpApplyScale();

      if (el) {
        el.setAttribute('slot', 'mimic-content');
        browserHost.appendChild(el);
      }
      vpMountedEl = el;
      vpMountedIsPage = (source === hostContent);

      vpMeasure();
      clearTimeout(vpDebounce); clearTimeout(vpHardTimeout);
      vpDebounce = setTimeout(vpSettle, VP_DEBOUNCE_MS);
      vpHardTimeout = setTimeout(vpSettle, VP_MAX_WAIT_MS);
    }

    function vpSetupOnce() {
      if (vpBound) return;
      vpBound = true;
      window.addEventListener('wheel', vpWheel, { passive: false });
      window.addEventListener('resize', vpMeasure);
      var c = vpContent();
      if (window.MutationObserver && c) {
        vpObserver = new MutationObserver(function () {
          clearTimeout(vpDebounce);
          vpDebounce = setTimeout(vpSettle, VP_DEBOUNCE_MS);
        });
        vpObserver.observe(browserHost, { childList: true, subtree: true, attributes: true, characterData: true });
      }
    }
    vpSetupOnce();

    refreshBrowser = function () { applyConfig(); applyAll(); };
    applyConfig();
    applyAll();

    var siteInfoBtn = rootById('site-info');
    var sitePopup = rootById('site-popup');
    var popupMain = rootById('popup-main');
    var popupSecurity = rootById('popup-security');
    var popupCookies = rootById('popup-cookies');

    function showMain() { popupMain.classList.remove('hidden'); popupSecurity.classList.add('hidden'); popupCookies.classList.add('hidden'); }
    function showSecurity() { popupSecurity.classList.remove('hidden'); popupMain.classList.add('hidden'); popupCookies.classList.add('hidden'); }
    function showCookies() { popupCookies.classList.remove('hidden'); popupMain.classList.add('hidden'); popupSecurity.classList.add('hidden'); }

    function openPopup() { showMain(); sitePopup.classList.remove('hidden', 'closing'); siteInfoBtn.setAttribute('aria-expanded', 'true'); }
    function closePopup() {
      if (sitePopup.classList.contains('hidden') || sitePopup.classList.contains('closing')) return;
      sitePopup.classList.add('closing');
      siteInfoBtn.setAttribute('aria-expanded', 'false');
      setTimeout(function () { sitePopup.classList.add('hidden'); sitePopup.classList.remove('closing'); }, 120);
    }
    function togglePopup() { sitePopup.classList.contains('hidden') ? openPopup() : closePopup(); }

    siteInfoBtn.addEventListener('click', function (e) { e.stopPropagation(); togglePopup(); });

    sitePopup.addEventListener('click', function (e) { e.stopPropagation(); });

    rootQueryAll('.popup-close').forEach(function (b) { b.addEventListener('click', closePopup); });

    rootQueryAll('.popup-back').forEach(function (b) { b.addEventListener('click', showMain); });

    rootQueryAll('.popup-row').forEach(function (row) {
      row.addEventListener('click', function () {
        row.style.background = 'var(--hover2)';
        setTimeout(function () { row.style.background = ''; }, 180);
        if (row.dataset.item === 'connection') showSecurity();
        if (row.dataset.item === 'cookies') showCookies();
        if (row.dataset.item === 'certificate') { closePopup(); openCert(); }
        if (row.dataset.item === 'manage-storage') { closePopup(); openSiteData(); }
        if (row.dataset.item === 'settings') { closePopup(); window.open(CONFIG.siteSettingsUrl, '_blank', 'noopener'); }
      });
    });

    document.addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePopup(); });

    window.addEventListener('blur', closePopup);

    var addrInput = rootById('addr-input');
    var addrUrlEl = rootById('addr-url');
    function syncUrlScroll() { addrUrlEl.scrollLeft = addrInput.scrollLeft; }

    addrInput.addEventListener('focus', function () {
      addrUrlEl.classList.add('scrolling');
      rootById('addr-scheme').textContent = CONFIG.scheme;
    });
    addrInput.addEventListener('blur', function () {
      addrUrlEl.classList.remove('scrolling');
      rootById('addr-scheme').textContent = '';
      addrInput.scrollLeft = 0; addrUrlEl.scrollLeft = 0;
      addrInput.setSelectionRange(0, 0);
    });
    addrInput.addEventListener('scroll', syncUrlScroll);

    addrInput.addEventListener('mouseup', function () {
      if (addrInput.selectionStart === addrInput.selectionEnd) {
        addrInput.select();
        addrInput.scrollLeft = 0; syncUrlScroll();
      }
    });

    addrInput.addEventListener('pointerdown', function () {
      var move = function () { syncUrlScroll(); };
      var up = function () { document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); };
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
    });

    window.addEventListener('blur', function () { addrInput.blur(); });

    document.addEventListener('mousedown', function (e) { if (!e.composedPath || e.composedPath().indexOf(addrInput) === -1) addrInput.blur(); });

    var certOverlay = rootById('cert-overlay');
    var certTabs = rootQueryAll('.cert-tab');
    var certGeneral = rootById('cert-general');
    var certDetails = rootById('cert-details');
    var certHierarchy = rootById('cert-hierarchy');
    var certFields = rootById('cert-fields');
    var certFieldValue = rootById('cert-field-value');

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    function certBlock(title, rows, mono) {
      var html = '<div class="cert-section-title">' + esc(title) + '</div>';
      rows.forEach(function (r) {
        html += '<div class="cert-row"><span class="cert-label">' + esc(r[0]) +
          '</span><span class="cert-value' + (mono ? ' cert-mono' : '') + '">' + esc(r[1]) + '</span></div>';
      });
      return '<div class="cert-block">' + html + '</div>';
    }

    function buildTreeNode(node, depth, scope, onSelect) {
      var wrapper = document.createElement('div');
      var row = document.createElement('div');
      row.className = 'tree-row';
      row.style.paddingLeft = (8 + depth * 16) + 'px';
      var hasKids = node.children && node.children.length;

      var caret = document.createElement('span');
      caret.className = 'tree-caret';
      caret.textContent = hasKids ? '\u25BE' : '';
      row.appendChild(caret);

      var label = document.createElement('span');
      label.className = 'tree-label';
      label.textContent = node.name;
      row.appendChild(label);
      wrapper.appendChild(row);

      if (hasKids) {
        var kids = document.createElement('div');
        node.children.forEach(function (ch) { kids.appendChild(buildTreeNode(ch, depth + 1, scope, onSelect)); });
        wrapper.appendChild(kids);
        caret.addEventListener('click', function (e) {
          e.stopPropagation();
          var collapsed = kids.classList.toggle('hidden');
          caret.textContent = collapsed ? '\u25B8' : '\u25BE';
        });
      }

      row.addEventListener('click', function () {
        scope.querySelectorAll('.tree-row.selected').forEach(function (r) { r.classList.remove('selected'); });
        row.classList.add('selected');
        if (onSelect) onSelect(node);
      });

      return wrapper;
    }

    function renderTree(container, root, onSelect) {
      container.innerHTML = '';
      container.appendChild(buildTreeNode(root, 0, container, onSelect));
    }

    function renderCertificate() {
      var c = CONFIG.certificate;
      rootById('cert-title').textContent = 'Certificate Viewer: ' + c.subject.commonName;

      certGeneral.innerHTML =
        certBlock('Issued To', [
          ['Common Name (CN)', c.subject.commonName],
          ['Organisation (O)', c.subject.organisation],
          ['Organisational Unit (OU)', c.subject.organisationalUnit]
        ]) +
        certBlock('Issued By', [
          ['Common Name (CN)', c.issuer.commonName],
          ['Organisation (O)', c.issuer.organisation],
          ['Organisational Unit (OU)', c.issuer.organisationalUnit]
        ]) +
        certBlock('Validity Period', [
          ['Issued On', c.validity.issuedOn],
          ['Expires On', c.validity.expiresOn]
        ]) +
        certBlock('SHA-256 Fingerprints', [
          ['Certificate', c.fingerprints.certificate],
          ['Public key', c.fingerprints.publicKey]
        ], true);

      renderTree(certHierarchy, c.hierarchy, null);
      renderTree(certFields, c.fields, function (node) { certFieldValue.textContent = node.value || ''; });
      certFieldValue.textContent = '';

      var hierRows = certHierarchy.querySelectorAll('.tree-row');
      if (hierRows.length) hierRows[hierRows.length - 1].classList.add('selected');
      var fieldRows = certFields.querySelectorAll('.tree-row');
      if (fieldRows.length) fieldRows[0].classList.add('selected');
    }

    function openCert() {
      renderCertificate();
      certTabs.forEach(function (t) { t.classList.toggle('active', t.dataset.tab === 'general'); });
      certGeneral.classList.remove('hidden');
      certDetails.classList.add('hidden');
      certOverlay.classList.remove('hidden');
    }
    function closeCert() { certOverlay.classList.add('hidden'); }

    certTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        certTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var general = tab.dataset.tab === 'general';
        certGeneral.classList.toggle('hidden', !general);
        certDetails.classList.toggle('hidden', general);
      });
    });

    rootById('cert-close').addEventListener('click', closeCert);
    certOverlay.addEventListener('click', function (e) { if (e.target === certOverlay) closeCert(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCert(); });

    var sdOverlay = rootById('sd-overlay');
    var sdSections = rootById('sd-sections');
    var sdManageLink = rootById('sd-manage-link');

    var SD_GLOBE = '<svg class="sd-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/></svg>';
    var SD_TRASH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/></svg>';
    var SD_BARS = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

    function renderSiteData() {
      var d = CONFIG.siteData;
      rootById('sd-intro-text').textContent = d.intro;
      sdManageLink.textContent = d.manageLinkText;
      if (d.manageUrl) { sdManageLink.href = d.manageUrl; sdManageLink.target = '_blank'; sdManageLink.rel = 'noopener noreferrer'; }
      else { sdManageLink.removeAttribute('href'); }

      var html = '';
      d.sections.forEach(function (sec) {
        html += '<div class="sd-section-title">' + esc(sec.title) + '</div>';
        html += '<div class="sd-section-desc">' + esc(sec.description) + '</div>';
        sec.sites.forEach(function (site) {
          html += '<div class="sd-row">' + SD_GLOBE +
            '<div class="sd-row-main"><div class="sd-site">' + esc(site.name) + '</div>' +
            (site.subtitle ? '<div class="sd-sub">' + esc(site.subtitle) + '</div>' : '') +
            '</div>' +
            '<button class="sd-icon-btn sd-delete" title="Delete">' + SD_TRASH + '</button>' +
            '<button class="sd-icon-btn sd-more" title="More options">' + SD_BARS + '</button>' +
            '</div>';
        });
      });
      sdSections.innerHTML = html;
    }

    sdSections.addEventListener('click', function (e) {
      var del = e.target.closest('.sd-delete');
      if (del) { var row = del.closest('.sd-row'); if (row) row.remove(); }
    });

    sdManageLink.addEventListener('click', function (e) { if (!CONFIG.siteData.manageUrl) e.preventDefault(); });

    function openSiteData() { renderSiteData(); sdOverlay.classList.remove('hidden'); }
    function closeSiteData() { sdOverlay.classList.add('hidden'); }

    rootById('sd-done').addEventListener('click', closeSiteData);
    sdOverlay.addEventListener('click', function (e) { if (e.target === sdOverlay) closeSiteData(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSiteData(); });

    var browserWindow = rootById('browser-window');
    var dragOffset = { x: 0, y: 0 };
    var maximized = false;

    function setMaximized(on) {
      maximized = on;
      if (on) {

        dragOffset.x = 0; dragOffset.y = 0;
        browserWindow.style.transform = 'none';
        browserWindow.style.width = 'min(calc(' + CONFIG.windowWidth + ' + 30vw), 100vw)';
        browserWindow.style.height = 'min(calc(' + CONFIG.windowHeight + ' + 30vh), 100vh)';
      } else {
        browserWindow.style.transform = '';
        browserWindow.style.width = CONFIG.windowWidth;
        browserWindow.style.height = CONFIG.windowHeight;
      }
      requestAnimationFrame(vpMeasure);
    }

    rootQueryAll('[data-win]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var action = btn.dataset.win;
        if (action === 'close' || action === 'min') closeWindow();
        else if (action === 'max') setMaximized(!maximized);
      });
    });

    (function () {
      var handle = rootQuery('.title-bar');
      var dragging = false, startX = 0, startY = 0, baseX = 0, baseY = 0;
      var originLeft = 0, originTop = 0, w = 0, h = 0;

      handle.addEventListener('pointerdown', function (e) {
        if (e.target.closest('button') || e.target.closest('[data-win]')) return;
        if (maximized) return;
        closePopup();
        var rect = browserWindow.getBoundingClientRect();
        originLeft = rect.left - dragOffset.x;
        originTop = rect.top - dragOffset.y;
        w = rect.width; h = rect.height;
        baseX = dragOffset.x; baseY = dragOffset.y;
        startX = e.clientX; startY = e.clientY;
        dragging = true;
        handle.classList.add('dragging');
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
        try { handle.setPointerCapture(e.pointerId); } catch (_) { }
      });

      handle.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        var proposedX = baseX + (e.clientX - startX);
        var proposedY = baseY + (e.clientY - startY);

        var maxLeft = Math.max(0, window.innerWidth - w);
        var maxTop = Math.max(0, window.innerHeight - h);
        var left = Math.min(Math.max(originLeft + proposedX, 0), maxLeft);
        var top = Math.min(Math.max(originTop + proposedY, 0), maxTop);
        dragOffset.x = left - originLeft;
        dragOffset.y = top - originTop;
        browserWindow.style.transform = 'translate(' + dragOffset.x + 'px,' + dragOffset.y + 'px)';
      });

      function end(e) {
        if (!dragging) return;
        dragging = false;
        handle.classList.remove('dragging');
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        try { handle.releasePointerCapture(e.pointerId); } catch (_) { }
      }
      handle.addEventListener('pointerup', end);
      handle.addEventListener('pointercancel', end);
    })();
  }

  var DEFAULT_LANDING = `
      <div style="position:absolute; inset:0; display:flex; flex-direction:column; font-family:Arial,Helvetica,sans-serif; background:#f3f5f8; color:#202124;">
        <div style="flex-shrink:0; height:56px; background:#130032; color:#fff; display:flex; align-items:center; justify-content:flex-start; padding:0 24px;">
          <div style="display:flex; align-items:center; gap:10px; font-size:15px; font-weight:600;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
            <span>Sign in to view the document</span>
          </div>
        </div>
        <div style="flex:1; position:relative; overflow:hidden; background:#f3f5f8;">
          <div style="position:absolute; inset:0; overflow:hidden; filter:blur(5px);">
            <div style="transform:scale(1.03); transform-origin:top center; padding:24px 0;">
              <div style="max-width:816px; margin:0 auto;">
                <div style="background:#fff; border:1px solid #e5e7eb; box-shadow:0 1px 4px rgba(0,0,0,.08); padding:44px 64px; color:#111;">
                  <div style="font-size:11px; color:#555; margin:0 0 40px;">Signflow Envelope ID: 98B69EB5-DD6A-8C6E-8251-305CF13D25B7</div>
                  <h1 style="text-align:center; font-size:19px; font-weight:700; letter-spacing:.3px; margin:0 0 34px; color:#111;">UNILATERAL NON-DISCLOSURE AGREEMENT</h1>
                  <div style="font-size:12px; font-weight:700; margin:0 0 12px;">BETWEEN</div>
                  <div style="display:flex; font-size:12.5px; line-height:1.9; margin:0 0 2px; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">1.</div>
                    <div style="flex:1;"><span style="display:inline-block; width:250px; border-bottom:1px solid #111;"></span>, (the "Disclosing Party"); and</div>
                  </div>
                  <div style="display:flex; font-size:12.5px; line-height:1.9; margin:0 0 20px; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">2.</div>
                    <div style="flex:1;"><span style="display:inline-block; width:250px; border-bottom:1px solid #111;"></span>, (the "Receiving Party"), collectively referred to as the "Parties".</div>
                  </div>
                  <div style="font-size:12px; font-weight:700; margin:0 0 12px;">RECITALS</div>
                  <div style="display:flex; font-size:12.5px; line-height:1.7; margin:0 0 22px; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">A.</div>
                    <div style="flex:1;">
                      The Receiving Party understands that the Disclosing Party has disclosed or may disclose information relating to
                      <div style="border-bottom:1px solid #111; height:1px; margin:20px 0;"></div>
                      <div style="border-bottom:1px solid #111; height:1px; margin:20px 0;"></div>
                      which to the extent previously, presently, or subsequently disclosed to the Receiving Party is hereinafter referred to as "Proprietary Information" of the Disclosing Party.
                    </div>
                  </div>
                  <div style="font-size:12px; font-weight:700; margin:0 0 12px;">OPERATIVE PROVISIONS</div>
                  <div style="display:flex; font-size:12.5px; line-height:1.7; margin:0 0 14px; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">1.</div>
                    <div style="flex:1;">In consideration of the disclosure of Proprietary Information by the Disclosing Party, the Receiving Party hereby agrees: (i) to hold the Proprietary Information in strict confidence and to take all reasonable precautions to protect such Proprietary Information (including, without limitation, all precautions the Receiving Party employs with respect to its own confidential materials), (ii) not to disclose any such Proprietary Information or any information derived therefrom to any third person, (iii) not to make any use whatsoever at any time of such Proprietary Information except to evaluate internally its relationship with the Disclosing Party, and (iv) not to copy or reverse engineer any such Proprietary Information. The Receiving Party shall procure that its employees, agents and sub-contractors to whom Proprietary Information is disclosed or who have access to Proprietary Information sign a nondisclosure or similar agreement in content substantially similar to this Agreement</div>
                  </div>
                  <div style="display:flex; font-size:12.5px; line-height:1.7; margin:0 0 30px; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">2.</div>
                    <div style="flex:1;">Without granting any right or license, the Disclosing Party agrees that the foregoing shall not apply with respect to any information after five years following the disclosure thereof or any information that the Receiving Party can document (i) is or becomes (through no improper action or inaction by the Receiving Party or any affiliate, agent, consultant or employee) generally available to the public, or (ii) was in its possession or known by it prior to receipt from the Disclosing Party as evidenced in writing, except to the extent that such information was unlawfully appropriated, or (iii) was rightfully disclosed to it by a third party, or (iv) was independently developed without use of any Proprietary Information of the Disclosing Party. The Receiving Party may make disclosures required by law or court order provided the Receiving Party uses diligent reasonable efforts to limit disclosure and has allowed the Disclosing Party to seek a protective order.</div>
                  </div>
                  <div style="font-size:11px; color:#333; margin:0;">Copyright &copy; 2018 by NonDisclosureAgreements.com</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 6px; font-size:12px; color:#6b7280;">
                  <span>Unilateral Non-Disclosure Agreement Template.pdf</span>
                  <span>1 of 2</span>
                </div>
                <div style="background:#fff; border:1px solid #e5e7eb; box-shadow:0 1px 4px rgba(0,0,0,.08); padding:40px 64px 90px; color:#111;">
                  <div style="font-size:11px; color:#555; margin:0 0 34px;">Signflow Envelope ID: 98B69EB5-DD6A-8C6E-8251-305CF13D25B7</div>
                  <div style="display:flex; font-size:12.5px; line-height:1.7; padding-left:24px;">
                    <div style="width:26px; flex-shrink:0;">2.</div>
                    <div style="flex:1;">Immediately upon the written request by the Disclosing Party at any time, the Receiving Party will return to the Disclosing Party all Proprietary Information, and all documents or media containing any such Proprietary Information and any and all copies or extracts thereof.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="position:absolute; inset:0; background:rgba(31,34,40,0.55);"></div>
          <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding:20px;">
            <div style="width:min(430px,calc(100% - 40px)); background:#fff; border-radius:16px; padding:38px; text-align:center; box-shadow:0 25px 70px rgba(0,0,0,.45);">
              <div style="width:56px; height:56px; margin:0 auto 20px; border-radius:50%; background:#eff6ff; color:#0067b8; display:flex; align-items:center; justify-content:center;">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
              </div>
              <h2 style="margin:0 0 10px; font-size:24px; color:#111;">Someone sent you a document</h2>
              <p style="margin:0 0 20px; font-size:12px; color:#363636; font-weight: bold;">Acme_Corp_NDA.pdf</p>
              <p style="color:#64748b; line-height:1.5; margin:0 0 25px; font-size:14px;">This document is protected. Sign in to view the document and continue signing.</p>
              <div style="display:flex; justify-content:center;">
                <button id="microsoft-signin-btn" type="button"
                  style="display:flex;align-items:center;gap:10px;padding:10px 16px;background:#242323;color:#fff;border:1px solid #8c8c8c;border-radius:2px;font-family:Segoe UI,Arial,sans-serif;font-size:15px;font-weight:600;cursor:pointer;">
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#F35325" d="M1 1h10.5v10.5H1z" />
                    <path fill="#81BC06" d="M12.5 1H23v10.5H12.5z" />
                    <path fill="#05A6F0" d="M1 12.5h10.5V23H1z" />
                    <path fill="#FFBA08" d="M12.5 12.5H23V23H12.5z" />
                  </svg>
                  <span>Login with Microsoft</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style="flex-shrink:0; height:46px; background:#fff; border-top:1px solid #e1e4e8; display:flex; align-items:center; justify-content:center; gap:18px; font-size:13px; color:#6b7280;">
          <span style="display:inline-flex; align-items:center; gap:6px; border:1px solid #cfd3d9; border-radius:4px; padding:4px 10px; color:#3c4043;">English (US) <span style="font-size:10px;">&#9662;</span></span>
          <span style="cursor:pointer;">Terms of Use</span>
          <span style="color:#c7ccd3;">|</span>
          <span style="cursor:pointer;">Privacy</span>
        </div>
      </div>`;

  var hostContent = null;
  var landingOverlay = null;
  var framedStyle = null;

  function captureHostPage() {
    if (hostContent) return hostContent;

    var bodyCS = getComputedStyle(document.body);
    var htmlCS = getComputedStyle(document.documentElement);
    function opaque(c) { return c && c !== 'transparent' && c !== 'rgba(0, 0, 0, 0)'; }
    var colorSrc = opaque(bodyCS.backgroundColor) ? bodyCS
                 : opaque(htmlCS.backgroundColor) ? htmlCS : null;
    var imageSrc = (bodyCS.backgroundImage && bodyCS.backgroundImage !== 'none') ? bodyCS
                 : (htmlCS.backgroundImage && htmlCS.backgroundImage !== 'none') ? htmlCS : null;
    framedStyle = {
      backgroundColor: colorSrc ? colorSrc.backgroundColor : '#ffffff',
      backgroundImage: imageSrc ? imageSrc.backgroundImage : 'none',
      backgroundSize: imageSrc ? imageSrc.backgroundSize : '',
      backgroundPosition: imageSrc ? imageSrc.backgroundPosition : '',
      backgroundRepeat: imageSrc ? imageSrc.backgroundRepeat : '',
      backgroundOrigin: imageSrc ? imageSrc.backgroundOrigin : '',
      backgroundClip: imageSrc ? imageSrc.backgroundClip : '',
      backgroundBlendMode: imageSrc ? imageSrc.backgroundBlendMode : '',
      backgroundAttachment: 'scroll',
      color: bodyCS.color,
      fontFamily: bodyCS.fontFamily,
      fontSize: bodyCS.fontSize,
      lineHeight: bodyCS.lineHeight,
      baseWidth: window.innerWidth || document.documentElement.clientWidth || 0
    };

    var wrap = document.createElement('div');
    wrap.id = 'main-page-content';
    wrap.style.display = 'none';

    wrap.style.position = 'relative';

    wrap.style.color = framedStyle.color;
    wrap.style.fontFamily = framedStyle.fontFamily;
    wrap.style.lineHeight = framedStyle.lineHeight;
    wrap.style.fontSize = framedStyle.fontSize;

    function isScaffold(node) {
      if (node.nodeType !== 1) return false;
      var id = node.id, tag = node.tagName;
      if (id === 'mimic-browser-host' || id === 'landingpage-overlay' || id === 'main-page-content') return true;
      return tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' || tag === 'TEMPLATE';
    }
    Array.prototype.slice.call(document.body.childNodes).forEach(function (node) {
      if (!isScaffold(node)) wrap.appendChild(node);
    });
    document.body.appendChild(wrap);
    hostContent = wrap;
    return wrap;
  }

  function sendLandingBehind() {
    if (!landingOverlay) return;
    landingOverlay.style.zIndex = '1';
    landingOverlay.style.pointerEvents = 'none';
  }
  function bringLandingFront() {
    if (!landingOverlay) return;
    landingOverlay.style.zIndex = '2147483647';
    landingOverlay.style.pointerEvents = 'auto';
  }

  function showLanding(onEnter) {
    if (landingOverlay) { bringLandingFront(); return; }
    landingOverlay = document.createElement('div');
    landingOverlay.id = 'landingpage-overlay';
    landingOverlay.style.cssText =
      'position:fixed; inset:0; width:100%; height:100%; z-index:2147483647;';
    landingOverlay.innerHTML = (typeof CONFIG.landing === 'string') ? CONFIG.landing : DEFAULT_LANDING;
    document.body.appendChild(landingOverlay);
    if(CONFIG.autoOpen) {
      onEnter();
    }
    landingOverlay.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest(CONFIG.enterSelector) : null;
      if (!btn) return;
      onEnter();
    });
  }

  function openBrowserWindow(opts) {
    deepMerge(CONFIG, opts || {});

    enforceDocumentTitle();
    enforceDocumentFavicon();

    if (!CONFIG.content) {
      var page = captureHostPage();
      page.style.display = 'flow-root';
      page.style.width = '100%';
      page.style.height = 'auto';
      page.style.margin = '0';
      CONFIG.content = page;
    }

    if (CONFIG.landing === false) { openWindow(); return; }

    CONFIG.onClose = bringLandingFront;

    showLanding(function () {
      sendLandingBehind();
      openWindow();
    });
  }

  window.openBrowserWindow = openBrowserWindow;

})();
