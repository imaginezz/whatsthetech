const knownHeaders = {
  'x-powered-by': {
    // 'Ruby on Rails': /Phusion Passenger/,
    'Express.js': /Express/,
    PHP: /PHP\/?(.*)/,
    'ASP.NET': /ASP\.NET/,
    Nette: /Nette Framework/
  },
  server: {
    Tengine: /Tengine(.*)/,
    Apache: /Apache[^-]?\/?(.*)/,
    Tomcat: /Apache-Coyote\/?.*/,
    GitHub: /GitHub.com/,
    Domino: /Lotus-Domino/,
    Play: /Play\/?(.*)/,
    nginx: /nginx\/?(.*)/,
    IIS: /Microsoft-IIS\/?(.*)/,
    AliyunOSS: /AliyunOSS\/?(.*)/,
    cloudflare: /cloudflare\/?(.*)/
  },
  via: {
    Varnish: /(.*) varnish/
  }
}

export default knownHeaders
