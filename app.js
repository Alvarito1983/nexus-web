const i18n = {
  en: {
    'nav.github': 'GitHub',
    'nav.dockerhub': 'Docker Hub',
    'nav.getstarted': 'Get started',
    'hero.badge': 'Open source · MIT License',
    'hero.title': 'Docker management.<br/><span class="accent">Done right.</span>',
    'hero.sub': 'A lightweight, beautiful panel to manage your Docker containers — built as a real alternative to Portainer. No bloat. No complexity. Just control.',
    'hero.install': 'Quick install',
    'hero.cta': 'View on GitHub →',
    'hero.stat1': 'command to install',
    'hero.stat3': 'license',
    'screen.placeholder': 'Add your screenshot here',
    'why.label': 'Why NEXUS',
    'why.title': 'Portainer is powerful.<br/>NEXUS is <span class="accent">yours</span>.',
    'why.desc': 'Portainer is great — for enterprises. But for homelab enthusiasts and small teams, it\'s overkill. NEXUS gives you 90% of what you need in 10% of the complexity.',
    'compare.1': '✓ One docker compose up',
    'compare.2': '✓ No external database',
    'compare.3': '✓ Secure multi-host architecture',
    'compare.4': '✓ 58 MB total size',
    'features.label': 'Features',
    'features.title': 'Everything you need.<br/>Nothing you don\'t.',
    'f1.title': 'Real-time metrics',
    'f1.desc': 'CPU & RAM per container with live sparkline history. Know what\'s happening at a glance.',
    'f2.title': 'Multi-host support',
    'f2.desc': 'Manage multiple Docker servers from one panel. Secure agent-based architecture — the socket never leaves the host.',
    'f3.title': 'Integrated terminal',
    'f3.desc': 'docker exec directly from the browser. No SSH, no extra tools needed.',
    'f4.title': 'Image management',
    'f4.desc': 'List, inspect, pull from Docker Hub and remove local images. Full control over your registry.',
    'f5.title': 'Crash alerts',
    'f5.desc': 'Real-time notifications when a container stops unexpectedly. Telegram integration included.',
    'f6.title': 'Stack view',
    'f6.desc': 'Containers grouped by docker-compose project. Deploy, edit and manage stacks directly from the UI.',
    'f7.title': 'Multi-user',
    'f7.desc': 'Admin and Viewer roles. Manage who can access and what they can do.',
    'f8.title': 'PWA + Mobile',
    'f8.desc': 'Installable as a desktop or mobile app. Fully responsive, works everywhere.',
    'f9.title': 'Network management',
    'f9.desc': 'List, create, delete and inspect Docker networks. Full control over your container networking.',
    'f10.title': 'Volume management',
    'f10.desc': 'List, create, delete and inspect Docker volumes. Manage persistent data with ease.',
    'f11.title': 'Event history',
    'f11.desc': 'Full audit log of all actions, logins and config changes. Know exactly what happened and when.',
    'f12.title': 'Deploy stacks',
    'f12.desc': 'Deploy docker-compose stacks directly from the UI with a built-in YAML editor. No CLI needed.',
    'sec.title': 'Security by design',
    'sec.desc': 'Most multi-host Docker panels expose the Docker socket over TCP — that\'s root access over the network. NEXUS works differently: a lightweight agent runs on each remote host, wraps the socket in its own authenticated API, and only exposes the endpoints it needs. <strong>The socket never leaves the host.</strong>',
    'sec.1': 'Socket never exposed over network',
    'sec.2': 'JWT authentication with 24h expiry',
    'sec.3': 'Minimal API surface — only what\'s needed',
    'sec.4': 'No external database or cloud dependency',
    'cta.title': 'Ready to take control?',
    'cta.desc': 'One command. Your Docker infrastructure, under control.',
    'cta.github': 'View on GitHub →',
    'cta.hub': 'Docker Hub',
    'footer.copy': '© 2026 alvaro_lab · MIT License',
  },
  es: {
    'nav.github': 'GitHub',
    'nav.dockerhub': 'Docker Hub',
    'nav.getstarted': 'Empezar',
    'hero.badge': 'Código abierto · Licencia MIT',
    'hero.title': 'Gestión de Docker.<br/><span class="accent">Como debe ser.</span>',
    'hero.sub': 'Un panel ligero y elegante para gestionar tus contenedores Docker — construido como alternativa real a Portainer. Sin complejidad. Sin bloat. Solo control.',
    'hero.install': 'Instalación rápida',
    'hero.cta': 'Ver en GitHub →',
    'hero.stat1': 'comando para instalar',
    'hero.stat3': 'licencia',
    'screen.placeholder': 'Añade tu captura de pantalla aquí',
    'why.label': 'Por qué NEXUS',
    'why.title': 'Portainer es potente.<br/>NEXUS es <span class="accent">tuyo</span>.',
    'why.desc': 'Portainer está bien — para empresas. Pero para homelabs y equipos pequeños es demasiado. NEXUS te da el 90% de lo que necesitas con el 10% de la complejidad.',
    'compare.1': '✓ Un solo docker compose up',
    'compare.2': '✓ Sin base de datos externa',
    'compare.3': '✓ Arquitectura multi-host segura',
    'compare.4': '✓ Solo 58 MB de tamaño total',
    'features.label': 'Características',
    'features.title': 'Todo lo que necesitas.<br/>Nada más.',
    'f1.title': 'Métricas en tiempo real',
    'f1.desc': 'CPU y RAM por contenedor con historial en sparklines. Sabe qué pasa de un vistazo.',
    'f2.title': 'Multi-host',
    'f2.desc': 'Gestiona múltiples servidores Docker desde un panel. Arquitectura segura — el socket nunca sale del host.',
    'f3.title': 'Terminal integrada',
    'f3.desc': 'docker exec directamente desde el navegador. Sin SSH, sin herramientas extra.',
    'f4.title': 'Gestión de imágenes',
    'f4.desc': 'Lista, inspecciona, descarga de Docker Hub y elimina imágenes locales. Control total.',
    'f5.title': 'Alertas de caídas',
    'f5.desc': 'Notificaciones en tiempo real cuando un contenedor para inesperadamente. Integración con Telegram incluida.',
    'f6.title': 'Vista de stacks',
    'f6.desc': 'Contenedores agrupados por proyecto docker-compose. Despliega, edita y gestiona stacks desde la UI.',
    'f7.title': 'Multi-usuario',
    'f7.desc': 'Roles Admin y Viewer. Gestiona quién puede acceder y qué puede hacer.',
    'f8.title': 'PWA + Móvil',
    'f8.desc': 'Instalable como app de escritorio o móvil. Totalmente responsive, funciona en todas partes.',
    'f9.title': 'Gestión de redes',
    'f9.desc': 'Lista, crea, elimina e inspecciona redes Docker. Control total sobre tu red de contenedores.',
    'f10.title': 'Gestión de volúmenes',
    'f10.desc': 'Lista, crea, elimina e inspecciona volúmenes Docker. Gestiona los datos persistentes fácilmente.',
    'f11.title': 'Historial de eventos',
    'f11.desc': 'Log de auditoría completo de todas las acciones, logins y cambios de configuración.',
    'f12.title': 'Desplegar stacks',
    'f12.desc': 'Despliega stacks docker-compose directamente desde la UI con un editor YAML integrado. Sin CLI.',
    'sec.title': 'Seguridad por diseño',
    'sec.desc': 'La mayoría de paneles multi-host exponen el socket Docker sobre TCP — eso es acceso root sobre la red. NEXUS funciona diferente: un agente ligero corre en cada host remoto, envuelve el socket en su propia API autenticada, y solo expone los endpoints necesarios. <strong>El socket nunca sale del host.</strong>',
    'sec.1': 'Socket nunca expuesto sobre la red',
    'sec.2': 'Autenticación JWT con expiración 24h',
    'sec.3': 'Superficie de API mínima',
    'sec.4': 'Sin base de datos ni dependencia en la nube',
    'cta.title': '¿Listo para tomar el control?',
    'cta.desc': 'Un comando. Tu infraestructura Docker, bajo control.',
    'cta.github': 'Ver en GitHub →',
    'cta.hub': 'Docker Hub',
    'footer.copy': '© 2026 alvaro_lab · Licencia MIT',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langBtn').textContent = lang === 'en' ? 'ES' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val) el.innerHTML = val;
  });
}

document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText('docker compose up -d').then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00c896" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
    setTimeout(() => {
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    }, 2000);
  });
});

applyLang(currentLang);
