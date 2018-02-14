var conexionAb = 0;

function abreCarrito(estado){
	if (estado == 1) {
		conexionAb = 1;
	}else{
		conexionAb = 0;
	}
}

function checa(){
	if(conexionAb == 0)
	{
      window.location.href = '/';		
	}
}