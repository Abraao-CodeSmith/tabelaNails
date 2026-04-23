// =============================================
// DATA
// =============================================
const pagesData = [
    {
        id: 'extensao-tip',
        title: 'Extensão Tip',
        image: 'img/extensao_tip.png',
        hasTypes: true,
        types: ['APLICAÇÃO', 'MANUTENÇÃO'],
        currentType: 'APLICAÇÃO',
        services: {
            'APLICAÇÃO': [
                { name: 'Gel Natural',           price: 'R$ 110,00' },
                { name: 'Baby Boomer',           price: 'R$ 120,00' },
                { name: 'Baby Glitter',          price: 'R$ 125,00' },
                { name: 'Milk',                  price: 'R$ 110,00' },
                { name: 'Baby Collor',           price: 'R$ 120,00' },
                { name: 'Art Gringa',            price: 'R$ 125,00' },
                { name: 'Esmaltação Permanente', price: 'R$ 120,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Gel Natural',           price: 'R$ 95,00' },
                { name: 'Baby Boomer',           price: 'R$ 100,00' },
                { name: 'Baby Glitter',          price: 'R$ 100,00' },
                { name: 'Milk',                  price: 'R$ 95,00' },
                { name: 'Baby Collor',           price: 'R$ 100,00' },
                { name: 'Art Gringa',            price: 'R$ 100,00' },
                { name: 'Esmaltação Permanente', price: 'R$ 100,00' }
            ]
        }
    },
    {
        id: 'banho-gel',
        title: 'Banho Gel',
        image: 'img/banho_gel.png',
        hasTypes: true,
        types: ['APLICAÇÃO', 'MANUTENÇÃO'],
        currentType: 'APLICAÇÃO',
        services: {
            'APLICAÇÃO': [
                { name: 'Gel Natural',  price: 'R$ 100,00' },
                { name: 'Francesa',     price: 'R$ 120,00' },
                { name: 'Gel Decorado', price: 'R$ 110,00' },
                { name: 'Esmaltação',   price: 'R$ 110,00' },
                { name: 'Art Gringa',   price: 'R$ 120,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Gel Natural',  price: 'R$ 90,00' },
                { name: 'Francesa',     price: 'R$ 100,00' },
                { name: 'Gel Decorado', price: 'R$ 90,00' },
                { name: 'Esmaltação',   price: 'R$ 95,00' },
                { name: 'Art Gringa',   price: 'R$ 100,00' }
            ]
        }
    },
    {
        id: 'acrilico',
        title: 'Acrílico',
        image: 'img/acrilico.png',
        hasTypes: true,
        types: ['APLICAÇÃO', 'MANUTENÇÃO'],
        currentType: 'APLICAÇÃO',
        services: {
            'APLICAÇÃO': [
                { name: 'Natural',  price: 'R$ 110,00' },
                { name: 'Decorada', price: 'R$ 130,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Natural',  price: 'R$ 95,00' },
                { name: 'Decorada', price: 'R$ 110,00' }
            ]
        }
    },
    {
        id: 'manicure-moderna',
        title: 'Manicure Moderna',
        image: 'img/manicure_moderna.png',
        hasTypes: false,
        services: [
            { name: 'Manicure/Pedicure Gel', price: 'R$ 100,00', altPrice: 'R$ 60,00', priceLabel: 'completo', altPriceLabel: 'individual', description: 'Inclui cuticulagem e blindagem + esmaltação em gel.' },
            { name: 'Manicure/Pedicure Tradicional', price: 'R$ 50,00', altPrice: 'R$ 30,00', priceLabel: 'completo', altPriceLabel: 'individual', description: 'Inclui cuticulagem e esmaltação tradicional nas mãos e pés.' },
            { name: 'Blindagem Brilho Gloss', price: 'R$ 40,00', description: 'Previne a quebra, efeito base permanente. Inclui cuticulagem. Durabilidade 20 dias.' },
            { name: 'Manicure Moderna', price: 'R$ 60,00', description: 'Base permanente + Esmaltação em Gel + Cuticulagem' },
            { name: 'Pedicure Moderno', price: 'R$ 60,00', description: 'Duração mais de 1 mês, já sai seco!' },
            { name: 'Manicure tradicional', price: 'R$ 30,00', description: 'Inclui Cuticulagem + esmaltação' },
            { name: 'Manicure tradicional com francesinha', price: 'R$ 35,00', description: 'Esmaltação tradicional' },
            { name: 'Pedicure tradicional', price: 'R$ 30,00', description: 'Inclui Cuticulagem + esmaltação' },
            { name: 'Pedicure tradicional com francesinha', price: 'R$ 35,00', description: 'Inclui Cuticulagem + esmaltação' }
        ]
    },
    {
        id: 'tratamentos-podais',
        title: 'Tratamentos Podais Premium',
        image: 'img/tratamentos_podais.png',
        hasTypes: false,
        services: [
            { name: 'Escalda Pés c/ SPA', price: 'R$ 70,00', description: 'Pedicure tradicional + lixamento no dorso plantar + esfoliação + hidratação profunda + massagem + ofurô.' },
            { name: 'SPA rachadura e calosidade', price: 'R$ 80,00', altPrice: 'R$ 95,00', priceLabel: 'tradicional', altPriceLabel: 'gel', description: 'Com cuticulagem e esmaltação (tradicional ou gel)' },
            { name: 'Jelly SPA Express', price: 'R$ 30,00', description: 'Lixamento no dorso plantar + esfoliação + Hidratação profunda + massagem' },
            { name: 'Pedicure Gel – Diamant', price: 'R$ 80,00', description: 'Cuticulagem + blindagem + esmaltação em gel + esfoliação + Massagem relaxante + lixamento no dorso plantar' },
            { name: 'Plástica dos pés', price: 'R$ 80,00', description: 'Inclui pedicure tradicional + lixamento no dorso plantar + Esfoliação + hidratação profunda e massagem relaxante' },
            { name: 'Escalda Pés + Plástica dos Pés', price: 'R$ 120,00' }
        ]
    },
    {
        id: 'estetica-facial',
        title: 'Estética e Design Facial',
        image: 'img/estetica_facial.png',
        hasTypes: false,
        services: [
            { name: 'Epilação do buço', price: 'R$ 15,00' },
            { name: 'Extensão de cílios', price: 'R$ 100,00', description: 'A partir de R$100,00 - Consultar Volumes' },
            { name: 'Brow e Lash lifting', price: 'R$ 70,00', description: 'Pelos enrolados que necessitam de alinhamento e design moderno' },
            { name: 'Micropigmentação', price: 'R$ 300,00', description: 'A partir de R$300,00 - consulta prévia' },
            { name: 'Design masculino', price: 'R$ 35,00', description: 'Consultar antes' },
            { name: 'Design de henna', price: 'R$ 50,00', description: 'Design + aplicação de henna' }
        ]
    },
    {
        id: 'servicos-adicionais',
        title: 'Serviços Adicionais',
        image: 'img/servicos_adicionais.png',
        hasTypes: false,
        services: [
            { name: 'Fibra de vidro na manutenção', price: 'R$ 15,00' },
            { name: 'Formato Extremo', price: 'R$ 15,00' },
            { name: 'Mudança de formato na manutenção', price: 'R$ 10,00' },
            { name: 'Remoção do gel', price: 'R$ 40,00' },
            { name: 'Remoção do gel + blindagem', price: 'R$ 50,00' },
            { name: 'Só remoção com base', price: 'R$ 35,00' },
            { name: 'Reposição de unha quebrada (Incluso 1 manutenção)', price: 'R$ 5,00' },
            { name: 'Reversa anelar (par)', price: 'R$ 20,00' },
            { name: 'Marmorizada anelar', price: 'R$ 10,00' },
            { name: 'Encapsulada anelar', price: 'R$ 10,00' },
            { name: 'Película (par)', price: 'R$ 5,00' },
            { name: 'Troca de formato', price: 'R$ 10,00' },
            { name: 'Reconstrução de unha do pé', price: 'R$ 30,00' }
        ]
    }
];

const photos = [
    'fotos/foto1.jpg','fotos/foto2.jpg','fotos/foto3.jpg',
    'fotos/foto4.jpg','fotos/foto5.jpg','fotos/foto6.jpg','fotos/foto7.jpg'
];

// =============================================
// localStorage — carrega dados do admin
// =============================================
function loadSavedServices() {
    const raw = localStorage.getItem('jn_services');
    if (!raw) return;
    const saved = JSON.parse(raw);
    pagesData.forEach(page => {
        if (!saved[page.id]) return;
        if (page.hasTypes) {
            page.services['APLICAÇÃO'] = saved[page.id]['APLICAÇÃO'] || page.services['APLICAÇÃO'];
            page.services['MANUTENÇÃO'] = saved[page.id]['MANUTENÇÃO'] || page.services['MANUTENÇÃO'];
        } else {
            page.services = saved[page.id] || page.services;
        }
    });
}

function loadSavedServiceImages() {
    const raw = localStorage.getItem('jn_service_images');
    if (!raw) return;
    const imgs = JSON.parse(raw);
    pagesData.forEach(page => { if (imgs[page.id]) page.image = imgs[page.id]; });
}

function loadSavedGallery() {
    const raw = localStorage.getItem('jn_gallery');
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (Array.isArray(saved) && saved.length) {
        photos.length = 0;
        saved.forEach(p => photos.push(p));
    }
}

// =============================================
// STATE
// =============================================
let currentModalImageIndex = 0;
let galleryScrollPos = 0;

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    loadSavedServices();
    loadSavedServiceImages();
    loadSavedGallery();
    renderAll();
    initScrollHeader();
    initIntersectionObserver();
});

// =============================================
// RENDER — página única, todas as seções de uma vez
// =============================================
function renderAll() {
    const area = document.getElementById('content-area');
    area.innerHTML = '';

    // Hero
    area.insertAdjacentHTML('beforeend', `
        <section class="scroll-section" id="section-hero">
            <div class="hero-banner">
                <p class="hero-eyebrow">Nails Designer</p>
                <h1 class="hero-name">Jenyffer Araújo</h1>
                <p class="hero-sub">Beleza que transforma</p>
            </div>
        </section>
    `);

    // Seções de serviço
    pagesData.forEach(data => {
        const section = document.createElement('section');
        section.className = 'scroll-section';
        section.id = `section-${data.id}`;
        section.innerHTML = getServiceSectionHTML(data);
        area.appendChild(section);
    });

    // Seção Espaço
    const spaceSection = document.createElement('section');
    spaceSection.className = 'scroll-section';
    spaceSection.id = 'section-espaco';
    spaceSection.innerHTML = getSpacePageHTML();
    area.appendChild(spaceSection);
}

// =============================================
// INTERSECTION OBSERVER — anima entrada/saída
// =============================================
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null,
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0
    });

    document.querySelectorAll('.scroll-section').forEach(s => observer.observe(s));
}

// =============================================
// NAVIGATION — links do menu rolam suavemente
// =============================================
function showPage(type) {
    let targetId = 'section-hero';
    if (type === 'servicos') targetId = `section-${pagesData[0].id}`;
    else if (type === 'espaco') targetId = 'section-espaco';

    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMobileMenu();
}

// =============================================
// SERVICE SECTION HTML
// =============================================
function getServiceSectionHTML(data) {
    const services = data.hasTypes ? data.services[data.currentType] : data.services;

    const typeSelectorHTML = data.hasTypes ? `
        <div class="type-selector">
            ${data.types.map(t => `
                <button class="type-btn ${data.currentType === t ? 'selected' : ''}"
                        onclick="changeType('${data.id}','${t}')">${t}</button>
            `).join('')}
        </div>` : '';

    const servicesHTML = services.map((s, i) => `
        <li class="service-item">
            <div class="service-header" onclick="handleServiceClick(this, event)">
                <div class="service-name-wrapper">
                    <span class="service-name">${s.name}</span>
                    ${s.description ? `<button class="desc-toggle" onclick="toggleDescription(event, this)" aria-label="Ver descrição">+</button>` : ''}
                    <span class="mobile-arrow">▾</span>
                </div>
                <div class="service-price-wrapper">
                    <span class="price" id="price-${data.id}-${i}">${s.price}</span>
                    ${s.altPrice ? `<button class="price-toggle-btn" onclick="toggleAltPrice(event,'${data.id}',${i})">${s.priceLabel}</button>` : ''}
                </div>
            </div>
            ${s.description ? `<div class="service-description">${s.description}</div>` : ''}
        </li>
    `).join('');

    return `
        <div class="service-page">
            <div class="container">
                <div class="page-layout">
                    <div class="content-left">
                        <div class="page-title-wrap">
                            <h2 class="page-title">${data.title}</h2>
                            <div class="title-line"></div>
                        </div>
                        ${typeSelectorHTML}
                        <ul class="services-list">${servicesHTML}</ul>
                        <div class="bottom-buttons">
                            <a href="https://maps.app.goo.gl/CUQJdFnH3ozQjzUh7" target="_blank" class="bottom-btn">
                                <img src="img/btn_loc.png" alt=""> Localização
                            </a>
                            <a href="https://www.instagram.com/jenyfferaraujoacademy/" target="_blank" class="bottom-btn">
                                <img src="img/btn_insta.png" alt=""> Instagram
                            </a>
                            <a href="https://wa.me/5583981935139" target="_blank" class="bottom-btn">
                                <img src="img/btn_whats.png" alt=""> WhatsApp
                            </a>
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="service-image-wrap">
                            <img src="${data.image}" alt="${data.title}" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

// =============================================
// ESPAÇO PAGE HTML
// =============================================
function getSpacePageHTML() {
    return `
        <div class="space-page">
            <div class="container">
                <div class="hero-banner">
                    <p class="hero-eyebrow">Venha nos visitar</p>
                    <h1 class="hero-name">Nosso Espaço</h1>
                    <div class="gold-divider"></div>
                    <div class="space-intro">
                        <p>Aconchegante e inovador, com serviços de alto padrão para melhor lhe atender e extrair a pérola que há em você.</p>
                    </div>
                </div>
                <img src="img/elementosfinal.png" alt="Elementos decorativos" class="elements-img">
                <div class="gallery-container">
                    <button class="gallery-nav-btn" onclick="moveGallery(-1)" aria-label="Anterior">&#10094;</button>
                    <div class="gallery-track-wrapper" id="gallery-wrapper">
                        <div class="gallery-track" id="gallery-track">
                            ${photos.map((p, i) => `
                                <div class="gallery-item" onclick="openModal(${i})">
                                    <img src="${p}" alt="Foto do espaço ${i + 1}" loading="lazy">
                                </div>`).join('')}
                        </div>
                    </div>
                    <button class="gallery-nav-btn" onclick="moveGallery(1)" aria-label="Próxima">&#10095;</button>
                </div>
                <div class="bottom-buttons" style="justify-content:center;margin-top:48px;">
                    <a href="https://maps.app.goo.gl/CUQJdFnH3ozQjzUh7" target="_blank" class="bottom-btn">
                        <img src="img/btn_loc.png" alt=""> Como chegar
                    </a>
                    <a href="https://wa.me/5583981935139" target="_blank" class="bottom-btn">
                        <img src="img/btn_whats.png" alt=""> Agendar
                    </a>
                </div>
            </div>
        </div>`;
}

// =============================================
// SERVICE INTERACTIONS
// =============================================
function changeType(pageId, type) {
    const page = pagesData.find(p => p.id === pageId);
    if (!page) return;
    page.currentType = type;
    // Rerenderiza apenas a seção afetada
    const section = document.getElementById(`section-${pageId}`);
    if (section) {
        section.innerHTML = getServiceSectionHTML(page);
        section.classList.add('visible');
    }
}

function handleServiceClick(header, event) {
    if (window.innerWidth > 768) return;
    if (event.target.closest('.desc-toggle') || event.target.closest('.price-toggle-btn')) return;
    const priceWrapper = header.querySelector('.service-price-wrapper');
    const arrow = header.querySelector('.mobile-arrow');
    const isOpen = priceWrapper.classList.contains('show');
    document.querySelectorAll('.service-price-wrapper.show').forEach(el => {
        el.classList.remove('show');
        const a = el.closest('.service-item').querySelector('.mobile-arrow');
        if (a) a.classList.remove('up');
    });
    if (!isOpen) {
        priceWrapper.classList.add('show');
        if (arrow) arrow.classList.add('up');
    }
}

function toggleDescription(event, btn) {
    event.stopPropagation();
    const item = btn.closest('.service-item');
    const desc = item.querySelector('.service-description');
    const isOpen = desc.classList.contains('visible');
    desc.classList.toggle('visible', !isOpen);
    btn.textContent = isOpen ? '+' : '−';
    btn.classList.toggle('open', !isOpen);
}

function toggleAltPrice(event, pageId, idx) {
    event.stopPropagation();
    const page = pagesData.find(p => p.id === pageId);
    const service = page.hasTypes ? page.services[page.currentType][idx] : page.services[idx];
    const priceEl = document.getElementById(`price-${pageId}-${idx}`);
    const btn = event.currentTarget;
    const showingMain = btn.textContent.trim() === service.priceLabel;
    priceEl.textContent = showingMain ? service.altPrice : service.price;
    btn.textContent = showingMain ? service.altPriceLabel : service.priceLabel;
}

// =============================================
// GALLERY
// =============================================
function moveGallery(dir) {
    const track   = document.getElementById('gallery-track');
    const wrapper = document.getElementById('gallery-wrapper');
    if (!track || !wrapper) return;
    galleryScrollPos += dir * 296;
    const maxScroll = track.scrollWidth - wrapper.offsetWidth;
    galleryScrollPos = Math.max(0, Math.min(galleryScrollPos, maxScroll));
    track.style.transform = `translateX(-${galleryScrollPos}px)`;
}

// =============================================
// MODAL
// =============================================
function openModal(index) {
    currentModalImageIndex = index;
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-img').src = photos[index];
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

function changeModalImage(step) {
    currentModalImageIndex = (currentModalImageIndex + step + photos.length) % photos.length;
    document.getElementById('modal-img').src = photos[currentModalImageIndex];
}

window.addEventListener('click', e => {
    const modal = document.getElementById('image-modal');
    if (e.target === modal) closeModal();
});

window.addEventListener('keydown', e => {
    const modal = document.getElementById('image-modal');
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  changeModalImage(-1);
    if (e.key === 'ArrowRight') changeModalImage(1);
});

// =============================================
// HEADER SCROLL
// =============================================
function initScrollHeader() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
}

// =============================================
// MOBILE MENU
// =============================================
function toggleMobileMenu() {
    const menu   = document.getElementById('desktop-menu');
    const toggle = document.getElementById('menu-toggle');
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
    document.getElementById('desktop-menu').classList.remove('open');
    document.getElementById('menu-toggle').classList.remove('open');
    document.body.style.overflow = '';
}
