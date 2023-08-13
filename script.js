
//add up to 20 wallets
const wallets = [

"wallet1",
"wallet2",
"wallet3",
"wallet4",



];
const delay = 125 //delay between clicks (ms)
const textSelector = "Введите ваш адрес MATIC" //text from address textbox


const b =  wallets.length*delay+delay
for(let i=0;wallets.length > i+1; i++){
    setTimeout(() => {
        console.log(i)
        button = document.getElementsByClassName("add-address-form-btn")[0]
        button.click()   
    }, i*delay)
    
}

setTimeout(() => {
    const usdtInputs = Array.from(document.querySelectorAll(`input[placeholder="${textSelector}"]`));
    if (usdtInputs.length === wallets.length) {
      usdtInputs.forEach((input, index) => {
        setTimeout(() => {
          input.setAttribute('value', wallets[index]);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }, index * delay);
      });
        } else {
      console.error('Number of fields and wallets do not match');
    }  
}, b)
