// https://daveceddia.com/multiple-environments-with-react/
const getApiRootUsingHostname = () => {
  if (typeof window === 'undefined') return null;

  const hostname = window && window.location && window.location.hostname;

  if (!hostname) return null;

  if (hostname === 'react-project-kit') {
    return 'https://mango-node.herokuapp.com';
  } else if (hostname === 'react-project-kit-staging') {
    return 'https://node-project-kit-staging.herokuapp.com';
  }
  return process.env.REACT_APP_BACKEND_HOST || 'http://localhost:5566';
};

const backendHost = getApiRootUsingHostname() || 'http://localhost:5566';

export const API_ROOT = `${backendHost}/api`;
