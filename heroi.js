let heroi = "PigHero"
let xp = 2467
let nivel = ""

if (xp < 1000){
	nivel = "Ferro"
    }
   else if (xp > 1000 && xp < 1999){
   nivel = "Bronze"
	}
    else if (xp > 2000 && xp < 4999){
   nivel = "Prata"
	}
    else if (xp > 5000 && xp < 6999){
   nivel = "Ouro"
	}
	else if (xp > 7000 && xp < 7999){
   nivel = "Platina"
	}
	else if (xp > 8000 && xp < 8999){
   nivel = "Ascendente"
	}
    else if (xp > 9000 && xp < 9999){
   nivel = "Imortal"
	}
    else {
   nivel = "Radiante"
	}


console.log("O Heroi de nome " + heroi + " está no nível de " +
nivel)
