export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/; SameSite=Strict; Secure`;
};
export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure`;
};
export const clearAllCookies = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name] = cookie.split("=");
    deleteCookie(name);
  }
};
export const getCookie = () => {
  return document.cookie.split(";").reduce((cookies, cookie) => {
    const [name, value] = cookie.split("=").map(c => c.trim());
    if (name && value !== undefined) {
      cookies[name] = decodeURIComponent(value);
    }
    return cookies;
  }, {});
};