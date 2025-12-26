const saldoSpan = document.getElementById("saldoo");
  const inputValor = document.getElementById("valor");
  const botao = document.getElementById("saw");
  const sesz = document.querySelector('.sesz');
  const seszs = document.querySelector('.seszs');
  const thesaque = document.getElementById('thesa');
  const peqs = document.querySelector('.peqs');
  const historico = document.getElementById("historico");
  
  const agora = new Date();

    const data = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR');

function graca(){
  //const valor = inputValor.value;
  
  //if (valor === "" || Number(valor) <= 0) return;
  
 // const resq = document.createElement("div");
 // resq.textContent = `Você sacou R$ ${Number(valor).toFixed(2)}`;
  
  //historico.appendChild(resq);
  
//  inputValor.value = "";
};

const sapq = document.querySelector('.saque');
thesaque.addEventListener('click', () => {
  sapq.classList.toggle("ativo");
});
  // Saldo real em número
  let saldoReal = parseFloat(saldoSpan.textContent.replace(/\./g, '').replace(',', '.'));
  
  // Formata número para pt-BR
  function formatarSaldo(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
  // Atualiza saldo visual
  function atualizarSaldoVisual(valorDigitado) {
    const saldoSimulado = saldoReal - valorDigitado;
    saldoSpan.textContent = formatarSaldo(saldoSimulado >= 0 ? saldoSimulado : 0);
  }
  
  // Evento input
  inputValor.addEventListener("input", () => {
    // Remove pontos e troca vírgula por ponto
    let valorDigitado = parseFloat(inputValor.value.replace(/\./g, '').replace(',', '.'));
    
    if (isNaN(valorDigitado) || valorDigitado <= 0) {
      saldoSpan.textContent = formatarSaldo(saldoReal);
      botao.disabled = true;
      return;
    }
    
    // Não permite valor maior que o saldo
    if (valorDigitado > saldoReal) {
      valorDigitado = saldoReal;
      inputValor.value = formatarSaldo(saldoReal);
    }
    
    atualizarSaldoVisual(valorDigitado);
    botao.disabled = false;
  });
  
  // Evento click
  botao.addEventListener("click", () => {
    let valorDigitado = parseFloat(inputValor.value.replace(/\./g, '').replace(',', '.'));
    
    if (isNaN(valorDigitado) || valorDigitado <= 0) return;
    
    saldoReal -= valorDigitado;
    saldoSpan.textContent = formatarSaldo(saldoReal);
    sesz.textContent = formatarSaldo(saldoReal);
    seszs.textContent = formatarSaldo(saldoReal);
    sapq.classList.toggle("ativo");
    inputValor.value = '';
    botao.disabled = true;
    
   const resq = document.createElement("div");
  resq.innerHTML = `<p>sacou <span style='color:#3193e4;'>R$ ${valorDigitado},00</span> • <span style='font-size:9px;'>${data}  ${hora}</span></p><br>`;
  
  historico.appendChild(resq);
  
   // graca();
  });

   document.querySelector('.atua').addEventListener('click', () =>{
             const texto = formatarSaldo(saldoReal);
        const sco = document.querySelector('.copt');
        navigator.clipboard.writeText(texto)
          .then(() =>
            peqs.innerText = "Copiado")
          //alert("Copiado: " + texto))
          .catch(err => console.error("Erro ao copiar:", err));
   });
