import React from "react";
import './Galeri.css'

function Galeri() {
  const images = [
    "https://cdn.midjourney.com/aa4268ac-1a3d-41a6-89fa-e7f262868414/grid_0.png",
    "https://cdn.discordapp.com/ephemeral-attachments/1021189063262351390/1078361539351945226/grid_0.webp",
    "https://cdn.midjourney.com/3db305f0-92a0-4716-886a-1568eea0ecac/grid_0.png",
    "https://cdn.midjourney.com/596519e6-f88d-4b7e-ad61-ebf355350c56/grid_0.png",
    "https://cdn.midjourney.com/ec9782c5-d2e2-4e47-91da-61d1859e9c64/grid_0.png",
    "https://cdn.midjourney.com/717f6cec-d62e-4759-8fc8-8d514797e7e7/grid_0.png",
    "https://cdn.midjourney.com/28b8d144-fed3-419a-bfaf-c3867210e309/grid_0.png",
    "https://cdn.midjourney.com/34a44f25-52fb-4680-a0e0-9e11e20f9519/grid_0.png",
    "https://cdn.midjourney.com/a4706780-3f73-45cb-a724-81cb1d7ec9d3/grid_0.png",
    "https://cdn.midjourney.com/aaa88c7f-e2ae-460e-948a-43b84fe1efa6/grid_0.png",
    "https://cdn.midjourney.com/3e045ac1-ebb5-4e72-bb11-e57b2eec3484/grid_0.png",
    "https://cdn.midjourney.com/adb7584b-6e78-458d-aade-1fa448aac973/grid_0.png",
    "https://cdn.midjourney.com/8d903bda-ee09-4bb1-9708-17e2ac97b9cb/grid_0.png",
    "https://cdn.midjourney.com/33c8dda5-85c9-4b91-b4d3-f6ef2b063119/grid_0.png",
     "https://cdn.midjourney.com/fce4ca83-6486-4766-b74e-7093ce273650/grid_0.png",
    "https://cdn.midjourney.com/f0d50570-861a-43fb-995f-7da6ccf9a939/grid_0.png",
    "https://images.deepai.org/art-image/c07db9ff80f34011a80342eeba8cb96e/a-camel-enjoying-technology-75f08a.jpg",
    "https://cdn.midjourney.com/0f6de3c1-74ab-428a-9e8c-18610fdc6045/grid_0.png",
    "https://cdn.midjourney.com/f44c33c7-3a6f-4f7d-ad25-7041b3aff93f/grid_0.png",
    "https://cdn.midjourney.com/b533bc1e-f0d2-42c8-a577-deb11ba3412d/grid_0.png",
    "https://cdn.midjourney.com/530c2e11-37bc-4592-95f3-00f49c094597/grid_0.png",
    "https://cdn.midjourney.com/b6152002-b958-4c2d-b6ee-7cc84d4ff22a/grid_0.png",
    "https://cdn.midjourney.com/907dddf0-a010-4cdc-8fd3-81abeb64bf71/grid_0.png",
    "https://cdn.midjourney.com/dfab4a04-6d5d-4a89-b86f-15d314d01e65/grid_0.png",
    "https://cdn.midjourney.com/8f07fc30-b03a-4495-b5a1-aecb123d245b/grid_0.png",
    "https://cdn.midjourney.com/e125d9a3-26de-4d85-a40b-ee99a0ad21dd/grid_0.png",
    "https://cdn.midjourney.com/f7ac3dfb-7b89-47fa-9c3d-b2228042ba8b/grid_0.png",
    "https://cdn.midjourney.com/9fe3345f-3a31-4351-9eed-a06a2119b8c6/grid_0.png",
    "https://cdn.midjourney.com/e61b7dc6-8f25-4098-9b82-8ac1d7597a0d/grid_0.png",
    "https://images.deepai.org/art-image/3ced689ecae346db93a54902a491fa8f/samurai-walking-beside-river-thumb.jpg",
    "https://cdn.midjourney.com/656a00a5-5d90-4810-877d-aa360c2be954/grid_0.png",
    "https://cdn.midjourney.com/5a2dbb5c-8301-41dc-b20f-e45f9db5b718/grid_0.png",
    "https://images.deepai.org/art-image/773c2a90e6854e9896d63b10a6306cbd/really-scary-2998fa.jpg",
    "https://cdn.discordapp.com/attachments/1021189063262351390/1078383722602172547/yombesa_long_horned_cow_heard_running_cinematic_ralistic_4k_7c8ca71b-578f-4c87-9b44-9262353b4cbf.png",
    "https://media.discordapp.net/attachments/1021189063262351390/1078376971769217124/mes_Young_woman_in_a_red_long_dress_with_slit_tied_to_a_tree_bl_a5c4852e-edbd-43f0-913a-54dbe2da1733.png?width=555&height=555",
    "https://cdn.midjourney.com/771e5e01-cd52-4494-8e90-68e674fc265f/grid_0.png",
    "https://cdn.midjourney.com/0011d395-1ce8-4be3-85ee-ed2e22908e2c/grid_0.png",
    "https://cdn.midjourney.com/d55dedcd-0838-468b-8d54-d8f019cfd6d1/grid_0.png",
    "https://cdn.midjourney.com/6353d4e1-3528-4505-b661-0c899112ec97/grid_0.png",
    "https://images.deepai.org/art-image/385e732ed06144de99f5720c2ac1da0e/falcon-bird-thumb.jpg",
    "https://cdn.midjourney.com/18860d88-99ad-4c1e-a945-e1a338450b9c/grid_0.png",
    "https://images.deepai.org/art-image/1187eac0b1144f35b76938d69d2c23bc/a-happy-camel-74f733.jpg",
    "https://cdn.midjourney.com/79e32092-4293-46f2-9832-a4517bdeaff0/grid_0.png",
    "https://cdn.discordapp.com/attachments/1021189063262351390/1078384716731928626/howcuteofyou_-_-_a_monk_standing_beside_a_tree_59ab3765-8afc-4008-8861-076fa2a65e67.png",
    "https://cdn.midjourney.com/d1198ad7-7a6e-49a9-b3f4-f6f12d0a2b2e/grid_0.png",
    "https://cdn.midjourney.com/a97ba061-d709-42f1-9a1d-733ac484a85d/grid_0.png",
    "https://cdn.midjourney.com/43c86678-5dec-4918-a541-e90526bf5474/grid_0.png",
    "https://cdn.midjourney.com/d148256d-e817-439d-a1c6-6c8277faa27d/grid_0.png",
    "https://cdn.discordapp.com/attachments/1021189063262351390/1078383382356049972/hithertoblues_indian_juan_diego_with_guadalupe_664eb8c1-479c-48aa-bc19-57a5ad2e9ed4.png",
    "https://cdn.discordapp.com/attachments/1021189063262351390/1078401971582668930/grid_0.webp",
    "https://cdn.midjourney.com/848f929b-71a7-47b0-9339-8acb533e8250/grid_0.png",
    "https://cdn.midjourney.com/44907443-0a0b-4e46-84b8-5140dbdc587e/grid_0.png",
    "https://cdn.discordapp.com/attachments/1021189063262351390/1078400114562969630/Osc4r152_Young_and_strong_turkish_young_boy_who_is_in_9th_centu_f7125583-8201-4a2a-9d7e-018fc84e164b.png",
    "https://cdn.midjourney.com/aeac3bbd-6541-4bd8-9ae6-d3955b88cc62/grid_0.png",
    "https://cdn.midjourney.com/bd0f0cb8-a81d-4830-a509-d040a65d55ad/grid_0.png",
    "https://cdn.midjourney.com/b2470100-1086-4b10-bdca-124c465c00d8/grid_0.png",
    "https://cdn.midjourney.com/66ecd990-7af4-4632-8a28-df8f90b234e6/grid_0.png",
    "https://cdn.midjourney.com/0eccea49-38a8-424a-a7c6-7ff894d34672/grid_0.png",
    "https://cdn.midjourney.com/5ae435cc-5266-4e65-9dd7-c1cf631cb61d/grid_0.png",
    "https://cdn.midjourney.com/2dc03dc0-f6c2-4aad-b7d9-6bfbb67010c3/grid_0.png",
  ];

  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-4 text-warning">Görseller</h2>
      <p className="text-center text-light">Uygulamada kullanılan görsellerin neredeyse tamamı Midjourney aracılığıyla yapılmıştır.</p>
      <div className="row">
        {images.map((item,index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={item} alt="Card image cap" loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Galeri;

