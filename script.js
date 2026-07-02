/*==================================================

PROJECT PHOENIX
SCRIPT.JS

Sistema 01 - CORE

==================================================*/

/*==================================================
CONFIGURAÇÕES
==================================================*/

const SAVE_KEY = "project_phoenix_save";

/*==================================================
PLAYER
==================================================*/

const player = {

    nome: "Luxs",

    titulo: "🌱 Iniciante",

    nivel: 1,

    xp: 0,

    xpMax: 100,

    ouro: 0,

    streak: 0,

    rotina: {},

    conquistas: [],

    configuracoes: {

        tema: "dark"

    }

};

/*==================================================
ELEMENTOS HTML
==================================================*/

const el = {

    hora: document.getElementById("hora"),

    data: document.getElementById("data"),

    mensagem: document.getElementById("mensagem"),

    nome: document.getElementById("nome"),

    titulo: document.getElementById("titulo"),

    nivel: document.getElementById("nivel"),

    ouro: document.getElementById("ouro"),

    streak: document.getElementById("streak"),

    xpTexto: document.getElementById("xpTexto"),

    barraXP: document.getElementById("barraXP"),

    conteudo: document.getElementById("conteudo"),

    objetivo: document.getElementById("objetivo")

};

/*==================================================
RELÓGIO
==================================================*/

function atualizarRelogio(){

    const agora = new Date();

    const hora = agora.toLocaleTimeString("pt-BR",{

        hour:"2-digit",

        minute:"2-digit"

    });

    const data = agora.toLocaleDateString("pt-BR");

    el.hora.textContent = hora;

    el.data.textContent = data;

}

setInterval(atualizarRelogio,1000);

atualizarRelogio();

/*==================================================
SAUDAÇÃO
==================================================*/

function atualizarMensagem(){

    const h = new Date().getHours();

    if(h < 12){

        el.mensagem.textContent = "🌅 Bom dia! Continue Renascendo.";

    }

    else if(h < 18){

        el.mensagem.textContent = "☀️ Boa tarde! Continue Evoluindo.";

    }

    else{

        el.mensagem.textContent = "🌙 Boa noite! Você ficou mais forte hoje.";

    }

}

atualizarMensagem();

/*==================================================
HUD
==================================================*/

function atualizarHUD(){

    el.nome.textContent = player.nome;

    el.titulo.textContent = player.titulo;

    el.nivel.textContent = player.nivel;

    el.ouro.textContent = player.ouro;

    el.streak.textContent = player.streak + " dias";

    el.xpTexto.textContent = `${player.xp} / ${player.xpMax}`;

    const porcentagem = (player.xp / player.xpMax) * 100;

    el.barraXP.style.width = porcentagem + "%";

}

atualizarHUD();

/*==================================================
XP
==================================================*/

function ganharXP(valor){

    player.xp += valor;

    while(player.xp >= player.xpMax){

        player.xp -= player.xpMax;

        player.nivel++;

        player.ouro += 100;

    }

    atualizarHUD();

}

/*==================================================
OURO
==================================================*/

function ganharOuro(valor){

    player.ouro += valor;

    atualizarHUD();

}

/*==================================================
MENU
==================================================*/

function abrirPagina(nome){

    el.conteudo.innerHTML = `
        <h2>${nome}</h2>
        <p>Em desenvolvimento...</p>
    `;

}

/*==================================================
INÍCIO
==================================================*/

abrirPagina("🏠 Dashboard");
/*==================================================

SISTEMA 02
SAVE • RANKS • NOTIFICAÇÕES

==================================================*/

/*==================================================
RANKS
==================================================*/

const ranks=[

    {nivel:1,nome:"🌱 Iniciante"},

    {nivel:5,nome:"🔥 Renascido"},

    {nivel:10,nome:"⚔ Guerreiro"},

    {nivel:20,nome:"💎 Elite"},

    {nivel:35,nome:"👑 Lendário"},

    {nivel:50,nome:"🐦 Phoenix Supremo"}

];

function atualizarRank(){

    let atual=ranks[0];

    for(const rank of ranks){

        if(player.nivel>=rank.nivel){

            atual=rank;

        }

    }

    player.titulo=atual.nome;

}

/*==================================================
FRASES MOTIVACIONAIS
==================================================*/

const frases=[

"🔥 A disciplina vence a motivação.",

"💎 Seu futuro está sendo criado agora.",

"⚡ Continue mesmo sem vontade.",

"🏆 Cada dia conta.",

"🌅 Renasça hoje.",

"🚀 Continue Evoluindo.",

"👑 A consistência cria campeões.",

"💙 Um passo por dia já muda sua vida.",

"⚔ Seja melhor que ontem.",

"🔥 Nunca pare de evoluir."

];

function atualizarFrase(){

    const i=Math.floor(

        Math.random()*frases.length

    );

    el.objetivo.textContent=frases[i];

}

atualizarFrase();

/*==================================================
SALVAR
==================================================*/

function salvar(){

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(player)

    );

}

/*==================================================
CARREGAR
==================================================*/

function carregar(){

    const dados=localStorage.getItem(SAVE_KEY);

    if(!dados){

        return;

    }

    const save=JSON.parse(dados);

    Object.assign(player,save);

}

/*==================================================
RESET
==================================================*/

function resetar(){

    if(

        !confirm(

        "Apagar todo o progresso?"

        )

    ){

        return;

    }

    localStorage.removeItem(

        SAVE_KEY

    );

    location.reload();

}

/*==================================================
EXPORTAR SAVE
==================================================*/

function exportarSave(){

    const texto=JSON.stringify(

        player,

        null,

        4

    );

    navigator.clipboard.writeText(

        texto

    );

    notificar(

        "💾 Save copiado!"

    );

}

/*==================================================
IMPORTAR SAVE
==================================================*/

function importarSave(){

    const texto=prompt(

        "Cole aqui seu Save"

    );

    if(!texto){

        return;

    }

    try{

        const save=JSON.parse(texto);

        Object.assign(

            player,

            save

        );

        atualizarHUD();

        salvar();

        notificar(

            "✅ Save importado!"

        );

    }

    catch{

        alert(

            "Save inválido."

        );

    }

}

/*==================================================
NOTIFICAÇÕES
==================================================*/

function notificar(texto){

    const aviso=document.createElement("div");

    aviso.className="toast";

    aviso.innerHTML=texto;

    document.body.appendChild(aviso);

    setTimeout(()=>{

        aviso.classList.add(

            "mostrar"

        );

    },100);

    setTimeout(()=>{

        aviso.classList.remove(

            "mostrar"

        );

    },2600);

    setTimeout(()=>{

        aviso.remove();

    },3200);

}

/*==================================================
MELHORANDO XP
==================================================*/

const ganharXPOriginal=ganharXP;

ganharXP=function(valor){

    ganharXPOriginal(valor);

    atualizarRank();

    atualizarHUD();

    salvar();

    notificar(

        "⭐ +"+valor+" XP"

    );

}

/*==================================================
MELHORANDO OURO
==================================================*/

const ganharOuroOriginal=ganharOuro;

ganharOuro=function(valor){

    ganharOuroOriginal(valor);

    salvar();

    notificar(

        "🪙 +"+valor+" Ouro"

    );

}

/*==================================================
AUTO SAVE

==================================================*/

setInterval(

    salvar,

    10000

);

/*==================================================
CARREGAR TUDO

==================================================*/

carregar();

atualizarRank();

atualizarHUD();

atualizarFrase();
/*==================================================

SISTEMA 03
ROTINA RPG

==================================================*/

const rotina=[

{
id:"sol",
nome:"☀️ Tomar Sol",
hora:"08:00",
tempo:"20 min",
xp:20,
ouro:10,
descricao:"Tomar sol da manhã."
},

{
id:"agua",
nome:"💧 Beber Água",
hora:"Dia Todo",
tempo:"3L",
xp:15,
ouro:5,
descricao:"Meta diária de água."
},

{
id:"cardio",
nome:"🏃 Cardio",
hora:"08:30",
tempo:"25 min",
xp:30,
ouro:20,
descricao:"Cardio intenso."
},

{
id:"calistenia",
nome:"💪 Calistenia",
hora:"16:00",
tempo:"60 min",
xp:60,
ouro:40,
descricao:"Treino principal."
},

{
id:"skincare",
nome:"😎 Skincare",
hora:"07:30",
tempo:"10 min",
xp:10,
ouro:5,
descricao:"Cuidados com a pele."
},

{
id:"massagem",
nome:"💆 Massagem Facial",
hora:"21:00",
tempo:"10 min",
xp:10,
ouro:5,
descricao:"Relaxamento facial."
},

{
id:"pescoco",
nome:"🦴 Exercícios Pescoço",
hora:"18:00",
tempo:"10 min",
xp:20,
ouro:10,
descricao:"Fortalecimento."
},

{
id:"estudo",
nome:"📚 Estudos",
hora:"19:00",
tempo:"2h",
xp:50,
ouro:30,
descricao:"Python + Escola."
},

{
id:"touchline",
nome:"⚽ Touchline",
hora:"20:30",
tempo:"1h",
xp:35,
ouro:20,
descricao:"Treino Roblox."
},

{
id:"sono",
nome:"😴 Dormir Cedo",
hora:"22:30",
tempo:"8h",
xp:40,
ouro:20,
descricao:"Dormir cedo."
}

];

/*==================================================
CRIAR PÁGINA
==================================================*/

function abrirRotina(){

let html=`

<h2>📅 Rotina Diária</h2>

<div class="listaRotina">

`;

for(const tarefa of rotina){

const feita=player.rotina[tarefa.id];

html+=`

<div class="card">

<h3>${tarefa.nome}</h3>

<p>${tarefa.descricao}</p>

<p><b>⏰</b> ${tarefa.hora}</p>

<p><b>⌛</b> ${tarefa.tempo}</p>

<p>⭐ ${tarefa.xp} XP</p>

<p>🪙 ${tarefa.ouro} Ouro</p>

<button
class="btn"
onclick="concluirTarefa('${tarefa.id}')"
${feita?"disabled":""}
>

${feita?"✅ Concluído":"Concluir"}

</button>

</div>

`;

}

html+="</div>";

el.conteudo.innerHTML=html;

}

/*==================================================
CONCLUIR TAREFA
==================================================*/

function concluirTarefa(id){

const tarefa=rotina.find(

t=>t.id===id

);

if(!tarefa)return;

if(player.rotina[id])return;

player.rotina[id]=true;

ganharXP(

tarefa.xp

);

ganharOuro(

tarefa.ouro

);

salvar();

abrirRotina();

}

/*==================================================
PROGRESSO
==================================================*/

function progressoRotina(){

const total=rotina.length;

let feitas=0;

for(const tarefa of rotina){

if(player.rotina[tarefa.id]){

feitas++;

}

}

return{

total,

feitas,

porcentagem:

Math.floor(

feitas/total*100

)

};

}

/*==================================================
RESET DIÁRIO
==================================================*/

function resetRotina(){

player.rotina={};

salvar();

}

/*==================================================
MENU
==================================================*/

const abrirPaginaOriginal=abrirPagina;

abrirPagina=function(nome){

if(nome==="rotina"){

abrirRotina();

return;

}

abrirPaginaOriginal(nome);

};
/*==================================================

SISTEMA 04
MISSÕES DIÁRIAS

==================================================*/

const recompensas={

    completarDia:200,

    ouroDia:150,

    bonusStreak:50

};

/*==================================================
BARRA DE PROGRESSO
==================================================*/

function atualizarProgresso(){

    const info=progressoRotina();

    const html=`

    <div class="card">

        <h3>📊 Progresso Diário</h3>

        <p>${info.feitas}/${info.total} tarefas</p>

        <div class="barra">

            <div id="barraDiaria"

            style="width:${info.porcentagem}%">

            </div>

        </div>

        <p>${info.porcentagem}% Completo</p>

    </div>

    `;

    return html;

}

/*==================================================
MISSÕES
==================================================*/

const missoes=[

{

nome:"Complete 3 tarefas",

meta:3,

xp:50,

ouro:25

},

{

nome:"Complete 5 tarefas",

meta:5,

xp:80,

ouro:40

},

{

nome:"Complete 8 tarefas",

meta:8,

xp:150,

ouro:70

},

{

nome:"Complete todas",

meta:10,

xp:250,

ouro:150

}

];

/*==================================================
VERIFICAR MISSÕES
==================================================*/

function verificarMissoes(){

    const feitas=progressoRotina().feitas;

    for(const missao of missoes){

        const id="missao_"+missao.meta;

        if(

            feitas>=missao.meta &&

            !player.conquistas.includes(id)

        ){

            player.conquistas.push(id);

            ganharXP(missao.xp);

            ganharOuro(missao.ouro);

            notificar(

                "🏆 Missão concluída: "+missao.nome

            );

        }

    }

}

/*==================================================
100%
==================================================*/

function verificarDiaCompleto(){

    const info=progressoRotina();

    if(info.feitas!==info.total){

        return;

    }

    if(player.diaCompleto){

        return;

    }

    player.diaCompleto=true;

    player.streak++;

    ganharXP(

        recompensas.completarDia

    );

    ganharOuro(

        recompensas.ouroDia

    );

    notificar(

        "🔥 Dia Completo!"

    );

}

/*==================================================
MELHORAR CONCLUIR
==================================================*/

const concluirOriginal=concluirTarefa;

concluirTarefa=function(id){

    concluirOriginal(id);

    verificarMissoes();

    verificarDiaCompleto();

    salvar();

}

/*==================================================
ABRIR ROTINA
==================================================*/

const abrirRotinaOriginal=abrirRotina;

abrirRotina=function(){

    abrirRotinaOriginal();

    el.conteudo.innerHTML+=

    atualizarProgresso();

}
/*==================================================

SISTEMA 05
GLOW UP

==================================================*/

const glowUp={

    agua:0,

    sono:0,

    sol:0,

    skincare:0,

    cardio:0,

    alimentacao:0,

    pescoco:0,

    massagem:0

};

/*==================================================
STATUS GLOW UP
==================================================*/

function calcularGlow(){

    let total=0;

    let itens=0;

    for(const chave in glowUp){

        total+=glowUp[chave];

        itens++;

    }

    return Math.floor(total/itens);

}

/*==================================================
NÍVEL DE BELEZA
==================================================*/

function nivelGlow(){

    const g=calcularGlow();

    if(g<20)return "🌱 Iniciante";

    if(g<40)return "🙂 Evoluindo";

    if(g<60)return "😎 Bonito";

    if(g<80)return "✨ Destaque";

    return "👑 Elite";

}

/*==================================================
GANHAR PONTOS
==================================================*/

function ganharGlow(tipo,valor){

    if(glowUp[tipo]===undefined){

        return;

    }

    glowUp[tipo]+=valor;

    if(glowUp[tipo]>100){

        glowUp[tipo]=100;

    }

    ganharXP(10);

    salvar();

}

/*==================================================
TELA
==================================================*/

function abrirGlowUp(){

    let html=`

    <h2>😎 Glow Up</h2>

    <div class="card">

        <h3>${nivelGlow()}</h3>

        <p>Progresso Geral: ${calcularGlow()}%</p>

    </div>

    `;

    for(const item in glowUp){

        html+=`

        <div class="card">

            <h3>${item}</h3>

            <p>${glowUp[item]}%</p>

            <button class="btn"

            onclick="ganharGlow('${item}',5)">

            +5

            </button>

        </div>

        `;

    }

    el.conteudo.innerHTML=html;

}

/*==================================================
MENU
==================================================*/

const abrirPaginaSistema5=abrirPagina;

abrirPagina=function(nome){

    if(nome==="glowup"){

        abrirGlowUp();

        return;

    }

    abrirPaginaSistema5(nome);

       }
