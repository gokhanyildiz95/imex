// Legal pages: KVKK privacy notice and cookie policy, in Turkish and English.
// Block types: { h2 }, { p }, { ul: [...] }, { table: { head, rows } }, { link: { to, label } }.
import { siteConfig } from './site.config.js';

const { legalName, address, phone } = siteConfig;
const mail = siteConfig.emails[0];

export const legal = {
  kvkk: {
    tr: {
      title: 'KVKK Aydınlatma Metni',
      description: `${legalName} internet sitesi iletişim formu kapsamında kişisel verilerinizin işlenmesine ilişkin 6698 sayılı KVKK aydınlatma metni.`,
      updated: '21 Eylül 2026',
      body: [
        {
          p: 'Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca, internet sitemizdeki iletişim formunu kullanan kişileri bilgilendirmek amacıyla hazırlanmıştır.',
        },
        { h2: 'Veri sorumlusu' },
        {
          ul: [
            `Ünvan: ${legalName}`,
            `Adres: ${address}`,
            `E-posta: ${mail}`,
            `Telefon: ${phone}`,
          ],
        },
        { h2: 'İşlenen kişisel veriler' },
        {
          ul: [
            'Kimlik bilgisi: ad ve soyad.',
            'İletişim bilgisi: e-posta adresi ve (isteğe bağlı) telefon numarası.',
            'Talep bilgisi: (isteğe bağlı) şirket adı, talep ettiğiniz hizmet ve mesajınızın içeriği.',
            'Onay bilgisi: bu aydınlatma metnini okuduğunuza dair onayınız ve onay tarihi.',
            'İşlem güvenliği: IP adresiniz, aşırı kullanımı önlemek amacıyla yalnızca kısa süreliğine sunucu belleğinde tutulur; kalıcı olarak kaydedilmez.',
          ],
        },
        {
          p: 'Formda istenenler dışında, özellikle sağlık, din, ceza mahkûmiyeti gibi özel nitelikli kişisel verilerinizi paylaşmamanızı rica ederiz.',
        },
        { h2: 'Kişisel verilerin işlenme amaçları' },
        {
          ul: [
            'Taleplerinizi ve sorularınızı yanıtlamak, teklif hazırlamak ve denetim hizmeti sunmak.',
            'Sizinle talebiniz kapsamında iletişim kurmak.',
            'Hukuki yükümlülüklerimizi yerine getirmek.',
            'İnternet sitemizin güvenliğini sağlamak ve otomatik/istenmeyen gönderimleri (spam) önlemek.',
          ],
        },
        { h2: 'Toplama yöntemi ve hukuki sebep' },
        {
          p: 'Kişisel verileriniz, internet sitemizdeki iletişim formu aracılığıyla elektronik ortamda toplanır. İşleme faaliyeti KVKK’nın 5. maddesinin 2. fıkrasındaki şu hukuki sebeplere dayanır: (c) bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, (ç) veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi ve (f) ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati (ör. site güvenliği).',
        },
        { h2: 'Kişisel verilerin aktarılması' },
        {
          p: 'Kişisel verileriniz; mesajınızı ulaştırmak için kullandığımız e-posta ve barındırma hizmeti sağlayıcılarına ve mevzuatın gerektirdiği hâllerde yetkili kamu kurum ve kuruluşlarına aktarılabilir. Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez. Hizmet sağlayıcılarımızın sunucularının yurt dışında bulunması hâlinde aktarım, KVKK’nın 9. maddesine uygun olarak gerçekleştirilir.',
        },
        { h2: 'Saklama süresi' },
        {
          p: 'Kişisel verileriniz, talebinizin sonuçlanması için gerekli süre boyunca ve sonrasında ilgili mevzuatta öngörülen zamanaşımı ve saklama süreleri kadar saklanır. Sürenin sonunda verileriniz silinir, yok edilir veya anonim hâle getirilir.',
        },
        { h2: 'KVKK’nın 11. maddesi kapsamındaki haklarınız' },
        {
          ul: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
            'İşlenmişse buna ilişkin bilgi talep etme,',
            'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,',
            'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme,',
            'KVKK’nın 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme,',
            'Düzeltme, silme ve yok edilme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
            'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonuç ortaya çıkmasına itiraz etme,',
            'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.',
          ],
        },
        { h2: 'Başvuru yöntemi' },
        {
          p: `Bu haklarınızı, kimliğinizi tespit edici bilgilerle birlikte yazılı olarak ${address} adresine veya ${mail} e-posta adresine iletebilirsiniz. Talebiniz niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. Başvurunuzun reddedilmesi, cevabın yetersiz bulunması veya süresinde cevap verilmemesi hâlinde, cevabı öğrendiğiniz tarihten itibaren otuz gün ve her hâlde başvuru tarihinden itibaren altmış gün içinde Kişisel Verileri Koruma Kurulu’na şikâyette bulunabilirsiniz.`,
        },
        {
          p: 'Bu metin gerektiğinde güncellenebilir; güncel sürüm bu sayfada yayımlanır.',
        },
      ],
    },
    en: {
      title: 'KVKK Privacy Notice',
      description: `Privacy notice under Turkish Personal Data Protection Law No. 6698 (KVKK) for the ${legalName} website contact form.`,
      updated: '21 September 2026',
      body: [
        {
          p: 'This notice is provided under Article 10 of the Turkish Personal Data Protection Law No. 6698 (“KVKK”) and the related communiqué on the duty to inform. It explains how we handle personal data submitted through the contact form on our website. This is a translation; if the two versions differ, the Turkish version prevails.',
        },
        { h2: 'Data controller' },
        {
          ul: [
            `Name: ${legalName}`,
            `Address: ${address}`,
            `E-mail: ${mail}`,
            `Phone: ${phone}`,
          ],
        },
        { h2: 'Personal data we process' },
        {
          ul: [
            'Identity: your first and last name.',
            'Contact: your e-mail address and, optionally, your phone number.',
            'Request: optionally your company name, the service you ask about, and the content of your message.',
            'Acknowledgement: your confirmation that you have read this notice, and its date.',
            'Security: your IP address is kept in server memory for a short time only, to prevent abuse. It is not stored permanently.',
          ],
        },
        {
          p: 'Please do not share anything the form does not ask for, especially special categories of personal data such as health, religion or criminal convictions.',
        },
        { h2: 'Why we process it' },
        {
          ul: [
            'To answer your enquiries, prepare quotations and provide inspection services.',
            'To contact you about your request.',
            'To meet our legal obligations.',
            'To keep the website secure and prevent automated or unwanted submissions (spam).',
          ],
        },
        { h2: 'How we collect it and on what legal basis' },
        {
          p: 'Your data is collected electronically through the contact form. Processing relies on the following grounds in Article 5(2) of the KVKK: (c) it is directly related to the conclusion or performance of a contract, (ç) it is necessary for us to comply with a legal obligation, and (f) it is necessary for our legitimate interests, such as website security, provided your fundamental rights and freedoms are not harmed.',
        },
        { h2: 'Who receives it' },
        {
          p: 'Your data may be shared with the e-mail and hosting providers we use to receive your message, and with competent public authorities where the law requires it. We do not sell or hand over your data to third parties for marketing. If our providers’ servers are located abroad, the transfer is carried out in line with Article 9 of the KVKK.',
        },
        { h2: 'How long we keep it' },
        {
          p: 'We keep your data for as long as needed to deal with your request, and afterwards for the limitation and retention periods set by law. When that period ends, the data is deleted, destroyed or anonymised.',
        },
        { h2: 'Your rights under Article 11 of the KVKK' },
        {
          ul: [
            'To learn whether your personal data is processed,',
            'to request information about it if it has been processed,',
            'to learn the purpose of processing and whether it is used accordingly,',
            'to know the third parties to whom it is transferred in Turkey or abroad,',
            'to ask for correction if it is incomplete or inaccurate,',
            'to ask for deletion or destruction under Article 7 of the KVKK,',
            'to ask that corrections, deletions and destruction be notified to the third parties who received the data,',
            'to object to a result against you that arises from analysis exclusively by automated systems,',
            'to claim compensation if you suffer damage from unlawful processing.',
          ],
        },
        { h2: 'How to apply' },
        {
          p: `You can send your request, with information that identifies you, in writing to ${address} or by e-mail to ${mail}. We will reply free of charge as soon as possible and within thirty days at the latest, depending on the nature of the request. If your application is rejected, the answer is inadequate, or we do not reply in time, you may complain to the Personal Data Protection Board within thirty days of learning our reply and in any case within sixty days of your application.`,
        },
        {
          p: 'We may update this notice when needed. The current version is always published on this page.',
        },
      ],
    },
  },

  cookies: {
    tr: {
      title: 'Çerez Politikası',
      description: `${legalName} internet sitesinde kullanılan çerezler ve benzeri depolama teknolojileri, bunların amaçları ve tercihlerinizi nasıl yönetebileceğiniz.`,
      updated: '21 Eylül 2026',
      body: [
        {
          p: 'Bu politika, internet sitemizde hangi çerezleri ve benzeri teknolojileri kullandığımızı, hangi amaçla kullandığımızı ve tercihlerinizi nasıl yönetebileceğinizi açıklar.',
        },
        { h2: 'Çerez nedir?' },
        {
          p: 'Çerezler ve benzeri teknolojiler (ör. tarayıcının yerel depolaması), bir siteyi ziyaret ettiğinizde cihazınıza kaydedilen küçük veri parçalarıdır. Siteyi çalıştırmak, tercihlerinizi hatırlamak veya siteyi nasıl kullandığınızı ölçmek için kullanılabilir.',
        },
        { h2: 'Sitemizde kullandıklarımız' },
        {
          table: {
            head: ['Ad', 'Tür', 'Amaç', 'Süre', 'Kategori'],
            rows: [
              ['imex-lang', 'Yerel depolama, birinci taraf', 'Seçtiğiniz dili (Türkçe veya İngilizce) hatırlar.', 'Siz silene kadar', 'Zorunlu'],
              ['imex-consent', 'Yerel depolama, birinci taraf', 'Çerez tercihinizi hatırlar, böylece aynı soruyu tekrar sormayız.', '12 ay', 'Zorunlu'],
            ],
          },
        },
        {
          p: 'Şu anda sitemizde analitik, reklam veya pazarlama amaçlı çerez kullanılmamaktadır. İleride kullanmamız hâlinde bu politika güncellenir ve bu çerezler yalnızca onayınızla etkinleştirilir.',
        },
        { h2: 'Zorunlu depolama' },
        {
          p: 'Yukarıdaki iki kayıt sitenin çalışması ve tercihlerinizin hatırlanması için gereklidir; bunlar için ayrıca onay istemeyiz. Tarayıcınızdan engellerseniz site çalışmaya devam eder, ancak dil ve çerez tercihiniz hatırlanmaz.',
        },
        { h2: 'Üçüncü taraf kaynaklar' },
        {
          p: 'Sitemiz yazı tiplerini Google Fonts üzerinden yükler. Yazı tipi dosyaları istendiğinde IP adresiniz ve tarayıcı bilgileriniz Google sunucularına iletilir. Bu veriler Google’ın kendi gizlilik politikasına tabidir.',
        },
        { h2: 'Tercihlerinizi nasıl yönetirsiniz?' },
        {
          ul: [
            'Sayfanın altındaki “Çerez tercihleri” bağlantısından seçiminizi istediğiniz zaman değiştirebilirsiniz.',
            'Tarayıcı ayarlarınızdan çerezleri ve site verilerini silebilir veya engelleyebilirsiniz.',
          ],
        },
        { h2: 'Kişisel verileriniz' },
        {
          p: 'İletişim formu aracılığıyla ilettiğiniz kişisel verilerin nasıl işlendiği KVKK Aydınlatma Metni’nde açıklanmıştır.',
        },
        { link: { to: '/kvkk', label: 'KVKK Aydınlatma Metni' } },
      ],
    },
    en: {
      title: 'Cookie Policy',
      description: `The cookies and similar storage technologies used on the ${legalName} website, what they are for, and how to manage your choices.`,
      updated: '21 September 2026',
      body: [
        {
          p: 'This policy explains which cookies and similar technologies we use on our website, why we use them, and how you can manage your choices.',
        },
        { h2: 'What are cookies?' },
        {
          p: 'Cookies and similar technologies, such as your browser’s local storage, are small pieces of data saved on your device when you visit a site. They can be used to make a site work, remember your preferences, or measure how it is used.',
        },
        { h2: 'What we use on this site' },
        {
          table: {
            head: ['Name', 'Type', 'Purpose', 'Duration', 'Category'],
            rows: [
              ['imex-lang', 'Local storage, first party', 'Remembers the language you chose (Turkish or English).', 'Until you clear it', 'Necessary'],
              ['imex-consent', 'Local storage, first party', 'Remembers your cookie choice so we do not ask again.', '12 months', 'Necessary'],
            ],
          },
        },
        {
          p: 'We currently use no analytics, advertising or marketing cookies. If we add any, this policy will be updated and they will only run with your consent.',
        },
        { h2: 'Necessary storage' },
        {
          p: 'The two entries above are needed for the site to work and to remember your choices, so we do not ask for consent for them. If you block them in your browser the site still works, but your language and cookie choice will not be remembered.',
        },
        { h2: 'Third-party resources' },
        {
          p: 'Our site loads its fonts from Google Fonts. When the font files are requested, your IP address and browser details are sent to Google’s servers. That data is subject to Google’s own privacy policy.',
        },
        { h2: 'How to manage your choices' },
        {
          ul: [
            'Use the “Cookie preferences” link at the bottom of the page to change your choice at any time.',
            'Delete or block cookies and site data in your browser settings.',
          ],
        },
        { h2: 'Your personal data' },
        {
          p: 'How we handle personal data you send through the contact form is explained in the KVKK Privacy Notice.',
        },
        { link: { to: '/kvkk', label: 'KVKK Privacy Notice' } },
      ],
    },
  },
};
