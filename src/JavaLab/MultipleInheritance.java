interface xyz {
    public void functionx();
}
interface abc {
    public void functiona();
}
class MultipleInheritance implements xyz, abc {
    public void functionx() {
        System.out.println("Function x from interface xyz");
    }
    public void functiona() {
        System.out.println("Function a from interface abc");
    }
    public static void main(String[] args) {
        MultipleInheritance obj = new MultipleInheritance();
        obj.functionx();
        obj.functiona();
    }
}
