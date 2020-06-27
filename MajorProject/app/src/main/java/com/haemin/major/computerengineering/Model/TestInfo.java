package com.haemin.major.computerengineering.Model;

public class TestInfo extends Post{

    private int testSeq;
    private int testAttachSeq;
    private int postSeq;
    private long testTime;
    private String testRange;
    private int classSeq;
    private String testName;
    private String testImage;

    public int getTestSeq() {
        return testSeq;
    }

    public void setTestSeq(int testSeq) {
        this.testSeq = testSeq;
    }

    public int getTestAttachSeq() {
        return testAttachSeq;
    }

    public void setTestAttachSeq(int testAttachSeq) {
        this.testAttachSeq = testAttachSeq;
    }

    public int getPostSeq() {
        return postSeq;
    }

    public void setPostSeq(int postSeq) {
        this.postSeq = postSeq;
    }

    public long getTestTime() {
        return testTime;
    }

    public void setTestTime(long testTime) {
        this.testTime = testTime;
    }

    public String getTestRange() {
        return testRange;
    }

    public void setTestRange(String testRange) {
        this.testRange = testRange;
    }

    public int getClassSeq() {
        return classSeq;
    }

    public void setClassSeq(int classSeq) {
        this.classSeq = classSeq;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getTestImage() {
        return testImage;
    }

    public void setTestImage(String testImage) {
        this.testImage = testImage;
    }
}
