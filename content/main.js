/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @author justjavac <justjavac@gmail.com>
 * @license GPLv3
 **/

function start() {
  const head = document.getElementsByTagName('head')[0]

  if (head) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = browser.extension.getURL('content/detect.js')

    const meta = document.createElement('meta')
    meta.name = 'whatsthetech'
    meta.id = 'whatsthetech_meta'
    head.appendChild(meta)
    head.appendChild(script)

    meta.addEventListener('whatsthetechEvent', function() {
      setTimeout(function() {
        const apps = JSON.parse(meta.content)
        browser.runtime.sendMessage({
          type: 'setApps',
          content: apps
        })
      }, 500)
    })
  }
}

start()
