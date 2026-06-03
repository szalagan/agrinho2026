function responder(resposta) {
    const resultado = document.getElementById("resultado");

    if (resposta === "certo") {
        resultado.innerHTML = "✅ Parabéns! Você acertou!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Resposta incorreta. Tente novamente.";
        resultado.style.color = "red";
    }
}