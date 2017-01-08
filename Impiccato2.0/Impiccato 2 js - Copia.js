function ControlloIniziale()
{
	if( ( nomeSfidato.value == "" ) || ( nomeSfidante.value == "" ) )
	{
		if( ( nomeSfidato.value == "" ) && ( nomeSfidante.value == "" ) )
		{
			nomeSfidato.style.backgroundColor = "#FF9999";
			nomeSfidante.style.backgroundColor = "#FF9999";
			alert( "ATTENZIONE!!!\nVi siete dimenticati di inserire sia il nome dello sfidato che quello dello sfidante!" );
		}
		else if( nomeSfidato.value == "" )
		{
			nomeSfidato.style.backgroundColor = "#FF9999";
			alert( "ATTENZIONE!!!\nVi siete dimenticati di inserire il nome dello sfidato" );
		}
		else
		{
			nomeSfidante.style.backgroundColor = "#FF9999";
			alert( "ATTENZIONE!!!\nVi siete dimenticati di inserire il nome dello sfidante" );
		}
		
		nomeSfidato.style.backgroundColor = "";
		nomeSfidante.style.backgroundColor = "";
	}
	else if( ( parolaDaIndovinare.value.length < 3 ) || ( parolaDaIndovinare.value.length > 15 ) )
	{
		parolaDaIndovinare.style.backgroundColor = "#FF9999";
					
		if( parolaDaIndovinare.value.length < 3 )
			alert( "ATTENZIONE "+ nomeSfidante.value.toUpperCase() +"!!!\nLa parola da indovinare ha una lunghezza minore di 3 caratteri.\nREINSERITE" );
		else
			alert( "ATTENZIONE "+ nomeSfidante.value.toUpperCase() +"!!!\nLa parola da indovinare ha una lunghezza maggiore di 15 caratteri.\nREINSERITE" );
		
		parolaDaIndovinare.style.backgroundColor = "";
	}
	else
	{
		informazioniPerGiocare.style.display = "none";
		InizioGioco( nomeSfidato.value, nomeSfidante.value, parolaDaIndovinare.value );
	}
}

function InizioGioco( sfidato, sfidante, parolaNascosta )
{	
	tabella.style.display = "";

	sfidato = sfidato.toUpperCase();
	sfidante = sfidante.toUpperCase();
	var numeroLettere = parolaNascosta.length;
	var NomeCaselle = new Array( numeroLettere );
	
	for( CONT = 0; CONT < numeroLettere; CONT++ )
	{
		switch( CONT )
		{
			case 0:
				NomeCaselle[ CONT ] = InputA;
				cella1.style.display = "";
			break;
			case 1:
				NomeCaselle[ CONT ] = InputB;
				cella2.style.display = "";
			break;
			case 2:
				NomeCaselle[ CONT ] = InputC;
				cella3.style.display = "";
			break;
			case 3:
				NomeCaselle[ CONT ] = InputD;
				cella4.style.display = "";
			break;
			case 4:
				NomeCaselle[ CONT ] = InputE;
				cella5.style.display = "";
			break;
			case 5:
				NomeCaselle[ CONT ] = InputF;
				cella6.style.display = "";
			break;
			case 6:
				NomeCaselle[ CONT ] = InputG;
				cella7.style.display = "";
			break;
			case 7:
				NomeCaselle[ CONT ] = InputH;
				cella8.style.display = "";
			break;
			case 8:
				NomeCaselle[ CONT ] = InputI;
				cella9.style.display = "";
			break;
			case 9:
				NomeCaselle[ CONT ] = InputJ;
				cella10.style.display = "";
			break;
			case 10:
				NomeCaselle[ CONT ] = InputK;
				cella11.style.display = "";
			break;
			case 11:
				NomeCaselle[ CONT ] = InputL;
				cella12.style.display = "";
			break;
			case 12:
				NomeCaselle[ CONT ] = InputM;
				cella13.style.display = "";
			break;
			case 13:
				NomeCaselle[ CONT ] = InputN;
				cella14.style.display = "";
			break;
			case 14:
				NomeCaselle[ CONT ] = InputO;
				cella15.style.display = "";
			break;
		}
	}
}

function ControlloLettera( dai )
{
	alert("ciao");
}

function PulisciCasella( nomeCasella )
{
	nomeCasella.value = "";
}

function Colore()
{
	var colore = "rgb("+ rosso.value +","+ verde.value +","+ blu.value +")";
	Scritte( parseInt( rosso.value ), parseInt( verde.value ), parseInt( blu.value ) );
	sfondo.style.background = colore;
}

function Scritte( percentualeRosso, percentualeVerde, percentualeBlu )
{
	var coloreScritte = "black";
	
	if( ( percentualeRosso < 50 ) && ( percentualeVerde < 50 ) && ( percentualeBlu < 50 ) )
		coloreScritte = "white";
	
	scrittaRosso.style.color = coloreScritte;
	scrittaVerde.style.color = coloreScritte;
	scrittaBlu.style.color = coloreScritte;
}