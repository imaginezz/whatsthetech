import knownHeaders from '../resources/headers.js'
import knownTechs from '../resources/techs.js'

window.knownTechs = knownTechs

let techData = {}

console.log('background started')

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender)

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
      console.log(techData)
      if (tabId in techData) {
        sendResponse(techData[tabId])
      } else {
        sendResponse(null)
      }
      break
  }
})

browser.tabs.onRemoved.addListener(tabId => {
  if (tabId in techData) {
    delete techData[tabId]
  }
})

browser.webRequest.onHeadersReceived.addListener(
  detail => {
    // console.log(detail)

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
            const version = match[1] || -1
            foundHdrs[kHdr] = version
          }
        }
      }
    }

    techData[tabId] = techData[tabId] || {}
    techData[tabId]['header'] = foundHdrs

    // console.log(techData)
  },
  {
    urls: ['<all_urls>'],
    types: ['main_frame']
  },
  ['responseHeaders']
)
