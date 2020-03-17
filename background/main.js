import knownHeaders from './header.js'

let techData = {}

browser.runtime.onMessage.addListener((message, sender) => {
  //   console.log(message, sender)

  const tabId = sender.tab.id
  const techs = message

  if (!(tabId in techData)) {
    techData[tabId] = {}
  }
  for (i in techs) {
    techData[tabId][techs[i]] = true
  }

  //   console.log(techData)
})

browser.tabs.onRemoved.addListener(tabId => {
  if (tabId in techData) {
    delete techData[tabId]
  }
})

browser.webRequest.onHeadersReceived.addListener(
  detail => {
    console.log(detail)

    var headers = detail.responseHeaders
    var tabId = detai.tabId


  },
  {
    urls: ['<all_urls>'],
    types: ['main_frame']
  },
  ['responseHeaders']
)
