// 1114 - Print in Order

class Foo {
    private volatile byte count = 0;
    synchronized public void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        count++;
        notifyAll();
    }
    synchronized public void second(Runnable printSecond) throws InterruptedException {
        while (count < 1) wait();
        printSecond.run();
        count++;
        notifyAll();
    }
    synchronized public void third(Runnable printThird) throws InterruptedException {
        while (count < 2) wait();
        printThird.run();
    }
}
