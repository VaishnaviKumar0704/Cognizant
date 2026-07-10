interface Playable {
    void play();
}

class Guitar implements Playable {
    public void play() {
        System.out.println("Playing Guitar");
    }
}

public class Ex19 {
    public static void main(String[] args) {

        Guitar g = new Guitar();
        g.play();
    }
}