// Dados dos Serviços (Objetos)
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
                { name: 'Gel Natural', price: 'R$ 110,00' },
                { name: 'baby boomer', price: 'R$ 110,00' },
                { name: 'Baby Glitter', price: 'R$ 110,00' },
                { name: 'Milk', price: 'R$ 110,00' },
                { name: 'Baby Collor', price: 'R$ 110,00' },
                { name: 'Art Gringa', price: 'R$ 120,00' },
                { name: 'Esmaltação', price: 'R$ 110,00' },
                { name: 'Esmaltação Permanente', price: 'R$ 120,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Gel Natural', price: 'R$ 95,00' },
                { name: 'baby boomer', price: 'R$ 95,00' },
                { name: 'Baby Glitter', price: 'R$ 95,00' },
                { name: 'Milk', price: 'R$ 95,00' },
                { name: 'Baby Collor', price: 'R$ 95,00' },
                { name: 'Art Gringa', price: 'R$ 100,00' },
                { name: 'Esmaltação', price: 'R$ 95,00' },
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
                { name: 'Gel Natural', price: 'R$ 100,00' },
                { name: 'Francesa', price: 'R$ 120,00' },
                { name: 'Gel Decorado', price: 'R$ 110,00' },
                { name: 'Esmaltação', price: 'R$ 110,00' },
                { name: 'Art Gringa', price: 'R$ 120,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Gel Natural', price: 'R$ 90,00' },
                { name: 'Francesa', price: 'R$ 100,00' },
                { name: 'Gel Decorado', price: 'R$ 90,00' },
                { name: 'Esmaltação', price: 'R$ 95,00' },
                { name: 'Art Gringa', price: 'R$ 100,00' }
            ]
        }
    },
    {
        id: 'acrilico',
        title: 'Acrilico',
        image: 'img/acrilico.png',
        hasTypes: true,
        types: ['APLICAÇÃO', 'MANUTENÇÃO'],
        currentType: 'APLICAÇÃO',
        services: {
            'APLICAÇÃO': [
                { name: 'Natural', price: 'R$ 110,00' },
                { name: 'Decorada', price: 'R$ 125,00' }
            ],
            'MANUTENÇÃO': [
                { name: 'Natural', price: 'R$ 95,00' },
                { name: 'Decorada', price: 'R$ 110,00' }
            ]
        }
    },
    {
        id: 'manicure-moderna',
        title: 'Serviços Manicure Moderna',
        image: 'img/manicure_moderna.png',
        hasTypes: false,
        services: [
            { 
                name: 'Manicure/Pedicure gel', 
                price: 'R$ 80,00', 
                altPrice: 'R$ 50,00', 
                priceLabel: 'completo', 
                altPriceLabel: 'individual',
                description: 'Inclui Cuticulagem e Blindagem + esmaltação em gel' 
            },
            { 
                name: 'Manicure/Pedicure tradicional', 
                price: 'R$ 35,00', 
                altPrice: 'R$ 20,00', 
                priceLabel: 'completo', 
                altPriceLabel: 'individual',
                description: 'Inclui Cuticulagem e esmaltação tradicional nas mãos e pés' 
            },
            { name: 'Blindagem Brilho gloss', price: 'R$ 40,00', description: 'Previne a quebra, efeito base permanente Inclui cuticulagem. Durabilidade 20 dias' },
            { name: 'Manicure Moderna', price: 'R$ 50,00', description: 'Base permanente + Esmaltação em Gel Cuticulagem' },
            { name: 'Manicure tradicional', price: 'R$ 20,00', description: 'Inclui Cuticulagem + esmaltação' },
            { name: 'Pedicure tradicional', price: 'R$ 20,00', description: 'Inclui Cuticulagem + esmaltação' },
            { name: 'Combo Manicure + Pedicure Tradicional', price: 'R$ 35,00' }
        ]
    },
    {
        id: 'tratamentos-podais',
        title: 'Tratamentos Podais Premium',
        image: 'img/tratamentos_podais.png',
        hasTypes: false,
        services: [
            { name: 'Escalda pés c/ SPA', price: 'R$ 70,00', description: 'Pedicure tradicional + Lixamento no dorso plantar + Esfoliação + Hidratação profunda + massagem + ofurô' },
            { name: 'Jelly SPA Express', price: 'R$ 20,00', description: 'Cuticulagem no dorso plantar + esfoliação + Hidratação profunda + massagem' },
            { name: 'Pedicure Gel – Diamant', price: 'R$ 50,00', description: 'Cuticulagem + blindagem + esmaltação em gel + esfoliação + Massagem relaxante + lixamento no dorso plantar' },
            { name: 'Plástica dos pés', price: 'R$ 80,00', description: 'Inclui pedicure tradicional + lixamento no dorso plantar + Esfoliação + hidratação profunda e massagem relaxante' },
            { name: 'Escalda Pés + Plástica dos Pés', price: 'R$ 120,00' }
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
    'fotos/foto1.jpg',
    'fotos/foto2.jpg',
    'fotos/foto3.jpg',
    'fotos/foto4.jpg',
    'fotos/foto5.jpg',
    'fotos/foto6.jpg',
    'fotos/foto7.jpg'
];

let currentPageIndex = 0;
let currentModalImageIndex = 0;
let isAnimating = false;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderPage(currentPageIndex);
    
    // Evento de scroll para trocar de página
    window.addEventListener('wheel', (e) => {
        if (isAnimating) return;
        
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
        const isAtTop = window.scrollY <= 2;

        if (e.deltaY > 0 && isAtBottom) {
            nextPage();
        } else if (e.deltaY < 0 && isAtTop) {
            prevPage();
        }
    }, { passive: false });

    // Touch events para mobile
    let touchStartY = 0;
    window.addEventListener('touchstart', e => touchStartY = e.touches[0].clientY);
    window.addEventListener('touchend', e => {
        if (isAnimating) return;
        let touchEndY = e.changedTouches[0].clientY;
        
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2;
        const isAtTop = window.scrollY <= 2;

        if (touchStartY - touchEndY > 70 && isAtBottom) nextPage();
        if (touchEndY - touchStartY > 70 && isAtTop) prevPage();
    });

    // Modal click to close
    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
        modalImg.onclick = (e) => {
            e.stopPropagation();
            closeModal();
        };
    }
});

let galleryScrollPos = 0;
function moveGallery(direction) {
    const track = document.getElementById('gallery-track');
    const itemWidth = 320; // item + gap
    galleryScrollPos += direction * itemWidth;
    
    const maxScroll = track.scrollWidth - document.getElementById('gallery-wrapper').offsetWidth;
    if (galleryScrollPos < 0) galleryScrollPos = 0;
    if (galleryScrollPos > maxScroll) galleryScrollPos = maxScroll;
    
    track.style.transform = `translateX(-${galleryScrollPos}px)`;
}

function renderPage(index) {
    const contentArea = document.getElementById('content-area');
    
    // Criar nova seção para animação
    const newSection = document.createElement('div');
    newSection.className = 'page-section';
    
    if (index === pagesData.length) {
        newSection.innerHTML = getSpacePageHTML();
        newSection.classList.add('space-page');
    } else {
        newSection.innerHTML = getServicePageHTML(pagesData[index]);
    }

    // Lógica de animação
    const currentSection = contentArea.querySelector('.page-section.active');
    if (currentSection) {
        isAnimating = true;
        currentSection.classList.remove('active');
        currentSection.style.opacity = '0';
        currentSection.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            contentArea.innerHTML = '';
            contentArea.appendChild(newSection);
            setTimeout(() => {
                newSection.classList.add('active');
                isAnimating = false;
            }, 50);
        }, 500);
    } else {
        contentArea.appendChild(newSection);
        newSection.classList.add('active');
    }
}

function getServicePageHTML(data) {
    const servicesToRender = data.hasTypes ? data.services[data.currentType] : data.services;
    
    return `
        <div class="container">
            <div class="page-layout">
                <div class="content-left">
                    <h1 class="page-title">${data.title}</h1>
                    
                    ${data.hasTypes ? `
                        <div class="type-selector">
                            ${data.types.map(type => `
                                <button class="type-btn ${data.currentType === type ? 'selected' : ''}" 
                                        onclick="changeType('${data.id}', '${type}')">${type}</button>
                            `).join('')}
                        </div>
                    ` : ''}

                    <ul class="services-list">
                        ${servicesToRender.map((service, sIndex) => `
                            <li class="service-item">
                                <div class="service-header" onclick="toggleMobilePrice(this)">
                                    <div class="service-name-wrapper">
                                        <span class="service-name">${service.name}</span>
                                        ${service.description ? `<span class="toggle-desc" onclick="toggleDescription(event, this)">+</span>` : ''}
                                        <span class="mobile-arrow">▼</span>
                                    </div>
                                    <div class="service-price-wrapper">
                                        <span class="price" id="price-${data.id}-${sIndex}">${service.price}</span>
                                        ${service.altPrice ? `
                                            <button class="price-toggle-btn" onclick="togglePriceValue(event, '${data.id}', ${sIndex})">
                                                ${service.priceLabel}
                                            </button>
                                        ` : ''}
                                    </div>
                                </div>
                                ${service.description ? `<div class="service-description">${service.description}</div>` : ''}
                            </li>
                        `).join('')}
                    </ul>

                    <div class="bottom-buttons">
                        <a href="https://maps.app.goo.gl/CUQJdFnH3ozQjzUh7" target="_blank" class="bottom-btn"><img src="img/btn_loc.png" alt="Localização"></a>
                        <a href="https://www.instagram.com/jenyfferaraujonails/" target="_blank" class="bottom-btn"><img src="img/btn_insta.png" alt="Instagram"></a>
                        <a href="https://wa.me/5583981935139" target="_blank" class="bottom-btn"><img src="img/btn_whats.png" alt="WhatsApp"></a>
                    </div>
                </div>
                <div class="content-right">
                    <img src="${data.image}" alt="${data.title}" class="object-image">
                </div>
            </div>
        </div>
    `;
}

function getSpacePageHTML() {
    return `
        <div class="container">
            <h1 class="page-title">Venha Conhecer Nosso Espaço</h1>
            <div class="space-content">
                <p class="space-text">
                    Aconchegante e Inovador com serviços de Alto Padrão para melhor lhe atender e extrair a pérola que há em você!
                </p>
                <img src="img/elementosfinal.png" alt="Elementos" class="elements-img">
                
                <div class="gallery-container">
                    <button class="gallery-nav-btn prev" onclick="moveGallery(-1)">&#10094;</button>
                    <div class="gallery-track-wrapper" id="gallery-wrapper">
                        <div class="gallery-track" id="gallery-track">
                            ${photos.map((photo, index) => `
                                <div class="gallery-item" onclick="openModal(${index})">
                                    <img src="${photo}" alt="Foto do espaço">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <button class="gallery-nav-btn next" onclick="moveGallery(1)">&#10095;</button>
                </div>
            </div>
        </div>
    `;
}

// Navegação entre páginas
function nextPage() {
    if (currentPageIndex < pagesData.length) {
        currentPageIndex++;
        renderPage(currentPageIndex);
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        renderPage(currentPageIndex);
    }
}

function showPage(type) {
    if (isAnimating) return;
    
    // Fechar menu mobile ao clicar em um item
    const menu = document.querySelector('.desktop-menu');
    if (menu) menu.classList.remove('active');

    if (type === 'inicio') currentPageIndex = 0;
    else if (type === 'servicos') currentPageIndex = 0;
    else if (type === 'contato') currentPageIndex = pagesData.length;
    renderPage(currentPageIndex);
}

// Funcionalidades de Serviço
function changeType(pageId, type) {
    const page = pagesData.find(p => p.id === pageId);
    page.currentType = type;
    renderPage(currentPageIndex);
}

function toggleDescription(event, element) {
    event.stopPropagation();
    const item = element.closest('.service-item');
    const desc = item.querySelector('.service-description');
    const isVisible = desc.style.display === 'block';
    
    desc.style.display = isVisible ? 'none' : 'block';
    element.textContent = isVisible ? '+' : '-';
}

function togglePriceValue(event, pageId, serviceIndex) {
    event.stopPropagation();
    const page = pagesData.find(p => p.id === pageId);
    const service = page.services[serviceIndex];
    const priceEl = document.getElementById(`price-${pageId}-${serviceIndex}`);
    const btn = event.target;

    if (btn.textContent.trim() === service.priceLabel) {
        priceEl.textContent = service.altPrice;
        btn.textContent = service.altPriceLabel;
    } else {
        priceEl.textContent = service.price;
        btn.textContent = service.priceLabel;
    }
}

// Mobile: Mostrar preço ao clicar no nome
function toggleMobilePrice(headerElement) {
    if (window.innerWidth > 768) return;

    const priceWrapper = headerElement.querySelector('.service-price-wrapper');
    const arrow = headerElement.querySelector('.mobile-arrow');
    const isShowing = priceWrapper.classList.contains('show');

    // Fechar outros abertos
    document.querySelectorAll('.service-price-wrapper.show').forEach(el => {
        el.classList.remove('show');
        const parentArrow = el.closest('.service-item').querySelector('.mobile-arrow');
        if (parentArrow) parentArrow.classList.remove('up');
    });

    if (!isShowing) {
        priceWrapper.classList.add('show');
        arrow.classList.add('up');
    }
}

// Galeria Modal
function openModal(index) {
    currentModalImageIndex = index;
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "flex";
    modalImg.src = photos[index];
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = "none";
    }
}

function toggleMobileMenu() {
    const menu = document.querySelector('.desktop-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function changeModalImage(step) {
    currentModalImageIndex += step;
    if (currentModalImageIndex >= photos.length) currentModalImageIndex = 0;
    if (currentModalImageIndex < 0) currentModalImageIndex = photos.length - 1;
    document.getElementById('modal-img').src = photos[currentModalImageIndex];
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target == modal) {
        closeModal();
    }
}
