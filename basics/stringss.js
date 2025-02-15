let Myname= "Vishal "
let surName="Bokare"

console.log(Myname)

console.log(Myname.toUpperCase())
console.log(surName.toUpperCase())

console.log(`${Myname} and ${surName}`)

console.log(Myname.charAt(2))


// # another way of defining string

const str= new String(' My name is vishal')

console.log(str.toUpperCase())
console.log(str.charAt(4))
console.log(str.indexOf('v'))
console.log(str.length)

console.log(str.substring(3,10))


const str2= str.substring(1,15)
console.log(str2)

console.log(str2.concat(" Bokare"))

console.log(str2.slice(2,5))

console.log(str2.includes('name'))
console.log(str2.replace('is', 'was'))

console.log(str2.replace('was', 'is'))


let cllg="    Vishwakarma    institute    of technology      "

console.log(cllg.trim())
console.log(cllg)








