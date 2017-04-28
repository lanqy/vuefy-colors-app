export function copy (text) {
  var doc = document
  var el = doc.createElement('input')
  el.value = text
  doc.body.appendChild(el)
  el.select()
  doc.execCommand('copy')
  el.remove()
}
