const apiKey = "at_7dYvc7FwUDUzWQFYCFjHVJb9M7xfx";
const iPAddressRegexp = /\d[.]/gi;
const domainRegexp = /\w[.]/gi;
const emailRegexp = /[@.com]/gi;
export const getEndpointByQuery = (query) => {
  const endpoint = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;
  if (iPAddressRegexp.test(query)) {
    return `${endpoint}&ipAddress=${query}`;
  } else if (domainRegexp.test(query) && !query.includes("@")) {
    return `${endpoint}&domain=${query}`;
  } else if (emailRegexp.test(query) && query.includes("@")) {
    return `${endpoint}&email=${query}`;
  } else {
    return `${endpoint}&ipAddress=${query}`;
  }
};
