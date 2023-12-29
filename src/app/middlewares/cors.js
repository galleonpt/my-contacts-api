module.exports = (request, response, next) => {
  const originsWhiteList = [
    'http://localhost:3000',
  ];

  const origin = request.header('Origin');
  const isAllowed = originsWhiteList.includes(origin);

  if (isAllowed) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', '7200');
  }
  next();
};
