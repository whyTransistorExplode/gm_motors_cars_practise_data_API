package uz.pdp.appgm.service;

public class Test {
//    public static void main(String[] args) {
//        System.out.println(getCode());
//    }

//    public static String getCode() {
//        String[] letters = {"A", "B", "C", "Z"};
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy");
//        String year = dateFormat.format(new Date());
////        String maxNumber = contractRepository.getMaxNumber();
//        String maxNumber = "2020AZA008";
//        if (maxNumber == null || !maxNumber.substring(0, 4).equals(year)) {
//            return year + "AAA001";
//        } else {
//            //2020AAA001
//            int number = Integer.parseInt(maxNumber.substring(maxNumber.length() - 3));
//            String lastLetter = maxNumber.substring(6, 7);
//            String middleLetter = maxNumber.substring(5, 6);
//            String firstLetter = maxNumber.substring(4, 5);
//            String numberString = "";
//            if (number < 9) {
//                number++;
//                numberString = "00" + number;
//            } else if (number < 99) {
//                number++;
//                numberString = "0" + number;
//            } else if (number < 999) {
//                number++;
//                numberString = String.valueOf(number);
//            } else {
//                if (lastLetter.equals("Z") && middleLetter.equals("Z")) {
//                    lastLetter = "A";
//                    middleLetter = "A";
//                    int index = Arrays.asList(letters).indexOf(firstLetter) + 1;
//                    firstLetter = letters[index];
//                } else if (lastLetter.equals("Z")) {
//                    lastLetter = "A";
//                    int index = Arrays.asList(letters).indexOf(middleLetter) + 1;
//                    middleLetter = letters[index];
//                } else {
//                    int index = Arrays.asList(letters).indexOf(lastLetter) + 1;
//                    lastLetter = letters[index];
//                }
//            }
//            return year + firstLetter + middleLetter + lastLetter + (numberString.isEmpty() ? "001" : numberString);
//        }
//    }


    public static void main(String[] args) {
//        List<String> strings = new ArrayList<>();
//        System.out.println(strings.isEmpty());

//        byte a = 127;
//        byte b = 127;
//        byte c = 125;

//        System.out.println((byte) (1000000));

        String a="Solih";
        a.replace("o","a");
        System.out.println(a);
    }

}
