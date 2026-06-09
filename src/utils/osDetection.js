export const getOS = () => {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  
  let os = 'unknown';

  if (macosPlatforms.indexOf(platform) !== -1 || userAgent.indexOf('Mac') !== -1) {
    os = 'macOS';
  } else if (iosPlatforms.indexOf(platform) !== -1 || userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1 || userAgent.indexOf('Win') !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};
