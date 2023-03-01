import React from "react";
import styles from "./Nedir.module.css";

function Nedir() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Irk Bitig Hakkında</h3>
      <div className={styles.content}>
        <p>
          Irk sözcüğü kehanet, fal ya da tahmin gibi anlamlara gelir. Bitig
          sözcüğü ise kitap anlamındadır. Irk Bitig, günümüz diline fal kitabı
          ya da kehanet kitabı olarak çevrilebilir. Irk Bitig 9 veya 10. yüzyıla
          ait çift dilli bir el yazmasıdır. Yazmanın büyük çoğunluğu Orhun
          alfabesi ile Eski Türkçe yazılmış olup kehanet ve falcılık
          hakkındadır, ancak girişinde ve sonunda Çince Budist metinler ihtiva
          etmektedir. Macar-İngiliz arkeolog Aurel Stein tarafından 1907'de
          günümüzde Çin'in Dunhuang şehri civarında yer alan Bin Buda
          Mağaraları'nda keşfedilmiştir.El yazması, iyi korunmuş olması ve
          bilinen tek tam Eski Türkçe el yazması olmasından ötürü Türk tarihi
          açısından önemli kabul edilmektedir.
        </p>
        <h4 className={styles.title}>Irkların Yorumlanması</h4>
        <div className={styles.content}>
          <p>
            Kitapta yer alan Irkların Yorumlanması bölümü, atışlarla gelecek
            hakkında kehanet yapabilme yöntemidir. Bunun için,dikdörtgen çubuğun
            dört yüzünden her birine O, OO, OOO, OOOO işaretlerini çizip, bu
            çubuklardan üç tanesi yere atıldıktan sonra gelen işaretlerin
            karşılığındaki 65 metinden birisi okunur. İlk olarak kehanet istenen
            konu ile ilgili düşünülür ve dört tarafı olan çubuk ya da zar
            kullanılarak 3 kere atış yapılır. Bu atışlarda gelen sayılara
            eşlenik olan ırk kitaptan bulunarak okunur.Uygulamamızda her Irk bir
            karta yerleştirilmiştir.Her kart çektiğinizde rastgele bir kart
            alırsınız. Atışlar, Irk ve işaretleri kartın üzerinde
            bulabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nedir;
