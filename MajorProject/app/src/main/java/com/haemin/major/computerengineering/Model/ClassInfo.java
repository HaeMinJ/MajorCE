package com.haemin.major.computerengineering.Model;

public class ClassInfo extends Post{
    int classAttachSeq;
    int postSeq;
    int classSeq;
    String className;
    String profName;
    String classTime;
    String classInfo;
    String classDuration;
    String classImageUrl;

    public int getClassAttachSeq() {
        return classAttachSeq;
    }

    public void setClassAttachSeq(int classAttachSeq) {
        this.classAttachSeq = classAttachSeq;
    }

    public int getPostSeq() {
        return postSeq;
    }

    public void setPostSeq(int postSeq) {
        this.postSeq = postSeq;
    }

    public int getClassSeq() {
        return classSeq;
    }

    public void setClassSeq(int classSeq) {
        this.classSeq = classSeq;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getProfName() {
        return profName;
    }

    public void setProfName(String profName) {
        this.profName = profName;
    }

    public String getClassTime() {
        return classTime;
    }

    public void setClassTime(String classTime) {
        this.classTime = classTime;
    }

    public String getClassInfo() {
        return classInfo;
    }

    public void setClassInfo(String classInfo) {
        this.classInfo = classInfo;
    }

    public String getClassDuration() {
        return classDuration;
    }

    public void setClassDuration(String classDuration) {
        this.classDuration = classDuration;
    }

    public String getClassImageUrl() {
        return classImageUrl;
    }

    public void setClassImageUrl(String classImageUrl) {
        this.classImageUrl = classImageUrl;
    }
}
