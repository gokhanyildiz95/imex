// Blog posts, written by IMEX Inspection in English and Turkish.
// Body blocks: { h2 }, { p }, { ul: [...] }, { ol: [...] }. Newest post first.

export const posts = [
  {
    slug: 'draft-survey-explained',
    date: '2026-09-21',
    minutes: 4,
    image: '/media/vessel.jpg',
    en: {
      category: 'Cargo supervision',
      title: 'Draft survey explained: how the weight of a bulk cargo is really measured',
      excerpt:
        'A ship’s draft marks tell a surveyor how much cargo has come aboard. Here is how a draft survey works, and where the errors creep in.',
      body: [
        {
          p: 'When a bulk carrier loads coal, grain or iron ore, nobody puts the cargo on a scale. The quantity on the bill of lading is usually checked another way: by measuring how deep the ship sits in the water. That method is the draft survey, and it is one of the most common ways to settle a quantity before it becomes a dispute.',
        },
        { h2: 'The principle' },
        {
          p: 'A floating vessel displaces a weight of water equal to her own weight. Read the draft marks before loading and again after, look up the displacement each time, and the difference, once everything that is not cargo has been accounted for, is the weight of cargo taken on board.',
        },
        { h2: 'How a survey runs' },
        {
          ol: [
            'Read the draft marks at six points: forward, midships and aft, on both the port and starboard sides.',
            'Measure the density of the water the ship is floating in. A ship sits deeper in fresh water than in seawater, and the correction is significant.',
            'Sound the ballast, fuel, fresh water and other tanks, so that the weight of everything that is not cargo is known.',
            'Take the displacement from the ship’s hydrostatic tables and correct it for trim, hog or sag, and water density.',
            'Repeat after loading, or after discharge, and take the difference.',
          ],
        },
        { h2: 'Where errors creep in' },
        {
          p: 'Draft marks are read by eye, often from a small boat, in waves, sometimes at dusk. A misreading of a few centimetres matters: on a large bulk carrier, a single centimetre of draft can represent tens of tonnes of cargo. Tank soundings, a water sample taken at the wrong depth, and a ship that is not upright or not at rest all add to the uncertainty. A draft survey is a well-established method, but it is an estimate, not a weighing, and its quality depends on the care taken.',
        },
        { h2: 'What a good survey looks like' },
        {
          ul: [
            'An independent surveyor with no stake in the result, ideally agreed by buyer and seller.',
            'Initial and final surveys carried out in the same way, with the same equipment.',
            'Every reading and calculation recorded and signed, with photographs of the marks.',
            'A check of the ship’s own data, such as the hydrostatic tables and the constant.',
          ],
        },
        {
          p: 'If a quantity is ever questioned, the survey paperwork is what settles it. That is why it pays to have it done independently and documented properly. Draft surveys sit naturally within cargo supervision and vessel surveying, so if you have a cargo coming up, talk to us early.',
        },
      ],
    },
    tr: {
      category: 'Kargo gözetimi',
      title: 'Draft survey nedir? Dökme yükün ağırlığı gerçekte nasıl ölçülür?',
      excerpt:
        'Geminin draft işaretleri, gemiye ne kadar yük alındığını gösterir. Draft survey’in nasıl yapıldığını ve hataların nerede ortaya çıktığını anlatıyoruz.',
      body: [
        {
          p: 'Bir dökme yük gemisi kömür, tahıl veya demir cevheri yüklerken yük hiçbir zaman bir teraziye konmaz. Konşimentodaki miktar genellikle başka bir yolla doğrulanır: geminin suda ne kadar battığı ölçülür. Bu yönteme draft survey (su çekimi ölçümü) denir ve miktar anlaşmazlığa dönüşmeden çözülmesinin en yaygın yollarından biridir.',
        },
        { h2: 'Temel ilke' },
        {
          p: 'Yüzen bir gemi, kendi ağırlığına eşit miktarda suyu yerinden eder. Yüklemeden önce ve sonra draft işaretleri okunur, her seferinde deplasman bulunur; yük dışındaki her şey hesaba katıldığında aradaki fark, gemiye alınan yükün ağırlığını verir.',
        },
        { h2: 'Ölçüm nasıl yapılır?' },
        {
          ol: [
            'Draft işaretleri altı noktadan okunur: baş, orta ve kıç, hem iskele hem sancak tarafında.',
            'Geminin yüzdüğü suyun yoğunluğu ölçülür. Gemi tatlı suda deniz suyuna göre daha derine batar ve bu düzeltme önemlidir.',
            'Yük dışındaki her şeyin ağırlığının bilinmesi için balast, yakıt, tatlı su ve diğer tanklar sondalanır.',
            'Deplasman, geminin hidrostatik tablolarından alınır; trim, hog/sag ve su yoğunluğuna göre düzeltilir.',
            'İşlem yükleme veya boşaltma sonrasında tekrarlanır ve aradaki fark alınır.',
          ],
        },
        { h2: 'Hatalar nerede ortaya çıkar?' },
        {
          p: 'Draft işaretleri gözle okunur; çoğu zaman küçük bir tekneden, dalgalı denizde, bazen alacakaranlıkta. Birkaç santimetrelik bir okuma hatası bile önemlidir: büyük bir dökme yük gemisinde tek bir santimetre draft, onlarca ton yüke karşılık gelebilir. Tank sondaları, yanlış derinlikten alınan su numunesi ve dik olmayan ya da hareketli bir gemi belirsizliği artırır. Draft survey köklü bir yöntemdir; ancak bir tartım değil, bir tahmindir ve kalitesi gösterilen özene bağlıdır.',
        },
        { h2: 'İyi bir ölçüm nasıl olmalı?' },
        {
          ul: [
            'Sonuçta çıkarı olmayan, tercihen alıcı ile satıcının üzerinde anlaştığı bağımsız bir eksper.',
            'Başlangıç ve bitiş ölçümlerinin aynı yöntem ve aynı ekipmanla yapılması.',
            'Tüm okumaların ve hesapların kaydedilip imzalanması, işaretlerin fotoğraflanması.',
            'Hidrostatik tablolar ve gemi sabiti gibi geminin kendi verilerinin kontrol edilmesi.',
          ],
        },
        {
          p: 'Miktar bir gün sorgulanırsa, meseleyi çözen şey ölçüm belgeleridir. Bu yüzden ölçümün bağımsız biri tarafından yapılması ve doğru belgelenmesi değerlidir. Draft survey, kargo gözetimi ve gemi ekspertizinin doğal bir parçasıdır; yaklaşan bir yükünüz varsa bizimle erkenden görüşün.',
        },
      ],
    },
  },

  {
    slug: 'container-loading-inspection',
    date: '2026-09-14',
    minutes: 4,
    image: '/media/cargo.jpg',
    en: {
      category: 'Cargo supervision',
      title: 'Before the doors are sealed: what an independent inspector checks during container loading',
      excerpt:
        'Most cargo claims begin at the warehouse or the quay, long before the ship sails. A look at what independent supervision covers.',
      body: [
        {
          p: 'Most cargo claims are not caused at sea. They begin earlier, at the warehouse or on the quay, where the wrong container, poor packing or a missing record can turn into a dispute weeks later, when the cargo has reached the other side of the world and nobody can go back and look.',
        },
        { h2: 'Start with the container itself' },
        {
          ul: [
            'Structure: dents, holes, bent corner posts, and a damaged floor or roof.',
            'The CSC safety approval plate is present, legible and within its examination date.',
            'Inside: clean, dry, and free of odour or residue from a previous cargo, which matters most for food and other sensitive goods.',
            'Doors and seals: doors close and lock properly and the gaskets are intact. A light test, standing inside with the doors shut and looking for daylight, is a simple way to find holes.',
          ],
        },
        { h2: 'Count and condition of the cargo' },
        {
          p: 'The inspector compares what is being loaded with what the documents say: quantity, marks, type of packaging and condition. Damaged, wet or wrongly labelled units are photographed and recorded on the spot and set aside or corrected before they go into the container, instead of being argued about after arrival.',
        },
        { h2: 'Stowage and securing' },
        {
          p: 'Cargo that shifts inside a container damages itself and can endanger people and other cargo. Weight should be spread evenly, heavy items kept low, empty space filled with dunnage or airbags, and lashing chosen to suit the load. The IMO/ILO/UNECE Code of Practice for Packing of Cargo Transport Units (the CTU Code) and the IMO’s Code of Safe Practice for Cargo Stowage and Securing are the usual references.',
        },
        { h2: 'Seal and record' },
        {
          p: 'Once the container is closed, a seal goes on and its number is written into the loading report and the shipping documents. High-security seals are certified to ISO 17712. A good report lists the container number, seal number and time, with photographs of the empty container, the cargo being loaded, and the closed and sealed doors.',
        },
        { h2: 'Why independence matters' },
        {
          p: 'Shipper, carrier and consignee each have an interest in how a loading is recorded. An independent supervisor has none, and a report written from that position carries weight with insurers, banks and, if it comes to it, courts. IMEX Inspection provides cargo and load supervision during loading and unloading at port.',
        },
      ],
    },
    tr: {
      category: 'Kargo gözetimi',
      title: 'Kapılar mühürlenmeden önce: bağımsız bir eksper konteyner yüklemesinde neleri kontrol eder?',
      excerpt:
        'Kargo taleplerinin çoğu, gemi yola çıkmadan çok önce depoda veya rıhtımda başlar. Bağımsız gözetimin kapsamına bir bakış.',
      body: [
        {
          p: 'Kargo taleplerinin çoğu denizde doğmaz. Daha önce, depoda veya rıhtımda başlar: yanlış konteyner, kötü paketleme ya da eksik bir kayıt, haftalar sonra yük dünyanın öbür ucuna ulaştığında ve kimse geri dönüp bakamazken bir anlaşmazlığa dönüşebilir.',
        },
        { h2: 'Önce konteynerin kendisi' },
        {
          ul: [
            'Yapı: göçükler, delikler, eğilmiş köşe direkleri, hasarlı zemin veya tavan.',
            'CSC emniyet onay plakası yerinde, okunaklı ve muayene tarihi geçerli olmalıdır.',
            'İç kısım: temiz, kuru ve önceki yükten kalma koku veya kalıntıdan arınmış olmalıdır; bu, özellikle gıda ve hassas yükler için önemlidir.',
            'Kapılar ve contalar: kapılar düzgün kapanıp kilitlenmeli, contalar sağlam olmalıdır. Kapılar kapalıyken içeride durup gün ışığı aramak (ışık testi), delikleri bulmanın basit bir yoludur.',
          ],
        },
        { h2: 'Yükün adedi ve durumu' },
        {
          p: 'Eksper, yüklenen malı belgelerle karşılaştırır: miktar, markalar, ambalaj türü ve durum. Hasarlı, ıslak veya yanlış etiketli ürünler yerinde fotoğraflanıp kaydedilir; konteynere girmeden ayrılır veya düzeltilir. Böylece konu varıştan sonra tartışılmaz.',
        },
        { h2: 'İstif ve bağlama' },
        {
          p: 'Konteyner içinde kayan yük kendine zarar verir; insanları ve diğer yükleri de tehlikeye atabilir. Ağırlık eşit dağıtılmalı, ağır parçalar altta tutulmalı, boşluklar dunnage veya hava yastıklarıyla doldurulmalı ve bağlama yüke uygun seçilmelidir. IMO/ILO/UNECE Kargo Taşıma Birimlerinin Paketlenmesi Uygulama Kodu (CTU Kodu) ile IMO’nun Yük İstifi ve Bağlanması Güvenli Uygulama Kodu (CSS Kodu) genel başvuru kaynaklarıdır.',
        },
        { h2: 'Mühür ve kayıt' },
        {
          p: 'Konteyner kapatıldıktan sonra mühür takılır; numarası yükleme raporuna ve sevkiyat belgelerine yazılır. Yüksek güvenlikli mühürler ISO 17712’ye göre belgelendirilir. İyi bir rapor; konteyner numarasını, mühür numarasını ve saati içerir ve boş konteynerin, yüklenen malın ve kapalı, mühürlü kapıların fotoğraflarını barındırır.',
        },
        { h2: 'Bağımsızlık neden önemli?' },
        {
          p: 'Yükleyici, taşıyıcı ve alıcı, yüklemenin nasıl kaydedildiğiyle ilgilenir. Bağımsız bir gözetmenin böyle bir çıkarı yoktur ve bu konumdan yazılan rapor; sigortacılar, bankalar ve gerektiğinde mahkemeler nezdinde ağırlık taşır. IMEX Inspection, limanda yükleme ve boşaltma sırasında yük ve kargo gözetimi hizmeti verir.',
        },
      ],
    },
  },

  {
    slug: 'port-state-control-checklist',
    date: '2026-09-07',
    minutes: 5,
    image: '/media/port.jpg',
    en: {
      category: 'Vessel surveying',
      title: 'Getting ready for a port state control inspection: a practical checklist',
      excerpt:
        'A ship can be detained over deficiencies that were easy to prevent. Here is what masters and operators should check before arrival.',
      body: [
        {
          p: 'Port state control (PSC) lets the authorities in a port inspect foreign-flagged ships to check that they meet international rules: SOLAS for safety of life at sea, MARPOL for pollution prevention, the Maritime Labour Convention, and STCW for crew training and certification. Countries co-operate through regional agreements known as memoranda of understanding, such as the Paris, Tokyo and Black Sea MoUs. A ship with serious deficiencies can be detained until they are fixed, which costs time, money and reputation.',
        },
        { h2: 'Certificates and documents' },
        {
          ul: [
            'Statutory certificates are valid, on board and match the ship’s particulars, with survey endorsements in date.',
            'Crew certificates and medical certificates are valid and consistent with the safe manning document.',
            'Records are up to date: the oil record book, the garbage record book, and the records of drills and maintenance.',
            'The ISM Code safety management system is in place and is actually used by the crew.',
          ],
        },
        { h2: 'Equipment and condition' },
        {
          ul: [
            'Fire-fighting: extinguishers in date, fire doors and dampers working, detection systems tested.',
            'Life-saving: lifeboats and davits, liferafts, lifejackets and immersion suits ready to use, with servicing certificates in date.',
            'Navigation: charts and publications corrected, radar, AIS and GMDSS equipment working.',
            'Machinery spaces: no oil leaks, the oily water separator and its alarms working, and the emergency generator starting.',
            'Hull, decks, ladders and gangway in safe condition.',
          ],
        },
        { h2: 'Crew familiarity' },
        {
          p: 'Inspectors often test the crew, not only the paperwork. They may ask for a fire or abandon-ship drill, or ask someone to explain their emergency duties. A crew that knows where the equipment is and how to use it makes a strong impression, and it is the one item on this list that cannot be prepared the day before.',
        },
        { h2: 'Check before you arrive' },
        {
          p: 'A walk-through a week or two before arrival, by a superintendent or an independent surveyor who knows the inspection regime, leaves time to fix findings rather than explain them. Keep a record of what was found and what was done about it: a short list of corrected items often speaks for itself.',
        },
        {
          p: 'Our vessel surveying and safety compliance audit services cover this kind of pre-arrival review. If you have a call coming up at a port where inspections are strict, get in touch.',
        },
      ],
    },
    tr: {
      category: 'Gemi ekspertizi',
      title: 'Liman devleti denetimine hazırlık: pratik bir kontrol listesi',
      excerpt:
        'Bir gemi, önlenmesi kolay eksiklikler yüzünden alıkonulabilir. Kaptanlar ve işletmeciler varıştan önce nelere bakmalı?',
      body: [
        {
          p: 'Liman devleti denetimi (PSC), bir limandaki yetkililerin yabancı bayraklı gemileri uluslararası kurallara uygunluk açısından denetlemesine olanak tanır: denizde can güvenliği için SOLAS, kirliliği önleme için MARPOL, Denizcilik Çalışma Sözleşmesi (MLC) ve mürettebat eğitimi ile belgelendirmesi için STCW. Ülkeler, Paris, Tokyo ve Karadeniz mutabakat zabıtları gibi bölgesel anlaşmalar yoluyla iş birliği yapar. Ciddi eksikliği olan bir gemi, eksiklikler giderilene kadar alıkonulabilir; bu da zaman, para ve itibar kaybı demektir.',
        },
        { h2: 'Sertifikalar ve belgeler' },
        {
          ul: [
            'Yasal sertifikalar geçerli, gemide bulunuyor ve geminin bilgileriyle uyumlu olmalı; sörvey onayları güncel olmalıdır.',
            'Mürettebat sertifikaları ve sağlık belgeleri geçerli ve Asgari Emniyetli Gemi Adamı Belgesi ile tutarlı olmalıdır.',
            'Kayıtlar güncel olmalıdır: yağ kayıt defteri, çöp kayıt defteri ile tatbikat ve bakım kayıtları.',
            'ISM Kodu güvenlik yönetim sistemi kurulmuş olmalı ve mürettebat tarafından gerçekten kullanılmalıdır.',
          ],
        },
        { h2: 'Ekipman ve genel durum' },
        {
          ul: [
            'Yangın söndürme: tüpler tarihinde, yangın kapıları ve damperler çalışır, algılama sistemleri test edilmiş olmalı.',
            'Can kurtarma: filikalar ve mataforlar, can salları, can yelekleri ve batma giysileri kullanıma hazır, bakım sertifikaları güncel olmalı.',
            'Seyir: haritalar ve yayınlar düzeltilmiş, radar, AIS ve GMDSS ekipmanı çalışır durumda olmalı.',
            'Makine daireleri: yağ sızıntısı olmamalı, sintine suyu ayırıcısı ve alarmları çalışmalı, acil durum jeneratörü çalışmalıdır.',
            'Gemi gövdesi, güverteler, merdivenler ve borda iskelesi güvenli durumda olmalıdır.',
          ],
        },
        { h2: 'Mürettebatın hâkimiyeti' },
        {
          p: 'Denetçiler çoğu zaman yalnızca evrakı değil, mürettebatı da sınar. Yangın veya gemiyi terk tatbikatı isteyebilir ya da birinden acil durum görevlerini anlatmasını isteyebilirler. Ekipmanın yerini ve nasıl kullanılacağını bilen bir mürettebat güçlü bir izlenim bırakır; bu, listedeki bir gün önceden hazırlanamayan tek maddedir.',
        },
        { h2: 'Varmadan önce kontrol edin' },
        {
          p: 'Varıştan bir iki hafta önce, denetim rejimini bilen şirket müfettişi veya bağımsız bir eksper tarafından yapılan gezi, bulguları açıklamak yerine düzeltmek için zaman bırakır. Neyin bulunduğunu ve ne yapıldığını kaydedin: düzeltilen maddelerin kısa bir listesi çoğu zaman kendini anlatır.',
        },
        {
          p: 'Gemi ekspertizi ve güvenlik uyum denetimi hizmetlerimiz bu tür bir varış öncesi incelemeyi kapsar. Denetimlerin sıkı olduğu bir limana uğrayacaksanız bizimle iletişime geçin.',
        },
      ],
    },
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
