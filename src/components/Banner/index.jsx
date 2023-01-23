import React from 'react'
import banner from '../../media/banner.png'
import s from './index.module.css'

export default function Banner() {
  return (
    <div className={s.banner_section}>
      <div className={s.banner_sub_section}>
        <div>
          <h2>Sale</h2>
          <h2>the new season</h2>
          <div className={s.buttons}>
            <button className={s.all_prom}>All promotions</button>
            <button className={s.more}>More information</button>
          </div>
        </div>
        <img className={s.banner} src={banner} alt="banner_img" />
      </div>
    </div>
  )
}