let techs = {
  Vue: '2.0',
  jQuery: '6.0'
}

browser.runtime.sendMessage({
  type: 'setApps',
  content: techs
})
