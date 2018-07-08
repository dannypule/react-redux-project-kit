// https://daveceddia.com/multiple-environments-with-react/
const getApiRootUsingHostname = () => {
  if (typeof window === 'undefined') return null;

  const hostname = window && window.location && window.location.hostname;

  if (!hostname) return null;

  if (hostname === 'realsite.com') {
    return 'https://api.realsite.com';
  } else if (hostname === 'staging.realsite.com') {
    return 'https://staging.api.realsite.com';
  } else if (/^qa/.test(hostname)) {
    return `https://api.${hostname}`;
  }
  return process.env.REACT_APP_BACKEND_HOST || 'http://localhost:5566';
};

const backendHost = getApiRootUsingHostname() || 'http://localhost:5566';

export const API_ROOT = `${backendHost}/api`;
