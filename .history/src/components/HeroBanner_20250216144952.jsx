import heroBannerImg from "../assets/compisklubb-banner-min.jpg";
import heroBannerMobileImg from "../assets/compisklubb-banner-mobile-min.jpg";

export const HeroBanner = () => {
  return (
    <picture>
      <source srcset={heroBannerImg} media="(min-width: 600px)" />
      <img srcset={heroBannerMobileImg} alt="Kompisclubb Banner" width="100%" />
    </picture>
  );
};
