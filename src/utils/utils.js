export function copy (text) {
  var doc = document
  var el = doc.createElement('input')
  el.value = text
  doc.body.appendChild(el)
  el.select()
  doc.execCommand('copy')
  el.remove()
}

export function toast () {
  var doc = document
  var el = doc.createElement('div')
  el.id = 'toast'
  var txt = doc.createTextNode('Copied!')
  el.appendChild(txt)
  doc.body.appendChild(el)
  el.className = 'open'

  setTimeout(function () {
    el.className = ''
    el.remove()
  }, 1000)
}
