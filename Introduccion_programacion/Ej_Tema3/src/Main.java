public class Main {
    public static void main(String[] args)
    {
        System.out.println(suma(5,2,3));

        coche miCoche = new coche();
        miCoche.SumaPuerta();
        System.out.println(miCoche.puertas);
    }

    public static int suma(int a, int b, int c)
    {
        int res;

        res = a+b+c;
        return res;
    }
}
class   coche
{
    public int puertas = 0;
    public void SumaPuerta()
    {
        this.puertas++;
    }
}