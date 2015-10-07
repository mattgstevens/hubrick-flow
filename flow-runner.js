const requiredAttrs = [ 'id', 'rule', 'true_id', 'false_id'];
function attrCheck(rule) {
  let ruleAttrs = Object.keys(rule);

  requiredAttrs.forEach((attr) => {
    if(!ruleAttrs.includes(attr)) {
      throw new Error(`Rule id:${rule.id} missing required attr "${attr}"`)
    }
  })
}

function parseRules(rules) {
  let ruleSet = {}

  rules.forEach((rule) => {
    if(ruleSet[rule.id]) {
      throw new Error(`Duplicate Rule id ${rule.id}`)
    } else {
      ruleSet[rule.id] = rule
      attrCheck(rule)
    }
  })

  return ruleSet
}

const flow = (rules, data) => {

  try {
    let ruleSet = parseRules(rules)

    let nextId = 1
    let seenId = []
    while(nextId !== null) {
      if(seenId.includes(nextId)) {
        throw new Error(`Circular reference detected: Rule id:${nextId}`)
      } else {
        seenId.push(nextId)
      }

      let result = ruleSet[nextId].rule(data)
      let message = ''
      if(result) {
        message = `Rule ${nextId} passed`
        nextId = ruleSet[nextId].true_id
      } else {
        message = `Rule ${nextId} failed`
        nextId = ruleSet[nextId].false_id
      }
      console.log(message)
    }

    console.log('End')
  } catch (error) {
    console.error(error.message)
  }
}

export default flow