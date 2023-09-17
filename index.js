let vagas= ""
let vaga1= ""
let vaga2= ""
let vaga3= "" 
let opcoes = ""


function inscricao() {
  vagas=prompt ("Qual vaga você deseja inscrever o candidato?\n1-"+ vaga1 + "\n2-" + vaga2 + "\n3-" + vaga3)
  switch (vagas) {
    case "1":
      if (vaga1!=="") {
      alert("Você inscreveu o candidato na vaga de " + vaga1)
    } else {
      alert("A vaga está vazia.")
    }
      break;
      case "2":
        if (vaga2!=="") {
          alert("Você inscreveu o candidato na vaga de " + vaga2)
        } else {
          alert("A vaga está vazia.")
        }
        break;
        case "3":
          if (vaga3!=="") {
            alert("Você inscreveu o candidato na vaga de " + vaga3)
          } else {
            alert("A vaga está vazia.")
          }
          break;
          default:
            alert("Opção inválida.");
        }
}

function excluirVaga() {
    let vagaExcluir = prompt("Qual vaga você deseja excluir?\n1-" + vaga1 + "\n2-" + vaga2 + "\n3-" + vaga3);
    switch (vagaExcluir) {
      case "1":
        if (vaga1 !== "") {
          alert("A vaga de " + vaga1 + " foi excluída.");
          vaga1 = ""; // Exclui a vaga
        } else {
          alert("A vaga não existe ou já foi excluída.");
        }
        break;
      case "2":
        if (vaga2 !== "") {
          alert("A vaga de " + vaga2 + " foi excluída.");
          vaga2 = ""; // Exclui a vaga
        } else {
          alert("A vaga não existe ou já foi excluída.");
        }
        break;
      case "3":
        if (vaga3 !== "") {
          alert("A vaga de " + vaga3 + " foi excluída.");
          vaga3 = ""; // Exclui a vaga
        } else {
          alert("A vaga não existe ou já foi excluída.");
        }
        break;
      default:
        alert("Opção inválida para exclusão de vaga.");
    }
  }

function criarVaga (){
let criarVaga=prompt("Qual vaga você deseja adicionar? \n1 \n2 \n3")
switch (criarVaga) {
  case "1":
    if (vaga1==""){
      vaga1=prompt("Qual vaga você deseja criar?")
      alert ("A vaga foi criada")
    }else {
      alert ("A vaga já existe")
    }
    break;
    case "2":
    if (vaga2==""){
      vaga2=prompt("Qual vaga você deseja criar?")
      alert ("A vaga foi criada")
    }else {
      alert ("A vaga já existe")
    }
    break;
    case "3":
    if (vaga3==""){
      vaga3=prompt("Qual vaga você deseja criar?")
      alert ("A vaga foi criada")
    }else {
      alert ("A vaga já existe")
    }
    break;
    default: alert (
      "Opção inválida. Por favor, escolha uma opção válida."
    )
}

  }
do {
opcoes=prompt 
("Qual opção você deseja?\n"+
"1-Listar vagas disponiveis\n"+
"2-Criar uma nova vaga\n"+
"3-Vizualizar vagas disponiveis\n"+
"4-Inscrever um candidato em uma vaga\n"+
"5-Excluir uma vaga\n"+
"6-Sair"
)
switch (opcoes) {
  case "1":
    alert("Lista de vagas disponiveis:\n " + vaga1 + "\n " + vaga2 + "\n " + vaga3 )
    break;
  case "2":
    criarVaga ()
    break;
  case "3":
    alert("Vagas disponiveis:\n1-" + vaga1 + "\n2-" + vaga2 + "\n3-" + vaga3 + "\n")   
    break;
  case "4":
    inscricao()
    break;
  case "5":
   excluirVaga()
    break;
  case "6":
    alert("Saindo...")
    break;
    default: alert ("Opção inválida. Por favor, escolha uma opção válida.")
}
} while (opcoes!=="6")