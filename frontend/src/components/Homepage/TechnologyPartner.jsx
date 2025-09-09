import React, { useEffect, useState } from "react";
import styles from "./TechnologyPartner.module.css";

const STRAPI_URL = "http://localhost:1337"; // change if deployed

export default function TechnologyPartner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[technologyPartner][populate]=*`
        );
        const json = await res.json();
        console.log("Tech Partner API:", json);
        setData(json?.data?.technologyPartner || null);
      } catch (err) {
        console.error("Error fetching Tech Partner:", err);
      }
    })();
  }, []);

  if (!data) return null;

  const bgImage = data.backgroundImage
    ? `${STRAPI_URL}${data.backgroundImage.url}`
    : "";

  return (
    <section
      className={styles.technologyPartner}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className="container">
          <h2 className={styles.heading}>{data.heading}</h2>
          <div className={styles.btnWrapper}>
            <a href={data.buttonLink || "#"} className={`btn ${styles.btnTech}`}>
              {data.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
