// HardwareModels.jsx
import { useEffect, useState } from "react";
import HardwareProductCarousel from "./HardwareProductCarousel";

const STRAPI_URL = "http://localhost:1337";

const HardwareModels = () => {
  const [products, setProducts] = useState([]);
  const [heading, setHeading] = useState("Explore Our Hardware Models");
  const [ctaLabel, setCtaLabel] = useState("Enquire Us Now");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/hardware-models?populate=products.image`
        );
        const json = await res.json();

        const hwModel = json.data?.[0]; // take the first hardware-model
        if (hwModel) {
          const attrs = hwModel.attributes ?? hwModel;
          setHeading(attrs.heading ?? "Explore Our Hardware Models");
          setCtaLabel(attrs.cta_label ?? "Enquire Us Now");

          const mapped =
            (attrs.products ?? []).map((p) => {
              const imgData = p.image ?? p.attributes?.image ?? null;
              let url = null;

              if (imgData) {
                const formats = imgData.formats ?? imgData.attributes?.formats ?? null;
                url =
                  (formats && (formats.small?.url || formats.thumbnail?.url)) ||
                  imgData.url ||
                  imgData.attributes?.url ||
                  null;

                if (url && !url.startsWith("http")) {
                  url = STRAPI_URL + url;
                }
              }

              return {
                id: p.id ?? p?.attributes?.id,
                name: p.name ?? p?.attributes?.name,
                desc: p.desc ?? p?.attributes?.desc,
                image: url,
              };
            }) ?? [];

          setProducts(mapped);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch hardware-models:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <HardwareProductCarousel
      products={products}
      heading={heading}
      buttonLabel={ctaLabel}
      onButtonClick={() => {
        window.location.href = "/all-scanners";
      }}
    />
  );
};

export default HardwareModels;
