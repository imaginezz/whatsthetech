/**
 * What's the Tech?
 *
 * Detect servers run on current page and send back to background page.
 * Most part of this script was refered from Wappalyzer Firefox Addon and ChromeSnifferPlus Chrome Addon.
 *
 * @author imaginezz <imaginezz@outlook.com>
 * @author Bao Nguyen <contact@nqbao.com>
 * @author justjavac <justjavac@gmail.com>
 * @license GPLv3
 **/

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
