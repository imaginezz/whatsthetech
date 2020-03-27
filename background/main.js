import knownHeaders from '../resources/headers.js'
import knownTechs from '../resources/techs.js'

window.knownTechs = knownTechs

let techData = {}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const msgType = message['type']
  const msgContent = message['content']
  let tabId
  switch (msgType) {
    case 'setApps':
      const apps = message['content']
      tabId = sender.tab.id
      techData[tabId] = techData[tabId] || {}
      techData[tabId]['app'] = apps
      break
    case 'getTechs':
      tabId = msgContent['tabId']
      if (tabId in techData) {
        return Promise.resolve(techData[tabId])
      } else {
        return Promise.resolve(null)
      }
  }
})

browser.tabs.onRemoved.addListener(tabId => {
  if (tabId in techData) {
    delete techData[tabId]
  }
})

browser.webRequest.onHeadersReceived.addListener(
  detail => {
    const headers = detail.responseHeaders
    const tabId = detail.tabId

    let foundHdrs = {}

    for (let hdrIdx in headers) {
      const hdr = headers[hdrIdx]
      const hdrName = hdr.name.toLowerCase()
      if (hdrName in knownHeaders) {
        const kHdrs = knownHeaders[hdrName]
        const hdrContent = hdr.value
        for (let kHdr in kHdrs) {
          const match = hdrContent.match(kHdrs[kHdr])
          if (match) {
            const version = match[1] || null
            foundHdrs[kHdr] = version
          }
        }
      }
    }

    techData[tabId] = techData[tabId] || {}
    techData[tabId]['header'] = foundHdrs
  },
  {
    urls: ['<all_urls>'],
    types: ['main_frame']
  },
  ['responseHeaders']
)
