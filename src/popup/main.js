const knownTechs = browser.extension.getBackgroundPage().knownTechs

const deleteInit = function() {
  const initTech = document.querySelector('#init-item')
  initTech.parentNode.removeChild(initTech)
}

const noTech = function() {
  const techList = document.querySelector('#list')

  const domEleLi = document.createElement('li')
  domEleLi.className = 'item notech'

  domEleSpan = document.createElement('span')
  domEleSpan.className = 'tech'
  domEleSpan.innerText = 'No tech detected'
  domEleLi.appendChild(domEleSpan)

  techList.appendChild(domEleLi)
}

const parseTech = function(techs) {
  let parsedTechs = []
  for (let tech in techs) {
    if (tech in knownTechs) {
      parsedTechs.push({
        techName: tech,
        techVersion: techs[tech],
        techItem: knownTechs[tech]
      })
    }
  }
  return parsedTechs
}

const getTechDomItem = function(item) {
  const techName = item['techName']
  const techVersion = item['techVersion'] || null
  const techItem = item['techItem']
  const url = techItem['url'] || null
  const img = techItem['icon'] || 'logo.svg'
  const domEleLi = document.createElement('li')
  domEleLi.className = 'item'

  let domEleContainer = domEleLi

  if (url) {
    const domEleA = document.createElement('a')
    domEleA.href = url
    domEleLi.appendChild(domEleA)
    domEleContainer = domEleA
  }

  const domEleImg = document.createElement('img')
  domEleImg.src = `../icons/${img}`
  domEleContainer.appendChild(domEleImg)

  const domEleSpanName = document.createElement('span')
  domEleSpanName.className = 'tech'
  domEleSpanName.innerText = techName
  domEleContainer.appendChild(domEleSpanName)

  if (techVersion) {
    const domEleSpanVersion = document.createElement('span')
    domEleSpanVersion.className = 'version'
    domEleSpanVersion.innerText = techVersion
    domEleContainer.appendChild(domEleSpanVersion)
  }

  return domEleLi
}

const haveTech = function(allTechs) {
  const techList = document.querySelector('#list')

  if ('header' in allTechs) parseTech(allTechs['header']).map(tech => techList.appendChild(getTechDomItem(tech)))
  if ('app' in allTechs) parseTech(allTechs['app']).map(tech => techList.appendChild(getTechDomItem(tech)))
}

browser.tabs
  .query({
    active: true,
    currentWindow: true
  })
  .then(tabs => {
    if (tabs.length == 0) return
    const currentTab = tabs[0]
    browser.runtime
      .sendMessage({
        type: 'getTechs',
        content: {
          tabId: currentTab['id']
        }
      })
      .then(response => {
        if (response == null) noTech()
        else haveTech(response)
      })
      .catch(error => {
        console.log('get techs error', error)
      })
  })
  .catch(error => {
    console.log('get tabId error', error)
  })
