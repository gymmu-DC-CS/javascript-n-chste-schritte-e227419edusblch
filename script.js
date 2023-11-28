export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e"){
      if (currentElement != "E")
    result.push(currentElement)
  }
}
  return result.join("")
}
export function aufgabe02(args) {
  const input = args
  return input.toUpperCase();
  return result
}

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement ==="e" || currentElement ==="E") {
      result++
    }  
  }
   return result
  }

  export function aufgabe04(args) {
    const input = args
    let result = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement ===  " ") {
        result++
      }  
    }
     return result+1
    }
  
    export function aufgabe05(args) {
      const input = args
    
      if (input.toLowerCase()=== input){
        return false
      } else {
        return true
      }
        }  
   
      export function aufgabe06(args) {
        const input = args

        if (input=== ""){
          return false
        }

        for (let i = 0; i < input.length; i++) {
          const currentElement = input[i].toLowerCase()
          if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
            if (currentElement.charCodeAt() != 32) {
              return true
            }
          }  
        }
         return false
        }

        export function aufgabe07(args) {
          const input = args
          let result = 0
        
          for (let i = 0; i < input.length; i++) {
            const currentElement = input[i]
            if (currentElement ==="e" || currentElement ==="E") {
              result++
            }  
          }
           return result
          }
     