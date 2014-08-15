desabilitaRadios0();

function desabilitadoRadio(a,b,c,d,e,f,g,h,i,j)
{
	  document.getElementById("convidado1").disabled = a;
	  document.getElementById("idade1").disabled     = b;
	  document.getElementById("convidado2").disabled = c;
	  document.getElementById("idade2").disabled     = d;
	  document.getElementById("convidado3").disabled = e;
	  document.getElementById("idade3").disabled     = f;
	  document.getElementById("convidado4").disabled = g;
	  document.getElementById("idade4").disabled     = h;
	  document.getElementById("convidado5").disabled = i;
	  document.getElementById("idade5").disabled     = j;
	  
}
function desabilitaRadios0()
{
	desabilitadoRadio(true,true,true,true,true,true,true,true,true,true);
}
function desabilitaRadios1()
{
	desabilitadoRadio(false,false,true,true,true,true,true,true,true,true);
}
function desabilitaRadios2()
{
	desabilitadoRadio(false,false,false,false,true,true,true,true,true,true);
}
function desabilitaRadios3()
{
	desabilitadoRadio(false,false,false,false,false,false,true,true,true,true);
}
function desabilitaRadios4()
{
	desabilitadoRadio(false,false,false,false,false,false,false,false,true,true);
}
function desabilitaRadios5()
{
	desabilitadoRadio(false,false,false,false,false,false,false,false,false,false);
}

