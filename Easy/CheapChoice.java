import java.util.*;

public class Main {

    static class Item {
        String category;
        String size;
        int price;
        boolean isSold = false;

        Item(String category, String size, int price) {
            this.category = category;
            this.size = size;
            this.price = price;
        }
    }

    static class Order {
        String category;
        String size;
        boolean isFulfilled = false;
        int price = 0;

        Order(String category, String size) {
            this.category = category;
            this.size = size;
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int numberOfItems = Integer.parseInt(sc.nextLine());
        int numberOfOrders = Integer.parseInt(sc.nextLine());

        List<Item> itemList = new ArrayList<>();

        for (int i = 0; i < numberOfItems; i++) {
            String[] parts = sc.nextLine().split(" ");
            itemList.add(new Item(parts[0], parts[1], Integer.parseInt(parts[2])));
        }

        itemList.sort(Comparator.comparingInt(item -> item.price));

        List<Order> orderList = new ArrayList<>();

        for (int i = 0; i < numberOfOrders; i++) {
            String[] parts = sc.nextLine().split(" ");
            orderList.add(new Order(parts[0], parts[1]));
        }

        for (Order order : orderList) {

            for (Item item : itemList) {

                if (!order.isFulfilled &&
                    !item.isSold &&
                    item.category.equals(order.category) &&
                    item.size.equals(order.size)) {

                    order.price = item.price;
                    item.isSold = true;
                    order.isFulfilled = true;
                    break;
                }
            }
        }

        for (Order order : orderList) {
            System.out.println(order.isFulfilled ? order.price : "NONE");
        }
    }
}
