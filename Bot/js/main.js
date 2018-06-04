$(document).ready(function() {

	var urlPath = window.location.pathname; //	->	/ProjetoExtensaoMaua/Core/cadastrar_triagem.php
	var urlParameters = window.location.search; //	->	?cd_paciente=113&rodarBot=true
	
	if(urlParameters.includes("rodarBot=true")){
		console.log("BOT EM EXECUÇÃO.");
		switch(urlPath){
			case "/ProjetoExtensaoMaua/Core/menu.php":
				window.location.href = "cadastrar_paciente.php?rodarBot=true";				
				break;
			
			case "/ProjetoExtensaoMaua/Core/cadastrar_paciente.php":
				cadastrar_paciente();
				break;

			case "/ProjetoExtensaoMaua/Core/php/actions/action_cadastrar_paciente.php":
				window.location.href = "../../visualizar_espera.php?rodarBot=true";
				break;		
			
			case "/ProjetoExtensaoMaua/Core/visualizar_espera.php":
				verificar_lista_espera();
				break;
			case "/ProjetoExtensaoMaua/Core/cadastrar_triagem.php":
				cadastrar_triagem();
				break;

			case "/ProjetoExtensaoMaua/Core/php/actions/action_cadastrar_triagem.php":
				window.location.href = "../../pesquisar_triagem.php?rodarBot=true";
				break;

			case "/ProjetoExtensaoMaua/Core/pesquisar_triagem.php":
				verificar_triagens_abertas();
				break;

			case "/ProjetoExtensaoMaua/Core/visualizar_triagem.php":
				verificar_btn_diagnostico();
				break;

			case "/ProjetoExtensaoMaua/Core/cadastrar_diagnostico.php":
				cadastrar_diagnostico();
				break;							
		}
	} else {
		console.log("A extensão PumasBotExtension está ligada. O Bot iniciará o trabalho em 5 segundos.");	
		setTimeout(function(){
			window.location.href = "/ProjetoExtensaoMaua/Core/menu.php?rodarBot=true";
		}, 5000);		
	}
});

function cadastrar_paciente(){
	//CEP EENDEREÇO------------------------------------------------
	var ceps = new Array ("09361-140", "09330-385", "09404-450", "09370-800", "09320-200", "09321-335", "09311-050", "09321-375", "09381-180", "09361-140", "09321-550", "09370-310", "09330-600", "09320-550", "09371-310", "09321-375", "09330-520", "09340-150", "09380-519", "09321-030", "09351-351", "09330-775", "09340-370", "09371-350", "09370-360", "09390-705", "09321-433", "09351-533", "09390-020", "09390-438", "09351-491", "09310-690", "09370-440", "09392-030", "09340-050", "09380-415", "09380-544", "09360-180", "09341-080", "09321-455", "09341-140", "09350-240", "09321-385", "09332-015", "09360-060", "09381-000", "09361-020", "09371-167", "09371-540", "09320-390", "09310-020", "09351-410", "09310-360", "09390-125", "09390-530", "09330-750", "09321-450", "09351-522", "09320-370", "09380-225", "09360-301", "09341-400", "09380-544", "09321-421", "09341-070", "09392-020", "09380-527", "09370-420", "09390-808", "09390-500", "09380-330", "09390-106", "09321-519", "09380-135", "09340-650", "09321-360", "09360-670", "09350-142", "09370-735", "09341-380", "09340-475", "09371-056", "09332-300", "09336-100", "09351-520", "09350-540", "09340-720", "09390-080", "09350-500", "09390-105", "09341-035", "09340-190", "09330-620", "09360-125", "09321-530", "09334-007", "09351-090", "09370-480", "09380-454", "09335-320");
	$("#cd_cep").val(ceps[numAleatorio(0, ceps.length - 1)]);
	$("#cd_cep").click();

	//ETNIA----------------------------------------------------------
	var etinia = numAleatorio(0, 5);
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
	var sexo = numAleatorio(0, 9);
	if(sexo % 2 != 0){
		$("#ic_sexo").val("Masculino");
	} else {
		$("#ic_sexo").val("Feminino");
	}

	//DOCUMENTO DO RESPONSÁVEL----------------------------------------------------------
	$("#cd_documento_responsavel").val(
		(numAleatorio(10, 99)) + "." +
		(numAleatorio(100, 999)) + "." +
		(numAleatorio(100, 999)) + "-" +
		(numAleatorio(0, 9)));

	//NÚMERO DE RESIDÊNCIA E COMPLEMENTO-----------------------------------------------------
	$("#nm_numero_residencia").val(numAleatorio(1, 1000));
	if(numAleatorio(0, 9) % 2 == 0){ //O complemento as vezes tem, as vezes pode deixar em branco.
		$("#nm_complemento").val(numAleatorio(10, 999));
	} else {
		$("#nm_complemento").val("");
	}

	//DATA DE NASCIMENTO----------------------------------------------------------
	var dia = (numAleatorio(1, 28));
	var mes = (numAleatorio(1, 12));
	var ano = (numAleatorio(1930, 2016));
	if(dia < 10){
		dia = "0" + dia;
	}
	if(mes < 10){
		mes = "0" + mes;
	}
	$("#dt_nascimento").val(dia + "/" + mes + "/" + ano);

	//JUSTIFICATIVA AUSÊNCIA DE CNS----------------------------------------------------------
	$("#p_troca_cns_justificativa").click();
	var just = numAleatorio(0, 8);
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
		var nome = nomesMasculinos[numAleatorio(0, nomesMasculinos.length - 1)];
	} else {
		var nome = nomesFemininos[numAleatorio(0, nomesFemininos.length - 1)];
	}
	var nomeMae = nomesFemininos[numAleatorio(0, nomesFemininos.length - 1)];
	var sobre =  sobrenomes[numAleatorio(0, sobrenomes.length - 1)] + " " + sobrenomes[numAleatorio(0, sobrenomes.length - 1)];
	$("#nm_paciente").val(nome + " " + sobre);
	$("#nm_mae").val(nomeMae + " " + sobre); 

	//CIDADE DE NASCIMENTO
	var cidades = new Array("São Paulo - São Paulo","Rio de Janeiro - Rio de Janeiro","Brasília - Distrito Federal","Salvador - Bahia","Fortaleza - Ceará","Belo Horizonte - Minas Gerais","Manaus - Amazonas","Curitiba - Paraná","Recife - Pernambuco","Porto Alegre - Rio Grande do Sul","Goiânia - Goiás","Belém - Pará","Guarulhos - São Paulo","Campinas - São Paulo","São Luís - Maranhão","São Gonçalo - Rio de Janeiro","Maceió - Alagoas","Duque de Caxias - Rio de Janeiro","Natal - Rio Grande do Norte","Campo Grande - Mato Grosso do Sul","Teresina - Piauí","São Bernardo do Campo - São Paulo","João Pessoa - Paraíba","Nova Iguaçu - Rio de Janeiro","Santo André - São Paulo","São José dos Campos - São Paulo","Osasco - São Paulo","Jaboatão dos Guararapes - Pernambuco","Ribeirão Preto - São Paulo","Uberlândia - Minas Gerais","Sorocaba - São Paulo","Contagem - Minas Gerais","Aracaju - Sergipe","Feira de Santana - Bahia","Cuiabá - Mato Grosso","Joinville - Santa Catarina","Juiz de Fora - Minas Gerais","Londrina - Paraná","Aparecida de Goiânia - Goiás","Porto Velho - Rondônia","Ananindeua - Pará","Serra - Espírito Santo","Niterói - Rio de Janeiro","Belford Roxo - Rio de Janeiro","Campos dos Goytacazes - Rio de Janeiro","Vila Velha - Espírito Santo","Florianópolis - Santa Catarina","Caxias do Sul - Rio Grande do Sul","Macapá - Amapá","Mauá - São Paulo","São João de Meriti - Rio de Janeiro","São José do Rio Preto - São Paulo","Santos - São Paulo","Mogi das Cruzes - São Paulo","Betim - Minas Gerais","Diadema - São Paulo");
	$("#nm_municipio_nascimento").val(cidades[numAleatorio(0, cidades.length - 1)]);

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

function cadastrar_triagem(){
	var queixas = new Array("L83 Doenças ou síndromes da coluna cervical", "L14 Sinais/sintomas da coxa/perna", "B26 Medo de câncer no sangue/linfático", "P75 Somatização", "X85 Doença do colo NE", "S81 Hemangioma/linfangioma", "A23 Fator de risco NE", "F85 Ulcera da córnea", "R88 Outra lesão respiratória", "K24 Medo de doença cardíaca", "N27 Medo de outras doenças neurológicas", "U85 Malformação congênita do aparelho urinário", "L01 Sinais/sintomas do pescoço", "K99 Outras doenças do aparelho circulatório", "L82 Malformações congênitas do aparelhomúsculo-esquelético", "X79 Neoplasia benigna da mama feminina/", "Z16 Problema de relacionamento com criança", "X27 Medo de outra doença genital/mama", "H04 Secreção no ouvido", "P86 Anorexia nervosa, bulimia", "R92 Neoplasia respiratória NE", "N94 Neurite/ Nevrite/neuropatia periférica", "L02 Sinais/sintomas da região dorsal", "K70 Doença infecciosa do aparelho circulatório", "Y05 Sinais/sintomas do escroto/ testículos, outros", "Y71 Gonorréia masculina", "D12 Obstipação", "L77 Entorses e distensões do tornozelo", "W96 Outras complicações do puerpério", "S78 Lipoma", "S86 Dermatite seborréica", "B04 Sinais/sintomas sangue", "X15 Sinais/sintomas da vagina", "X88 Doença fibrocística da mama", "T82 Obesidade", "Y81 Fimose/prepúcio redundante", "W99 Outros problemas da gravidez/parto", "R06 Hemorragia nasal/epistaxe", "X23 Medo de doença de transmissão sexual", "P71 Outras psicoses orgânicas NE", "L10 Sinais/sintomas dos cotovelos", "Y75 Balanite/Balanopostite", "S88 Dermatite de contato/alérgica", "T70 Infecção endócrina", "S92 Doença das glândulas sudoríparas", "W81 Toxemia gravídica/ DHEG", "H01 Dor de ouvidos", "X05 Menstruação escassa/ausente", "U28 Limitação funcional/incapacidade", "P08 Diminuição da satisfação sexual", "U05 Outros problemas com a micção", "T83 Excesso de peso", "X11 Sinais/sintomas da menopausa/ climatério");
	var cuidado = new Array("nenhuma", "nenhuma", "nenhuma", "gest", "has", "om", "ano", "sm", "ad", "vio");
	var condicoes = new Array("nenhuma", "asma", "dpoc", "ice", "onco", "outros");	

	$("#ds_queixa").val(queixas[numAleatorio(0, queixas.length - 1)]);
	$("#vl_pressao_max").val(numAleatorio(10, 13));
	$("#vl_pressao_min").val(numAleatorio(6, 9));
	$("#vl_pulso").val(numAleatorio(70, 115));
	$("#vl_temperatura").val(numAleatorio(36, 40));
	$("#vl_respiracao").val(numAleatorio(25, 45));
	$("#vl_saturacao").val(numAleatorio(95, 105));
	$("#vl_glicemia").val(numAleatorio(95, 105));
	$("#vl_nivel_consciencia").val(numAleatorio(12, 15));
	$("#vl_escala_dor").val(numAleatorio(1, 5));
	$("#vl_classificacao_risco").val(numAleatorio(1, 5));
	$("#ds_linha_cuidado").val(cuidado[numAleatorio(0, cuidado.length - 1)]);
	$("#ds_outras_condicoes").val(condicoes[numAleatorio(0, condicoes.length - 1)]);

	$("#btn_cadastrar_triagem").click();
}

function cadastrar_diagnostico(){
	var cid = new Array("Q16.3 - Malformação Congênita Dos Ossículos do Ouvido", "M13 - Outras Artrites", "H93 - Outros Transtornos do Ouvido Não Classificados em Outra Parte", "T21.4 - Corrosão do Tronco, Grau Não Especificado", "R00.8 - Outras Anormalidades e as Não Especificadas do Batimento Cardíaco", "T35.7 - Geladura, de Grau Não Especificado, de Localização Não Especificada", "B37.4 - Candidíase de Outras Localizações Urogenitais", "D82.0 - Síndrome de Wiskott-Aldrich", "T20.3 - Queimadura de Terceiro Grau da Cabeça e do Pescoço", "B37.7 - Septicemia Por Candida", "C31.3 - Neoplasia Maligna do Seio Esfenoidal", "M18.9 - Artrose Não Especificada da Primeira Articulação Carpometacarpiana", "X00.2 - Exposição a Fogo Não-controlado em um Edifício ou Outro Tipo de Construção - Escolas, Outras Instituições e Áreas de Administração Pública", "W24.1 - Contato Com Elevadores e Instrumentos de Transmissão, Não Classificados em Outra Parte - Habitação Coletiva", "L56.8 - Outras Alterações Agudas Especificadas da Pele Devidas a Radiação Ultravioleta", "A43.0 - Nocardiose Pulmonar", "L87.9 - Transtorno da Eliminação Transepidérmica, Não Especificado", "O15.1 - Eclâmpsia no Trabalho de Parto", "M84.1 - Ausência de Consolidação da Fratura (pseudo-artrose", "Q77.0 - Acondrogenesia", "K42.0 - Hérnia Umbilical Com Obstrução, Sem Gangrena", "C34.2 - Neoplasia Maligna do Lobo Médio, Brônquio ou Pulmão", "C11.8 - Neoplasia Maligna da Nasofaringe Com Lesão Invasiva", "P54.2 - Hemorragia Retal Neonatal", "W58.0 - Mordedura ou Golpe Provocado Por Crocodilo ou Aligátor - Residência", "Z93.8 - Outros Orifícios Artificiais", "T67.0 - Golpe de Calor e Insolação", "L64 - Alopécia Androgênica", "J98 - Outros Transtornos Respiratórios", "H13.3 - Penfigóide Ocular", "S12.7 - Fraturas Múltiplas da Coluna Cervical", "Y90.8 - Alcoolemia Igual ou Superior a 240 Mg/100ml", "C15.3 - Neoplasia Maligna do Terço Superior do Esôfago", "T38.0 - Intoxicação Por Glicocorticóides e Análogos Sintéticos", "T79.4 - Choque Traumático", "B41 - Paracoccidioidomicose", "X31.2 - Exposição a Frio Natural Excessivo - Escolas, Outras Instituições e Áreas de Administração Pública", "B46.2 - Mucormicose Gastrointestinal", "S27 - Traumatismo de Outros Órgãos Intratorácicos e Dos Não Especificados", "Y75.0 - Dispositivos (aparelhos) Utilizados em Neurologia, Associados a Incidentes Adversos - Dispositivos (aparelhos) Para Fins Diagnósticos ou de Monitorização", "M62 - Outros Transtornos Musculares", "C92.3 - Sarcoma Mielóide", "Q12.4 - Esferofaquia", "Y44.9 - Efeitos Adversos de Outras Substâncias Farmacológicas Que Atuam Sobre os Constituintes do Sangue e as Não Especificadas", "D51.3 - Outras Anemias Por Deficiência de Vitamina B12 na Dieta", "W91.4 - Exposição a Tipo Não Especificado de Radiação - Rua e Estrada", "K93 - Transtornos de Outros Órgãos Digestivos em Doenças Classificadas em Outra Parte", "R26.1 - Marcha Paralítica", "Z63.3 - Ausência de um Dos Membros da Família", "D48.7 - Neoplasia de Comportamento Incerto ou Desconhecido de Outras Localizações Especificadas", "M76.8 - Outras Entesopatias do Membro Inferior, Excluindo o pé", "L20.0 - Prurigo de Besnier", "K29.1 - Outras Gastrites Agudas", "X63.7 - Auto-intoxicação Por e Exposição, Intencional, a Outras Substâncias Farmacológicas de Ação Sobre o Sistema Nervoso Autônomo - Fazenda", "S76.4 - Traumatismo de Outros Músculos e Tendões e os Não Especificados ao Nível da Coxa", "V95.3 - Acidente de Aeronave de Asa Fixa de Uso Comercial Causando Traumatismo a Ocupante", "V33.6 - Ocupante de um Triciclo Motorizado Traumatizado em Colisão Com um Automóvel, pick Up ou Caminhonete - Passageiro Traumatizado em um Acidente de Trânsito", "S36.0 - Traumatismo do Baço", "H61.8 - Outros Transtornos Especificados do Ouvido Externo", "P70.2 - Diabetes Mellitus Neonatal", "O08.2 - Embolia Conseqüente a Aborto e a Gravidez Ectópica e Molar", "Z99.1 - Dependência de Respirador", "Z59.0 - Falta de Domicílio Fixo", "Q67.1 - Deformidade Facial Por Compressão", "X71.3 - Lesão Autoprovocada Intencionalmente Por Afogamento e Submersão - Área Para a Prática de Esportes e Atletismo", "H42.8 - Glaucoma em Outras Doenças Classificadas em Outra Parte", "Y07 - Outras Síndromes de Maus Tratos", "Z08.8 - Exame de Seguimento Após Outro Tratamento Por Neoplasia Maligna", "C45.2 - Mesotelioma do Pericárdio", "K02.1 - Cáries da Dentina", "I37.2 - Estenose da Valva Pulmonar Com Insuficiência", "Z60.4 - Exclusão e Rejeição Sociais", "V61.2 - Ocupante de um Veículo de Transporte Pesado Traumatizado em Colisão Com um Veículo a Pedal - Pessoa Viajando no Exterior do Veículo Traumatizada em um Acidente Não-de-trânsito", "T33.7 - Geladura Superficial do Joelho e da Perna", "S60.1 - Contusão de Dedo(s) Com Lesão da Unha", "O05 - Outros Tipos de Aborto", "A27.0 - Leptopirose Icterohemorrágica", "H92 - Otalgia e Secreção Auditiva", "K41.3 - Hérnia Femoral Unilateral ou Não Especificada, Com Obstrução, Sem Gangrena", "A32.1 - Meningite e Meningoencefalite Por Listéria", "Q86.0 - Síndrome Fetal Alcoólico (dismórfico", "E67.0 - Hipervitaminose A", "K38 - Outras Doenças do Apêndice", "X24.9 - Contato Com Centopéias e Miriápodes Venenosas (tropicais) - Local Não Especificado", "E24.0 - Síndrome de Cushing Dependente da Hipófise", "T31.3 - Queimaduras Envolvendo de 30 - 39% da Superfície Corporal", "W22.9 - Impacto Acidental Ativo ou Passivo Causado Por Outros Objetos - Local Não Especificado", "F13.3 - Transtornos Mentais e Comportamentais Devidos ao Uso de Sedativos e Hipnóticos - Síndrome (estado) de Abstinência", "K38.9 - Doença do Apêndice, Sem Outra Especificação", "B77.9 - Ascaridíase Não Especificada", "Y33.1 - Outros Fatos ou Eventos Especificados, Intenção Não Determinada - Habitação Coletiva", "O29.8 - Outras Complicações de Anestesia Durante a Gravidez", "N36.8 - Outros Transtornos Especificados da Uretra", "P20.9 - Hipóxia Intra-uterina Não Especificada", "V88.6 - Pessoa Traumatizada em Uma Colisão Entre um Trem ou um Veículo Ferroviário e um Automóvel (carro), Não-de-trânsito", "M65.3 - Dedo em Gatilho", "P01.2 - Feto e Recém-nascido Afetados Por Oligohidrâmnio", "N83.1 - Cisto do Corpo Lúteo", "T44.0 - Intoxicação Por Agentes Anticolinesterase", "F01.0 - Demência Vascular de Início Agudo");
	var situacao = new Array("Alta sem encaminhamento a UBS", "Alta sem encaminhamento a UBS", "Alta sem encaminhamento a UBS", "Alta sem encaminhamento a UBS", "Alta com encaminhamento a UBS", "Transferência Hospitalar");	
	var avaliacao = new Array("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan aliquam est, non consectetur felis gravida posuere. Ut mattis, elit at mattis commodo, nisi odio ultricies lorem, at luctus leo leo vel dui. Donec convallis rutrum ornare. ", "Aenean viverra feugiat consequat. Sed neque massa, laoreet sed aliquet vel, condimentum dictum libero. Vestibulum fringilla massa non justo volutpat, eu sagittis leo sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ", "Vestibulum velit eros, varius quis sodales in, condimentum ut nisl. Curabitur aliquam felis et dui sagittis, nec ultricies enim pellentesque. Aenean pellentesque eu leo sit amet bibendum. Ut malesuada turpis eget auctor laoreet. ", "Morbi tincidunt lorem ante, vitae porta mauris vestibulum id. Vestibulum magna nibh, posuere eu diam et, elementum dictum odio. Fusce lacinia tempor ullamcorper. Donec mattis mauris quis interdum posuere. Vivamus nec pretium elit.", "Cras pulvinar quis sapien id egestas. Nam feugiat molestie eleifend. Aliquam erat volutpat. Donec tortor risus, commodo quis convallis vel, congue vel est. ", "Nam bibendum, lacus vitae tristique elementum, magna massa elementum leo, at congue mi elit scelerisque arcu. Curabitur interdum rhoncus ante, finibus molestie nisi vulputate eget. Nullam tempus feugiat cursus. Suspendisse et augue non sem rutrum fringilla. ", "Curabitur ex ante, mollis ac tellus ac, tempus ornare elit. Proin placerat elementum metus a aliquam. In rutrum turpis ut nunc vulputate, sit amet tincidunt nunc elementum. Curabitur id nisi euismod, placerat nunc lobortis, aliquam felis. ", "Nullam eu neque vitae nunc rhoncus pharetra in eget magna. Curabitur non semper augue, eget efficitur sem. Aliquam quis felis gravida, mollis arcu ac, mollis velit.");
	var prescricao = new Array("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Suspendisse accumsan aliquam est, non consectetur felis gravida posuere.","Ut mattis, elit at mattis commodo, nisi odio ultricies lorem, at luctus leo leo vel dui.","Donec convallis rutrum ornare.","Aenean viverra feugiat consequat.","Sed neque massa, laoreet sed aliquet vel, condimentum dictum libero.","Vestibulum fringilla massa non justo volutpat, eu sagittis leo sodales.","Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Vestibulum velit eros, varius quis sodales in, condimentum ut nisl.","Curabitur aliquam felis et dui sagittis, nec ultricies enim pellentesque.","Aenean pellentesque eu leo sit amet bibendum.","Ut malesuada turpis eget auctor laoreet.","Morbi tincidunt lorem ante, vitae porta mauris vestibulum id.","Vestibulum magna nibh, posuere eu diam et, elementum dictum odio.","Fusce lacinia tempor ullamcorper.","Donec mattis mauris quis interdum posuere.","Vivamus nec pretium elit.");

	$("#ds_avaliacao").val(avaliacao[numAleatorio(0, avaliacao.length - 1)]);
    $("#cd_cid").val(cid[numAleatorio(0, cid.length - 1)]);
    $("#ds_prescricao").val(prescricao[numAleatorio(0, prescricao.length - 1)]);
    $("#ic_situacao").val(situacao[numAleatorio(0, situacao.length - 1)]);

    $("#btn_cadastrar_diagnostico").click();
}

function verificar_lista_espera(){
	var i = 0;
	var redirect = "menu.php?rodarBot=true";

	setTimeout(function(){
		$("button").each(function(){
			if($(this).text() == "Nova Triagem"){
				if(i == 0){
					redirect = $(this).attr('id') + "&rodarBot=true";
				}
				i++;			
			}
		});
		window.location.href = redirect;
	}, 1000);
}

function verificar_triagens_abertas(){
	var i = 0;

	$("button").each(function(){
		if($(this).attr("id").includes("visualizar_triagem.php?cd_triagem=")){
			i++;
			window.location.href = $(this).attr("id") + "&rodarBot=true";
		}
	});

	if(i == 0){
		window.location.href = "visualizar_espera.php?rodarBot=true";
	}
}

function verificar_btn_diagnostico(){
	var i = 0;

	$("button").each(function(){
		if($(this).text() == "Diagnóstico"){
			i++;
			window.location.href = $(this).attr("id") + "&rodarBot=true";		
		}
	});

	if(i == 0){
		window.location.href = "/ProjetoExtensaoMaua/Core/pesquisar_triagem.php?rodarBot=true";
	}
}

function numAleatorio(inicio, fim) {
	var intervalo = fim - inicio;
	return (inicio + Math.floor((Math.random() * intervalo) + 1));
}