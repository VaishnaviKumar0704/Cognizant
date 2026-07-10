public class Ex15 {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {

        System.out.println("Integer Addition = " + add(10, 20));

        System.out.println("Double Addition = " + add(10.5, 20.5));
    }
}