import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root was not found.');
}

app.innerHTML = `
    <header class="site-header">
        <div class="nav-shell">
            <a class="brand" href="#top" aria-label="FINZANJIR bosh sahifa">
                <img class="brand-logo" src="/resources/logo.png" alt="FINZANJIR logotipi">
                <span class="brand-copy">
                    <strong>FINZANJIR</strong>
                    <small>Moliyaviy xavfsizlik — har bir fuqaro uchun</small>
                </span>
            </a>
            <nav class="nav-links" aria-label="Asosiy navigatsiya">
                <a href="#maqsad">Maqsad</a>
                <a href="#qarash">Muallif qarashi</a>
                <a href="#ai">AI maqsadi</a>
                <a href="#muallif">Muallif</a>
            </nav>
        </div>
    </header>

    <main id="top">
        <section class="hero">
            <div class="hero-glow glow-one"></div>
            <div class="hero-glow glow-two"></div>
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Raqamli moliyaviy xavfsizlik konsepsiyasi</p>
                    <h1>Moliyaviy xavfsizlikni <span>odamdan boshlash.</span></h1>
                    <p class="hero-lead">FINZANJIR moliyaviy xavflarni tushunish, ulardan ehtiyot bo‘lish va kelajakda fuqarolarga xavfsizroq yo‘l ko‘rsatishga xizmat qilishi ko‘zda tutilgan loyiha.</p>
                    <div class="hero-actions">
                        <a class="button primary" href="#maqsad">Loyiha maqsadini ko‘rish</a>
                        <a class="button ghost" href="#muallif">Muallif haqida</a>
                    </div>
                    <div class="hero-note">
                        <span class="status-dot"></span>
                        <span>Bu sahifa loyiha konsepsiyasining ommaga mo‘ljallangan qismini taqdim etadi.</span>
                    </div>
                </div>

                <div class="hero-card">
                    <div class="shield-art" aria-hidden="true">
                        <div class="shield-ring"></div>
                        <div class="shield">
                            <div class="shield-f">F</div>
                            <div class="bars"><i></i><i></i><i></i></div>
                        </div>
                    </div>
                    <div class="hero-card-label">FINZANJIR</div>
                    <div class="hero-card-sub">Himoya · Tushunish · Rivojlanish</div>
                </div>
            </div>
        </section>

        <section class="section intro-section" id="maqsad">
            <div class="section-kicker">01 · Nima uchun?</div>
            <div class="split">
                <div>
                    <h2>Texnologiya rivojlanar ekan, xavfsizlik ham rivojlanishi kerak.</h2>
                </div>
                <div class="prose">
                    <p>Raqamli to‘lovlar va internet xizmatlari insonlarga qulaylik va yangi imkoniyatlar beradi. Shu bilan birga, ulardan noto‘g‘ri foydalanish xavfi ham ortadi.</p>
                    <p>FINZANJIRning asosiy g‘oyasi shu muhitda fuqarolarning moliyaviy xavfsizligini kuchaytirishga xizmat qiladigan yondashuvni izlashdir. Loyiha barcha muammolarni birdaniga yo‘q qilishni va’da qilmaydi.</p>
                </div>
            </div>
        </section>

        <section class="section dark-section">
            <div class="section-kicker">02 · Asosiy maqsad</div>
            <div class="purpose-grid">
                <article class="purpose-card featured">
                    <span class="card-number">01</span>
                    <h3>Xavfni erta anglash</h3>
                    <p>Inson muammoga chuqur kirib ketishidan oldin xavfni tushunish va ehtiyotkor qaror qabul qilish imkoniyatini kuchaytirish.</p>
                </article>
                <article class="purpose-card">
                    <span class="card-number">02</span>
                    <h3>Zararni kamaytirish</h3>
                    <p>Moliyaviy hodisa yuz berganda uning oqibatlarini imkon qadar kamaytirishga xizmat qiladigan kelajakdagi yechimlarni izlash.</p>
                </article>
                <article class="purpose-card">
                    <span class="card-number">03</span>
                    <h3>Bilimni oshirish</h3>
                    <p>Odamlarga moliyaviy xavflarni tushunarli tilda anglash, ehtiyot choralarini bilish va qonuniy yordam yo‘lini topishga ko‘maklashish.</p>
                </article>
                <article class="purpose-card">
                    <span class="card-number">04</span>
                    <h3>Doimiy rivojlanish</h3>
                    <p>Yangi xavflar paydo bo‘lsa, himoya yondashuvlarini ham yangi bilim va tajriba asosida takomillashtirish.</p>
                </article>
            </div>
        </section>

        <section class="section quote-section" id="qarash">
            <div class="section-kicker">03 · Muallif qarashi</div>
            <blockquote>
                “Men loyiha natijasini ‘hamma muammo tugaydi’ degan nuqtada emas, balki har bir tajribadan keyin himoya yanada yaxshilanadigan doimiy jarayonda ko‘raman.”
            </blockquote>
            <p class="quote-caption">FINZANJIR 15-bob · Muallifning kelajak haqidagi qarashi</p>
        </section>

        <section class="section safety-section" id="xavfsizlik">
            <div class="section-kicker">04 · Shaxsiy moliyaviy xavfsizlik</div>
            <div class="safety-intro">
                <div>
                    <h2>Nima uchun xavfsizlik odamdan boshlanadi?</h2>
                </div>
                <div class="prose">
                    <p>Ko‘plab kiberfiribgarlik holatlarida hujum faqat texnik tizimga emas, insonning ishonchi va e’tiboriga qaratiladi. Firibgarlar bank tizimini buzishga urinishi o‘rniga karta egasiga qo‘ng‘iroq qilishi, xabar yuborishi yoki soxta havolaga yo‘naltirishi mumkin.</p>
                    <p>Shuning uchun raqamli madaniyat va kiber-gigiyena moliyaviy xavfsizlikning muhim qismidir. Inson ehtiyotkorligi himoyaning zaif nuqtasi emas, uning muhim qatlamidir.</p>
                </div>
            </div>
            <div class="safety-grid">
                <article class="safety-card">
                    <span class="card-number">01</span>
                    <h3>SMS kod va parolni sir saqlang</h3>
                    <p>Telefoningizga kelgan tasdiqlash kodlarini hech kimga aytmang. Bank yoki to‘lov xizmatining vakili sifatida murojaat qilgan shaxs bunday kodni so‘rasa, ehtiyot bo‘ling.</p>
                </article>
                <article class="safety-card">
                    <span class="card-number">02</span>
                    <h3>Shubhali havolalarni ochmang</h3>
                    <p>“Mukofot”, “kompensatsiya”, “hisobingiz bloklandi” kabi shoshiltiruvchi xabarlar orqali yuborilgan havolalarni tekshirmasdan ochmang. Manbani rasmiy kanal orqali mustaqil tekshiring.</p>
                </article>
                <article class="safety-card">
                    <span class="card-number">03</span>
                    <h3>Ikki bosqichli himoyani yoqing</h3>
                    <p>Telegram, Instagram, elektron pochta va imkon bo‘lsa boshqa muhim hisoblarda ikki bosqichli autentifikatsiyadan foydalaning.</p>
                </article>
                <article class="safety-card">
                    <span class="card-number">04</span>
                    <h3>Moliyaviy zaxira yarating</h3>
                    <p>Kutilmagan xarajatlar va moliyaviy muammolar ta’sirini kamaytirish uchun imkoniyatga mos favqulodda zaxira jamg‘armasini shakllantirish foydali. 3–6 oylik xarajat miqdori umumiy moliyaviy rejalashtirish mezoni sifatida qaralishi mumkin.</p>
                </article>
            </div>
            <div class="safety-note">
                <strong>Asosiy fikr</strong>
                <span>Firibgarlikdan himoyalanish faqat texnologiya vazifasi emas. To‘g‘ri bilim, ehtiyotkorlik va o‘z vaqtida tekshirish ham moliyaviy xavfsizlikning bir qismidir.</span>
            </div>
        </section>

        <section class="section ai-section" id="ai">
            <div class="section-kicker">05 · Sun’iy ong maqsadi</div>
            <div class="ai-grid">
                <div>
                    <h2>AI qarorni tortib olish uchun emas, tushunishni kuchaytirish uchun.</h2>
                    <p class="lead-text">Muallif tasavvuridagi kelajak AI oddiy savol-javob oynasidan kengroq bo‘lishi kerak: insonning savolini va kontekstini tushunishga, bilimni tartiblashga, dalilga tayanishga va xavfsiz keyingi qadamni tushuntirishga yordam beradigan yordamchi qatlam.</p>
                </div>
                <div class="ai-flow">
                    <div><b>01</b><span>Insonning savoli yoki muammosi</span></div>
                    <div><b>02</b><span>Tushunish va kontekst</span></div>
                    <div><b>03</b><span>Bilim va dalilni izlash</span></div>
                    <div><b>04</b><span>Tushunarli, xavfsiz yo‘naltirish</span></div>
                    <div><b>05</b><span>Yakuniy vakolat inson va tashkilotda qoladi</span></div>
                </div>
            </div>
            <div class="future-note">
                <strong>Muhim chegara</strong>
                <span>Bu kelajakdagi yo‘nalish sifatida ko‘riladi. Joriy loyiha barcha darajadagi sun’iy ong imkoniyatlarini tayyor holda amalga oshirgan deb da’vo qilinmaydi.</span>
            </div>
        </section>

        <section class="section author-section" id="muallif">
            <div class="author-card">
                <div class="author-avatar" aria-hidden="true">SST</div>
                <div>
                    <div class="section-kicker">06 · Muallif</div>
                    <h2>Salamat Smaylov Tangrbergen uli</h2>
                    <p class="author-role">FINZANJIR konsepsiyasi muallifi</p>
                    <p>Muallifning FINZANJIRdagi asosiy qarashi moliyaviy xavfsizlikni texnologiya bilan kuchaytirish, odamlarning xavfni tushunishiga yordam berish va kelajakdagi himoya yondashuvlarini izchil rivojlantirishga qaratilgan.</p>
                    <p>FINZANJIR muallif uchun yakuniy manzil emas. U tajriba, bilim va kelajakdagi yangi ishlanmalar uchun poydevor sifatida ko‘riladi.</p>
                </div>
            </div>
        </section>

        <section class="section logo-section">
            <div class="section-kicker">07 · Brend g‘oyasi</div>
            <div class="logo-grid">
                <div>
                    <h2>Qalqon, F va o‘sish ramzi.</h2>
                    <p>FINZANJIR logotipidagi qalqon himoya g‘oyasini, F harfi loyiha nomini, yashil ustunlar rivojlanish va tahlilga intilishni, halqa esa jarayonlar o‘rtasidagi bog‘liqlikni ramziy ifodalaydi.</p>
                    <p class="muted">Bu ramziy talqin brend konsepsiyasining bir qismi bo‘lib, mutlaq himoya kafolati sifatida qaralmaydi.</p>
                </div>
                <div class="logo-wordmark">
                    <img class="brand-logo large-logo" src="/resources/logo.png" alt="FINZANJIR logotipi">
                    <strong>FINZANJIR</strong>
                    <small>Moliyaviy xavfsizlik — har bir fuqaro uchun</small>
                </div>
            </div>
        </section>

        <section class="section closing">
            <div class="closing-inner">
                <p class="eyebrow">FINZANJIR</p>
                <h2>Bugungidan yaxshiroq himoya. Ertangi kun uchun ko‘proq bilim.</h2>
                <p>Bu sahifa loyihaning ommaga mo‘ljallangan g‘oyaviy qismini taqdim etadi. Texnik arxitektura, ichki algoritmlar, ishchi hujjatlar va shaxsiy ma’lumotlar bu yerga chiqarilmaydi.</p>
                <a class="button primary" href="#top">Yuqoriga qaytish</a>
            </div>
        </section>
    </main>

    <footer>
        <div>© 2026 FINZANJIR</div>
        <div>Moliyaviy xavfsizlik — har bir fuqaro uchun</div>
    </footer>
`;
