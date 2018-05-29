$(document).ready(function() {

	var urlAtual = window.location.href;
	
	switch(urlAtual){
		case "http://localhost/ProjetoExtensaoMaua/Core/menu.php?rodarBot=true":
			console.log("Iniciando Bot.");
			window.location.href = "cadastrar_paciente.php?rodarBot=true";
			break;
		case "http://localhost/ProjetoExtensaoMaua/Core/cadastrar_paciente.php?rodarBot=true":
			console.log("Bot cadastrando paciente.");
			cadastrar_paciente();
			break;
		default:
			console.log("Bot inativo pois a URL não se enquadra em nenhuma situação.");
			break;
	}
});

function cadastrar_paciente(){
	//CEP EENDEREÇO------------------------------------------------
	var ceps = new Array ("09361-140", "09330-385", "09404-450", "09370-800", "09320-200", "09321-335", "09311-050", "09321-375", "09381-180", "09361-140", "09321-550", "09370-310", "09330-600", "09320-550", "09371-310", "09321-375", "09330-520", "09340-150", "09380-519", "09321-030", "09351-351", "09330-775", "09340-370", "09371-350", "09370-360", "09390-705", "09321-433", "09351-533", "09390-020", "09390-438", "09351-491", "09310-690", "09370-440", "09392-030", "09340-050", "09380-415", "09380-544", "09360-180", "09341-080", "09321-455", "09341-140", "09350-240", "09321-385", "09332-015", "09360-060", "09381-000", "09361-020", "09371-167", "09371-540", "09320-390", "09310-020", "09351-410", "09310-360", "09390-125", "09390-530", "09330-750", "09321-450", "09351-522", "09320-370", "09380-225", "09360-301", "09341-400", "09380-544", "09321-421", "09341-070", "09392-020", "09380-527", "09370-420", "09390-808", "09390-500", "09380-330", "09390-106", "09321-519", "09380-135", "09340-650", "09321-360", "09360-670", "09350-142", "09370-735", "09341-380", "09340-475", "09371-056", "09332-300", "09336-100", "09351-520", "09350-540", "09340-720", "09390-080", "09350-500", "09390-105", "09341-035", "09340-190", "09330-620", "09360-125", "09321-530", "09334-007", "09351-090", "09370-480", "09380-454", "09335-320");
	$("#cd_cep").val(ceps[Math.floor(Math.random() * ceps.length)]);
	$("#cd_cep").click();

	//ETNIA----------------------------------------------------------
	var etinia = Math.floor(Math.random() * 6);
	switch(etinia){
		case 0: 
			$("#ic_raca").val("Branca");
			break;
		case 1: 
			$("#ic_raca").val("Preta");
			break;
		case 2: 
			$("#ic_raca").val("Parda");
			break;
		case 3: 
			$("#ic_raca").val("Amarela");
			break;
		case 4: 
			$("#ic_raca").val("Indígena");
			break;
		case 5: 
			$("#ic_raca").val("Sem informação");
			break;
	}

	//SEXO----------------------------------------------------------
	var sexo = Math.floor((Math.random() * 100) + 1);
	if(sexo % 2 != 0){
		$("#ic_sexo").val("Masculino");
	} else {
		$("#ic_sexo").val("Feminino");
	}

	//DOCUMENTO DO RESPONSÁVEL----------------------------------------------------------
	//return Math.floor(Math.random() * (max - min + 1)) + min; (min and max included)
	$("#cd_documento_responsavel").val(
		(Math.floor(Math.random() * (99 - 10 + 1)) + 10) + "." +
		(Math.floor(Math.random() * (999 - 100 + 1)) + 100) + "." +
		(Math.floor(Math.random() * (999 - 100 + 1)) + 100) + "-" +
		(Math.floor(Math.random() * (1 - 9 + 1)) + 9));

	//NÚMERO DE RESIDÊNCIA E COMPLEMENTO-----------------------------------------------------
	$("#nm_numero_residencia").val((Math.floor(Math.random() * 9999)) + 1);
	if(etinia % 2 == 0){ //O complemento as vezes tem, as vezes pode deixar em branco. O critério vai ser a paridade da variável etinia
		$("#nm_complemento").val((Math.floor(Math.random() * 999)) + 1);
	} else {
		$("#nm_complemento").val("");
	}

	//DATA DE NASCIMENTO----------------------------------------------------------
	var dia = (Math.floor(Math.random() * (28 - 1 + 1)) + 1);
	var mes = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	var ano = (Math.floor(Math.random() * (2016 - 1930 + 1)) + 1930);
	if(dia < 10){
		dia = "0" + dia;
	}
	if(mes < 10){
		mes = "0" + mes;
	}
	$("#dt_nascimento").val(dia + "/" + mes + "/" + ano);

	//JUSTIFICATIVA AUSÊNCIA DE CNS----------------------------------------------------------
	$("#p_troca_cns_justificativa").click();
	var just = Math.floor(Math.random() * 9);
	if(just < 5){
		$("#nm_justificativa").val("Pacientes incapacitados por motivos sociais e/ou culturais");
	} else {
		switch(just){
			case 5:
				$("#nm_justificativa").val("Pacientes acidentados graves");
				break;
			case 6:
				$("#nm_justificativa").val("Pacientes psiquiátricos encontrados em vias públicas");
				break;
			case 7:
				$("#nm_justificativa").val("Pacientes com problemas neurológicos graves ou comatosos");
				break;
			case 8:
				$("#nm_justificativa").val("Doador de Órgãos Falecido");
				break;
		}
	}  

	//GERANDO NOMES----------------------------------------------------------
	var nomesFemininos = new Array("Adélia", "Agnes", "Alice", "Amália", "Amanda", "Ana", "Anabela", "Angelina", "Antonela", "Antônia", "Aurora", "Beatriz", "Berenice", "Betina", "Carolina", "Catarina", "Cecília", "Clara", "Clarisse", "Dora", "Doralice", "Elis", "Elisa", "Estela", "Eunice", "Geórgia", "Gisela", "Guilhermina", "Helena", "Heloísa", "Isabela", "Isadora", "Júlia", "Lara", "Laura", "Leonora", "Lis", "Lívia", "Luísa", "Maitê", "Manuela", "Maria", "Mariana", "Marília", "Mirela", "Nice", "Nicole", "Nina", "Olívia", "Paloma", "Paula", "Pilar", "Sara", "Sofia", "Taís", "Teodora", "Teresa", "Úrsula", "Valentina", "Virgínia");  
	var nomesMasculinos = new Array("Abelardo", "Álvaro", "Antônio", "Armando", "Artur", "Augusto", "Benício", "Benjamim", "Bento", "Bernardo", "Caetano", "Caio", "Cícero", "Conrado", "Dante", "Davi", "Eduardo", "Enrico", "Francisco", "Gaspar", "George", "Guilherme", "Gustavo", "Heitor", "Henrique", "Hugo", "Inácio", "João", "Joaquim", "Júlio", "Lázaro", "Leonardo", "Lorenzo", "Lourenço", "Marco", "Martino", "Maurício", "Max", "Miguel", "Murilo", "Nuno", "Olavo", "Orlando", "Otávio", "Paco", "Patrício", "Pedro", "Ramon", "Raul", "Rômulo", "Saul", "Téo", "Tomás", "Túlio", "Valentim", "Vicente", "Vinícius", "Virgílio", "Vitor", "Vitório");
	var sobrenomes = new Array("Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira", "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes", "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Alves", "Monteiro", "Mendes", "Barros", "Freitas", "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos", "Cardoso");
	if(sexo % 2 != 0){
		var nome = nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)];
	} else {
		var nome = nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];
	}
	var nomeMae = nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];
	var sobre =  sobrenomes[Math.floor(Math.random() * sobrenomes.length)] + " " + sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
	$("#nm_paciente").val(nome + " " + sobre);
	$("#nm_mae").val(nomeMae + " " + sobre); 

	//CIDADE DE NASCIMENTO
	var cidades = new Array("São Paulo - São Paulo","Rio de Janeiro - Rio de Janeiro","Brasília - Distrito Federal","Salvador - Bahia","Fortaleza - Ceará","Belo Horizonte - Minas Gerais","Manaus - Amazonas","Curitiba - Paraná","Recife - Pernambuco","Porto Alegre - Rio Grande do Sul","Goiânia - Goiás","Belém - Pará","Guarulhos - São Paulo","Campinas - São Paulo","São Luís - Maranhão","São Gonçalo - Rio de Janeiro","Maceió - Alagoas","Duque de Caxias - Rio de Janeiro","Natal - Rio Grande do Norte","Campo Grande - Mato Grosso do Sul","Teresina - Piauí","São Bernardo do Campo - São Paulo","João Pessoa - Paraíba","Nova Iguaçu - Rio de Janeiro","Santo André - São Paulo","São José dos Campos - São Paulo","Osasco - São Paulo","Jaboatão dos Guararapes - Pernambuco","Ribeirão Preto - São Paulo","Uberlândia - Minas Gerais","Sorocaba - São Paulo","Contagem - Minas Gerais","Aracaju - Sergipe","Feira de Santana - Bahia","Cuiabá - Mato Grosso","Joinville - Santa Catarina","Juiz de Fora - Minas Gerais","Londrina - Paraná","Aparecida de Goiânia - Goiás","Porto Velho - Rondônia","Ananindeua - Pará","Serra - Espírito Santo","Niterói - Rio de Janeiro","Belford Roxo - Rio de Janeiro","Campos dos Goytacazes - Rio de Janeiro","Vila Velha - Espírito Santo","Florianópolis - Santa Catarina","Caxias do Sul - Rio Grande do Sul","Macapá - Amapá","Mauá - São Paulo","São João de Meriti - Rio de Janeiro","São José do Rio Preto - São Paulo","Santos - São Paulo","Mogi das Cruzes - São Paulo","Betim - Minas Gerais","Diadema - São Paulo");
	$("#nm_municipio_nascimento").val(cidades[Math.floor(Math.random() * cidades.length)]);

	//CONSTANTES----------------------------------------------------------
	$("#nm_pais_nascimento").val("Brasil");
    $("#nm_pais_residencia").val("Brasil");
    $("#nm_responsavel").val($("#nm_paciente").val());
    $("#nm_orgao_emissor").val("ssp");

    //CLICANDO NOS BOTÕES
    setTimeout(function(){
    	$('button:visible:enabled:last').click();
    	setTimeout(function(){
	    	$('button:visible:enabled:last').click(); 
	    	setTimeout(function(){
		    	$('button:visible:enabled:last').click();
		    }, 1000);
	    }, 1000);
    }, 1000);
}