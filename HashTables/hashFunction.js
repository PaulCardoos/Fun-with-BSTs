/* A naive hash function for strings using utf character codes*/



module.exports = hash = (string, length) => {
    let total = 0
    //using a prime number reduces the number of collisons
    let prime = 13
     
    for(let i in string){
        total += i.charCodeAt(0)
    }

    return (total * prime) % length
}

const print = (obj) => {
    console.log(obj)
}

