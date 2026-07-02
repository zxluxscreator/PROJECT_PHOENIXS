/* ==========================================
   PROJECT PHOENIX
   script.js
   Versão 1.0 - Renascimento
========================================== */

const jogador = {

    nome: "Luxs",

    nivel: 1,

    chamas: 0,

    ouro: 0

};

// -----------------------------

function atualizarPerfil(){

    document.getElementById("nivel").textContent = jogador.nivel;

    document.getElementById("xp").textContent = jogador.chamas;

    document.getElementById("ouro").textContent = jogador.ouro;

}

// -----------------------------

function recompensa(chamas, ouro){

    jogador.chamas += chamas;

    jogador.ouro += ouro;

    if(jogador.chamas >= 100){

        jogador.chamas -= 100;

        jogador.nivel++;

        alert("🔥 LEVEL UP!\n\nParabéns!\nVocê evoluiu para o nível " + jogador.nivel);

    }

    atualizarPerfil();

}

// -----------------------------

function abrirRotina(){

    let escolha = prompt(

`📅 ROTINA

1 - ☀️ Tomar Sol
2 - 💧 Beber Água
3 - 🏃 Cardio
4 - 💪 Calistenia
5 - 📚 Estudos

Digite um número:`);

    switch(escolha){

        case "1":
            recompensa(10,5);
            alert("☀️ Missão concluída!\n+10 🔥\n+5 🪙");
        break;

        case "2":
            recompensa(10,5);
            alert("💧 Água concluída!\n+10 🔥\n+5 🪙");
        break;

        case "3":
            recompensa(20,10);
            alert("🏃 Cardio concluído!\n+20 🔥\n+10 🪙");
        break;

        case "4":
            recompensa(30,15);
            alert("💪 Treino concluído!\n+30 🔥\n+15 🪙");
        break;

        case "5":
            recompensa(25,15);
            alert("📚 Estudos concluídos!\n+25 🔥\n+15 🪙");
        break;

    }

}

// -----------------------------

function abrirGlowUp(){

    alert(`😎 GLOW UP

✔ Dormir bem

✔ Alimentação limpa

✔ Skincare

✔ Água

✔ Sol da manhã`);

}

// -----------------------------

function abrirCalistenia(){

    alert(`💪 CALISTENIA

• Flexões

• Agachamentos

• Barra

• Prancha

• Mobilidade`);

}

// -----------------------------

function abrirEstudos(){

    alert(`📚 ESTUDOS

✔ Escola

✔ Python

✔ IF`);

}

// -----------------------------

function abrirTouchline(){

    alert(`⚽ TOUCHLINE

Objetivo:

Se tornar um jogador de alto nível.`);

}

// -----------------------------

function abrirStatus(){

    alert(

`📊 STATUS

👤 ${jogador.nome}

⭐ Nível: ${jogador.nivel}

🔥 Chamas: ${jogador.chamas}/100

🪙 Ouro: ${jogador.ouro}`);

}

// -----------------------------

atualizarPerfil();
