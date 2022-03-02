let Correios = require('node-correios');
let correios = new Correios();

 async function queryProductsMainPage() {
    const response = await fetch(`http://localhost:3092/products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    return await response.json();
  }

  
  const getCepInformation = async (Cep) => {
    cep = new CepBrasil('08330500');
    const response = await cep.consultar();
    
    // const response = await fetch(`http://viacep.com.br/ws/01001000/json/`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' }
    // })

    return await response;
  }

  const getCepInformation2 = async (Cep) => {
    let args = {
      nCdServico: '40010,41106,40215',
      // demais parâmetros ...
  }
    correios.calcPreco(args)
  .then(result => {
  console.log(result);
  })
.catch(error => {
  console.log(error);
  });

  }


  getCepInformation2('08330500');
  