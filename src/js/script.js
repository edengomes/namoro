document.getElementById("submitBtn").addEventListener("click", () => {
  // Respostas corretas
  const correctNome = "LAVINNYA";
  const correctSobrenome = "KARLLA";
  const correctData = "2022-05-30";

  // Inputs do usuário
  const nomeInput = document.getElementById("nome").value.trim().toUpperCase();
  const sobrenomeInput = document
    .getElementById("sobrenome")
    .value.trim()
    .toUpperCase();
  const dataInput = document.getElementById("data-namoro").value;

  // Elementos HTML
  const messageElement = document.getElementById("message");
  const nomeField = document.getElementById("nome");
  const sobrenomeField = document.getElementById("sobrenome");
  const dataField = document.getElementById("data-namoro");
  const validationForm = document.getElementById("primaryCard");
  const secondCard = document.getElementById("secondCard");

  // Reseta as classes de erro
  nomeField.classList.remove("border-red-500");
  sobrenomeField.classList.remove("border-red-500");
  dataField.classList.remove("border-red-500");
  messageElement.className = "";

  // Validação
  if (nomeInput !== correctNome) {
    messageElement.textContent = "Esse não é o nome da minha namorada! 😡";
    messageElement.classList.add("text-red-500", "font-bold");
    nomeField.classList.add("border-red-500");
    return; // Para o restante da validação
  }

  if (sobrenomeInput !== correctSobrenome) {
    messageElement.textContent = "Esse não é o sobrenome da minha namorada! 😡";
    messageElement.classList.add("text-red-500", "font-bold");
    sobrenomeField.classList.add("border-red-500");
    return; // Para o restante da validação
  }

  if (dataInput !== correctData) {
    messageElement.textContent = "Essa não é a data do nosso namoro! 😡";
    messageElement.classList.add("text-red-500", "font-bold");
    dataField.classList.add("border-red-500");
    return; // Para o restante da validação
  }

  // Se tudo estiver correto, oculta o formulário original e mostra o segundo card
  validationForm.classList.add("hidden");
  secondCard.classList.remove("hidden");
});

// Validação do segundo card
document.getElementById("secondSubmitBtn").addEventListener("click", () => {
  const correctYears = 2;
  const correctMonths = 7;

  const yearsInput = parseInt(document.getElementById("anos").value.trim());
  const monthsInput = parseInt(document.getElementById("meses").value.trim());
  const secondMessage = document.getElementById("secondMessage");

  // Reseta mensagem anterior
  secondMessage.className = "";

  if (yearsInput !== correctYears) {
    secondMessage.textContent = "Quantidade de anos está errada! 😡";
    secondMessage.classList.add("text-red-500", "font-bold");
    return;
  }

  if (monthsInput !== correctMonths) {
    secondMessage.textContent = "Quantidade de meses está errada! 😡";
    secondMessage.classList.add("text-red-500", "font-bold");
    return;
  }

  // Sucesso: exibe o terceiro card com animações
  secondMessage.textContent = ""; // Limpa mensagem anterior
  document.getElementById("secondCard").classList.add("hidden");
  document.getElementById("thirdCard").classList.remove("hidden");
});
