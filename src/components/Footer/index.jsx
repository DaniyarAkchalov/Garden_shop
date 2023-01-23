import React from "react";
import instagram_logo from "../../media/instagram-logo.png";
import instagram from "../../media/instagram.png";
import whatsApp_logo from "../../media/whatsApp_logo.png";
import whatsApp from "../../media/whatsApp.png";
import s from "./index.module.css";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className={s.footer_block}>
      <div className={s.network}>
        <div>
          <h2 className={s.contacts}>Contacts</h2>
          <p className={s.tel_nummber}>+ 7 999 999 99 99</p>

          <div className={s.social}>
            <div className={s.instagram}>
              <img
                className={s.inst_logo}
                src={instagram_logo}
                alt="instagram_logo"
              />
              <img className={s.inst_title} src={instagram} alt="instagram" />
            </div>
            <div className={s.whatsapp}>
              <img
                className={s.whats_logo}
                src={whatsApp_logo}
                alt="whatsApp_logo"
              />
              <img className={s.whats_title} src={whatsApp} alt="whatsApp" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className={s.adress}>Adress</h2>
            <h3 className={s.city}>
              34233 Fuldatal <br /> Garden street 24
            </h3>
            <p className={s.working}>Work schedule</p>
            <p className={s.hour}>24-hour</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
