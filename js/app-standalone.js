/**
 * VÃ‰RTICE FITNESS - AplicaÃ§Ã£o Principal e Gerenciamento de Estado
 * Desenvolvido com padrÃ£o modular e reativo
 */



class VerticeApp {
  constructor() {
    this.initDatabase();
    this.currentUser = this.loadCurrentUser();
    this.currentView = 'inicio';
    this.map = null;
    this.markersGroup = null;
    this.selectedRegion = 'Todas';
    this.selectedCategory = 'Todos';
    this.selectedPersonal = null;
    this.activePersonalStep = 1;
    this.personalBookingData = {
      date: '',
      timeSlot: '',
      locationRegion: '',
      selectedGymId: null,
      personalId: null,
      notes: ''
    };

    document.addEventListener('DOMContentLoaded', () => {
      this.initUI();
      this.renderAll();
    });
  }

  // --- 1. INICIALIZAÃ‡ÃƒO DE DADOS & STORAGE ---
  initDatabase() {
    if (!localStorage.getItem(STORAGE_KEYS.GYMS)) {
      localStorage.setItem(STORAGE_KEYS.GYMS, JSON.stringify(INITIAL_GYMS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.EXERCISES)) {
      localStorage.setItem(STORAGE_KEYS.EXERCISES, JSON.stringify(INITIAL_EXERCISES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PERSONALS)) {
      localStorage.setItem(STORAGE_KEYS.PERSONALS, JSON.stringify(INITIAL_PERSONALS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CLIENTS)) {
      localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(INITIAL_CLIENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PROMOTIONS)) {
      localStorage.setItem(STORAGE_KEYS.PROMOTIONS, JSON.stringify(INITIAL_PROMOTIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.MEDICAL_APPOINTMENTS)) {
      localStorage.setItem(STORAGE_KEYS.MEDICAL_APPOINTMENTS, JSON.stringify(INITIAL_MEDICAL_APPOINTMENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PERSONAL_BOOKINGS)) {
      localStorage.setItem(STORAGE_KEYS.PERSONAL_BOOKINGS, JSON.stringify(INITIAL_PERSONAL_BOOKINGS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PAYMENTS)) {
      localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(INITIAL_PAYMENTS));
    }
  }

  loadCurrentUser() {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return saved ? JSON.parse(saved) : null;
  }

  saveCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      // Sincroniza na lista geral de clientes
      const clients = this.getClients();
      const idx = clients.findIndex(c => c.id === user.id);
      if (idx !== -1) {
        clients[idx] = user;
        localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
      }
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  }

  // Getters do Storage
  getGyms() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.GYMS)) || []; }
  getExercises() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISES)) || []; }
  getPersonals() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PERSONALS)) || []; }
  getClients() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.CLIENTS)) || []; }
  getPromotions() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROMOTIONS)) || []; }
  getMedicalAppointments() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.MEDICAL_APPOINTMENTS)) || []; }
  getPersonalBookings() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PERSONAL_BOOKINGS)) || []; }
  getPayments() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PAYMENTS)) || []; }

  // --- 2. INICIALIZAÃ‡ÃƒO DE UI & LISTENERS ---
  initUI() {
    this.setupNavbar();
    this.setupModals();
    this.setupEventListeners();
    this.setupMap();

    // Roteamento de Abas Dedicadas (InÃ­cio, Academias, Planos, ExercÃ­cios, Personal, AvaliaÃ§Ã£o MÃ©dica)
    const initialHash = window.location.hash.replace('#', '');
    const validViews = ['inicio', 'academias', 'planos', 'exercicios', 'personal', 'avaliacao-medica'];
    if (initialHash && validViews.includes(initialHash)) {
      this.switchView(initialHash);
    } else {
      this.switchView('inicio');
    }

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== this.currentView && validViews.includes(hash)) {
        this.switchView(hash);
      }
    });
  }

  // Alterna entre as abas/telas dedicadas sem rolar a pÃ¡gina
  switchView(viewName) {
    const validViews = ['inicio', 'academias', 'planos', 'exercicios', 'personal', 'avaliacao-medica'];
    if (!validViews.includes(viewName)) {
      viewName = 'inicio';
    }

    this.currentView = viewName;

    // Oculta todas as outras pÃ¡ginas/telas
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.add('hidden');
    });

    // Exibe apenas a tela solicitada
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.remove('hidden');
    }

    // Atualiza a aparÃªncia visual da aba ativa no menu superior e mobile
    document.querySelectorAll('.nav-view-btn').forEach(btn => {
      const btnView = btn.getAttribute('data-nav-view');
      if (btnView === viewName) {
        btn.classList.add('bg-vertice-wine', 'text-white', 'font-semibold');
        btn.classList.remove('text-gray-300', 'hover:bg-white/5');
      } else {
        btn.classList.remove('bg-vertice-wine', 'text-white', 'font-semibold');
        btn.classList.add('text-gray-300');
      }
    });

    // Fecha o menu mÃ³vel se estiver aberto
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    // Leva suavemente ao topo da nova tela aberta
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Atualiza o mapa se a aba de academias foi aberta
    if (viewName === 'academias' && this.map) {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 150);
    }

    // Atualiza a URL do navegador
    try {
      history.replaceState(null, null, `#${viewName}`);
    } catch (e) {}
  }

  setupNavbar() {
    const mobileBtn = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  setupModals() {
    // Fechamento de modais com botÃ£o ou clique no backdrop
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modalId = e.currentTarget.getAttribute('data-close-modal');
        this.closeModal(modalId);
      });
    });

    document.querySelectorAll('.vertice-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal.id);
        }
      });
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  setupEventListeners() {
    // Filtro de RegiÃ£o das Academias
    const regionSelect = document.getElementById('gym-region-filter');
    if (regionSelect) {
      regionSelect.addEventListener('change', (e) => {
        this.selectedRegion = e.target.value;
        this.renderGyms();
      });
    }

    // Busca de Academias por Nome/EndereÃ§o/CEP
    const gymSearchInput = document.getElementById('gym-search-input');
    if (gymSearchInput) {
      gymSearchInput.addEventListener('input', () => {
        this.renderGyms();
      });
    }

    // BotÃ£o de Usar Minha LocalizaÃ§Ã£o
    const btnGeo = document.getElementById('btn-use-geolocation');
    if (btnGeo) {
      btnGeo.addEventListener('click', () => {
        this.handleGeolocation();
      });
    }

    // Alternar visualizaÃ§Ã£o Lista / Mapa
    const btnViewList = document.getElementById('btn-view-list');
    const btnViewMap = document.getElementById('btn-view-map');
    const gymsListView = document.getElementById('gyms-list-view');
    const gymsMapView = document.getElementById('gyms-map-view');

    if (btnViewList && btnViewMap) {
      btnViewList.addEventListener('click', () => {
        btnViewList.classList.add('bg-vertice-wine', 'text-white');
        btnViewList.classList.remove('text-gray-400');
        btnViewMap.classList.remove('bg-vertice-wine', 'text-white');
        btnViewMap.classList.add('text-gray-400');
        gymsListView.classList.remove('hidden');
        gymsMapView.classList.add('hidden');
      });

      btnViewMap.addEventListener('click', () => {
        btnViewMap.classList.add('bg-vertice-wine', 'text-white');
        btnViewMap.classList.remove('text-gray-400');
        btnViewList.classList.remove('bg-vertice-wine', 'text-white');
        btnViewList.classList.add('text-gray-400');
        gymsMapView.classList.remove('hidden');
        gymsListView.classList.add('hidden');
        if (this.map) {
          setTimeout(() => { this.map.invalidateSize(); }, 200);
        }
      });
    }

    // FormulÃ¡rio de Login
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
      formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }

    // FormulÃ¡rio de Alterar Senha
    const formChangePassword = document.getElementById('form-change-password');
    if (formChangePassword) {
      formChangePassword.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleChangePassword();
      });
    }

    // FormulÃ¡rio de Recuperar Senha
    const formForgot = document.getElementById('form-forgot-password');
    if (formForgot) {
      formForgot.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleForgotPassword();
      });
    }

    // FormulÃ¡rio de Cadastro / MatrÃ­cula
    const formRegister = document.getElementById('form-register');
    if (formRegister) {
      formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleRegister();
      });
    }

    // FormulÃ¡rio de AvaliaÃ§Ã£o MÃ©dica Gratuita
    const formMedical = document.getElementById('form-medical-booking');
    if (formMedical) {
      formMedical.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleMedicalBooking();
      });
    }

    // Tabs da Ãrea do Cliente
    document.querySelectorAll('.client-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabId = e.currentTarget.getAttribute('data-tab');
        this.switchClientTab(tabId);
      });
    });

    // Logout
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        this.handleLogout();
      });
    }

    // Login Demo Aluno 1-Click
    const btnDemoStudent = document.getElementById('btn-demo-student');
    if (btnDemoStudent) {
      btnDemoStudent.addEventListener('click', () => {
        const student = this.getClients().find(c => c.role === 'client');
        if (student) {
          this.saveCurrentUser(student);
          this.closeModal('modal-auth');
          this.showToast(`Bem-vindo de volta, ${student.name}!`, 'success');
          this.renderAuthNav();
          this.renderClientDashboard();
          this.openModal('modal-client-dashboard');
        }
      });
    }

    // Login Demo Admin 1-Click
    const btnDemoAdmin = document.getElementById('btn-demo-admin');
    if (btnDemoAdmin) {
      btnDemoAdmin.addEventListener('click', () => {
        const admin = this.getClients().find(c => c.role === 'admin');
        if (admin) {
          this.saveCurrentUser(admin);
          this.closeModal('modal-auth');
          this.showToast(`Painel de AdministraÃ§Ã£o Ativo!`, 'success');
          this.renderAuthNav();
          this.openModal('modal-admin-dashboard');
          this.renderAdminDashboard();
        }
      });
    }

    // FormulÃ¡rio de Nova Academia (Admin)
    const formNewGym = document.getElementById('form-new-gym');
    if (formNewGym) {
      formNewGym.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveNewGym();
      });
    }
  }

  // --- 3. RENDERIZAÃ‡ÃƒO GERAL ---
  renderAll() {
    this.renderAuthNav();
    this.renderGyms();
    this.renderExercises();
    this.renderPromotions();
    this.renderPersonals();
    this.populateGymSelectOptions();
    if (this.currentUser) {
      this.renderClientDashboard();
    }
  }

  // Render do CabeÃ§alho de AutenticaÃ§Ã£o (Login vs Minha Conta)
  renderAuthNav() {
    const container = document.getElementById('nav-auth-container');
    const mobileContainer = document.getElementById('mobile-nav-auth-container');

    const html = this.currentUser ? `
      <div class="flex items-center gap-3">
        ${this.currentUser.role === 'admin' ? `
          <button id="btn-open-admin-nav" class="px-3 py-1.5 rounded-md bg-vertice-navy text-xs font-semibold text-blue-300 hover:bg-blue-900 border border-blue-700/50 transition">
            âš™ï¸ Painel Admin
          </button>
        ` : ''}
        <button id="btn-open-client-nav" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2 border border-vertice-wine/40 hover:border-vertice-wine transition text-sm">
          <img src="${this.currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'}" class="w-6 h-6 rounded-full object-cover">
          <span class="font-medium text-white max-w-[120px] truncate">${this.currentUser.name.split(' ')[0]}</span>
          <span class="text-xs text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">Ãrea Aluno</span>
        </button>
        <button id="btn-logout-nav" title="Sair da conta" class="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        </button>
      </div>
    ` : `
      <button id="btn-open-login-nav" class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition">
        Entrar
      </button>
      <button id="btn-open-enroll-nav" class="btn-vertice-primary px-4 py-2 text-sm">
        Matricule-se agora
      </button>
    `;

    if (container) container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;

    // Conectar eventos dinÃ¢micos nos botÃµes de autenticaÃ§Ã£o
    if (this.currentUser) {
      const openClient = document.querySelectorAll('#btn-open-client-nav');
      openClient.forEach(b => b.addEventListener('click', () => {
        this.renderClientDashboard();
        this.openModal('modal-client-dashboard');
      }));

      const openAdmin = document.querySelectorAll('#btn-open-admin-nav');
      openAdmin.forEach(b => b.addEventListener('click', () => {
        this.renderAdminDashboard();
        this.openModal('modal-admin-dashboard');
      }));

      const logoutBtns = document.querySelectorAll('#btn-logout-nav');
      logoutBtns.forEach(b => b.addEventListener('click', () => this.handleLogout()));
    } else {
      const loginBtns = document.querySelectorAll('#btn-open-login-nav');
      loginBtns.forEach(b => b.addEventListener('click', () => {
        this.openModal('modal-auth');
      }));

      const enrollBtns = document.querySelectorAll('#btn-open-enroll-nav');
      enrollBtns.forEach(b => b.addEventListener('click', () => {
        this.openModal('modal-enroll');
      }));
    }
  }

  // --- 4. SISTEMA DE ACADEMIAS & MAPA DE SÃƒO PAULO (89 UNIDADES) ---
  renderGyms() {
    const gyms = this.getGyms();
    const searchVal = (document.getElementById('gym-search-input')?.value || '').toLowerCase().trim();
    const container = document.getElementById('gyms-cards-container');
    const countBadge = document.getElementById('gyms-count-badge');

    const filtered = gyms.filter(gym => {
      const matchRegion = this.selectedRegion === 'Todas' || gym.region === this.selectedRegion;
      const matchSearch = !searchVal ||
        gym.name.toLowerCase().includes(searchVal) ||
        gym.address.toLowerCase().includes(searchVal) ||
        gym.cep.toLowerCase().includes(searchVal) ||
        gym.region.toLowerCase().includes(searchVal);
      return matchRegion && matchSearch;
    });

    if (countBadge) {
      countBadge.innerText = `${filtered.length} de ${gyms.length} unidades encontradas`;
    }

    if (!container) return;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-400 bg-surface-1 rounded-xl border border-vertice-subtle">
          <p class="text-lg font-semibold text-white">Nenhuma unidade encontrada nesta busca</p>
          <p class="text-sm mt-1">Tente pesquisar por bairro, cidade, CEP ou selecione "Todas as RegiÃµes".</p>
          <button id="btn-reset-gym-filter" class="btn-vertice-secondary px-4 py-2 mt-4 text-xs">Ver Todas as 89 Unidades</button>
        </div>
      `;
      document.getElementById('btn-reset-gym-filter')?.addEventListener('click', () => {
        const filterEl = document.getElementById('gym-region-filter');
        const searchEl = document.getElementById('gym-search-input');
        if (filterEl) filterEl.value = 'Todas';
        if (searchEl) searchEl.value = '';
        this.selectedRegion = 'Todas';
        this.renderGyms();
      });
      return;
    }

    container.innerHTML = filtered.map(gym => `
      <div class="card-vertice p-5 flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded bg-vertice-navy/80 text-blue-300 border border-blue-900/50">
              ${gym.region}
            </span>
            ${gym.featured ? `
              <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-vertice-wine text-white uppercase tracking-wider">
                Unidade Prime
              </span>
            ` : ''}
          </div>
          <h3 class="text-lg font-bold text-white group-hover:text-rose-300 transition">${gym.name}</h3>
          <p class="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-vertice-wine flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            ${gym.address}
          </p>

          <div class="mt-3.5 space-y-1.5 text-xs text-gray-300 bg-black/40 p-2.5 rounded-lg border border-white/5">
            <div class="flex justify-between">
              <span class="text-gray-400">Seg a Sex:</span>
              <span class="font-medium text-white">${gym.hoursWeek}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">SÃ¡b e Dom:</span>
              <span class="font-medium text-white">${gym.hoursWeekend}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Telefone:</span>
              <span class="font-medium text-white">${gym.phone}</span>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap gap-1">
            ${gym.amenities.slice(0, 3).map(a => `
              <span class="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/10">${a}</span>
            `).join('')}
            ${gym.amenities.length > 3 ? `<span class="text-[10px] text-gray-400 px-1 py-0.5">+${gym.amenities.length - 3} itens</span>` : ''}
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-white/10 flex items-center gap-2">
          <button class="btn-vertice-secondary flex-1 py-2 text-xs font-semibold" onclick="window.app.showGymDetail(${gym.id})">
            Ver Academia
          </button>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${gym.lat},${gym.lng}" target="_blank" rel="noopener noreferrer" class="btn-vertice-outline px-3 py-2 text-xs flex items-center justify-center gap-1" title="Ver trajeto no Google Maps">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            Como Chegar
          </a>
        </div>
      </div>
    `).join('');

    this.updateMapMarkers(filtered);
  }

  setupMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl || typeof L === 'undefined') return;

    // Centro do mapa em SÃ£o Paulo (Avenida Paulista)
    this.map = L.map('map', {
      center: [-23.5505, -46.6333],
      zoom: 11,
      scrollWheelZoom: true
    });

    // Dark Map Tiles (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    this.markersGroup = L.layerGroup().addTo(this.map);
  }

  updateMapMarkers(gyms) {
    if (!this.map || !this.markersGroup || typeof L === 'undefined') return;
    this.markersGroup.clearLayers();

    // Ãcone customizado de academia VÃ©rtice
    const customIcon = L.divIcon({
      className: 'vertice-map-marker',
      html: `
        <div style="background: linear-gradient(135deg, #7A1630 0%, #101C35 100%); width: 28px; height: 28px; border-radius: 50%; border: 2px solid #FFFFFF; box-shadow: 0 0 10px rgba(122,22,48,0.8); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 11px;">
          V
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14]
    });

    gyms.forEach(gym => {
      const marker = L.marker([gym.lat, gym.lng], { icon: customIcon });
      marker.bindPopup(`
        <div style="min-width: 220px; font-family: sans-serif;">
          <span style="font-size: 10px; background: #7A1630; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${gym.region}</span>
          <h4 style="margin: 6px 0 2px 0; color: white; font-size: 14px; font-weight: bold;">${gym.name}</h4>
          <p style="margin: 0; font-size: 11px; color: #BBB;">${gym.address}</p>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #38BDF8;">HorÃ¡rio: ${gym.hoursWeek}</p>
          <div style="margin-top: 8px; display: flex; gap: 4px;">
            <button onclick="window.app.showGymDetail(${gym.id})" style="background: #7A1630; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; flex: 1;">Ver Detalhes</button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${gym.lat},${gym.lng}" target="_blank" style="background: #101C35; color: white; text-decoration: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; display: flex; align-items: center;">GPS</a>
          </div>
        </div>
      `);
      this.markersGroup.addLayer(marker);
    });
  }

  showGymDetail(gymId) {
    const gym = this.getGyms().find(g => g.id === gymId);
    if (!gym) return;

    const modal = document.getElementById('modal-gym-detail');
    const content = document.getElementById('gym-detail-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="relative">
        <div class="h-44 w-full bg-gradient-to-r from-vertice-wine to-vertice-navy rounded-t-xl flex items-center justify-center p-6 text-center">
          <div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 text-rose-300 border border-white/10 uppercase tracking-widest">${gym.region}</span>
            <h2 class="text-2xl font-bold text-white mt-2">${gym.name}</h2>
            <p class="text-xs text-gray-300 mt-1">${gym.address}</p>
          </div>
        </div>

        <div class="p-6 space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-black/30 p-4 rounded-xl border border-white/10">
            <div>
              <p class="text-xs text-gray-400">HorÃ¡rio Semanal:</p>
              <p class="font-bold text-white text-base">${gym.hoursWeek}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Finais de Semana & Feriados:</p>
              <p class="font-bold text-white text-base">${gym.hoursWeekend}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">Telefone / WhatsApp:</p>
              <p class="font-medium text-white">${gym.phone}</p>
            </div>
            <div>
              <p class="text-xs text-gray-400">CEP Oficial:</p>
              <p class="font-medium text-white">${gym.cep}</p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-200 mb-2 uppercase tracking-wider">Estrutura & Facilidades DisponÃ­veis</h4>
            <div class="grid grid-cols-2 gap-2">
              ${gym.amenities.map(a => `
                <div class="flex items-center gap-2 text-xs bg-surface-2 p-2.5 rounded-lg border border-white/5 text-gray-300">
                  <span class="text-emerald-400 font-bold">âœ“</span>
                  <span>${a}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-gradient-to-r from-vertice-navy/60 to-black p-4 rounded-xl border border-blue-900/40 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-black border border-white/20 flex items-center justify-center font-bold text-white text-xs">
                TP
              </div>
              <div>
                <p class="text-xs font-bold text-white">Aceita TotalPass nesta unidade</p>
                <p class="text-[11px] text-gray-400">Apresente seu QR Code na recepÃ§Ã£o e treine livremente.</p>
              </div>
            </div>
            <button onclick="window.app.openModal('modal-totalpass')" class="text-xs text-blue-300 underline font-medium">Saiba mais</button>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://www.google.com/maps/dir/?api=1&destination=${gym.lat},${gym.lng}" target="_blank" class="btn-vertice-secondary flex-1 py-3 text-sm font-semibold text-center">
              Como Chegar (Google Maps)
            </a>
            <button onclick="window.app.quickMedicalBookingForGym(${gym.id})" class="btn-vertice-primary flex-1 py-3 text-sm font-semibold">
              Agendar AvaliaÃ§Ã£o MÃ©dica GrÃ¡tis
            </button>
          </div>
        </div>
      </div>
    `;

    this.openModal('modal-gym-detail');
  }

  handleGeolocation() {
    if (!navigator.geolocation) {
      this.showToast('GeolocalizaÃ§Ã£o nÃ£o suportada no seu navegador.', 'error');
      return;
    }

    this.showToast('Obtendo sua localizaÃ§Ã£o em SÃ£o Paulo...', 'info');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        if (this.map) {
          this.map.setView([userLat, userLng], 13);
          L.circleMarker([userLat, userLng], {
            radius: 8,
            color: '#38BDF8',
            fillColor: '#0284C7',
            fillOpacity: 0.9
          }).addTo(this.map).bindPopup('VocÃª estÃ¡ aqui!').openPopup();
        }

        // Calcula a academia mais prÃ³xima
        const gyms = this.getGyms();
        let closest = null;
        let minDistance = Infinity;

        gyms.forEach(gym => {
          const d = this.calculateDistance(userLat, userLng, gym.lat, gym.lng);
          if (d < minDistance) {
            minDistance = d;
            closest = gym;
          }
        });

        if (closest) {
          this.showToast(`Academia mais prÃ³xima: ${closest.name} (~${minDistance.toFixed(1)} km)`, 'success');
          this.showGymDetail(closest.id);
        }
      },
      () => {
        // Fallback para localizaÃ§Ã£o simulada na Av. Paulista se o usuÃ¡rio recusar permissÃ£o
        this.showToast('Usando centro de SÃ£o Paulo como referÃªncia.', 'info');
        if (this.map) {
          this.map.setView([-23.5598, -46.6582], 13);
        }
      }
    );
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // --- 5. TUTORIAIS DE EXERCÃCIOS ("APRENDA A TREINAR") ---
  renderExercises() {
    const exercises = this.getExercises();
    const container = document.getElementById('exercises-container');
    const tabsContainer = document.getElementById('exercise-category-tabs');
    const searchVal = (document.getElementById('exercise-search-input')?.value || '').toLowerCase().trim();

    const categories = ['Todos', 'Peito', 'Costas', 'Pernas', 'Ombros', 'BÃ­ceps', 'TrÃ­ceps', 'AbdÃ´men', 'Cardio', 'GlÃºteos'];

    if (tabsContainer) {
      tabsContainer.innerHTML = categories.map(cat => `
        <button class="exercise-cat-btn whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition ${this.selectedCategory === cat ? 'bg-vertice-wine text-white shadow-lg' : 'bg-surface-2 text-gray-400 hover:text-white'}" onclick="window.app.selectExerciseCategory('${cat}')">
          ${cat}
        </button>
      `).join('');
    }

    if (!container) return;

    const filtered = exercises.filter(ex => {
      const matchCat = this.selectedCategory === 'Todos' || ex.category === this.selectedCategory;
      const matchSearch = !searchVal ||
        ex.name.toLowerCase().includes(searchVal) ||
        ex.machine.toLowerCase().includes(searchVal) ||
        ex.targetMuscles.toLowerCase().includes(searchVal);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-400">
          <p class="text-base font-semibold text-white">Nenhum tutorial encontrado</p>
          <p class="text-xs mt-1">Experimente buscar por outro nome de aparelho ou grupo muscular.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(ex => `
      <div class="card-vertice overflow-hidden flex flex-col justify-between group cursor-pointer" onclick="window.app.showExerciseDetail('${ex.id}')">
        <div class="relative h-44 overflow-hidden bg-black">
          <img src="${ex.videoMock}" alt="${ex.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-black/30"></div>
          <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded bg-vertice-wine text-white uppercase tracking-wider">
            ${ex.category}
          </span>
          <span class="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/70 text-gray-300 border border-white/10">
            ${ex.difficulty}
          </span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-white group-hover:text-rose-300 transition line-clamp-1">${ex.name}</h3>
            <p class="text-xs text-amber-300/90 font-medium mt-1 flex items-center gap-1">
              <span>Aparelho:</span> ${ex.machine}
            </p>
            <p class="text-xs text-gray-400 mt-2 line-clamp-2">
              <span class="text-gray-300">Foco:</span> ${ex.targetMuscles}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span class="text-xs text-vertice-wine font-semibold flex items-center gap-1 group-hover:translate-x-1 transition">
              Ver Tutorial Passo a Passo â†’
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  selectExerciseCategory(cat) {
    this.selectedCategory = cat;
    this.renderExercises();
  }

  showExerciseDetail(exerciseId) {
    const ex = this.getExercises().find(e => e.id === exerciseId);
    if (!ex) return;

    const modal = document.getElementById('modal-exercise-detail');
    const content = document.getElementById('exercise-detail-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="relative">
        <div class="relative h-60 w-full bg-black">
          <img src="${ex.videoMock}" class="w-full h-full object-cover opacity-85">
          <div class="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-black/40"></div>
          <div class="absolute bottom-4 left-6 right-6">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-vertice-wine text-white uppercase">${ex.category}</span>
              <span class="text-xs px-2 py-0.5 rounded bg-black/60 text-gray-300 border border-white/20">${ex.difficulty}</span>
            </div>
            <h2 class="text-2xl font-bold text-white">${ex.name}</h2>
            <p class="text-xs text-amber-300">${ex.machine}</p>
          </div>
        </div>

        <div class="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <div class="bg-black/40 p-4 rounded-xl border border-white/10">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">MÃºsculos Trabalhados</h4>
            <p class="text-sm font-semibold text-white mt-1">${ex.targetMuscles}</p>
          </div>

          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-3">InstruÃ§Ãµes Passo a Passo</h4>
            <ol class="space-y-3">
              ${ex.steps.map((s, idx) => `
                <li class="flex items-start gap-3 text-xs text-gray-300 bg-surface-2 p-3 rounded-lg border border-white/5">
                  <span class="w-5 h-5 rounded-full bg-vertice-wine text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    ${idx + 1}
                  </span>
                  <span>${s}</span>
                </li>
              `).join('')}
            </ol>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <h5 class="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5 mb-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Postura Correta
              </h5>
              <p class="text-xs text-gray-300">${ex.properPosture}</p>
            </div>

            <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40">
              <h5 class="text-xs font-bold text-rose-400 uppercase flex items-center gap-1.5 mb-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Erros Mais Comuns
              </h5>
              <p class="text-xs text-gray-300">${ex.commonMistakes}</p>
            </div>
          </div>

          <div class="p-3 bg-amber-950/20 border border-amber-800/40 rounded-lg text-center">
            <p class="text-xs text-amber-300 font-medium">âš ï¸ ${ex.safetyWarning}</p>
          </div>
        </div>
      </div>
    `;

    this.openModal('modal-exercise-detail');
  }

  // --- 6. PERSONAL TRAINER (CONTRATAÃ‡ÃƒO DE DIÃRIA COM LOCALIZAÃ‡ÃƒO CONVENIENTE) ---
  renderPersonals() {
    const personals = this.getPersonals();
    const container = document.getElementById('personals-container');
    if (!container) return;

    container.innerHTML = personals.map(pt => `
      <div class="card-vertice p-5 flex flex-col justify-between group">
        <div>
          <div class="flex items-center gap-4">
            <img src="${pt.photo}" alt="${pt.name}" class="w-16 h-16 rounded-full object-cover border-2 border-vertice-wine flex-shrink-0">
            <div>
              <div class="flex items-center gap-1.5 text-amber-400 text-xs">
                <span>â˜…</span>
                <span class="font-bold text-white">${pt.rating}</span>
                <span class="text-gray-400">(${pt.reviewsCount} avaliaÃ§Ãµes)</span>
              </div>
              <h3 class="text-base font-bold text-white mt-0.5">${pt.name.split(',')[0]}</h3>
              <p class="text-[11px] text-gray-400">${pt.name.split(',')[1] || 'CREF Ativo'}</p>
            </div>
          </div>

          <div class="mt-4">
            <p class="text-xs text-gray-300 italic">"${pt.bio}"</p>
          </div>

          <div class="mt-3 flex flex-wrap gap-1">
            ${pt.specialties.map(s => `
              <span class="text-[10px] bg-vertice-navy/60 text-blue-300 px-2 py-0.5 rounded border border-blue-900/40">${s}</span>
            `).join('')}
          </div>

          <div class="mt-4 p-3 bg-black/40 rounded-lg text-xs space-y-1">
            <div class="flex justify-between">
              <span class="text-gray-400">ExperiÃªncia:</span>
              <span class="text-white font-medium">${pt.experienceYears} anos de carreira</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Valor da DiÃ¡ria:</span>
              <span class="text-emerald-400 font-bold text-sm">R$ ${pt.dailyRate.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-white/10">
          <button class="btn-vertice-primary w-full py-2.5 text-xs font-semibold" onclick="window.app.startPersonalBookingFlow('${pt.id}')">
            Contratar DiÃ¡ria de Treino
          </button>
        </div>
      </div>
    `).join('');
  }

  startPersonalBookingFlow(personalId) {
    if (!this.currentUser) {
      this.showToast('FaÃ§a login ou cadastre-se para contratar uma diÃ¡ria com Personal.', 'info');
      this.openModal('modal-auth');
      return;
    }

    const pt = this.getPersonals().find(p => p.id === personalId);
    if (!pt) return;

    this.selectedPersonal = pt;
    this.activePersonalStep = 1;
    this.personalBookingData = {
      date: new Date().toISOString().split('T')[0],
      timeSlot: pt.availableHours[0] || '08:00',
      locationRegion: 'Capital - Centro/Paulista',
      selectedGymId: pt.gymsServedIds[0] || 1,
      personalId: pt.id,
      notes: ''
    };

    this.renderPersonalBookingWizard();
    this.openModal('modal-personal-booking');
  }

  renderPersonalBookingWizard() {
    const container = document.getElementById('personal-wizard-content');
    if (!container || !this.selectedPersonal) return;

    const pt = this.selectedPersonal;
    const allGyms = this.getGyms();

    // Filtra academias atendidas pelo Personal
    const ptGyms = allGyms.filter(g => pt.gymsServedIds.includes(g.id));

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Resumo do Personal Selecionado -->
        <div class="flex items-center gap-3 bg-surface-2 p-4 rounded-xl border border-vertice-subtle">
          <img src="${pt.photo}" class="w-14 h-14 rounded-full object-cover border border-vertice-wine">
          <div class="flex-1">
            <h3 class="font-bold text-white text-base">${pt.name}</h3>
            <p class="text-xs text-amber-300">â˜… ${pt.rating} â€¢ R$ ${pt.dailyRate.toFixed(2).replace('.', ',')} por diÃ¡ria</p>
            <p class="text-[11px] text-gray-400 mt-0.5">Atende em ${ptGyms.length} unidades VÃ©rtice de SÃ£o Paulo</p>
          </div>
        </div>

        <!-- Etapa 1: Data e HorÃ¡rio -->
        <div class="space-y-4">
          <h4 class="text-sm font-bold text-white flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-vertice-wine text-white text-xs flex items-center justify-center font-bold">1</span>
            Escolha o Dia e HorÃ¡rio Desejado
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs text-gray-400 mb-1">Data da DiÃ¡ria:</label>
              <input type="date" id="wizard-pt-date" class="vertice-input w-full p-2.5 text-sm" value="${this.personalBookingData.date}" min="${new Date().toISOString().split('T')[0]}">
            </div>
            <div>
              <label class="block text-xs text-gray-400 mb-1">HorÃ¡rio DisponÃ­vel:</label>
              <select id="wizard-pt-time" class="vertice-input w-full p-2.5 text-sm">
                ${pt.availableHours.map(h => `<option value="${h}" ${h === this.personalBookingData.timeSlot ? 'selected' : ''}>${h}h</option>`).join('')}
              </select>
            </div>
          </div>
        </div>

        <!-- Etapa 2: SeleÃ§Ã£o Inteligente da Academia Mais Conveniente -->
        <div class="space-y-4 pt-2 border-t border-white/10">
          <div>
            <h4 class="text-sm font-bold text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-vertice-wine text-white text-xs flex items-center justify-center font-bold">2</span>
              Escolha a Melhor Academia (Conveniente para VocÃª e para o Personal)
            </h4>
            <p class="text-xs text-gray-400 mt-1">O sistema prioriza as unidades atendidas pelo personal que ficam na sua rota em SÃ£o Paulo.</p>
          </div>

          <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
            ${ptGyms.map(gym => `
              <label class="flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-black/40 hover:border-vertice-wine cursor-pointer transition">
                <input type="radio" name="wizard-gym" value="${gym.id}" ${gym.id === this.personalBookingData.selectedGymId ? 'checked' : ''} class="mt-1 text-vertice-wine focus:ring-vertice-wine">
                <div class="flex-1 text-xs">
                  <div class="flex justify-between">
                    <span class="font-bold text-white">${gym.name}</span>
                    <span class="text-blue-300 text-[10px]">${gym.region}</span>
                  </div>
                  <p class="text-gray-400 mt-0.5">${gym.address}</p>
                </div>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- Etapa 3: Resumo do Investimento e ConfirmaÃ§Ã£o -->
        <div class="p-4 rounded-xl bg-gradient-to-r from-vertice-wine/20 to-vertice-navy/30 border border-vertice-wine/30 space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-300">Investimento da DiÃ¡ria:</span>
            <span class="font-bold text-emerald-400 text-base">R$ ${pt.dailyRate.toFixed(2).replace('.', ',')}</span>
          </div>
          <p class="text-[11px] text-gray-400">Inclui acompanhamento exclusivo de 1h30 com correÃ§Ã£o biomecÃ¢nica, aquecimento e treino especÃ­fico.</p>
        </div>

        <div class="flex gap-3">
          <button class="btn-vertice-outline flex-1 py-3 text-xs" onclick="window.app.closeModal('modal-personal-booking')">Cancelar</button>
          <button class="btn-vertice-primary flex-1 py-3 text-sm font-semibold" onclick="window.app.confirmPersonalBooking()">Confirmar ContrataÃ§Ã£o da DiÃ¡ria</button>
        </div>
      </div>
    `;

    // Atualiza dados conforme input
    document.getElementById('wizard-pt-date')?.addEventListener('change', (e) => {
      this.personalBookingData.date = e.target.value;
    });
    document.getElementById('wizard-pt-time')?.addEventListener('change', (e) => {
      this.personalBookingData.timeSlot = e.target.value;
    });
    document.querySelectorAll('input[name="wizard-gym"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.personalBookingData.selectedGymId = parseInt(e.target.value);
      });
    });
  }

  confirmPersonalBooking() {
    if (!this.currentUser) return;

    const pt = this.selectedPersonal;
    const gym = this.getGyms().find(g => g.id === this.personalBookingData.selectedGymId);

    const newBooking = {
      id: `pb-${Date.now()}`,
      clientId: this.currentUser.id,
      personalId: pt.id,
      gymId: gym ? gym.id : 1,
      date: this.personalBookingData.date,
      timeSlot: this.personalBookingData.timeSlot,
      status: "Agendado",
      price: pt.dailyRate,
      receiptNumber: `VTC-PT-${Math.floor(1000 + Math.random() * 9000)}`
    };

    // Salva no storage de agendamentos de personal
    const allBookings = this.getPersonalBookings();
    allBookings.push(newBooking);
    localStorage.setItem(STORAGE_KEYS.PERSONAL_BOOKINGS, JSON.stringify(allBookings));

    // Registra pagamento da diÃ¡ria
    const allPayments = this.getPayments();
    allPayments.unshift({
      id: `pay-${Date.now()}`,
      clientId: this.currentUser.id,
      description: `DiÃ¡ria Personal Trainer - ${pt.name.split(',')[0]}`,
      amount: pt.dailyRate,
      date: new Date().toLocaleDateString('pt-BR'),
      status: "Pago",
      method: "CartÃ£o / PIX",
      invoice: newBooking.receiptNumber
    });
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(allPayments));

    this.closeModal('modal-personal-booking');
    this.showToast(`DiÃ¡ria contratada com sucesso para ${newBooking.date} Ã s ${newBooking.timeSlot}h!`, 'success');
    this.renderClientDashboard();
  }

  // --- 7. AVALIAÃ‡ÃƒO MÃ‰DICA GRATUITA ---
  quickMedicalBookingForGym(gymId) {
    this.closeModal('modal-gym-detail');
    const select = document.getElementById('med-gym-select');
    if (select) {
      select.value = gymId;
    }
    this.switchView('avaliacao-medica');
  }

  populateGymSelectOptions() {
    const gyms = this.getGyms();
    const select = document.getElementById('med-gym-select');
    const registerGymSelect = document.getElementById('register-gym-select');

    if (select) {
      select.innerHTML = gyms.map(g => `<option value="${g.id}">${g.name} (${g.region})</option>`).join('');
    }
    if (registerGymSelect) {
      registerGymSelect.innerHTML = gyms.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
    }
  }

  handleMedicalBooking() {
    if (!this.currentUser) {
      this.showToast('Por favor, faÃ§a login ou cadastre-se para confirmar sua avaliaÃ§Ã£o mÃ©dica gratuita.', 'info');
      this.openModal('modal-auth');
      return;
    }

    const gymId = parseInt(document.getElementById('med-gym-select')?.value || '1');
    const date = document.getElementById('med-date')?.value;
    const timeSlot = document.getElementById('med-time')?.value;

    if (!date || !timeSlot) {
      this.showToast('Por favor, selecione data e horÃ¡rio para a consulta mÃ©dica.', 'warning');
      return;
    }

    const newAppt = {
      id: `med-${Date.now()}`,
      clientId: this.currentUser.id,
      gymId: gymId,
      doctorName: "Dr. Marcelo Sampaio (Medicina do ExercÃ­cio)",
      date: date,
      timeSlot: timeSlot,
      status: "Confirmada",
      notes: "Anamnese clÃ­nica completa e liberaÃ§Ã£o para esforÃ§o fÃ­sico de alta intensidade.",
      price: 0.00
    };

    const appts = this.getMedicalAppointments();
    appts.push(newAppt);
    localStorage.setItem(STORAGE_KEYS.MEDICAL_APPOINTMENTS, JSON.stringify(appts));

    this.showToast('AvaliaÃ§Ã£o MÃ©dica GRATUITA agendada com sucesso!', 'success');
    this.renderClientDashboard();

    // Scroll para topo ou abre Ã¡rea do aluno
    this.openModal('modal-client-dashboard');
    this.switchClientTab('tab-agendamentos');
  }

  cancelMedicalAppointment(apptId) {
    if (!confirm('Deseja realmente cancelar este agendamento de avaliaÃ§Ã£o mÃ©dica?')) return;
    const appts = this.getMedicalAppointments();
    const updated = appts.filter(a => a.id !== apptId);
    localStorage.setItem(STORAGE_KEYS.MEDICAL_APPOINTMENTS, JSON.stringify(updated));
    this.showToast('Agendamento mÃ©dico cancelado.', 'info');
    this.renderClientDashboard();
  }

  // --- 8. PROMOÃ‡Ã•ES ---
  renderPromotions() {
    const promos = this.getPromotions();
    const container = document.getElementById('promotions-container');
    if (!container) return;

    container.innerHTML = promos.map(p => `
      <div class="card-vertice p-6 flex flex-col justify-between relative overflow-hidden">
        <div class="absolute -right-12 -top-12 w-28 h-28 bg-vertice-wine/20 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40 uppercase tracking-wider">
              ${p.tag}
            </span>
            <span class="text-xs text-gray-400">${p.badge}</span>
          </div>
          <h3 class="text-xl font-bold text-white">${p.title}</h3>
          <p class="text-xs text-gray-300 mt-1">${p.subtitle}</p>

          <div class="my-5 p-4 rounded-xl bg-black/40 border border-white/10 text-center">
            <span class="text-2xl font-black text-rose-300">${p.pricePromo}</span>
            <span class="text-xs text-gray-400 block mt-0.5">${p.period}</span>
            <span class="text-[11px] text-gray-500 line-through block mt-1">${p.normalPrice}</span>
          </div>

          <p class="text-[11px] text-gray-400 bg-surface-2 p-2.5 rounded-lg border border-white/5">
            ${p.conditions}
          </p>
        </div>

        <button class="btn-vertice-primary w-full py-3 text-xs font-semibold mt-6" onclick="window.app.openModal('modal-enroll')">
          Aproveitar Oferta VÃ©rtice
        </button>
      </div>
    `).join('');
  }

  // --- 9. AUTENTICAÃ‡ÃƒO, LOGIN & SENHA INICIAL COM DATA DE NASCIMENTO ---
  handleLogin() {
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value.trim();

    if (!email || !password) {
      this.showToast('Informe seu e-mail e senha.', 'warning');
      return;
    }

    const clients = this.getClients();
    const user = clients.find(c => c.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      this.showToast('UsuÃ¡rio nÃ£o encontrado. Verifique seu e-mail ou cadastre-se.', 'error');
      return;
    }

    // Valida senha (ou senha inicial = data de nascimento sem barras)
    const cleanBirth = (user.birthDate || '').replace(/\D/g, '');
    const isInitialBirthMatch = password === cleanBirth;
    const isDirectMatch = password === user.password;

    if (!isInitialBirthMatch && !isDirectMatch) {
      this.showToast('Senha incorreta. Lembre-se: sua senha inicial Ã© sua data de nascimento (ex: 15081995).', 'error');
      return;
    }

    this.saveCurrentUser(user);
    this.closeModal('modal-auth');
    this.renderAuthNav();
    this.showToast(`Login realizado com sucesso! Bem-vindo, ${user.name}.`, 'success');

    if (user.role === 'admin') {
      this.renderAdminDashboard();
      this.openModal('modal-admin-dashboard');
    } else {
      this.renderClientDashboard();
      this.openModal('modal-client-dashboard');
    }
  }

  handleRegister() {
    const name = document.getElementById('reg-name')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const birthDate = document.getElementById('reg-birth')?.value.trim();
    const phone = document.getElementById('reg-phone')?.value.trim();
    const selectedGymId = parseInt(document.getElementById('register-gym-select')?.value || '1');

    if (!name || !email || !birthDate) {
      this.showToast('Preencha os campos obrigatÃ³rios.', 'warning');
      return;
    }

    // Senha inicial Ã© a data de nascimento no formato DDMMAAAA
    const cleanPassword = birthDate.replace(/\D/g, '');
    if (cleanPassword.length < 8) {
      this.showToast('Data de nascimento deve estar no formato DD/MM/AAAA.', 'warning');
      return;
    }

    const clients = this.getClients();
    if (clients.some(c => c.email.toLowerCase() === email.toLowerCase())) {
      this.showToast('Este e-mail jÃ¡ estÃ¡ cadastrado. FaÃ§a login.', 'warning');
      return;
    }

    const newUser = {
      id: `cli-${Date.now()}`,
      name: name,
      email: email,
      birthDate: birthDate,
      password: cleanPassword, // Senha inicial
      passwordChanged: false,
      phone: phone || '(11) 90000-0000',
      cpf: '000.000.000-00',
      selectedGymId: selectedGymId,
      plan: "VÃ©rtice Anual Fidelity",
      monthlyPrice: 220.00,
      activeMonths: 1,
      role: "client",
      status: "Ativo",
      memberSince: new Date().toLocaleDateString('pt-BR'),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
    };

    clients.push(newUser);
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));

    this.saveCurrentUser(newUser);
    this.closeModal('modal-enroll');
    this.closeModal('modal-auth');
    this.renderAuthNav();
    this.showToast(`MatrÃ­cula confirmada! Sua senha de acesso Ã© ${cleanPassword}.`, 'success');
    this.renderClientDashboard();
    this.openModal('modal-client-dashboard');
  }

  handleChangePassword() {
    if (!this.currentUser) return;
    const currentPass = document.getElementById('change-curr-pass')?.value;
    const newPass = document.getElementById('change-new-pass')?.value;
    const confirmPass = document.getElementById('change-confirm-pass')?.value;

    if (newPass !== confirmPass) {
      this.showToast('A nova senha e a confirmaÃ§Ã£o nÃ£o coincidem.', 'error');
      return;
    }
    if (newPass.length < 6) {
      this.showToast('A nova senha deve ter no mÃ­nimo 6 caracteres.', 'warning');
      return;
    }

    this.currentUser.password = newPass;
    this.currentUser.passwordChanged = true;
    this.saveCurrentUser(this.currentUser);
    this.showToast('Senha alterada com sucesso!', 'success');
    document.getElementById('form-change-password')?.reset();
  }

  handleForgotPassword() {
    const email = document.getElementById('forgot-email')?.value.trim();
    const birth = document.getElementById('forgot-birth')?.value.trim().replace(/\D/g, '');

    const clients = this.getClients();
    const user = clients.find(c => c.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      this.showToast('E-mail nÃ£o encontrado no sistema.', 'error');
      return;
    }

    const userCleanBirth = (user.birthDate || '').replace(/\D/g, '');
    if (userCleanBirth !== birth) {
      this.showToast('Data de nascimento nÃ£o confere com os registros.', 'error');
      return;
    }

    // Redefine para a senha padrÃ£o de nascimento
    user.password = userCleanBirth;
    user.passwordChanged = false;
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));

    this.showToast(`Senha redefinida com sucesso para sua data de nascimento: ${userCleanBirth}`, 'success');
    this.closeModal('modal-forgot-password');
    this.openModal('modal-auth');
  }

  handleLogout() {
    this.saveCurrentUser(null);
    this.closeModal('modal-client-dashboard');
    this.closeModal('modal-admin-dashboard');
    this.renderAuthNav();
    this.showToast('VocÃª saiu da sua conta.', 'info');
  }

  // --- 10. DASHBOARD DA ÃREA DO CLIENTE & PROGRAMA DE FIDELIDADE (R$ 70/MÃŠS) ---
  renderClientDashboard() {
    if (!this.currentUser) return;
    const u = this.currentUser;
    const allGyms = this.getGyms();
    const gym = allGyms.find(g => g.id === u.selectedGymId) || allGyms[0];

    // Atualiza cabeÃ§alho do aluno
    const nameEl = document.getElementById('dash-client-name');
    const emailEl = document.getElementById('dash-client-email');
    const avatarEl = document.getElementById('dash-client-avatar');
    const planEl = document.getElementById('dash-client-plan');
    const gymEl = document.getElementById('dash-client-gym');

    if (nameEl) nameEl.innerText = u.name;
    if (emailEl) emailEl.innerText = u.email;
    if (avatarEl) avatarEl.src = u.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400';
    if (planEl) planEl.innerText = `${u.plan} (R$ ${u.monthlyPrice.toFixed(2).replace('.', ',')}/mÃªs)`;
    if (gymEl) gymEl.innerText = gym ? gym.name : 'VÃ©rtice Paulista';

    // PROGRAMA DE FIDELIDADE VÃ‰RTICE (1Âº ano -> R$ 220/mÃªs | ApÃ³s 1 ano -> R$ 70/mÃªs)
    const months = u.activeMonths || 1;
    const monthsRemaining = Math.max(0, 12 - months);
    const percent = Math.min(100, Math.round((months / 12) * 100));

    const progressFill = document.getElementById('fidelity-progress-fill');
    const fidelityStatus = document.getElementById('fidelity-status-text');
    const monthsCounter = document.getElementById('fidelity-months-counter');

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (monthsCounter) monthsCounter.innerText = `${months} de 12 meses concluÃ­dos (${percent}%)`;

    if (fidelityStatus) {
      if (months >= 12) {
        fidelityStatus.innerHTML = `
          <div class="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded-lg text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>ðŸŽ‰</span>
            <span>PARABÃ‰NS! VocÃª atingiu 1 ano de VÃ©rtice! Sua mensalidade agora Ã© de apenas <strong>R$ 70,00/mÃªs</strong>!</span>
          </div>
        `;
      } else {
        fidelityStatus.innerHTML = `
          <p class="text-xs text-gray-300">
            Faltam apenas <strong class="text-amber-300 font-bold">${monthsRemaining} ${monthsRemaining === 1 ? 'mÃªs' : 'meses'}</strong> para sua mensalidade cair de <span class="line-through text-gray-400">R$ 220,00</span> para <strong class="text-emerald-400 text-sm">R$ 70,00/mÃªs</strong>!
          </p>
        `;
      }
    }

    // Renderiza Agendamentos do Aluno (MÃ©dico e Personal)
    this.renderClientAppointments();

    // Renderiza Pagamentos do Aluno
    this.renderClientPayments();
  }

  renderClientAppointments() {
    if (!this.currentUser) return;
    const u = this.currentUser;
    const container = document.getElementById('client-appointments-list');
    if (!container) return;

    const allGyms = this.getGyms();
    const allPersonals = this.getPersonals();

    const medicalList = this.getMedicalAppointments().filter(m => m.clientId === u.id);
    const personalList = this.getPersonalBookings().filter(p => p.clientId === u.id);

    if (medicalList.length === 0 && personalList.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-gray-400 bg-black/30 rounded-xl border border-white/5 text-xs">
          Nenhum agendamento ativo no momento.
        </div>
      `;
      return;
    }

    let html = '';

    // AvaliaÃ§Ãµes MÃ©dicas
    medicalList.forEach(m => {
      const g = allGyms.find(gym => gym.id === m.gymId);
      html += `
        <div class="p-4 rounded-xl bg-surface-2 border border-vertice-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 uppercase">AvaliaÃ§Ã£o MÃ©dica Gratuita</span>
              <span class="text-xs font-semibold text-emerald-400">${m.status}</span>
            </div>
            <h4 class="text-sm font-bold text-white mt-1">${g ? g.name : 'Unidade VÃ©rtice'}</h4>
            <p class="text-xs text-gray-400">Data: <strong class="text-white">${m.date}</strong> Ã s <strong class="text-white">${m.timeSlot}h</strong> com ${m.doctorName}</p>
          </div>
          <button class="btn-vertice-outline px-3 py-1.5 text-xs text-rose-300 hover:border-rose-500" onclick="window.app.cancelMedicalAppointment('${m.id}')">
            Cancelar Consulta
          </button>
        </div>
      `;
    });

    // DiÃ¡rias de Personal Trainer
    personalList.forEach(p => {
      const g = allGyms.find(gym => gym.id === p.gymId);
      const pt = allPersonals.find(person => person.id === p.personalId);
      html += `
        <div class="p-4 rounded-xl bg-surface-2 border border-vertice-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-vertice-navy text-blue-300 border border-blue-900/40 uppercase">DiÃ¡ria Personal Trainer</span>
              <span class="text-xs font-semibold text-amber-400">${p.status}</span>
            </div>
            <h4 class="text-sm font-bold text-white mt-1">${pt ? pt.name.split(',')[0] : 'Personal Trainer'}</h4>
            <p class="text-xs text-gray-400">Data: <strong class="text-white">${p.date}</strong> Ã s <strong class="text-white">${p.timeSlot}h</strong> â€¢ Unidade: ${g ? g.name : 'VÃ©rtice'}</p>
            <p class="text-[11px] text-gray-500">Recibo: ${p.receiptNumber} â€¢ R$ ${p.price.toFixed(2).replace('.', ',')}</p>
          </div>
          <span class="text-xs px-3 py-1 rounded bg-black/50 text-gray-300 border border-white/10">Confirmado</span>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderClientPayments() {
    if (!this.currentUser) return;
    const container = document.getElementById('client-payments-list');
    if (!container) return;

    const payments = this.getPayments().filter(p => p.clientId === this.currentUser.id);

    if (payments.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-gray-400 bg-black/30 rounded-xl border border-white/5 text-xs">
          Nenhum histÃ³rico de pagamento disponÃ­vel.
        </div>
      `;
      return;
    }

    container.innerHTML = payments.map(pay => `
      <div class="p-3.5 rounded-lg bg-surface-2 border border-white/5 flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-white">${pay.description}</span>
          <p class="text-gray-400 text-[11px]">${pay.date} via ${pay.method} â€¢ ${pay.invoice}</p>
        </div>
        <div class="text-right">
          <span class="font-bold text-emerald-400 text-sm">R$ ${pay.amount.toFixed(2).replace('.', ',')}</span>
          <span class="text-[10px] block text-emerald-500 font-semibold">${pay.status}</span>
        </div>
      </div>
    `).join('');
  }

  switchClientTab(tabId) {
    document.querySelectorAll('.client-tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.client-tab-btn').forEach(b => {
      b.classList.remove('bg-vertice-wine', 'text-white');
      b.classList.add('text-gray-400');
    });

    const activeTab = document.getElementById(tabId);
    const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);

    if (activeTab) activeTab.classList.remove('hidden');
    if (activeBtn) {
      activeBtn.classList.add('bg-vertice-wine', 'text-white');
      activeBtn.classList.remove('text-gray-400');
    }
  }

  // --- 11. PAINEL ADMINISTRATIVO MASTER ---
  renderAdminDashboard() {
    const gyms = this.getGyms();
    const clients = this.getClients();
    const personals = this.getPersonals();
    const medAppts = this.getMedicalAppointments();

    const statGyms = document.getElementById('admin-stat-gyms');
    const statClients = document.getElementById('admin-stat-clients');
    const statPersonals = document.getElementById('admin-stat-personals');
    const statAppts = document.getElementById('admin-stat-appts');

    if (statGyms) statGyms.innerText = gyms.length;
    if (statClients) statClients.innerText = clients.length;
    if (statPersonals) statPersonals.innerText = personals.length;
    if (statAppts) statAppts.innerText = medAppts.length;

    // Lista de Academias no Admin
    const gymList = document.getElementById('admin-gyms-table-body');
    if (gymList) {
      gymList.innerHTML = gyms.slice(0, 15).map(g => `
        <tr class="border-b border-white/5 text-xs hover:bg-white/5">
          <td class="p-2 font-mono text-gray-400">#${g.id}</td>
          <td class="p-2 font-bold text-white">${g.name}</td>
          <td class="p-2 text-gray-300">${g.region}</td>
          <td class="p-2 text-gray-400">${g.phone}</td>
          <td class="p-2 text-right">
            <button class="text-rose-400 hover:underline" onclick="window.app.deleteGymAdmin(${g.id})">Remover</button>
          </td>
        </tr>
      `).join('');
    }
  }

  handleSaveNewGym() {
    const name = document.getElementById('new-gym-name')?.value.trim();
    const region = document.getElementById('new-gym-region')?.value;
    const address = document.getElementById('new-gym-address')?.value.trim();
    const cep = document.getElementById('new-gym-cep')?.value.trim();
    const phone = document.getElementById('new-gym-phone')?.value.trim();
    const hoursWeek = document.getElementById('new-gym-hours-week')?.value.trim() || '06:00 Ã s 23:00';
    const hoursWeekend = document.getElementById('new-gym-hours-weekend')?.value.trim() || '08:00 Ã s 17:00';

    if (!name || !address) {
      this.showToast('Nome e endereÃ§o sÃ£o obrigatÃ³rios.', 'warning');
      return;
    }

    const gyms = this.getGyms();
    const newGym = {
      id: gyms.length > 0 ? Math.max(...gyms.map(g => g.id)) + 1 : 1,
      name: name,
      region: region,
      address: address,
      cep: cep || '01000-000',
      lat: -23.5505 + (Math.random() - 0.5) * 0.1,
      lng: -46.6333 + (Math.random() - 0.5) * 0.1,
      hoursWeek: hoursWeek,
      hoursWeekend: hoursWeekend,
      phone: phone || '(11) 3000-0000',
      amenities: ["MusculaÃ§Ã£o", "Cardio", "VestiÃ¡rios", "Acesso TotalPass"],
      featured: false
    };

    gyms.push(newGym);
    localStorage.setItem(STORAGE_KEYS.GYMS, JSON.stringify(gyms));

    this.showToast(`Academia "${name}" cadastrada com sucesso!`, 'success');
    document.getElementById('form-new-gym')?.reset();
    this.renderGyms();
    this.renderAdminDashboard();
  }

  deleteGymAdmin(gymId) {
    if (!confirm('Deseja excluir esta academia da rede?')) return;
    const gyms = this.getGyms().filter(g => g.id !== gymId);
    localStorage.setItem(STORAGE_KEYS.GYMS, JSON.stringify(gyms));
    this.showToast('Unidade removida com sucesso.', 'info');
    this.renderGyms();
    this.renderAdminDashboard();
  }

  // --- 12. NOTIFICAÃ‡Ã•ES TOAST (UX ELEVADA) ---
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const colors = {
      success: 'bg-emerald-900 border-emerald-500 text-emerald-100',
      error: 'bg-rose-950 border-rose-600 text-rose-100',
      warning: 'bg-amber-950 border-amber-600 text-amber-100',
      info: 'bg-vertice-navy border-vertice-wine text-white'
    };

    const toast = document.createElement('div');
    toast.className = `p-4 rounded-xl border shadow-2xl flex items-center gap-3 text-xs max-w-sm transition-all duration-300 transform translate-y-2 opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `
      <div class="flex-1">${message}</div>
      <button class="text-white/60 hover:text-white" onclick="this.parentElement.remove()">âœ•</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
}

// InstÃ¢ncia global para ser chamada nos atributos HTML onclick
window.app = new VerticeApp();

