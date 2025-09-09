import React from "react";
import styles from "./EducationBanner.module.css";

export default function EductaionBanner() {
  return (
    <section className={styles.wrap}>
      {/* LEFT: Mosaic */}
      <div className={styles.mosaic}>
        {/* Row 1 */}
        <div className={styles.tileCircleRed}>
          <h4 className={styles.alarmIcon} aria-hidden>
            <svg viewBox="0 0 48 48" className={styles.iconSvg}>
              <path d="M34.2 9.3l5.5-5.5 3 3-5.5 5.5a14.9 14.9 0 00-3-3zM5.3 6.8l3-3 5.5 5.5a15.3 15.3 0 00-3 3L5.3 6.8zM24 10a14 14 0 1014 14A14 14 0 0024 10zm0 24.5A10.5 10.5 0 1134.5 24 10.5 10.5 0 0124 34.5zM25.5 18h-3v8.6l7.3 4.4 1.5-2.5-5.8-3.5V18z"/>
            </svg>
          </h4>
        </div>
        <div className={`${styles.tile} ${styles.tSmall}`}> 
          <img src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=640&auto=format&fit=crop" alt="Label maker"/>
        </div>
        <div className={`${styles.tile} ${styles.tPortrait}`}> 
          <img src="https://images.unsplash.com/photo-1596495578063-0f46de9a57c8?q=80&w=640&auto=format&fit=crop" alt="Child in classroom"/>
        </div>

        {/* Row 2 */}
        <div className={`${styles.tile} ${styles.tSmall}`}> 
          <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=640&auto=format&fit=crop" alt="Cube printer"/>
        </div>
        <div className={`${styles.tile} ${styles.tWide}`}> 
          <img src="https://images.unsplash.com/photo-1596495792685-3c0b6a1efc9a?q=80&w=800&auto=format&fit=crop" alt="Backpack with labels"/>
        </div>
        <div className={styles.tileCircleBlue}> 
          <div className={styles.whiteMiniBox}/>
        </div>

        {/* Row 3 */}
        <div className={`${styles.tile} ${styles.tPrinter}`}> 
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" alt="Printer with color sheets"/>
        </div>
        <div className={`${styles.tile} ${styles.tSmall}`}> 
          <img src="https://images.unsplash.com/photo-1532153354457-5fbe0c11d8d0?q=80&w=640&auto=format&fit=crop" alt="Handheld labeler"/>
        </div>
        <div className={`${styles.tile} ${styles.tSmall}`}> 
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=640&auto=format&fit=crop" alt="Green label maker"/>
        </div>
      </div>

      {/* RIGHT: Copy block */}
      <div className={styles.panel}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Shop the Back to<br/>School Range
          </h1>
          <p className={styles.desc}>
            Gear up for the academic year with Brother's Back to
            School range — from powerful school-ready labelling
            systems to fun and creative personal label makers.
          </p>

          <button className={styles.cta} type="button">Explore here</button>

          <div className={styles.perk}>
            <h4 className={styles.giftIcon} aria-hidden>
              <svg viewBox="0 0 24 24" className={styles.iconSvg}>
                <path d="M20 7h-2.6A3.5 3.5 0 0012 2a3.5 3.5 0 00-5.4 3H4a2 2 0 00-2 2v3h20V9a2 2 0 00-2-2zM9 5.5A1.5 1.5 0 1110.5 4 1.5 1.5 0 019 5.5zM14.5 4A1.5 1.5 0 1116 5.5 1.5 1.5 0 0114.5 4zM2 12h9v10H4a2 2 0 01-2-2zM13 22h7a2 2 0 002-2v-8h-9z"/>
              </svg>
            </h4>
            <div className={styles.perkText}>
              <div>Free 9mm Tape with PTH110 &</div>
              <div>Free 24mm Tape with PT-P950NW</div>
            </div>
          </div>

          <a href="#" className={styles.tnc}>T&C*</a>
        </div>
      </div>
    </section>
  );
}
