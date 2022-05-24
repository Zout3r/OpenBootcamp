public class Main {
    public static void main(String[] args)
    {
        System.out.println("Bucle If:");
        int numeroIf;

        numeroIf = 8;
        if (numeroIf > 0)
        {
            System.out.println("Es positivo");
        } else if (numeroIf < 0)
        {
            System.out.println("Es negativo");
        }
        else
        {
            System.out.println("Es cero");
        }
        System.out.println("Bucle While:");
        int numeroWhile;

        numeroWhile = 0;
        while (numeroWhile < 3)
        {
            System.out.println(numeroWhile);
            numeroWhile++;
        }
        System.out.println("Bucle DoWhile:");
        numeroWhile = 2;
        do {
            System.out.println(numeroWhile);
            numeroWhile++;
        } while (numeroWhile < 3);
        System.out.println("Bucle For:");
        for (int numeroFor = 0; numeroFor <= 3; System.out.println(numeroFor), numeroFor++);
        System.out.println("Switch:");
        String estacion;

        estacion = "verano";
        switch (estacion)
        {
            case "verano":
                System.out.println("Estamos en verano");
                break;
            case "otoño":
                System.out.println("Estamos en otoño");
                break;
            case "invierno":
                System.out.println("Estamos en invierno");
                break;
            case "primavera":
                System.out.println("Estamos en primavera");
                break;
            default:
                System.out.println("No es una estación");
        }
    }
}