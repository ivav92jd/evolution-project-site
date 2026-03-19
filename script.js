/* ========================================
   ДАННЫЕ СИМУЛЯТОРА
   ======================================== */

const QUESTIONS = [
    // ДВИЖЕНИЕ (1-3)
    {
        id: 1, category: 'movement', categoryName: 'Движение',
        text: 'Сколько примерно шагов ты проходишь в обычный день?',
        hint: 'Можно посмотреть в приложении «Здоровье» на телефоне.',
        options: [
            { text: 'Менее 3 000 — в основном сижу', score: 0 },
            { text: '3 000–5 000 — хожу немного', score: 1 },
            { text: '5 000–8 000 — стараюсь ходить', score: 2 },
            { text: 'Более 8 000 — много двигаюсь', score: 3 }
        ]
    },
    {
        id: 2, category: 'movement', categoryName: 'Движение',
        text: 'Занимаешься ли ты спортом или физической активностью?',
        hint: 'Любая регулярная нагрузка: бег, плавание, танцы, тренировки.',
        options: [
            { text: 'Нет, практически не занимаюсь', score: 0 },
            { text: 'Иногда, 1–2 раза в месяц', score: 1 },
            { text: '1–2 раза в неделю', score: 2 },
            { text: '3 и более раз в неделю', score: 3 }
        ]
    },
    {
        id: 3, category: 'movement', categoryName: 'Движение',
        text: 'Сколько часов в день ты проводишь сидя?',
        hint: 'Уроки, домашние задания, компьютер, телефон, транспорт.',
        options: [
            { text: 'Более 10 часов', score: 0 },
            { text: '8–10 часов', score: 1 },
            { text: '5–7 часов', score: 2 },
            { text: 'Менее 5 часов', score: 3 }
        ]
    },
    // ПИТАНИЕ (4-6)
    {
        id: 4, category: 'nutrition', categoryName: 'Питание',
        text: 'Как часто ты ешь сладкое: конфеты, шоколад, выпечку, газировку?',
        hint: 'Среднее за обычную неделю.',
        options: [
            { text: 'Каждый день, несколько раз', score: 0 },
            { text: 'Каждый день, но понемногу', score: 1 },
            { text: 'Несколько раз в неделю', score: 2 },
            { text: 'Редко, 1–2 раза в неделю или реже', score: 3 }
        ]
    },
    {
        id: 5, category: 'nutrition', categoryName: 'Питание',
        text: 'Есть ли в рационе овощи, фрукты и цельные продукты?',
        hint: 'Крупы, бобовые, орехи, рыба, мясо без глубокой переработки.',
        options: [
            { text: 'Почти нет, в основном полуфабрикаты', score: 0 },
            { text: 'Иногда, но нерегулярно', score: 1 },
            { text: 'Стараюсь есть каждый день', score: 2 },
            { text: 'Основа рациона — цельные продукты', score: 3 }
        ]
    },
    {
        id: 6, category: 'nutrition', categoryName: 'Питание',
        text: 'Как часто ты ешь фастфуд или ультраобработанную пищу?',
        hint: 'Чипсы, лапша б/п, колбасы, готовые соусы, сладкие хлопья.',
        options: [
            { text: 'Каждый день или почти каждый', score: 0 },
            { text: '3–5 раз в неделю', score: 1 },
            { text: '1–2 раза в неделю', score: 2 },
            { text: 'Редко или никогда', score: 3 }
        ]
    },
    // СОН (7-9)
    {
        id: 7, category: 'sleep', categoryName: 'Сон и режим',
        text: 'Сколько часов ты обычно спишь в будние дни?',
        hint: 'Для подростков рекомендуется 8–10 часов.',
        options: [
            { text: 'Менее 6 часов', score: 0 },
            { text: '6–7 часов', score: 1 },
            { text: '7–8 часов', score: 2 },
            { text: '8–9 часов и более', score: 3 }
        ]
    },
    {
        id: 8, category: 'sleep', categoryName: 'Сон и режим',
        text: 'Пользуешься ли ты телефоном перед сном?',
        hint: '«Синий» свет экранов подавляет мелатонин.',
        options: [
            { text: 'Да, до момента засыпания', score: 0 },
            { text: 'Обычно да, убираю за 15–30 минут', score: 1 },
            { text: 'Стараюсь убрать за час', score: 2 },
            { text: 'Не пользуюсь за 1–2 часа до сна', score: 3 }
        ]
    },
    {
        id: 9, category: 'sleep', categoryName: 'Сон и режим',
        text: 'Стабилен ли твой режим сна?',
        hint: 'Ложишься и встаёшь примерно в одно время.',
        options: [
            { text: 'Сильно «плавает», особенно в выходные', score: 0 },
            { text: 'Стараюсь, но часто сбивается', score: 1 },
            { text: 'В целом стабильный, ±1 час', score: 2 },
            { text: 'Очень стабильный, включая выходные', score: 3 }
        ]
    },
    // СВЕЖИЙ ВОЗДУХ (10-11)
    {
        id: 10, category: 'outdoor', categoryName: 'Свежий воздух и природа',
        text: 'Сколько времени в день ты на открытом воздухе?',
        hint: 'Только время на улице, не в помещении.',
        options: [
            { text: 'Менее 30 минут', score: 0 },
            { text: '30–60 минут', score: 1 },
            { text: '1–2 часа', score: 2 },
            { text: 'Более 2 часов', score: 3 }
        ]
    },
    {
        id: 11, category: 'outdoor', categoryName: 'Свежий воздух и природа',
        text: 'Как часто ты бываешь в парке, лесу, природном пространстве?',
        hint: '20 минут в зелёной зоне снижают уровень кортизола.',
        options: [
            { text: 'Практически никогда', score: 0 },
            { text: 'Несколько раз в месяц', score: 1 },
            { text: '1–2 раза в неделю', score: 2 },
            { text: 'Почти каждый день', score: 3 }
        ]
    },
    // СТРЕСС (12-13)
    {
        id: 12, category: 'stress', categoryName: 'Стресс и нагрузка',
        text: 'Как часто ты чувствуешь усталость, напряжение или тревогу?',
        hint: 'Субъективное ощущение в течение обычной недели.',
        options: [
            { text: 'Почти каждый день, сильно', score: 0 },
            { text: 'Часто, несколько раз в неделю', score: 1 },
            { text: 'Иногда, но в целом справляюсь', score: 2 },
            { text: 'Редко, чувствую себя спокойно', score: 3 }
        ]
    },
    {
        id: 13, category: 'stress', categoryName: 'Стресс и нагрузка',
        text: 'Сколько часов в день ты проводишь за экранами?',
        hint: 'Всё: учёба, соцсети, игры, видео.',
        options: [
            { text: 'Более 8 часов', score: 0 },
            { text: '5–8 часов', score: 1 },
            { text: '3–5 часов', score: 2 },
            { text: 'Менее 3 часов', score: 3 }
        ]
    },
    // ЗРЕНИЕ (14-15)
    {
        id: 14, category: 'vision', categoryName: 'Зрение',
        text: 'Делаешь ли ты перерывы при работе за экраном?',
        hint: 'Правило 20-20-20: каждые 20 мин смотри на 6 м в течение 20 сек.',
        options: [
            { text: 'Нет, работаю без перерывов подолгу', score: 0 },
            { text: 'Иногда, но нерегулярно', score: 1 },
            { text: 'Стараюсь делать перерывы', score: 2 },
            { text: 'Регулярно делаю перерывы', score: 3 }
        ]
    },
    {
        id: 15, category: 'vision', categoryName: 'Зрение',
        text: 'Замечаешь ли ты усталость глаз или ухудшение зрения?',
        hint: 'Возможное следствие зрительной нагрузки вблизи и дефицита света.',
        options: [
            { text: 'Да, часто — глаза устают, зрение ухудшилось', score: 0 },
            { text: 'Иногда бывает усталость', score: 1 },
            { text: 'Редко, только при долгой работе', score: 2 },
            { text: 'Нет, зрение в порядке', score: 3 }
        ]
    }
];

const BLOCK_INSIGHTS = {
    movement: {
        text: 'Наши предки проходили 15–20 км в день. Мышцы, кости, сердце, обмен веществ — всё работает лучше при регулярной нагрузке. Рекомендация ВОЗ (150 мин/нед) — минимум, а не идеал.',
        afterQuestion: 3
    },
    nutrition: {
        text: 'В эволюционной среде сахар был редкостью (~2 кг/год). Сегодня — 35–50 кг/год. Организм не «умеет» останавливаться перед сладким: раньше калории нужно было хватать, пока есть.',
        afterQuestion: 6
    },
    sleep: {
        text: 'Циркадные ритмы формировались при естественном освещении. «Синий» спектр экранов подавляет мелатонин и сбивает биологические часы. Хронический недосып связан с набором веса и ухудшением памяти.',
        afterQuestion: 9
    },
    outdoor: {
        text: 'Человек — «уличный» вид. Дефицит дневного света — один из главных факторов риска миопии у подростков. Природные пространства доказанно снижают уровень стресса.',
        afterQuestion: 11
    },
    stress: {
        text: 'Стрессовая реакция «бей или беги» создана для коротких физических угроз. Современный стресс — длительный и психологический. Без физической «разрядки» кортизол повреждает организм.',
        afterQuestion: 13
    },
    vision: {
        text: 'Зрительная система создана для дальних дистанций и яркого естественного света. Постоянная фокусировка вблизи нарушает рост глазного яблока — отсюда эпидемия миопии: до 80–90 % у молодёжи в ряде стран.',
        afterQuestion: 15
    }
};

const CATEGORY_INFO = {
    movement: {
        name: 'Движение', icon: '🚶', maxScore: 9,
        descriptions: {
            low: 'Очень мало движения. Повышен риск метаболических нарушений.',
            medium: 'Движения есть, но недостаточно для полноценной работы систем организма.',
            high: 'Хороший уровень активности, близкий к биологической норме.'
        }
    },
    nutrition: {
        name: 'Питание', icon: '🍽️', maxScore: 9,
        descriptions: {
            low: 'Рацион сильно отличается от эволюционного. Избыток сахара и ультраобработки.',
            medium: 'Есть полезные и проблемные привычки. Стоит увеличить долю цельных продуктов.',
            high: 'Питание близко к «эволюционному оптимуму»: много цельного, мало ультраобработки.'
        }
    },
    sleep: {
        name: 'Сон и режим', icon: '🌙', maxScore: 9,
        descriptions: {
            low: 'Серьёзные нарушения сна и светового режима. Повышен риск обменных проблем.',
            medium: 'Сон нестабилен или недостаточен. Экраны мешают засыпанию.',
            high: 'Стабильный и достаточный сон. Световая гигиена в порядке.'
        }
    },
    outdoor: {
        name: 'Свежий воздух', icon: '🌿', maxScore: 6,
        descriptions: {
            low: 'Очень мало улицы. Дефицит света повышает риск миопии.',
            medium: 'Бываешь на улице, но не так часто, как нужно.',
            high: 'Достаточно свежего воздуха — хорошо для зрения и настроения.'
        }
    },
    stress: {
        name: 'Стресс', icon: '😰', maxScore: 6,
        descriptions: {
            low: 'Высокий стресс и экранная нагрузка без разрядки.',
            medium: 'Стресс есть, но управляемый. Стоит следить за экранным временем.',
            high: 'Стрессовая нагрузка невысокая, экраны в разумных пределах.'
        }
    },
    vision: {
        name: 'Зрение', icon: '👁️', maxScore: 6,
        descriptions: {
            low: 'Глаза перегружены. Длительная работа вблизи без перерывов.',
            medium: 'Есть зрительная усталость. Больше перерывов и света.',
            high: 'Зрительная нагрузка сбалансирована.'
        }
    }
};

const RESULT_TYPES = {
    high: {
        minPercent: 70,
        badgeClass: 'badge-high',
        label: 'Близкий к естественному ритму',
        title: 'Высокая приспособленность',
        summary: 'Твой образ жизни во многом совпадает с тем, к чему «настроен» организм. Ты достаточно двигаешься, следишь за питанием, сном и временем на улице. Хорошая база для здоровья.',
        gaugeColor: '#5a8a4a'
    },
    medium: {
        minPercent: 40,
        badgeClass: 'badge-medium',
        label: 'Частично адаптированный',
        title: 'Частичное несоответствие',
        summary: 'В некоторых аспектах образ жизни соответствует потребностям, но в других — расходится. Типичная ситуация городского жителя. Есть конкретные зоны для улучшения.',
        gaugeColor: '#c8964a'
    },
    low: {
        minPercent: 0,
        badgeClass: 'badge-low',
        label: 'В зоне эволюционного риска',
        title: 'Выраженное эволюционное несоответствие',
        summary: 'Образ жизни существенно расходится с тем, к чему формировался организм. Это не приговор — но сигнал: многие привычки создают лишнюю нагрузку. Даже небольшие изменения заметно помогут.',
        gaugeColor: '#b85a4a'
    }
};

const RECS_MAP = {
    movement: { icon: '🚶', title: 'Больше движения', text: 'Ходьба, лестницы, перерывы каждые 30–40 минут. Даже 8 000 шагов уже ощутимо лучше 3 000.' },
    nutrition: { icon: '🥦', title: 'Пересмотри питание', text: 'Больше овощей, бобовых, орехов. Снижай сахар постепенно. Сдвиг в сторону цельных продуктов.' },
    sleep: { icon: '🌙', title: 'Наладь сон', text: 'Убирай телефон за час до сна, стабильный режим, тёмная спальня.' },
    outdoor: { icon: '☀️', title: 'Больше дневного света', text: 'Минимум 1–2 часа на улице. Важно для зрения, настроения и биоритмов.' },
    stress: { icon: '🧘', title: 'Разряжай стресс', text: 'Прогулка, пробежка — естественный «выход» для стрессовой реакции.' },
    vision: { icon: '👁️', title: 'Отдых для глаз', text: 'Правило 20-20-20. Больше времени на улице = больше света = лучше для зрения.' }
};


/* ========================================
   СОСТОЯНИЕ
   ======================================== */
let state = { currentQuestion: 0, answers: {}, showingInsight: false, started: false };


/* ========================================
   DOM
   ======================================== */
const DOM = {};

function cacheDom() {
    const ids = [
        'nav','navBurger','navMobile','simHeader','simBody','simResult',
        'simStartBtn','progressFill','progressText','progressCategory',
        'questionCard','categoryBadge','questionText','questionHint',
        'optionsContainer','simInsight','insightText','insightBtn',
        'simNav','prevBtn','nextBtn','gaugeCircle','resultScore',
        'resultType','resultTitle','resultSummary','resultCategories',
        'recList','retryBtn','retryBtnFinal','heroStartBtn'
    ];
    ids.forEach(id => { DOM[id] = document.getElementById(id); });
}


/* ========================================
   НАВИГАЦИЯ
   ======================================== */
function initNav() {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                DOM.nav.classList.toggle('scrolled', window.scrollY > 40);
                ticking = false;
            });
            ticking = true;
        }
    });
    DOM.navBurger.addEventListener('click', () => {
        DOM.navBurger.classList.toggle('active');
        DOM.navMobile.classList.toggle('open');
    });
    document.querySelectorAll('.nav-mobile-link').forEach(l => {
        l.addEventListener('click', () => {
            DOM.navBurger.classList.remove('active');
            DOM.navMobile.classList.remove('open');
        });
    });
}


/* ========================================
   СИМУЛЯТОР
   ======================================== */
function startSimulator() {
    state = { currentQuestion: 0, answers: {}, showingInsight: false, started: true };
    DOM.simHeader.style.display = 'none';
    DOM.simResult.style.display = 'none';
    DOM.simBody.style.display = 'block';
    DOM.simInsight.style.display = 'none';
    renderQuestion();
    document.getElementById('simulator').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderQuestion() {
    const q = QUESTIONS[state.currentQuestion];
    const pct = (state.currentQuestion / QUESTIONS.length) * 100;

    DOM.progressFill.style.width = pct + '%';
    DOM.progressText.textContent = 'Вопрос ' + (state.currentQuestion + 1) + ' из ' + QUESTIONS.length;
    DOM.progressCategory.textContent = q.categoryName;

    DOM.categoryBadge.textContent = q.categoryName;
    DOM.categoryBadge.setAttribute('data-cat', q.category);

    DOM.questionText.textContent = q.text;
    DOM.questionHint.textContent = q.hint;

    DOM.optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'sim-option';
        if (state.answers[q.id] === i) btn.classList.add('selected');
        btn.innerHTML = '<div class="sim-option-dot"></div><span>' + opt.text + '</span>';
        btn.addEventListener('click', () => selectOption(q.id, i));
        DOM.optionsContainer.appendChild(btn);
    });

    DOM.prevBtn.disabled = state.currentQuestion === 0;
    DOM.nextBtn.disabled = state.answers[q.id] === undefined;
    DOM.nextBtn.textContent = state.currentQuestion === QUESTIONS.length - 1 ? 'Показать результат →' : 'Далее →';

    DOM.questionCard.style.display = 'block';
    DOM.simNav.style.display = 'flex';
    DOM.simInsight.style.display = 'none';
    state.showingInsight = false;
}

function selectOption(qid, idx) {
    state.answers[qid] = idx;
    const opts = DOM.optionsContainer.querySelectorAll('.sim-option');
    opts.forEach((o, i) => o.classList.toggle('selected', i === idx));
    DOM.nextBtn.disabled = false;
}

function nextQuestion() {
    const q = QUESTIONS[state.currentQuestion];
    const insight = Object.values(BLOCK_INSIGHTS).find(ins => ins.afterQuestion === q.id);

    if (insight && !state.showingInsight) {
        state.showingInsight = true;
        DOM.questionCard.style.display = 'none';
        DOM.simNav.style.display = 'none';
        DOM.simInsight.style.display = 'flex';
        DOM.insightText.textContent = insight.text;
        return;
    }

    if (state.currentQuestion < QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuestion();
        DOM.simBody.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuestion();
    }
}

function continueAfterInsight() {
    state.showingInsight = false;
    if (state.currentQuestion < QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}


/* ========================================
   РЕЗУЛЬТАТ
   ======================================== */
function calcResults() {
    const cats = {};
    QUESTIONS.forEach(q => {
        if (!cats[q.category]) cats[q.category] = { score: 0, max: 0 };
        const ai = state.answers[q.id];
        if (ai !== undefined) cats[q.category].score += q.options[ai].score;
        cats[q.category].max += 3;
    });
    let total = 0, totalMax = 0;
    Object.values(cats).forEach(c => { total += c.score; totalMax += c.max; });
    const pct = Math.round((total / totalMax) * 100);
    let type;
    if (pct >= RESULT_TYPES.high.minPercent) type = RESULT_TYPES.high;
    else if (pct >= RESULT_TYPES.medium.minPercent) type = RESULT_TYPES.medium;
    else type = RESULT_TYPES.low;
    return { cats, total, totalMax, pct, type };
}

function showResult() {
    const r = calcResults();
    DOM.simBody.style.display = 'none';
    DOM.simResult.style.display = 'block';
    document.getElementById('simulator').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Gauge
    const off = 534 - (534 * r.pct / 100);
    DOM.gaugeCircle.style.stroke = r.type.gaugeColor;
    setTimeout(() => {
        DOM.gaugeCircle.style.transition = 'stroke-dashoffset 1.2s ease-out';
        DOM.gaugeCircle.style.strokeDashoffset = off;
    }, 200);

    animateNum(DOM.resultScore, 0, r.pct, 1200);

    DOM.resultType.className = 'result-badge ' + r.type.badgeClass;
    DOM.resultType.textContent = r.type.label;
    DOM.resultTitle.textContent = r.type.title;
    DOM.resultSummary.textContent = r.type.summary;

    renderCats(r.cats);
    renderRecs(r.cats);
}

function renderCats(cats) {
    DOM.resultCategories.innerHTML = '';
    Object.entries(cats).forEach(([key, data]) => {
        const info = CATEGORY_INFO[key];
        const pct = Math.round((data.score / data.max) * 100);
        let lvl, barCls;
        if (pct >= 67) { lvl = 'high'; barCls = 'bar-good'; }
        else if (pct >= 34) { lvl = 'medium'; barCls = 'bar-mid'; }
        else { lvl = 'low'; barCls = 'bar-bad'; }

        const el = document.createElement('div');
        el.className = 'result-cat';
        el.innerHTML =
            '<div class="result-cat-top">' +
                '<span class="result-cat-name">' + info.icon + ' ' + info.name + '</span>' +
                '<span class="result-cat-pct">' + pct + '%</span>' +
            '</div>' +
            '<div class="result-cat-bar">' +
                '<div class="result-cat-bar-fill ' + barCls + '" style="width:0%"></div>' +
            '</div>' +
            '<p class="result-cat-desc">' + info.descriptions[lvl] + '</p>';
        DOM.resultCategories.appendChild(el);

        setTimeout(() => {
            el.querySelector('.result-cat-bar-fill').style.width = pct + '%';
        }, 400);
    });
}

function renderRecs(cats) {
    DOM.recList.innerHTML = '';
    const sorted = Object.entries(cats)
        .map(([k, d]) => ({ key: k, pct: Math.round((d.score / d.max) * 100) }))
        .sort((a, b) => a.pct - b.pct);
    const weak = sorted.filter(c => c.pct < 67);
    const show = weak.length > 0 ? weak.slice(0, 5) : sorted.slice(0, 2);

    show.forEach(c => {
        const rec = RECS_MAP[c.key];
        const el = document.createElement('div');
        el.className = 'result-rec-item';
        el.innerHTML =
            '<div class="result-rec-emoji">' + rec.icon + '</div>' +
            '<div class="result-rec-body">' +
                '<h4>' + rec.title + '</h4>' +
                '<p>' + rec.text + '</p>' +
            '</div>';
        DOM.recList.appendChild(el);
    });
}

function animateNum(el, from, to, dur) {
    const t0 = performance.now();
    function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function resetSim() {
    state = { currentQuestion: 0, answers: {}, showingInsight: false, started: false };
    DOM.simResult.style.display = 'none';
    DOM.simBody.style.display = 'none';
    DOM.simHeader.style.display = 'block';
    DOM.gaugeCircle.style.transition = 'none';
    DOM.gaugeCircle.style.strokeDashoffset = 534;
    document.getElementById('simulator').scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ========================================
   INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    initNav();

    DOM.simStartBtn.addEventListener('click', startSimulator);
    DOM.heroStartBtn.addEventListener('click', e => { e.preventDefault(); startSimulator(); });
    DOM.nextBtn.addEventListener('click', nextQuestion);
    DOM.prevBtn.addEventListener('click', prevQuestion);
    DOM.insightBtn.addEventListener('click', continueAfterInsight);
    DOM.retryBtn.addEventListener('click', resetSim);
    DOM.retryBtnFinal.addEventListener('click', e => { e.preventDefault(); resetSim(); });
});