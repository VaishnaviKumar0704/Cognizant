import java.util.Scanner;
class Ex2
{
    public static void main(String[] args) 
    {
        Scanner sc  = new Scanner(System.in);
        
        System.out.println("Enetr the 1st number ");
        double num1 = sc.nextDouble();
        System.out.println("Enter the 2nd number ");
        double num2 = sc.nextDouble();

        System.out.println("Choose an operation");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");

        int choice = sc.nextInt();

        switch(choice)
        {
            case 1: 
                System.out.println("Ans = "+(num1+num2));
                break;
            case 2:
                System.out.println("Ans = "+(num1-num2));
                break;
            case 3:
                System.out.println("Ans = "+(num1*num2));
                break;
            case 4:
                System.out.println("Ans = "+(num1/num2));
                break;
            default:
                System.out.println("Invalid Choice");
                break;
        }
        sc.close();
    }
}