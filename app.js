const currency1=document.querySelector('#currency1')
const currency2=document.querySelector('#currency2')
const result=document.querySelector('#result')
const result1=document.querySelector('#result1')
const calculate=document.querySelector('#calculate')


async function getApiObject(){
    let response=await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=2c4f8c8c51c069344b24462dfdf8aa47') //promise
    
    let val=await response.json()
    //console.log(val)
    //destrukturiranje objekta rates
    let {rates}=val
    delete rates.AED
    delete rates.AFN
    delete rates.ALL
    localStorage.setItem('rates',JSON.stringify(rates))
    console.log(Object.keys(rates))
    console.log(Object.values(rates))
     for (const [name, value] of Object.entries(rates)) {
    //     document.write(`${name}  ${value} <br>`);
    currency1.innerHTML+=`<option value="${value}">${name} ${value}</option>`
            localStorage.setItem('currencyName',name)
     }
     for (const [name, value] of Object.entries(rates)) {
    //     document.write(`${name}  ${value} <br>`);
    currency2.innerHTML+=`<option value="${value}">${name} ${value}</option>`
            
     }
  }

  getApiObject() 
     //js fetch api
    //js json
    //js destructuring
    //js string literal
calculate.addEventListener('click',(e)=>{     
    result.innerHTML+=(currency1.value/currency2.value).toFixed(2)
    
    //parse from string to JS object
    let ratesParsed=JSON.parse(localStorage.getItem('rates'))
    for(rate of Object.entries(ratesParsed))
        console.log(rate)
})

