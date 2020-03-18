import knownHeaders from './header.js'

let techData = {}

browser.runtime.onMessage.addListener((message, sender) => {
  //   console.log(message, sender)

  const tabId = sender.tab.id
  const apps = message

  techData[tabId] = techData[tabId] || {}

  techData[tabId]['app'] = apps

  //   console.log(techData)
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
