import keysPattern from "./keysPattern";

const fileForm = document.forms['load-file']
const fileInput = fileForm.elements['file']

fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0]
  if (!file) {
    console.error('File not chosen!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const osuText = event.target.result
    const hits = findHits(osuText)
    const typoJamMap = generateTypoJamMap(hits)
    saveMap('inputs.json', typoJamMap)
  }
  reader.readAsText(file)
})

function findHits(text) {
  const lines = text.split('\n')
  let inHitObjectsSection = false
  const result = []
  const resultKeys = []

  for (const line in lines) {
    const currentLine = lines[line]    
    if (currentLine.trim() === '[HitObjects]') {
      inHitObjectsSection = true
      continue
    }
    if (inHitObjectsSection && currentLine.trim() !== '' && !currentLine.startsWith('[')) {
      const parts = currentLine.split(',')
      const key = getKey(parts[0], parts[1])

      result.push({timing:parts[2], key:key})
    }
  }
  return result
}

function getKey(x, y) {
  for (const row of keysPattern) {
    if (y <= row.y) {
      for (const [key, keyX] of Object.entries(row.keys)) {
        if (x <= keyX) {
          return key
        }
      }
    }
  }
  return 'Space'
}

function generateTypoJamMap(hits) {
  const outputStart = '{\n  "inputs": [\n'
  const outputEnds = `    {\n      "key": "${hits[hits.length - 1].key}",\n      "time": ${hits[hits.length - 1].timing / 1000}\n    }\n  ]\n}`
  let upperCase = false

  hits.pop()
  
  console.log(hits)
  let typoJamMap = hits.reduce((output, hit, nomer) => {
    if (hit.key === 'CapsLock') {
      upperCase = !upperCase     
    }
    console.log(`${hit.key} ${nomer}`)
    if (!upperCase && hit.key.length === 1) {
      hit.key = hit.key.toLowerCase()
    }
    return output + `    {\n      "key": "${hit.key}",\n      "time": ${hit.timing / 1000}\n    },\n`
  }, outputStart)

  typoJamMap = typoJamMap + outputEnds

  return typoJamMap
}

function saveMap(filename, map) {
  let blob = new Blob([map], { type: 'text/plain'})
  let link = document.createElement('a')
  
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  fileInput.value = ''
}

