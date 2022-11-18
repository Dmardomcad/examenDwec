// Creamos un array vacío donde se almacenarán los jugadores
let jugadores = []

// Creamos el objeto jugador con sus propiedades y métodos
const Jugador = {
    Nombre: "Daniel",
    Apellidos: "Mariscal",
    Nivel: 1,
    Puntuacion: 1,
    ganarPuntuacion: function(){
        console.log("Has matado un zombi");
        this.Puntuacion++
        if (this.Puntuacion>10){
            this.Nivel++
            console.log(`Has subido de nivel, tu nivel es ahora ${this.Nivel}`);
            this.Puntuacion = 1
        }
    } ,
    restarPuntuacion: function(){
        console.log("Un zombie te ha alcanzado");
        this.Puntuacion--
        if(this.Puntuacion){
            this.Nivel--
            if (this.Puntuacion < 0){
                this.resetearNivel()
            }
        }
        
    } ,
    resetearNivel: function(){
        if (this.Puntuacion===0){
            alert(`El jugador ${this.Nombre} + ${this.Apellidos} ha muerto!`)
            this.Nivel=0
        }
    }
}

console.log(jugadores.push(Jugador))
console.log(jugadores);
console.log(Jugador.ganarPuntuacion());
console.log(Jugador);