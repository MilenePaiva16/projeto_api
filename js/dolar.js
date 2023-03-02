fetch(`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia);
    document.getElementById("dolar").innerHTML = "$ " + economia.USDBRL.bid + " / R$ 1,00 ";
    document.getElementById("codigo").innerHTML = economia.USDBRL.code + "/BRL";
    document.getElementById("nome").innerHTML = economia.USDBRL.name;

 
      
})