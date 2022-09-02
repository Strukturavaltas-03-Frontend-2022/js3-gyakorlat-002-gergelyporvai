/* 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként
kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár! */

const setCookie = (stringToken) => {
  const expires = new Date(Date.now() + 15 * 60 * 1000);
  console.log(expires);
  document.cookie = `token=${stringToken};expires=${expires};path=/`;
};

export default setCookie;
