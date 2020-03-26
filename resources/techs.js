/**
 * Chrome AppSniffer
 *
 * Web Application definition
 *
 * @author justjavac <justjavac@gmail.com>
 * @license GPLv3
 **/

const knownTechs = {
  百度统计: {
    icon: 'bdtongji.ico',
    url: 'http://tongji.baidu.com'
  },
  cnzz: {
    icon: 'cnzz.ico',
    url: 'http://www.cnzz.com'
  },
  bShare: {
    icon: 'bshare.ico',
    url: 'http://www.bshare.cn'
  },
  百度分享: {
    icon: 'baidushare.ico',
    url: 'http://share.baidu.com'
  },
  多说: {
    icon: 'duoshuo.ico',
    url: 'http://www.duoshuo.com'
  },
  友荐: {
    icon: 'ujian.ico',
    url: 'http://www.ujian.cc'
  },
  友言: {
    icon: 'uyan.ico',
    url: 'http://www.uyan.cc'
  },
  JiaThis: {
    icon: 'jiathis.ico',
    url: 'http://www.jiathis.com'
  },
  无觅: {
    icon: 'wumii.ico',
    url: 'http://www.wumii.com/widget/getWidget'
  },
  segmentfault: {
    icon: 'segmentfault.ico',
    url: 'http://segmentfault.com'
  },
  七牛云存储加速: {
    icon: 'qiniu.png',
    url: 'http://www.qiniu.com'
  },

  // ==== services ====
  Tumblr: {
    icon: 'Tumblr.ico',
    url: 'http://tumblr.com'
  },
  TypePad: {
    icon: 'TypePad.ico',
    url: 'http://typepad.com'
  },
  Blogger: {
    icon: 'Blogger.ico',
    url: 'http://blogger.com'
  },

  Webs: {
    icon: 'webs.ico',
    url: 'http://www.webs.com/'
  },
  Weebly: {
    icon: 'weebly.ico',
    url: 'http://www.weebly.com/'
  },
  Webnode: {
    icon: 'webnode.ico',
    url: 'http://www.webnode.com/'
  },
  Jimdo: {
    icon: 'jimdo.ico',
    url: 'http://www.jimdo.com'
  },
  Jigsy: {
    icon: 'jigsy.ico',
    url: 'http://jigsy.com'
  },
  Yola: {
    icon: 'yola.ico',
    url: 'http://www.yola.com/'
  },

  // ==== cms or framework ====
  CodeIgniter: {
    icon: 'codeigniter.ico',
    url: 'http://codeigniter.com'
  },

  vBulletin: {
    icon: 'vBulletin.ico',
    url: 'http://www.vbulletin.com/'
  },
  SMF: {
    icon: 'SMF.ico',
    url: 'http://www.simplemachines.org/'
  },
  phpBB: {
    icon: 'phpBB.ico',
    url: 'http://www.phpbb.com'
  },
  Flarum: {
    icon: 'flarum.png',
    url: 'http://flarum.org'
  },
  IPB: {
    icon: 'IPB.ico',
    url: 'http://invisionpower.com/'
  },
  miniBB: {
    icon: 'miniBB.ico',
    url: 'http://www.minibb.com/'
  },
  MyBB: {
    icon: 'mybb.ico',
    url: 'http://www.mybb.com/'
  },
  XenForo: {
    icon: 'xenforo.ico',
    url: 'http://xenforo.com'
  },

  Drupal: {
    icon: 'Drupal.ico',
    url: 'https://www.drupal.org/'
  },
  Drupal8: {
    icon: 'Drupal8.ico',
    url: 'https://www.drupal.org/8'
  },
  Ubercart: {
    icon: 'Ubercart.ico',
    url: 'http://www.ubercart.org/'
  },

  AlphaCMS: {
    icon: 'alphacms.ico',
    url: 'http://www.mego.com.vn'
  },
  TomatoCMS: {
    icon: 'tomatocms.ico',
    url: 'http://www.tomatocms.com/'
  },

  WordPress: {
    icon: 'WordPress.ico',
    url: 'http://wordpress.org'
  },
  WPML: {
    icon: 'WPML.ico',
    url: 'http://wpml.org/'
  },

  bbPress: {
    icon: 'bbPress.ico',
    url: 'http://bbpress.org'
  },
  'Movable Type': {
    icon: 'MovableType.ico',
    url: 'http://www.movabletype.org/'
  },
  Serendipity: {
    icon: 'Serendipity.png',
    url: 'http://www.s9y.org/'
  },
  concrete5: {
    icon: 'concrete5.gif',
    url: 'http://www.concrete5.org'
  },

  MediaWiki: {
    icon: 'MediaWiki.ico',
    url: 'http://www.mediawiki.org/'
  },
  DokuWiki: {
    icon: 'DokuWiki.ico',
    url: 'http://www.dokuwiki.org/'
  },

  OpenACS: {
    icon: 'openacs.ico',
    url: 'http://openacs.org'
  },

  Pusher: {
    icon: 'pusher.ico',
    url: 'https://pusher.com'
  },

  Joomla: {
    icon: 'Joomla.ico',
    url: 'http://joomla.org'
  },
  Magento: {
    icon: 'Magento.ico',
    url: 'http://www.magentocommerce.com/'
  },
  XOOPS: {
    icon: 'XOOPS.ico',
    url: 'http://xoops.org'
  },
  Plone: {
    icon: 'Plone.ico',
    url: 'http://plone.org/'
  },
  CMSMadeSimple: {
    icon: 'CMSMadeSimple.ico',
    url: 'http://www.cmsmadesimple.org/'
  },
  SilverStripe: {
    icon: 'SilverStripe.png',
    url: 'http://silverstripe.org'
  },
  MODx: {
    icon: 'MODx.ico',
    url: 'http://modxcms.com/'
  },
  'Amiro.CMS': {
    icon: 'Amiro.CMS.ico',
    url: 'http://www.amirocms.com/'
  },
  JaliosJCMS: {
    icon: 'JaliosJCMS.ico',
    url: 'http://www.jalios.com'
  },
  Koobi: {
    icon: 'Koobi.ico',
    url: 'http://www.dream4.de/cms/'
  },
  Liferay: {
    icon: 'LifeRay.ico',
    url: 'http://www.liferay.com'
  },
  TYPO3: {
    icon: 'TYPO3.ico',
    url: 'http://typo3.org/'
  },
  Contao: {
    icon: 'contao.ico',
    url: 'http://www.contao.org'
  },
  Fatwire: {
    icon: 'Fatwire.ico',
    url: 'http://www.fatwire.com'
  },
  'PHP-Fusion': {
    icon: 'PHP-Fusion.ico',
    url: 'http://php-fusion.co.uk/'
  },
  'PHP-Nuke': {
    icon: 'PHP-Nuke.ico',
    url: 'http://phpnuke.org/'
  },
  WebGUI: {
    icon: 'WebGUI.ico',
    url: 'http://www.webgui.org/'
  },
  'ez Publish': {
    icon: 'eZ.ico',
    url: 'http://ez.no/'
  },
  BIGACE: {
    icon: 'BIGACE.ico',
    url: 'http://www.bigace.de/'
  },
  OpenCMS: {
    icon: 'opencms.ico',
    url: 'http://www.opencms.org/'
  },
  '1c-bitrix': {
    icon: '1c-bitrix.ico',
    url: 'http://www.1c-bitrix.ru/'
  },
  MojoMotor: {
    icon: 'mojomotor.ico',
    url: '	http://mojomotor.com'
  },
  GetSimple: {
    icon: 'getsimple.png',
    url: '	http://get-simple.info/'
  },
  Perch: {
    // not yet supported
    icon: 'perch.ico',
    url: 'http://grabaperch.com/'
  },
  DataLifeEngine: {
    icon: 'datalife.ico',
    url: 'http://dle-news.ru/'
  },

  Elgg: {
    icon: 'Elgg.ico',
    url: 'http://www.elgg.org/'
  },

  DotNetNuke: {
    icon: 'DotNetNuke.ico',
    url: 'http://www.dotnetnuke.com/'
  },
  Sitefinity: {
    icon: 'Sitefinity.ico',
    url: 'http://www.sitefinity.com/'
  },
  SharePoint: {
    icon: 'SharePoint.png',
    url: 'http://sharepoint.microsoft.com'
  },

  ZenPhoto: {
    icon: 'ZenPhoto.ico',
    url: 'http://www.zenphoto.org'
  },
  Gallery2: {
    icon: 'Gallery2.ico',
    url: 'http://gallery.menalto.com/'
  },

  Avactis: {
    icon: 'avactis.ico',
    url: 'http://www.avactis.com'
  },
  PrestaShop: {
    icon: 'PrestaShop.ico',
    url: 'http://www.prestashop.com/'
  },
  Prostores: {
    icon: 'prostores.ico',
    url: 'http://www.prostores.com'
  },
  ZenCart: {
    icon: 'zencart.ico',
    url: 'http://www.zen-cart.com'
  },
  ErainCart: {
    icon: 'eraincart.ico',
    url: 'http://eraincart.com'
  },
  Volusion: {
    icon: 'volusion.ico',
    url: 'http://www.volusion.com'
  },
  osCommerce: {
    icon: 'osCommerce.ico',
    url: 'http://www.oscommerce.com'
  },
  OpenCart: {
    icon: 'opencart.png',
    url: 'http://www.opencart.com'
  },

  Moodle: {
    icon: 'moodle.png',
    url: 'http://moodle.org'
  },
  SugarCRM: {
    icon: 'sugarcrm.ico',
    url: 'http://www.sugarcrm.com'
  },
  PivotX: {
    icon: 'pivotx.ico',
    url: 'http://pivotx.net'
  },

  Shibboleth: {
    icon: 'shibboleth.png',
    url: 'http://shibboleth.internet2.edu/'
  },
  Alfresco: {
    icon: 'Alfresco.png',
    url: 'http://www.alfresco.com'
  },

  ClanSphere: {
    icon: 'ClanSphere.png',
    url: 'http://csphere.eu'
  },

  // ==== js framework ====
  KindEditor: {
    icon: 'kindeditor.ico',
    url: 'http://kindeditor.net'
  },
  Highcharts: {
    icon: 'highcharts.png',
    url: 'http://www.highcharts.com'
  },
  'Zepto.js': {
    icon: 'zepto.png',
    url: 'http://zeptojs.com'
  },
  jQuery: {
    icon: 'jQuery.ico',
    url: 'http://jquery.com'
  },
  'jQuery UI': {
    icon: 'jQuery_UI.ico',
    url: 'http://jqueryui.com/'
  },
  ExtJS: {
    icon: 'ExtJS.ico',
    url: 'http://www.extjs.com/'
  },
  Prototype: {
    icon: 'Prototype.ico',
    url: 'http://www.prototypejs.org/'
  },
  Closure: {
    icon: 'Closure.png',
    url: 'http://code.google.com/closure/'
  },
  MooTools: {
    icon: 'MooTools.ico',
    url: 'http://mootools.net/'
  },
  Dojo: {
    icon: 'dojo.ico',
    url: 'http://www.dojotoolkit.org/'
  },
  'script.aculo.us': {
    icon: 'script.aculo.us.ico',
    url: 'http://script.aculo.us/'
  },
  YUI: {
    icon: 'YUI.ico',
    url: 'http://developer.yahoo.com/yui/2/'
  },
  'YUI 3': {
    icon: 'yui3.png',
    url: 'http://yuilibrary.com'
  },
  ColorThief: {
    url: 'https://github.com/lokesh/color-thief'
  },
  'jQuery.hotkeys': {
    url: 'https://github.com/jeresig/jquery.hotkeys',
    priority: 1.9
  },
  'spin.js': {
    icon: 'spin.js.ico',
    url: 'http://spin.js.org/',
    priority: 2
  },
  babel: {
    icon: 'babeljs.ico',
    url: 'https://babeljs.io',
    priority: 2
  },
  FastClick: {
    url: 'https://github.com/ftlabs/fastclick',
    priority: 2
  },
  twemoji: {
    url: 'https://github.com/twitter/twemoji',
    priority: 2
  },
  Mithril: {
    icon: 'mithril.png',
    url: 'http://mithril.js.org',
    priority: 2
  },
  's9e.TextFormatter': {
    url: 'https://github.com/s9e/TextFormatter',
    priority: 2
  },
  Cappuccino: {
    icon: 'cappuccino.png',
    url: 'http://cappuccino.org/'
  },
  RightJS: {
    icon: 'rightjs.png',
    url: 'http://RightJS.org/'
  },
  Spine: {
    icon: 'spine.ico',
    url: 'http://spinejs.com'
  },
  AngularJs: {
    icon: 'angular.ico',
    url: 'http://angularjs.org/'
  },
  Angular: {
    icon: 'angular.ico',
    url: 'http://angular.io/'
  },
  Ionic: {
    icon: 'ionic.ico',
    url: 'http://ionicframework.com/'
  },
  Elm: {
    icon: 'elm.ico',
    url: 'http://elm-lang.org/'
  },
  D3: {
    icon: 'D3.svg',
    url: 'http://d3js.org/'
  },
  moment: {
    icon: 'moment.png',
    url: 'http://momentjs.com/'
  },

  // ==== js tools ====
  Raphael: {
    icon: 'raphael.ico',
    url: 'http://raphaeljs.com/'
  },
  Typekit: {
    icon: 'typekit.ico',
    url: 'http://typekit.com/'
  },
  Cufon: {
    icon: 'cufon.ico',
    url: 'http://cufon.shoqolate.com/'
  },
  sIFR: {
    icon: 'sifr.gif',
    url: 'http://www.mikeindustries.com/blog/sifr/'
  },
  Modernizr: {
    icon: 'modernizr.ico',
    url: 'http://www.modernizr.com/'
  },
  Facebook: {
    icon: 'facebook.ico',
    url: 'http://developers.facebook.com/'
  },
  Twitter: {
    icon: 'twitter.ico',
    url: 'http://dev.twitter.com'
  },
  Buzz: {
    icon: 'buzz.png',
    url: 'http://www.google.com/buzz/stuff'
  },
  Plus1: {
    icon: 'plus1.png',
    url: 'http://www.google.com/+1/button/'
  },
  AddThis: {
    icon: 'addthis.ico',
    url: 'http://www.addthis.com'
  },
  'Backbone.js': {
    icon: 'backbonejs.ico',
    url: 'http://backbonejs.org'
  },
  'Underscore.js': {
    icon: 'underscorejs.ico',
    url: 'http://underscorejs.org/'
  },

  'Head JS': {
    icon: 'headjs.gif',
    url: 'http://headjs.com'
  },
  'Google Loader': {
    icon: 'google.ico',
    url: 'https://developers.google.com/loader/'
  },

  Woopra: {
    icon: 'woopra.ico',
    url: 'http://www.woopra.com'
  },
  OpenWebAnalytics: {
    icon: 'owa.ico',
    url: 'http://www.openwebanalytics.com'
  },
  'Google Analytics': {
    icon: 'Google_Analytics.ico',
    url: 'https://www.google.com/analytics/?hl=zh-CN'
  },
  SiteCatalyst: {
    icon: 'SiteCatalyst.ico',
    url: 'http://www.omniture.com'
  },
  Coremetrics: {
    icon: 'coremetrics.ico',
    url: 'http://www.coremetrics.com'
  },
  Quantcast: {
    icon: 'Quantcast.ico',
    url: 'http://www.quantcast.com/'
  },
  Xiti: {
    icon: 'xiti.ico',
    url: 'http://xiti.com/'
  },
  Piwik: {
    icon: 'Piwik.ico',
    url: 'http://piwik.org/'
  },
  Clicky: {
    icon: 'clicky.ico',
    url: 'http://getclicky.com/'
  },

  Disqus: {
    icon: 'Disqus.ico',
    url: 'http://disqus.com/'
  },
  GetSatisfaction: {
    icon: 'GetSatisfaction.gif',
    url: 'http://getsatisfaction.com'
  },
  Wibiya: {
    icon: 'Wibiya.ico',
    url: 'http://wibiya.com/'
  },
  Prettify: {
    icon: 'google.ico',
    url: 'http://code.google.com/p/google-code-prettify/'
  },
  reCaptcha: {
    icon: 'reCaptcha.ico',
    url: 'http://recaptcha.net/'
  },
  Mollom: {
    icon: 'mollom.ico',
    url: 'http://mollom.com'
  },
  GoogleFontApi: {
    icon: 'google-font-api.gif',
    url: 'http://code.google.com/apis/webfonts/'
  },
  GoogleMapApi: {
    icon: 'gmap.png',
    url: 'http://code.google.com/apis/maps/'
  },
  SWFObject: {
    icon: 'SWFObject.ico',
    url: 'http://code.google.com/p/swfobject/'
  },

  OpenX: {
    icon: 'OpenX.ico',
    url: 'http://openx.org'
  },
  AdSense: {
    icon: 'AdSense.gif',
    url: 'https://www.google.com/adsense'
  },
  Chitika: {
    icon: 'chitika.ico',
    url: 'http://chitika.com/'
  },
  BuySellAds: {
    icon: 'buysellads.ico',
    url: 'http://buysellads.com/'
  },
  HumansTxt: {
    icon: 'humanstxt.ico',
    url: 'http://humanstxt.org/'
  },
  Bootstrap: {
    icon: 'bootstrap.ico',
    url: 'http://getbootstrap.com'
  },
  Ning: {
    icon: 'ning.ico',
    url: 'http://www.ning.com/'
  },
  ektron: {
    icon: 'ektron.ico',
    url: 'http://www.ektron.com/'
  },
  'Mura CMS': {
    icon: 'muracms.ico',
    url: 'http://www.getmura.com/'
  },
  'Tiki Wiki CMS Groupware': {
    icon: 'TikiWikiCms.ico',
    url: 'http://info.tiki.org/'
  },
  etracker: {
    icon: 'etracker.ico',
    url: 'http://etracker.com/'
  },
  OpenTag: {
    icon: 'OpenTag.ico',
    url: 'http://opentag.qubitproducts.com'
  },
  SPDY: {
    icon: 'spdy.ico',
    url: 'http://www.chromium.org/spdy'
  },
  KISSmetrics: {
    icon: 'kissmetrics.ico',
    url: 'http://kissmetrics.com/'
  },
  LiveStreet: {
    icon: 'LiveStreetCms.ico',
    url: 'http://livestreetcms.com/'
  },
  PHP: {
    icon: 'php.ico',
    url: 'http://php.net/'
  },
  Java: {
    icon: 'java.ico',
    url: 'http://www.java.com'
  },
  Tengine: {
    icon: 'tengine.ico',
    url: 'http://tengine.taobao.org'
  },
  Apache: {
    icon: 'apache.ico',
    url: 'http://httpd.apache.org/'
  },
  Tomcat: {
    icon: 'tomcat.ico',
    url: 'http://tomcat.apache.org/'
  },
  Domino: {
    icon: 'domino.ico',
    url: 'http://www.ibm.com/software/lotus/products/domino/'
  },
  Play: {
    icon: 'play.ico',
    url: 'https://www.playframework.com/'
  },
  nginx: {
    icon: 'nginx.ico',
    url: 'http://nginx.org/en/'
  },
  GitHub: {
    icon: 'github.ico',
    url: 'https://github.com'
  },
  Varnish: {
    icon: 'varnish.ico',
    url: 'https://www.varnish-cache.org/'
  },
  IIS: {
    icon: 'iis.ico',
    url: 'http://www.iis.net/'
  },
  'ASP.NET': {
    icon: 'asp.net.ico',
    url: 'http://www.asp.net/'
  },
  Nette: {
    icon: 'nette.ico',
    url: 'http://nette.org/'
  },
  'Font Awesome': {
    icon: 'font-awesome.ico',
    url: 'https://fortawesome.github.io/Font-Awesome/'
  },
  polymer: {
    icon: 'polymer.ico',
    url: 'https://github.com/Polymer/polymer'
  },
  Vue: {
    icon: 'Vue.png',
    url: 'http://vuejs.org/'
  },
  RxJs: {
    icon: 'RxJs.ico',
    url: 'https://github.com/Reactive-Extensions/RxJS'
  },
  'Lo-dash': {
    icon: 'Lo-dash.ico',
    url: 'https://lodash.com/'
  },
  Webpack: {
    icon: 'Webpack.ico',
    url: 'https://github.com/webpack/webpack'
  },
  Django: {
    icon: 'django.ico',
    url: 'https://www.djangoproject.com/'
  },
  React: {
    icon: 'React.ico',
    url: 'https://facebook.github.io/react/'
  },
  AMP: {
    icon: 'AMP.png',
    url: 'https://ampproject.org'
  },
  Ember: {
    icon: 'ember.png',
    url: 'https://emberjs.com/'
  },
  flowchart: {
    icon: 'flowchart.png',
    url: 'https://github.com/adrai/flowchart.js'
  },
  katex: {
    icon: 'katex.png',
    url: 'https://github.com/adrai/flowchart.js'
  },
  'editor.md': {
    icon: 'editormd.png',
    url: 'https://pandao.github.io/editor.md/'
  },
  'highlight.js': {
    icon: 'hljs.png',
    url: 'https://github.com/highlightjs/highlight.js'
  },
  'sequence-diagrams': {
    icon: 'sequence-diagrams.png',
    url: 'https://bramp.github.io/js-sequence-diagrams/'
  },
  ace: {
    icon: 'ace.png',
    url: 'https://github.com/ajaxorg/ace'
  },
  WebFont: {
    icon: 'google_fonts_lodp.ico',
    url: 'https://github.com/typekit/webfontloader'
  },
  WebSocket: {
    icon: 'websockets.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket'
  },
  Prism: {
    icon: 'Prism.svg',
    url: 'https://prismjs.com/'
  },
  Mousetrap: {
    icon: 'mousetrap.png',
    url: 'https://craig.is/killing/mice'
  },
  Raven: {
    icon: 'sentry.io',
    url: 'https://docs.sentry.io/platforms/javascript/'
  },
  'qrcode.js': {
    icon: 'qrcode.png',
    url: 'https://github.com/jeromeetienne/jquery-qrcode'
  },
  AliyunOSS: {
    icon: 'aliyun.png',
    url: 'https://www.alibabacloud.com/product/oss'
  },
  emoji: {
    icon: 'emoji.png'
  },
  cloudflare: {
    icon: 'cloudflare.ico',
    url: 'https://www.cloudflare.com/'
  }
}

export default knownTechs
