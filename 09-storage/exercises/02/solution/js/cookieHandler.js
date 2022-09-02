/* 2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust
megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy
objektumban, ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba
az adott süti nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF */
const setCookie = (name, value) => {
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires};path=/`;
};

setCookie("viewed", "5");
setCookie("uid", "354774631237");
setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");

const cookieHandler = {
  getAll() {
    const keyValuePairs = document.cookie
      .split("; ")
      .map((item) => item.split("="));
    console.log(keyValuePairs);
    return Object.fromEntries(keyValuePairs);
  },
  toSessionStorage() {
    const allCookies = this.getAll();
    Object.entries(allCookies).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
  flush() {
    const allCookies = this.getAll();
    Object.entries(allCookies).forEach(([entry]) => {
      document.cookie = `${entry}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    });
  },
};
export default cookieHandler;
