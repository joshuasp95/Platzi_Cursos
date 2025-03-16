public class Person {

    private String name;

    private void walk() {
        System.out.println("walking....");
    }

    public Person(String name) {
        this.name = name;
    }

    private String getName() {
        return this.name;
    }

    public static void main(String[] args) {
        Person person = new Person("John");
        System.out.print(person.getName() + " is ");
        person.walk();
    }
}