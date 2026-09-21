// All visible copy lives here, in English (default) and Turkish.

export const content = {
  en: {
    meta: {
      title: 'IMEX Inspection | Maritime and logistics inspections',
      description:
        'IMEX Inspection is a specialized inspection and surveying company in the maritime sector: cargo supervision, vessel surveying, certification, port inspections, consultancy and compliance audits.',
    },
    nav: {
      services: 'Services',
      why: 'Why IMEX',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Menu',
      switchTo: 'TR',
      switchLabel: 'Türkçe',
      home: 'IMEX Inspection, home',
    },
    hero: {
      title: 'Secure and professional inspections in maritime and logistics',
      lead:
        "IMEX Inspection is a specialized inspection and surveying company in the maritime sector. We provide inspection services in compliance with international standards, ensuring that our clients' operations are safer and more efficient.",
      primary: 'Request an inspection',
      secondary: 'View our services',
    },
    video: {
      eyebrow: 'On every leg of the voyage',
      title: 'From the first lift to the last berth, we are watching your cargo.',
      text: 'Every container that crosses the sea passes through many hands. IMEX Inspection puts an independent, certified eye on each handover, so what leaves the port arrives as it should.',
      cta: 'Talk to our team',
    },
    services: {
      title: 'Our services',
      items: [
        {
          id: 'cargo',
          title: 'Cargo and Load Supervision',
          text: 'We monitor the security and condition of your cargo during loading and unloading at port. Our cargo supervision service minimizes risks during transportation and ensures compliance with international trade standards.',
        },
        {
          id: 'vessel',
          title: 'Vessel Surveying',
          text: 'Our vessel surveying service conducts thorough inspections to ensure the technical compliance and operational safety of vessels. We assess both trade and travel vessels for their adherence to international standards.',
        },
        {
          id: 'certification',
          title: 'Certification and Documentation',
          text: 'We provide all the necessary documents and certifications to ensure the international validity of your maritime activities. This service guarantees legal compliance for ship owners, operators, and cargo carriers.',
        },
        {
          id: 'port',
          title: 'Port Inspections and Management',
          text: 'We offer port inspection services to enhance the efficiency and safety of port operations. We ensure the effectiveness, safety, and legal compliance of every port operation.',
        },
        {
          id: 'consultancy',
          title: 'Consultancy and Training Services',
          text: 'We offer consultancy and training services to improve the best practices and processes within the industry. By implementing advanced management systems and industry standards, we help increase operational efficiency.',
        },
        {
          id: 'environment',
          title: 'Environmental and Safety Compliance Audits',
          text: 'We conduct environmental and safety audits to ensure all maritime operations comply with international environmental regulations and safety standards. This service helps reduce pollution-related risks and promotes sustainable business practices.',
        },
      ],
    },
    why: {
      title: 'What sets us apart',
      items: [
        {
          title: 'Expertise in Maritime and Logistics',
          text: 'Years of hands-on experience in the maritime and logistics sectors allow us to deliver highly reliable and industry-specific inspection services.',
        },
        {
          title: 'Client-Centric Approach',
          text: "We build long-term partnerships by focusing on each client's unique challenges, offering flexible and responsive support.",
        },
        {
          title: 'Transparency and Integrity',
          text: 'We prioritize open communication, detailed reporting, and honest evaluations in every service we provide.',
        },
        {
          title: 'Comprehensive Service Coverage',
          text: 'From port inspections to documentation and consultancy, we offer end-to-end solutions tailored to your operational needs.',
        },
        {
          title: 'Certified Professionals',
          text: 'Our team consists of qualified experts with international certifications in vessel surveying, cargo control, and safety compliance.',
        },
        {
          title: 'International Standards Compliance',
          text: 'All our inspections and certifications adhere strictly to international regulations, ensuring global recognition and legal assurance.',
        },
      ],
    },
    contact: {
      title: 'Request an inspection',
      lead: 'Tell us about your cargo, vessel or port operation. We will reply to the e-mail address you give us.',
      email: 'E-mail',
      phone: 'Phone',
      address: 'Address',
      directions: 'Get directions',
      form: {
        name: 'Full name',
        company: 'Company',
        email: 'E-mail',
        phone: 'Phone',
        service: 'Service',
        serviceAny: 'Not sure yet',
        message: 'Message',
        optional: 'optional',
        kvkkPre: 'I have read the ',
        kvkkLink: 'KVKK Privacy Notice',
        kvkkPost: ' and understand how my data is processed.',
        send: 'Send request',
        sending: 'Sending…',
        success: 'Request sent. We will get back to you by e-mail.',
        error: 'The request could not be sent. Please try again, or write to us directly.',
      },
    },
    faq: {
      title: 'Frequently asked questions',
      lead: 'Straight answers about cargo supervision, vessel surveying, certification and how to work with IMEX Inspection.',
      items: [
        {
          q: 'What does IMEX Inspection do?',
          a: 'IMEX Inspection is a specialized inspection and surveying company in the maritime and logistics sector. We provide cargo and load supervision, vessel surveying, certification and documentation, port inspections, consultancy and training, and environmental and safety compliance audits, all in line with international standards.',
        },
        {
          q: 'What is cargo supervision and why do I need it?',
          a: 'Cargo supervision is an independent check of the quantity, condition and handling of cargo while it is loaded or unloaded. It gives shipper, carrier, buyer and insurer a neutral record of what actually happened, which reduces the risk of damage claims and quantity disputes and supports compliance with international trade standards.',
        },
        {
          q: 'What is a draft survey?',
          a: 'A draft survey estimates the weight of a bulk cargo by reading a ship’s draft marks before and after loading or discharge and calculating the change in displacement. It is the standard way to check the quantity of coal, grain, ore and similar cargoes.',
          link: { to: '/blog/draft-survey-explained', label: 'Read: Draft survey explained' },
        },
        {
          q: 'What does a vessel survey cover?',
          a: 'A vessel survey is an inspection of a ship’s technical condition and operational safety against international standards. It typically looks at the hull, machinery, safety and life-saving equipment, and the certificates and records on board. Owners, buyers, charterers and insurers use it to understand a vessel’s real condition.',
        },
        {
          q: 'What is checked during container loading?',
          a: 'An inspector checks the condition of the container, compares the cargo with the shipping documents, watches stowage and securing, and records the seal number with photographs. Any damaged or wrongly labelled units are noted before the doors are closed, not after arrival.',
          link: { to: '/blog/container-loading-inspection', label: 'Read: What an independent inspector checks' },
        },
        {
          q: 'What is port state control and how can a ship prepare?',
          a: 'Port state control (PSC) is the inspection of foreign-flagged ships in a port to check that they meet international rules such as SOLAS, MARPOL, MLC and STCW. To prepare, check that certificates and records are valid, that safety and pollution-prevention equipment works, and that the crew can perform drills. A pre-arrival review by an independent surveyor helps to find problems in time.',
          link: { to: '/blog/port-state-control-checklist', label: 'Read: Port state control checklist' },
        },
        {
          q: 'Why use an independent inspection company?',
          a: 'An independent inspector has no commercial stake in the result. Shipper, carrier and consignee each have their own interests, so a neutral report is more credible to insurers, banks and, if needed, courts. Transparency and detailed reporting are the core of our approach.',
        },
        {
          q: 'What environmental and safety compliance audits do you carry out?',
          a: 'We audit maritime operations against international environmental regulations and safety standards. The aim is to find gaps early, reduce pollution-related and safety risks, and support sustainable operations. Consultancy and training can follow, so that the fixes stay in place.',
        },
        {
          q: 'What information should I send to request an inspection?',
          a: 'It helps to include the type of service you need, the cargo type and quantity, the vessel name and IMO number if known, the port, and the expected dates. Shipping documents such as the bill of lading or booking details are useful too. If you are not sure what you need, describe the situation and we will recommend the right inspection.',
        },
        {
          q: 'How do I contact IMEX Inspection?',
          a: 'Use the request form in the contact section of this page. Choose a service (or "Not sure yet"), describe your cargo, vessel or port operation, and we will reply to the e-mail address you give us.',
          link: { to: '/#contact', label: 'Request an inspection' },
        },
      ],
    },
    legal: { updated: 'Last updated' },
    blog: {
      meta: {
        title: 'Blog | IMEX Inspection',
        description:
          'Practical articles from IMEX Inspection on cargo supervision, vessel surveying and compliance in maritime and logistics.',
      },
      title: 'Insights from the field',
      lead: 'Practical notes on cargo supervision, vessel surveying and compliance, from the people who do the inspections.',
      readMore: 'Read article',
      minutes: 'min read',
      home: 'Home',
      all: 'All articles',
      more: 'More articles',
      ctaTitle: 'Have a cargo, vessel or port call coming up?',
      ctaText: 'Tell us what you are shipping and where. We will suggest the right inspection.',
      ctaButton: 'Request an inspection',
      notFoundTitle: 'Page not found',
      notFoundText: 'The page you are looking for does not exist or has moved.',
    },
    cookie: {
      title: 'Cookie preferences',
      text: 'This site uses only the storage it needs to work, such as your language choice. Analytics cookies, if we ever add them, run only with your consent.',
      policy: 'Cookie Policy',
      privacy: 'KVKK Privacy Notice',
      acceptAll: 'Accept all',
      necessaryOnly: 'Necessary only',
      prefs: 'Preferences',
      save: 'Save preferences',
      necessary: {
        title: 'Necessary',
        text: 'Needed for the site to work and to remember your language and this choice. Always on.',
      },
      analytics: {
        title: 'Analytics',
        text: 'Visitor statistics. No analytics tool is used on the site today; if one is added it will only run with this permission.',
      },
    },
    footer: {
      tagline: 'Maritime and logistics inspections in compliance with international standards.',
      rights: 'All rights reserved.',
      privacy: 'KVKK Privacy Notice',
      cookies: 'Cookie Policy',
      cookieSettings: 'Cookie preferences',
    },
  },

  tr: {
    meta: {
      title: 'IMEX Inspection | Denizcilik ve lojistik denetimleri',
      description:
        'IMEX Inspection, denizcilik sektöründe uzmanlaşmış bir denetim ve ekspertiz şirketidir: kargo gözetimi, gemi ekspertizi, belgelendirme, liman denetimi, danışmanlık ve uyum denetimleri.',
    },
    nav: {
      services: 'Hizmetler',
      why: 'Neden IMEX',
      faq: 'S.S.S.',
      blog: 'Blog',
      contact: 'İletişim',
      menu: 'Menü',
      switchTo: 'EN',
      switchLabel: 'English',
      home: 'IMEX Inspection, ana sayfa',
    },
    hero: {
      title: 'Denizcilik ve lojistikte güvenli ve profesyonel denetimler',
      lead:
        'IMEX Inspection, denizcilik sektöründe uzmanlaşmış bir denetim ve ekspertiz şirketidir. Uluslararası standartlara uygun denetim hizmetleri sunarak müşterilerimizin operasyonlarının daha güvenli ve verimli olmasını sağlıyoruz.',
      primary: 'Denetim talep et',
      secondary: 'Hizmetlerimizi gör',
    },
    video: {
      eyebrow: 'Yolculuğun her aşamasında',
      title: 'İlk vinçten son rıhtıma kadar, yükünüz gözümüzün önünde.',
      text: 'Denizi aşan her konteyner pek çok elden geçer. IMEX Inspection her devir teslimde bağımsız ve sertifikalı bir göz olur; limandan çıkan yük, olması gerektiği gibi varır.',
      cta: 'Ekibimizle görüşün',
    },
    services: {
      title: 'Hizmetlerimiz',
      items: [
        {
          id: 'cargo',
          title: 'Yük ve Kargo Gözetimi',
          text: 'Limanda yükleme ve boşaltma sırasında kargonuzun güvenliğini ve durumunu izliyoruz. Kargo gözetim hizmetimiz taşıma sırasındaki riskleri en aza indirir ve uluslararası ticaret standartlarına uyumu sağlar.',
        },
        {
          id: 'vessel',
          title: 'Gemi Ekspertizi',
          text: 'Gemi ekspertiz hizmetimiz, gemilerin teknik uygunluğunu ve operasyonel güvenliğini sağlamak için kapsamlı denetimler yapar. Hem ticari hem de yolcu gemilerini uluslararası standartlara uygunluk açısından değerlendiriyoruz.',
        },
        {
          id: 'certification',
          title: 'Belgelendirme ve Dokümantasyon',
          text: 'Denizcilik faaliyetlerinizin uluslararası geçerliliğini sağlamak için gerekli tüm belge ve sertifikaları sunuyoruz. Bu hizmet; gemi sahipleri, işletmeciler ve yük taşıyıcıları için yasal uyumu garanti eder.',
        },
        {
          id: 'port',
          title: 'Liman Denetimi ve Yönetimi',
          text: 'Liman operasyonlarının verimliliğini ve güvenliğini artırmak için liman denetimi hizmetleri sunuyoruz. Her liman operasyonunun etkinliğini, güvenliğini ve yasal uyumunu sağlıyoruz.',
        },
        {
          id: 'consultancy',
          title: 'Danışmanlık ve Eğitim Hizmetleri',
          text: 'Sektördeki en iyi uygulamaları ve süreçleri geliştirmek için danışmanlık ve eğitim hizmetleri sunuyoruz. Gelişmiş yönetim sistemleri ve sektör standartlarını uygulayarak operasyonel verimliliğin artmasına yardımcı oluyoruz.',
        },
        {
          id: 'environment',
          title: 'Çevre ve Güvenlik Uyum Denetimleri',
          text: 'Tüm denizcilik operasyonlarının uluslararası çevre mevzuatına ve güvenlik standartlarına uyumunu sağlamak için çevre ve güvenlik denetimleri yapıyoruz. Bu hizmet, kirlilikle ilgili riskleri azaltır ve sürdürülebilir iş uygulamalarını destekler.',
        },
      ],
    },
    why: {
      title: 'Bizi farklı kılan',
      items: [
        {
          title: 'Denizcilik ve lojistikte uzmanlık',
          text: 'Denizcilik ve lojistik sektörlerindeki yılların uygulamalı deneyimi, son derece güvenilir ve sektöre özel denetim hizmetleri sunmamızı sağlar.',
        },
        {
          title: 'Müşteri odaklı yaklaşım',
          text: 'Her müşterinin kendine özgü zorluklarına odaklanarak, esnek ve hızlı destek sunan uzun vadeli ortaklıklar kuruyoruz.',
        },
        {
          title: 'Şeffaflık ve dürüstlük',
          text: 'Sunduğumuz her hizmette açık iletişime, ayrıntılı raporlamaya ve dürüst değerlendirmelere öncelik veriyoruz.',
        },
        {
          title: 'Kapsamlı hizmet yelpazesi',
          text: 'Liman denetiminden dokümantasyon ve danışmanlığa kadar, operasyonel ihtiyaçlarınıza uygun uçtan uca çözümler sunuyoruz.',
        },
        {
          title: 'Sertifikalı uzmanlar',
          text: 'Ekibimiz; gemi ekspertizi, kargo kontrolü ve güvenlik uyumu alanlarında uluslararası sertifikalara sahip nitelikli uzmanlardan oluşur.',
        },
        {
          title: 'Uluslararası standartlara uyum',
          text: 'Tüm denetim ve sertifikalarımız uluslararası düzenlemelere sıkı sıkıya uyar; bu da küresel geçerlilik ve yasal güvence sağlar.',
        },
      ],
    },
    contact: {
      title: 'Denetim talep edin',
      lead: 'Kargonuzu, geminizi ya da liman operasyonunuzu bize anlatın. Bıraktığınız e-posta adresine dönüş yapacağız.',
      email: 'E-posta',
      phone: 'Telefon',
      address: 'Adres',
      directions: 'Yol tarifi al',
      form: {
        name: 'Ad soyad',
        company: 'Şirket',
        email: 'E-posta',
        phone: 'Telefon',
        service: 'Hizmet',
        serviceAny: 'Henüz emin değilim',
        message: 'Mesaj',
        optional: 'isteğe bağlı',
        kvkkPre: '',
        kvkkLink: 'KVKK Aydınlatma Metni’ni',
        kvkkPost: ' okudum, kişisel verilerimin nasıl işlendiğini anladım.',
        send: 'Talebi gönder',
        sending: 'Gönderiliyor…',
        success: 'Talebiniz gönderildi. E-posta ile size dönüş yapacağız.',
        error: 'Talep gönderilemedi. Lütfen tekrar deneyin ya da bize doğrudan yazın.',
      },
    },
    faq: {
      title: 'Sıkça sorulan sorular',
      lead: 'Kargo gözetimi, gemi ekspertizi, belgelendirme ve IMEX Inspection ile çalışma hakkında net cevaplar.',
      items: [
        {
          q: 'IMEX Inspection ne iş yapar?',
          a: 'IMEX Inspection, denizcilik ve lojistik sektöründe uzmanlaşmış bir denetim ve ekspertiz şirketidir. Yük ve kargo gözetimi, gemi ekspertizi, belgelendirme ve dokümantasyon, liman denetimi, danışmanlık ve eğitim ile çevre ve güvenlik uyum denetimleri hizmetlerini uluslararası standartlara uygun olarak sunuyoruz.',
        },
        {
          q: 'Kargo gözetimi nedir, neden gerekir?',
          a: 'Kargo gözetimi, yük yüklenirken veya boşaltılırken miktarının, durumunun ve elleçlenmesinin bağımsız biri tarafından kontrol edilmesidir. Yükleyiciye, taşıyıcıya, alıcıya ve sigortacıya olanların tarafsız bir kaydını verir; hasar taleplerini ve miktar uyuşmazlıklarını azaltır, uluslararası ticaret standartlarına uyumu destekler.',
        },
        {
          q: 'Draft survey nedir?',
          a: 'Draft survey (su çekimi ölçümü), geminin draft işaretlerinin yükleme veya boşaltma öncesinde ve sonrasında okunup deplasman farkının hesaplanmasıyla dökme yükün ağırlığını tahmin etme yöntemidir. Kömür, tahıl, cevher gibi yüklerin miktarını doğrulamanın standart yoludur.',
          link: { to: '/blog/draft-survey-explained', label: 'Oku: Draft survey nedir?' },
        },
        {
          q: 'Gemi ekspertizi neleri kapsar?',
          a: 'Gemi ekspertizi, geminin teknik durumunun ve operasyonel güvenliğinin uluslararası standartlara göre denetlenmesidir. Genellikle gövde, makine, emniyet ve can kurtarma ekipmanı ile gemideki sertifika ve kayıtlar incelenir. Armatörler, alıcılar, kiracılar ve sigortacılar geminin gerçek durumunu anlamak için kullanır.',
        },
        {
          q: 'Konteyner yüklemesinde neler kontrol edilir?',
          a: 'Eksper konteynerin durumunu kontrol eder, yükü sevkiyat belgeleriyle karşılaştırır, istif ve bağlamayı izler, mühür numarasını fotoğraflarla kaydeder. Hasarlı veya yanlış etiketli ürünler, kapılar kapatılmadan önce tespit edilir; varıştan sonra değil.',
          link: { to: '/blog/container-loading-inspection', label: 'Oku: Bağımsız eksper neleri kontrol eder?' },
        },
        {
          q: 'Liman devleti denetimi (PSC) nedir, gemi nasıl hazırlanır?',
          a: 'Liman devleti denetimi (PSC), yabancı bayraklı gemilerin SOLAS, MARPOL, MLC ve STCW gibi uluslararası kurallara uygunluğunun limanda denetlenmesidir. Hazırlanmak için sertifika ve kayıtların geçerli olduğunu, emniyet ve kirlilik önleme ekipmanının çalıştığını ve mürettebatın tatbikatları yapabildiğini kontrol edin. Varış öncesinde bağımsız bir eksperle yapılan inceleme sorunları zamanında bulmaya yardımcı olur.',
          link: { to: '/blog/port-state-control-checklist', label: 'Oku: Liman devleti denetimi kontrol listesi' },
        },
        {
          q: 'Neden bağımsız bir denetim şirketi kullanmalıyım?',
          a: 'Bağımsız bir eksperin sonuçta ticari bir çıkarı yoktur. Yükleyici, taşıyıcı ve alıcının her birinin kendi çıkarı olduğundan, tarafsız bir rapor sigortacılar, bankalar ve gerektiğinde mahkemeler nezdinde daha güvenilirdir. Yaklaşımımızın özü şeffaflık ve ayrıntılı raporlamadır.',
        },
        {
          q: 'Hangi çevre ve güvenlik uyum denetimlerini yapıyorsunuz?',
          a: 'Denizcilik operasyonlarını uluslararası çevre düzenlemeleri ve güvenlik standartları açısından denetliyoruz. Amaç, eksikleri erken bulmak, kirlilik ve güvenlik risklerini azaltmak ve sürdürülebilir operasyonları desteklemektir. Düzeltmelerin kalıcı olması için ardından danışmanlık ve eğitim verilebilir.',
        },
        {
          q: 'Denetim talep etmek için hangi bilgileri göndermeliyim?',
          a: 'İhtiyaç duyduğunuz hizmet türünü, yük türünü ve miktarını, biliniyorsa gemi adı ve IMO numarasını, limanı ve beklenen tarihleri belirtmeniz işimizi kolaylaştırır. Konşimento veya rezervasyon bilgileri gibi sevkiyat belgeleri de faydalıdır. Ne gerektiğinden emin değilseniz durumu anlatın, size uygun denetimi önerelim.',
        },
        {
          q: 'IMEX Inspection ile nasıl iletişime geçerim?',
          a: 'Bu sayfadaki iletişim bölümünden talep formunu doldurun. Bir hizmet seçin (veya "Henüz emin değilim" deyin), kargonuzu, geminizi ya da liman operasyonunuzu anlatın; verdiğiniz e-posta adresine dönüş yapalım.',
          link: { to: '/#contact', label: 'Denetim talep edin' },
        },
      ],
    },
    legal: { updated: 'Son güncelleme' },
    blog: {
      meta: {
        title: 'Blog | IMEX Inspection',
        description:
          'IMEX Inspection’dan denizcilik ve lojistikte kargo gözetimi, gemi ekspertizi ve uyum üzerine pratik yazılar.',
      },
      title: 'Sahadan notlar',
      lead: 'Kargo gözetimi, gemi ekspertizi ve uyum üzerine, denetimleri bizzat yapan ekibimizden pratik notlar.',
      readMore: 'Yazıyı oku',
      minutes: 'dk okuma',
      home: 'Ana sayfa',
      all: 'Tüm yazılar',
      more: 'Diğer yazılar',
      ctaTitle: 'Yaklaşan bir yük, gemi veya liman uğrağınız mı var?',
      ctaText: 'Ne taşıdığınızı ve nereye gittiğini söyleyin. Size uygun denetimi önerelim.',
      ctaButton: 'Denetim talep edin',
      notFoundTitle: 'Sayfa bulunamadı',
      notFoundText: 'Aradığınız sayfa mevcut değil veya taşınmış.',
    },
    cookie: {
      title: 'Çerez tercihleri',
      text: 'Bu site yalnızca çalışması için gerekli depolamayı (ör. dil tercihiniz) kullanır. Analitik çerezler, ileride eklenirse, yalnızca izninizle çalışır.',
      policy: 'Çerez Politikası',
      privacy: 'KVKK Aydınlatma Metni',
      acceptAll: 'Tümünü kabul et',
      necessaryOnly: 'Sadece zorunlu',
      prefs: 'Tercihler',
      save: 'Tercihlerimi kaydet',
      necessary: {
        title: 'Zorunlu',
        text: 'Sitenin çalışması ile dil ve bu seçiminizin hatırlanması için gereklidir. Her zaman açıktır.',
      },
      analytics: {
        title: 'Analitik',
        text: 'Ziyaretçi istatistikleri içindir. Sitede şu anda analitik araç kullanılmıyor; eklenirse yalnızca bu izinle çalışır.',
      },
    },
    footer: {
      tagline: 'Uluslararası standartlara uygun denizcilik ve lojistik denetimleri.',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'KVKK Aydınlatma Metni',
      cookies: 'Çerez Politikası',
      cookieSettings: 'Çerez tercihleri',
    },
  },
};
