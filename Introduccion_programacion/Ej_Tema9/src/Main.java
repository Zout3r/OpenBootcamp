public class Main {
    public static void main(String[] args)
    {
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador();
        cliente.edad = 23;
        cliente.nombre = "Jose";
        cliente.credito = 900;
        trabajador.salario = 1200;
        System.out.println("Nombre: " + cliente.nombre + " " + "Edad: " + cliente.edad + " " + "Credito: " + cliente.credito + " " + "Sueldo: " + trabajador.salario);
    }
}
class Persona {
    int edad;
    String nombre;
    int telefono;
}
class Cliente extends Persona {
    int credito;
}
class Trabajador extends Persona {
    float salario;
}