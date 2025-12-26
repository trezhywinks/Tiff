<script>
  const saldoSpan = document.getElementById("saldoo");
  const inputValor = document.getElementById("valor");
  const botao = document.getElementById("saw");
  
  // Converte saldo do formato brasileiro para número
  let saldoReal = parseFloat(saldoSpan.textContent.replace(/\./g, '').replace(',', '.'));
  
  // Função para formatar número para R$ 1.000,00
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
    let valorDigitado = parseFloat(inputValor.value);
    
    // Se inválido ou negativo
    if (isNaN(valorDigitado) || valorDigitado < 0) {
      saldoSpan.textContent = formatarSaldo(saldoReal);
      botao.disabled = true;
      return;
    }
    
    // Não permite valor maior que o saldo
    if (valorDigitado > saldoReal) {
      valorDigitado = saldoReal;
      inputValor.value = saldoReal.toFixed(2);
    }
    
    // Atualiza saldo visual
    atualizarSaldoVisual(valorDigitado);
    
    // Libera botão
    botao.disabled = false;
  });
  
  // Evento click
  botao.addEventListener("click", () => {
    let valorDigitado = parseFloat(inputValor.value);
    
    if (isNaN(valorDigitado) || valorDigitado <= 0) return;
    
    // Confirma desconto
    saldoReal -= valorDigitado;
    saldoSpan.textContent = formatarSaldo(saldoReal);
    
    // Limpa input e bloqueia botão
    inputValor.value = "";
    botao.disabled = true;
  });
</script>