import React, { useEffect, useState } from "react";

function Data({ setInfo }) {
  const [data, setData] = useState([
    {
      data: [
        {
          Sıra: "1",
          Atışlar: "2-2-2",
          Irk: "“Tanrı’nın oğluyum, hakanım. Gece gündüz altın tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/aa4268ac-1a3d-41a6-89fa-e7f262868414/grid_0.png",
        },
        {
          Sıra: "2",
          Atışlar: "4-4-4",
          Irk: "“Alaca atlı yol tanrısıyım. Sabah akşam yürürüm.”, demiş. Bu tanrının karşısına iki güler yüzlü kişi çıkmış. Yol tanrısından korkmuşlar. Yol tanrısı “Korkmayın, ben sizi kutsarım.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.discordapp.com/ephemeral-attachments/1021189063262351390/1078361539351945226/grid_0.webp",
        },
        {
          Sıra: "3",
          Atışlar: "3-3-3",
          Irk: "“Altın kanatlı kara kartalım. Daha bedenimin tüyleri büyümemişken, denizin kenarında ne istersem yakalar yerim. Bu kadar güçlüyüm.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/3db305f0-92a0-4716-886a-1568eea0ecac/grid_0.png",
        },
        {
          Sıra: "4",
          Atışlar: "1-1-1",
          Irk: "“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/c7994e9e-79a4-44f4-a799-4c0a78cf1240/grid_0.png",
        },
        {
          Sıra: "5",
          Atışlar: "2-4-2",
          Irk: "Bey kişi atlarına varmış, görmüş ki ak kısrağı tay doğurmuş. “Ona altın damgalı aygırlık yaraşır.” demiş. Develerine varmış, görmüş ki ak devesi yavrulamış. “Ona altın burunluklu buğralık yakışır.” demiş. Evine gelmiş, görmüş ki üçüncü eşi bir oğlan doğurmuş. “Ona beylik yaraşır.” demiş. Bu kişi mutlu bir beymiş. Bilin ki bu çok iyidir.",
          İşaret: "çok iyi",
          Resim:
            "https://cdn.midjourney.com/596519e6-f88d-4b7e-ad61-ebf355350c56/grid_0.png",
        },
        {
          Sıra: "6",
          Atışlar: "1-2-2",
          Irk: "Ayı ile domuz dağ geçidinde kapışmışlar. Ayının karnı yarılmış, domuzun uzun dişleri kırılmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/ec9782c5-d2e2-4e47-91da-61d1859e9c64/grid_0.png",
        },
        {
          Sıra: "7",
          Atışlar: "2-1-2",
          Irk: "Bir kişi koşarak gelmiş, iyi haberler getirmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/717f6cec-d62e-4759-8fc8-8d514797e7e7/grid_0.png",
        },
        {
          Sıra: "8",
          Atışlar: "1-2-3",
          Irk: "“Altın başlı yılanım. Altın kursağımı bıçakla kesip; beni inimden, başımı bedenimden çıkar.”, demiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/28b8d144-fed3-419a-bfaf-c3867210e309/grid_0.png",
        },
        {
          Sıra: "9",
          Atışlar: "3-2-1",
          Irk: "Büyük bir ev yanmış. Köşesine bucağına kadar hiçbir şeyi kalmamış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/34a44f25-52fb-4680-a0e0-9e11e20f9519/grid_0.png",
        },
        {
          Sıra: "10",
          Atışlar: "2-4-3",
          Irk: "“Esneyen parsım. Kamışlar arasında başım. Bu kadar yiğit ve güçlüyüm.”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/a4706780-3f73-45cb-a724-81cb1d7ec9d3/grid_0.png",
        },
        {
          Sıra: "11",
          Atışlar: "4-4-3",
          Irk: "Elçi sarı atı üstünde, temsilci kahve atı üstünde iyi haberler getirmiş. Bilin ki bu çok iyidir.",
          İşaret: "çok iyi",
          Resim:
            "https://cdn.midjourney.com/aaa88c7f-e2ae-460e-948a-43b84fe1efa6/grid_0.png",
        },
        {
          Sıra: "12",
          Atışlar: "3-4-3",
          Irk: "Bir kişi ava gitmiş. Orada yığılıp düşmüş ve “Güçlü tanrı göktedir!”, demiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/cea91093-4d74-420b-bcca-8529adee3bb4/grid_0.png",
        },
        {
          Sıra: "13",
          Atışlar: "3-4-2",
          Irk: "Dindar yaşlı bir kadın terk edilmiş bir çadırda kalmış. Yağlı kaşığın kenarını yalayıp hayatta kalmış, ölümden kurtulmuş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/3e045ac1-ebb5-4e72-bb11-e57b2eec3484/grid_0.png",
        },
        {
          Sıra: "14",
          Atışlar: "2-3-4",
          Irk: "Kuzgun ağaca bağlanmış. “Sıkıca bağla, iyice bağla.”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/adb7584b-6e78-458d-aade-1fa448aac973/grid_0.png",
        },
        {
          Sıra: "15",
          Atışlar: "1-4-1",
          Irk: "Üste duman kalkmış, aşağıya toz basmış. Kuş yavrusu uçmuş kaybolmuş, geyik yavrusu koşmuş kaybolmuş, kişioğlu yürümüş kaybolmuş. Tanrı vermişte hepsi üçüncü yılda esen olarak buluşmuş. Hepsi mutlu olup sevinmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/8d903bda-ee09-4bb1-9708-17e2ac97b9cb/grid_0.png",
        },
        {
          Sıra: "16",
          Atışlar: "2-1-4",
          Irk: "Zayıf bir at semizleşmiş. Başka yer düşleyip koşup gitmiş. Karşıda bir yerde bir hırsıza rast gelmiş. Hırsız, yakalayıp ona binmiş. Yelesinden kuyruğuna kadar yaralanmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/33c8dda5-85c9-4b91-b4d3-f6ef2b063119/grid_0.png",
        },
        {
          Sıra: "17",
          Atışlar: "2-3-3",
          Irk: "Bir binek atı çölde yorgun argın kalakalmış. Tanrının kudretiyle dağın üzerinde yol ve su görmüş, çayırlıkta taze ot görmüş. Yürüyerek gidip, su içip taze ot yiyip ölümden kurtulmuş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/0011d395-1ce8-4be3-85ee-ed2e22908e2c/grid_0.png",
        },
        {
          Sıra: "18",
          Atışlar: "2-4-1",
          Irk: "Çadırın çerçevesi nasıldır? Bacası, penceresi nasıldır? Manzaralıdır. Çatısı nasıldır? İyidir. İpleri nasıldır? Hepsi vardır. Bilin ki bu çok iyidir.",
          İşaret: "çok iyi",
          Resim:
            "https://cdn.midjourney.com/fce4ca83-6486-4766-b74e-7093ce273650/grid_0.png",
        },
        {
          Sıra: "19",
          Atışlar: "4-1-3",
          Irk: "Ak bir at üç bölükte rakibini seçmiş, dua etmek için sessizliğe çekilmiş. “Korkma, iyi dua et, endişe etme, iyice yalvar.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/f0d50570-861a-43fb-995f-7da6ccf9a939/grid_0.png",
        },
        {
          Sıra: "20",
          Atışlar: "2-2-3",
          Irk: "“Dişi deve aygırıyım. Beyaz köpüğümü saçarım. Yukarıda göğe çıkar, aşağıda yere girerim. Uyuyanı uyandırarak, yatanı kaldırarak yürürüm. Bu kadar güçlüyüm.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://images.deepai.org/art-image/c07db9ff80f34011a80342eeba8cb96e/a-camel-enjoying-technology-75f08a.jpg",
        },
        {
          Sıra: "21",
          Atışlar: "3-3-1",
          Irk: "Bir hüthüt kuşu yeni yıl girmeden şakımış. “Heyecanlanma, ona bakma ve onu korkutma.”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/0f6de3c1-74ab-428a-9e8c-18610fdc6045/grid_0.png",
        },
        {
          Sıra: "22",
          Atışlar: "1-1-2",
          Irk: "Uzun elbiseli bir kadın aynasını göle düşürmüş. Sabah mırıldanmış, akşam homurdanmış. Bilin ki bu sıkıntı sebebidir ve çok kötüdür.",
          İşaret: "sıkıntı verici ve çok kötü",
          Resim:
            "https://cdn.midjourney.com/f44c33c7-3a6f-4f7d-ad25-7041b3aff93f/grid_0.png",
        },
        {
          Sıra: "23",
          Atışlar: "4-4-2",
          Irk: "Bir oğlan kartal gübresi bulmuş. Toprağa: “Yemeğin mübarek olsun.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/b533bc1e-f0d2-42c8-a577-deb11ba3412d/grid_0.png",
        },
        {
          Sıra: "24",
          Atışlar: "3-1-3",
          Irk: "Kör bir tay, bir aygırın altında meme aramış. “Gün ortasında kaybedersen gece yarısı nasıl bulursun?”, demiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/530c2e11-37bc-4592-95f3-00f49c094597/grid_0.png",
        },
        {
          Sıra: "25",
          Atışlar: "3-1-3",
          Irk: "Bir kişi iki öküzü bir sabana bağlamış. Öküzler öylece kalakalmış. Bilin ki bu iyidir.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/b6152002-b958-4c2d-b6ee-7cc84d4ff22a/grid_0.png",
        },
        {
          Sıra: "26",
          Atışlar: "4-2-1",
          Irk: "Şafak sökmüş, yer aydınlanmış, güneş çıkmış, ışık her yere parlamış. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/907dddf0-a010-4cdc-8fd3-81abeb64bf71/grid_0.png",
        },
        {
          Sıra: "27",
          Atışlar: "4-2-2",
          Irk: "Zengin bir kişinin koyunu korkup kaçmış. Kurda rastlamış. Kurdun ağzı acımış, koyun da kurtulup kaçmış. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/dfab4a04-6d5d-4a89-b86f-15d314d01e65/grid_0.png",
        },
        {
          Sıra: "28",
          Atışlar: "2-1-1",
          Irk: "Bir han tahta geçip ülke kurmuş. Dört bir yandan iyi ve becerikli kişileri toplamış. Ülkesi kalkınmış ve güçlenmiş. Sevinmiş ve sarayını bezemiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/8f07fc30-b03a-4495-b5a1-aecb123d245b/grid_0.png",
        },
        {
          Sıra: "29",
          Atışlar: "4-3-2",
          Irk: "Bir kişi, kadınlarını ve oğullarını tehlikede bırakıp kurbanlık hayvanların içini boşaltmak için gitmiş. Ailesine hiçbir şey olmamış, üstüne birde doksan başıboş koyun bulmuş. Oğulları ve eşleri hep beraber sevinmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/e125d9a3-26de-4d85-a40b-ee99a0ad21dd/grid_0.png",
        },
        {
          Sıra: "30",
          Atışlar: "4-2-3",
          Irk: "Fakir bir kişinin oğlu para kazanmaya gitmiş. Yolculuğu başarılı olmuş. Sevinerek geri gelmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/f7ac3dfb-7b89-47fa-9c3d-b2228042ba8b/grid_0.png",
        },
        {
          Sıra: "31",
          Atışlar: "1-4-4",
          Irk: "Bir pars ava çıkmış. Avını bulmuş. Sevinerek inine gelmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/9fe3345f-3a31-4351-9eed-a06a2119b8c6/grid_0.png",
        },
        {
          Sıra: "32",
          Atışlar: "1-1-3",
          Irk: "Bir gül yüz olmuş. Yüz gül bin olmuş. Bin gül on bin olmuş. Bilin ki bu faydalıdır, iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/e61b7dc6-8f25-4098-9b82-8ac1d7597a0d/grid_0.png",
        },
        {
          Sıra: "33",
          Atışlar: "4-2-4",
          Irk: "Bir kişi suya keçe koymuş. “İyice vur, sıkıca bağla!”, demiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://images.deepai.org/art-image/3ced689ecae346db93a54902a491fa8f/samurai-walking-beside-river-thumb.jpg",
        },
        {
          Sıra: "34",
          Atışlar: "2-4-4",
          Irk: "Bir han savaşa gitmiş düşmanını yenmiş. Erlerine, nereye isterseler yerleşmelerine izin vermiş. Kendisi ve erleri ülkeye sevinerek geri dönmüş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/656a00a5-5d90-4810-877d-aa360c2be954/grid_0.png",
        },
        {
          Sıra: "35",
          Atışlar: "4-3-4",
          Irk: "Bir er savaşa gitmiş. Dönerken yolda atı yorulup hastalanmış. Sonra bir kuğuya rast gelmiş. Kuğu onu kanatlarına almış, onu anasına babasına ulaştırmış. Anası babası memnun olup sevinmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/5a2dbb5c-8301-41dc-b20f-e45f9db5b718/grid_0.png",
        },
        {
          Sıra: "36",
          Atışlar: "4-1-1",
          Irk: "Unvanlı sevincin yok. Kötü itibar korkun yok. Bayraklar asarak kutlanacak bir kısmetin yok. Bilin ki bu çok kötüdür.",
          İşaret: "çok kötü",
          Resim:
            "https://images.deepai.org/art-image/773c2a90e6854e9896d63b10a6306cbd/really-scary-2998fa.jpg",
        },
        {
          Sıra: "37",
          Atışlar: "1-3-4",
          Irk: "Yaşlı bir öküzü; karıncalar, belini biçerek yemiş. Öküz, hareketsiz öylece kalakalmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.discordapp.com/attachments/1021189063262351390/1078383722602172547/yombesa_long_horned_cow_heard_running_cinematic_ralistic_4k_7c8ca71b-578f-4c87-9b44-9262353b4cbf.png",
        },
        {
          Sıra: "38",
          Atışlar: "3-1-4",
          Irk: "Bir köle kız kamışlar arasında yalnız kalmış. Tanrı bundan hoşlanmamış ve “Bu köle kız hatun olsun!”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://media.discordapp.net/attachments/1021189063262351390/1078376971769217124/mes_Young_woman_in_a_red_long_dress_with_slit_tied_to_a_tree_bl_a5c4852e-edbd-43f0-913a-54dbe2da1733.png?width=555&height=555",
        },
        {
          Sıra: "39",
          Atışlar: "2-2-4",
          Irk: "Demir kırı bir atın ayaklarını çapraz kösteklemişler. At kımıldayamadan kalakalmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/f0f09273-f5a7-476b-acb8-f45f73fdffab/grid_0.png",
        },
        {
          Sıra: "40",
          Atışlar: "4-4-1",
          Irk: "Omuzları açık cesur bir genç, tek başına, okunun ucu ile yalçın kayaları yara yara yürümüş. Bu genç böylesine güçlüymüş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/0011d395-1ce8-4be3-85ee-ed2e22908e2c/grid_0.png",
        },
        {
          Sıra: "41",
          Atışlar: "3-2-4",
          Irk: "Ak benekli bir inek doğurmak üzereymiş. “Öleceğim galiba!”, demiş; fakat ölmemiş. Ak benekli bir erkek buzağı dünyaya getirmiş. Bunu Tanrı’ya kurban etmek uygun olur çünkü inek böylece kötü talihinden kurtulmuş olur. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/d55dedcd-0838-468b-8d54-d8f019cfd6d1/grid_0.png",
        },
        {
          Sıra: "42",
          Atışlar: "4-1-4",
          Irk: "Uzun elbiseli bir kadın kabını kacağını bırakıp gitmiş. Sonra iyice düşünmüş. “Kabımdan kacağımdan ayrı nereye gidiyorum ben?”, demiş. Sonra geri gelmiş, kabını kacağını sapasağlam bulmuş. Mutlu olup sevinmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/6353d4e1-3528-4505-b661-0c899112ec97/grid_0.png",
        },
        {
          Sıra: "43",
          Atışlar: "3-3-4",
          Irk: "Bir şahin, su kuşu avlamaya gitmiş. Ama yırtıcı bir kartal yerinden uçup karşısına çıkmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://images.deepai.org/art-image/385e732ed06144de99f5720c2ac1da0e/falcon-bird-thumb.jpg",
        },
        {
          Sıra: "44",
          Atışlar: "1-4-2",
          Irk: "Bir şahin “İşte bir tavşan!” diyerek göklerden aşağı inmiş ve onu kapmak istemiş. Bu arada şahinin pençeleri yolunmuş ve tavşanın derisi sıyrılmış. Şahin pençeleri yolunmuş olarak uçup gitmiş, tavşan derisi soyulmuş olarak koşup gitmiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/18860d88-99ad-4c1e-a945-e1a338450b9c/grid_0.png",
        },
        {
          Sıra: "45",
          Atışlar: "1-3-2",
          Irk: "“Geyik yavrusuyum. Otsuz ve susuz nasıl yaparım? Nasıl hayatta kalırım?”, demiş. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://images.deepai.org/art-image/1187eac0b1144f35b76938d69d2c23bc/a-happy-camel-74f733.jpg",
        },
        {
          Sıra: "46",
          Atışlar: "1-3-3",
          Irk: "Bir deve bir bataklığa düşmüş. Batarken, yine otlamaya devam etmiş, fakat kendisini de bir tilki yemiş, der. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/79e32092-4293-46f2-9832-a4517bdeaff0/grid_0.png",
        },
        {
          Sıra: "47",
          Atışlar: "1-1-4",
          Irk: "Adamın biri konukluğa gitmiş. Yolda Tanrı’ya rastlamış. Ondan kut dilemiş. Tanrı da onu kutsamış: “Ağılında atların olsun, ömrün uzun olsun!”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.discordapp.com/attachments/1021189063262351390/1078384716731928626/howcuteofyou_-_-_a_monk_standing_beside_a_tree_59ab3765-8afc-4008-8861-076fa2a65e67.png",
        },
        {
          Sıra: "48",
          Atışlar: "3-4-4",
          Irk: "“Yaşlı yol tanrısıyım. Kırıkları onarırım, çıkıkları yerine oturturum. Evreni düzene sokarım. Hayırlı olsun!”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/d1198ad7-7a6e-49a9-b3f4-f6f12d0a2b2e/grid_0.png",
        },
        {
          Sıra: "49",
          Atışlar: "3-4-1",
          Irk: "Bir kaplan avlanmaya gitmiş. Ortalık yerde bir yaban keçisine rastlamış. Benekli yaban keçisi gidip yalçın bir kayaya çıkmış, ölümden kurtulmuş. Ölümden kurtulup sevinç ve neşe içinde anasına varmış. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          Sıra: "50",
          Atışlar: "1-4-3",
          Irk: "Demir kırı atın kuyruğunu düğümle ve onu rüzgârı kırana kadar son süratle sürersin; yağız atı da yıkılıp yere yayılıncaya kadar koşturursun. Öyle ki, dokuz kat keçesi yırtılıp delininceye kadar terler. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://images.pexels.com/photos/1996335/pexels-photo-1996335.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          Sıra: "51",
          Atışlar: "4-3-3",
          Irk: "“Yırtıcı kara kartalım. Yeşil kayalar yazlığım, kızıl kayalar kışlığım. Dağlarda kalmak hoşuma gider.”, demiş. Bilin ki bu..",
          İşaret: "-",
          Resim:
            "https://cdn.midjourney.com/a97ba061-d709-42f1-9a1d-733ac484a85d/grid_0.png",
        },
        {
          Sıra: "52",
          Atışlar: "3-1-2",
          Irk: "Kişi kaygılanmış, gök bulutlanmış. Bulutlar arasından güneş doğmuş, kaygılar arasından sevinç gelmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/43c86678-5dec-4918-a541-e90526bf5474/grid_0.png",
        },
        {
          Sıra: "53",
          Atışlar: "2-3-2",
          Irk: "Boz bulut yürümüş, halk üstüne yağmur bırakmış, kara bulut yürümüş her şeyin üstüne yağmur bırakmış. Ekinler olgunlaşmış, taze otlar çıkmış. Hayvanlar ve insanlar için iyi olmuş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/d148256d-e817-439d-a1c6-6c8277faa27d/grid_0.png",
        },
        {
          Sıra: "54",
          Atışlar: "1-3-1",
          Irk: "Kölenin sözü beyinden ricadır, kuzgunun sözü Tanrı’ya yakarıştır. Bunları yukarıda Tanrı işitir, aşağıda insan bilir. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.discordapp.com/attachments/1021189063262351390/1078383382356049972/hithertoblues_indian_juan_diego_with_guadalupe_664eb8c1-479c-48aa-bc19-57a5ad2e9ed4.png",
        },
        {
          Sıra: "55",
          Atışlar: "4-1-2",
          Irk: "Yiğit bir adamın oğlu savaşa gitmiş. Savaş alanında kendinden söz ettirmiş. Evine gelirken ünlü ve mutlu, atı da yetkin olarak gelmiş. Bilin ki bu çok iyidir.",
          İşaret: "çok iyi",
          Resim:
            "https://cdn.discordapp.com/attachments/1021189063262351390/1078401971582668930/grid_0.webp",
        },
        {
          Sıra: "56",
          Atışlar: "2-3-1",
          Irk: "“Sürüsü ile mutlu bir aygırım. Cevizlikler yazlığım, kuşluklar kışlağım. Buralarda yaşayıp mutlu olurum”. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/848f929b-71a7-47b0-9339-8acb533e8250/grid_0.png",
        },
        {
          Sıra: "57",
          Atışlar: "2-2-1",
          Irk: "Sevgilisi ölmüş, kovası donmuş. “Sevgilisi nasıl ölür, o bir beydir. Kovası nasıl donsun, o güneşlik yerdedir.”, demiş. Bilin ki bu falın başında biraz keder vardır ama sonra yine iyiye varır.",
          İşaret: "başı kötü, sonu iyi",
          Resim:
            "https://cdn.midjourney.com/44907443-0a0b-4e46-84b8-5140dbdc587e/grid_0.png",
        },
        {
          Sıra: "58",
          Atışlar: "3-2-2",
          Irk: "Bir oğlan babasına ve anasına öfkelenerek kaçıp gitmiş. Sonra düşünmüş, geri gelmiş. Anamın öğüdünü alayım, babamın sözünü dinleyeyim diye geri gelmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.discordapp.com/attachments/1021189063262351390/1078400114562969630/Osc4r152_Young_and_strong_turkish_young_boy_who_is_in_9th_centu_f7125583-8201-4a2a-9d7e-018fc84e164b.png",
        },
        {
          Sıra: "59",
          Atışlar: "3-2-3",
          Irk: "“Yetmiş yaşında gelmişi korkutmayın, bir aylık olmuşu bozdurmayın. Onlara iyilik olsun.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/aeac3bbd-6541-4bd8-9ae6-d3955b88cc62/grid_0.png",
        },
        {
          Sıra: "60",
          Atışlar: "4-3-1",
          Irk: "“Dokuz çatallı boynuzu olan erkek geyiğim. Yüksek dizlerimin üstüne çıkarak böğürürüm. Beni yukarıda Tanrı işitir, aşağıda insanoğlu bilir. Bu kadar güçlüyüm.” demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/bd0f0cb8-a81d-4830-a509-d040a65d55ad/grid_0.png",
        },
        {
          Sıra: "61",
          Atışlar: "3-4-1",
          Irk: "Turna kuşu tüneğine konmuş. Farkına varmadan tuzağa takılmış, uçamadan kalakalmış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/b2470100-1086-4b10-bdca-124c465c00d8/grid_0.png",
        },
        {
          Sıra: "62",
          Atışlar: "2-1-3",
          Irk: "“Yorgun geyiğim. Yazlığım olan dağıma çıkarım, yazı orada geçiririm. Mutluyum.”, demiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/66ecd990-7af4-4632-8a28-df8f90b234e6/grid_0.png",
        },
        {
          Sıra: "63",
          Atışlar: "1-2-1",
          Irk: "Hanın ordusu ava çıkmış. Avlak içine bir erkek karaca girmiş. Onu elleri ile tutmuşlar. Hanın bütün erleri sevinmiş. Bilin ki bu iyidir.",
          İşaret: "iyi",
          Resim:
            "https://cdn.midjourney.com/0eccea49-38a8-424a-a7c6-7ff894d34672/grid_0.png",
        },
        {
          Sıra: "64",
          Atışlar: "3-4-1",
          Irk: "“Ak boyunlu boz şahinim. Manzaralı kayalıklara konup etrafa bakınırım, üstü cevizle dolu kavak üzerine inip yazı geçiririm.”, demiş. Bilin ki bu çok iyidir.",
          İşaret: "çok iyi",
          Resim:
            "https://cdn.midjourney.com/5ae435cc-5266-4e65-9dd7-c1cf631cb61d/grid_0.png",
        },
        {
          Sıra: "65",
          Atışlar: "3-3-2",
          Irk: "Semiz atın ağzı sertleşmiş. Sahibi onu iyileştirmek için hiçbir şey yapamamış. Bilin ki bu kötüdür.",
          İşaret: "kötü",
          Resim:
            "https://cdn.midjourney.com/2dc03dc0-f6c2-4aad-b7d9-6bfbb67010c3/grid_0.png",
        },
      ],
    },
  ]);

  useEffect(() => {
    setInfo(data);
  }, [data]);
}

export default Data;
