import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Destroy your life", "Learn to Drink!!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
