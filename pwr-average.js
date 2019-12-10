// $('td:contains("2.0")').parent().remove(); - oceny 2.0 też wliczamy do średniej
$('td:contains("---")').parent().remove(); 
$('td:contains("k.cz.")').parent().remove(); 

var sumaECTS=0; 
var sumaECTSrazyOcena=0;

$('td[title="ocena"]').each(function(){
	sumaECTSrazyOcena += parseFloat($(this).text()) * parseFloat($(this).next().next().text());
	sumaECTS += parseFloat($(this).next().next().text());
	console.log(parseFloat($(this).text()), parseFloat($(this).next().next().text()));
});

console.log(
"suma ECTS * Ocena:", sumaECTSrazyOcena,
"suma ECTS:", sumaECTS,
"srednia wazona z calych studiow:", sumaECTSrazyOcena/sumaECTS
);

