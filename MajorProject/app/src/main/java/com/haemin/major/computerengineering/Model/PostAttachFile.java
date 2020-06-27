package com.haemin.major.computerengineering.Model;

public class PostAttachFile {
    int fileSeq;
    String fileUrl;
    String fileName;
    String fileType;
    long uploadTime;
    int uploaderSeq;

    public int getFileSeq() {
        return fileSeq;
    }

    public void setFileSeq(int fileSeq) {
        this.fileSeq = fileSeq;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public long getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(long uploadTime) {
        this.uploadTime = uploadTime;
    }

    public int getUploaderSeq() {
        return uploaderSeq;
    }

    public void setUploaderSeq(int uploaderSeq) {
        this.uploaderSeq = uploaderSeq;
    }
}
