// Curated, active Telegram channels that publish free MTProto proxies.
// Subscriber counts are approximate and shown for reference only.

export interface ProxyChannel {
  id: string;
  username: string;
  name: string;
  subscribers: string;
  language: string;
}

export const PROXY_CHANNELS: ProxyChannel[] = [
  { id: "proxymtproto", username: "ProxyMTProto", name: "Proxy MTProto", subscribers: "11.9M", language: "EN" },
  { id: "proxydarsi", username: "proxydarsi", name: "پروکسی درسی", subscribers: "201K", language: "FA" },
  { id: "mtprototg", username: "MTProtoTG", name: "MTProto Proxies", subscribers: "121K", language: "EN" },
  { id: "turbomtproxy", username: "turbo_mtproxy", name: "Turbo MTProxy", subscribers: "76K", language: "EN" },
  { id: "getmtproto", username: "Get_MTProto", name: "Telegram Proxies", subscribers: "75K", language: "EN" },
  { id: "nordmtproxy", username: "nord_mtproxy", name: "Nord MTProxy", subscribers: "45K", language: "RU" },
  { id: "mprxy", username: "MPrxy", name: "MTProto Proxies", subscribers: "43K", language: "EN" },
  { id: "proxyfier", username: "Proxy_fier", name: "Proxifier", subscribers: "35K", language: "EN" },
  { id: "mtprotoproxyspeed", username: "mtprotoproxy_speed", name: "MTProto Proxy Speed", subscribers: "17K", language: "AR" },
  { id: "mtprotolists", username: "MTPRotoLists", name: "MTProto Proxy List", subscribers: "12K", language: "EN" },
  { id: "mtp4tg", username: "mtp4tg", name: "MTProxy for Telegram", subscribers: "9K", language: "EN" },
  { id: "mtprx", username: "mtprx", name: "MTProxy List", subscribers: "6K", language: "RU" },
];
