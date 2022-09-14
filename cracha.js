var btnSalvar = document.querySelector("#salvar");

btnSalvar.addEventListener("click", function(event){
    event.preventDefault();
    
    var empresa = document.getElementById("empresa").value;
    var proximidade = document.getElementById("proximidade").value;
    var barras = document.getElementById("barras").value;
    var perfurado = document.getElementById("perfurado").value;
    var presilha = document.getElementById("presilha").value;
    var protetor = document.getElementById("protetor").value;
    var cordão = document.getElementById("cordão").value;
    var valorCracha = document.getElementById("valorCracha").value;
    var valorPresilha = document.getElementById("valorPresilha").value;
    var valorProtetor = document.getElementById("valorProtetor").value;
    var valorCordão = document.getElementById("valorCordão").value;

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

    var linhaCracha = document.createElement("tr");
    var empresa = document.createElement("td");
    var proximidade = document.createElement("td");
    var barras = document.createElement("td");
    var perfurado = document.createElement("td");
    var presilha = document.getElementById("presilha").value;
    var protetor = document.getElementById("protetor").value;
    var cordão = document.getElementById("cordão").value;
    var valorCracha = document.getElementById("valorCracha").value;
    var valorPresilha = document.getElementById("valorPresilha").value;
    var valorProtetor = document.getElementById("valorProtetor").value;
    var valorCordão = document.getElementById("valorCordão").value;

    col1.textContent = "Apple";
    row.appendChild(col1);
    tbody.appendChild(row);

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