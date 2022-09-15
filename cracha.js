//const id = '1nzSmzAulpOGV63l2LoLvXPCWVfgkVAOvoVWUZYCzNk4'; //Planilha banco de dados
//const ss = SpreadsheetApp.openById(id);

var btnSalvar = document.querySelector("#salvar");

btnSalvar.addEventListener("click", function(event){
    event.preventDefault();
    
    var empresaR = document.querySelector("#empresa").value;
    var proximidadeR = document.querySelector("#proximidade").value;
    var barrasR = document.querySelector("#barras").value;
    var perfuradoR = document.querySelector("#perfurado").value;
    var presilhaR = document.querySelector("#presilha").value;
    var protetorR = document.querySelector("#protetor").value;
    var cordãoR = document.querySelector("#cordão").value;
    var valorCrachaR = document.querySelector("#valorCracha").value;
    var valorPresilhaR = document.querySelector("#valorPresilha").value;
    var valorProtetorR = document.querySelector("#valorProtetor").value;
    var valorCordãoR = document.querySelector("#valorCordão").value;

    document.getElementById("empresa").value = "";
    document.getElementById("proximidade").selectedIndex = 0;
    document.getElementById("barras").selectedIndex = 0;
    document.getElementById("perfurado").selectedIndex = 0;
    document.getElementById("presilha").selectedIndex = 0;
    document.getElementById("protetor").selectedIndex = 0;
    document.getElementById("cordão").selectedIndex = 0;
    document.getElementById("valorCracha").value = "";
    document.getElementById("valorPresilha").value = "";
    document.getElementById("valorProtetor").value = "";
    document.getElementById("valorCordão").value = "";

    var tabela = document.querySelector("#tabelaCracha").querySelector("tbody");
    var linhaCracha = document.createElement("tr");
    var empresa = document.createElement("td");
    var proximidade = document.createElement("td");
    var barras = document.createElement("td");
    var perfurado = document.createElement("td");
    var presilha = document.createElement("td");
    var protetor = document.createElement("td");
    var cordão = document.createElement("td");
    var valorCracha = document.createElement("td");
    var valorPresilha = document.createElement("td");
    var valorProtetor = document.createElement("td");
    var valorCordão = document.createElement("td");

    empresa.textContent = empresaR;
    proximidade.textContent = proximidadeR;
    barras.textContent = barrasR;
    perfurado.textContent = perfuradoR;
    presilha.textContent = presilhaR;
    protetor.textContent = protetorR;
    cordão.textContent = cordãoR;
    valorCracha.textContent = valorCrachaR;
    valorPresilha.textContent = valorPresilhaR;
    valorProtetor.textContent = valorProtetorR;
    valorCordão.textContent = valorCordãoR;



    
    linhaCracha.appendChild(empresa);
    linhaCracha.appendChild(proximidade);
    linhaCracha.appendChild(barras);
    linhaCracha.appendChild(perfurado);
    linhaCracha.appendChild(presilha);
    linhaCracha.appendChild(protetor);
    linhaCracha.appendChild(cordão);
    linhaCracha.appendChild(valorCracha);
    linhaCracha.appendChild(valorPresilha);
    linhaCracha.appendChild(valorProtetor);
    linhaCracha.appendChild(valorCordão);
    tabela.appendChild(linhaCracha);

    //console.log("Empresa: ", proximidade);
})

function salvarCracha(){

  }
  
  function getCrachas(search){
    
    var listCracha = ss.getSheetByName("Crachás").getRange(2,1, ss.getSheetByName("Crachás").getLastRow()).getValues();
    
    var filter = listCracha.filter(function(r){
      var empresaFilter = r[1];
        
      if(empresaFilter.includes(search)){
          return r;
      }
    });
      Logger.log(filter);
      //return JSON.stringify(filte);
  }

  function abreTab(event, idTab) {
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++){
      conteudos[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName("tab-button");        
    for (var i = 0; i < tabs.length; i++){
      tabs[i].className = tabs[i].className.replace("ativo", "");
    }

    document.getElementById(idTab).style.display = 'block';
    event.currentTarget.className += " ativo";
  }