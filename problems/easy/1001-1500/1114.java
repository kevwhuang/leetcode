// 1114 - Print in Order

class Foo {
    private byte count = 0;
    public synchronized void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        count++;
        notifyAll();
    }
    public synchronized void second(Runnable printSecond) throws InterruptedException {
        while (count < 1) wait();
        printSecond.run();
        count++;
        notifyAll();
    }
    public synchronized void third(Runnable printThird) throws InterruptedException {
        while (count < 2) wait();
        printThird.run();
    }
}
