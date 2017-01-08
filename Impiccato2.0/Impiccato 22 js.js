var numeroLettere;
var NomeCaselle = new Array( 15 );
var tentativi = 0;
var Immagine = new Array( "inizio.png", "tentativo 2.png", "tentativo 3.png", "tentativo 4.png", "tentativo 5.png", "tentativo 6.png" );
var ImmagineScura = new Array( "inizio a.png", "tentativo 2a.png", "tentativo 3a.png", "tentativo 4a.png", "tentativo 5a.png", "tentativo 6a.png" );

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
		nomeSfidante.value = ( nomeSfidante.value ).toUpperCase();
		nomeSfidato.value = ( nomeSfidato.value ).toUpperCase();
		parolaDaIndovinare.value = ( parolaDaIndovinare.value ).toUpperCase();
		InizioGioco();
	}
}

function InizioGioco()
{	
	tabellaParola.style.display = "";
	tabellaLettere.style.display = "";
	
	numeroLettere = ( parolaDaIndovinare.value ).length;
	
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
	
	NomeCaselle[ 0 ].value = parolaDaIndovinare.value[ 0 ];
	NomeCaselle[ 0 ].style.backgroundColor = "#99FF99";
	NomeCaselle[ numeroLettere - 1 ].value = parolaDaIndovinare.value[ numeroLettere - 1 ];
	NomeCaselle[ numeroLettere - 1 ].style.backgroundColor = "#99FF99";
}

function ControlloLettera( casellaLettera )
{
	var FERMA = 0;
	var parola = parolaDaIndovinare.value;

	for( var CONT = 0; CONT < numeroLettere; CONT++ )
	{
		if( casellaLettera.value == parola[ CONT ] )
		{
			NomeCaselle[ CONT ].value = casellaLettera.value;
			NomeCaselle[ CONT ].style.backgroundColor = "#99FF99";
			casellaLettera.style.color = "#00FF00";
			casellaLettera.disabled = "disabled";
			casellaLettera.style.backgroundColor = "#004400";
			casellaLettera.style.borderColor = "#00FF00";
			FERMA++;
		}
	}
	
	if( !FERMA )
	{
		tentativi++;
		immagineImpiccato.src = Immagine[ tentativi ];
		casellaLettera.style.color = "#FF0000";
		casellaLettera.disabled = "disabled";
		casellaLettera.style.borderColor = "#FF0000";
		casellaLettera.style.backgroundColor = "#440000";
	}
	else
		Vittoria( nomeSfidante.value, nomeSfidato.value );
	
	Scritte( "#000000" );
	
	casellaLettera.style.width = "85%";
	casellaLettera.style.height = "30px";
	casellaLettera.style.fontSize = "10pt";
	
	if( tentativi == 5 )
		Perso( nomeSfidante.value, nomeSfidato.value );
}

function PulisciCasella( nomeCasella )
{
	nomeCasella.value = "";
}

function Colore()
{
	var coloreSfondo = "rgb("+ rosso.value +","+ verde.value +","+ blu.value +")";
	var immagine = 0;
	var ImmaginiDimensioni = new Array ( "", "7%, 7%, 50%", "18%", "7%, 75%" );
	var ImmaginiSfondo = new Array( "", "url('sole.gif'), url('sole.gif'), url('fuoco.gif')", "url('slime.gif')", "url('acqua.gif'), url('pesciolino.gif')" );
	var ImmaginiRipeti = new Array( "", "no-repeat, no-repeat, repeat", "repeat", "repeat, no-repeat" );
	var ImmaginiPosizione = new Array( "", "left top, right top, left top", "", "bottom, 85% 50%" );
	
	if( ( parseInt( rosso.value ) > 205 ) && ( parseInt( verde.value ) < 50 ) && ( parseInt( blu.value ) < 50 ) )
		immagine = 1;
	else if( ( parseInt( rosso.value ) < 50 ) && ( parseInt( verde.value ) > 205 ) && ( parseInt( blu.value ) < 50 ) )
		immagine = 2;
	else if( ( parseInt( rosso.value ) < 50 ) && ( parseInt( verde.value ) < 50 ) && ( parseInt( blu.value ) > 205 ) )
		immagine = 3;
	
	Scritte( "#000000" );
	sfondo.style.backgroundColor = coloreSfondo;
	sfondo.style.backgroundSize = ImmaginiDimensioni[ immagine ];
	sfondo.style.backgroundRepeat = ImmaginiRipeti[ immagine ];
	sfondo.style.backgroundPosition = ImmaginiPosizione[ immagine ];
	sfondo.style.backgroundImage = ImmaginiSfondo[ immagine ];
}

function Scritte( colore )
{
	var ColoreScrite = document.getElementsByClassName( 'scritte' );
	
	if( ( parseInt( rosso.value ) < 50 ) && ( parseInt( verde.value ) < 50 ) && ( parseInt( blu.value ) < 50 ) )
		colore = "#FFFFFF";
	
	for( var CONT = 0; CONT < ColoreScrite.length; CONT++ )
		ColoreScrite[ CONT ].style.color = colore;

	if( colore == "#FFFFFF" )
		immagineImpiccato.src = ImmagineScura[ tentativi ];
	else
		immagineImpiccato.src = Immagine[ tentativi ];
	
}

function Vittoria( sfidante, sfidato )
{
	var FERMA = 1;
	
	for( var CONT = 0; ( CONT < numeroLettere ) && ( FERMA ); CONT++ )
	{
		if( NomeCaselle[ CONT ].value == "___" )
			FERMA--;
	}
	
	if( FERMA )
	{
		document.write( "<body bgcolor='#000000' style='color: white' >" );
		document.write( "<center>" );
		document.write( "<h1>" );
		document.write( "COMPLIMENTI "+ sfidato +" HAI VINTO!!" );
		document.write( "<br />" );
		document.write( "HAI BATTUTO "+ sfidante );
		document.write( "</h1>" );
		document.write( "</center>" );
		document.write( "</body>" );
	}
}

function Perso( sfidante, sfidato )
{
	document.write( "<body bgcolor='#000000' style='color: white' >" );
		document.write( "<center>" );
		document.write( "<h1>" );
		document.write( "COMPLIMENTI "+ sfidante +" HAI VINTO!!" );
		document.write( "<br />" );
		document.write( "HAI BATTUTO "+ sfidato );
		document.write( "</h1>" );
		document.write( "</center>" );
		document.write( "</body>" );
}