package com.haemin.major.computerengineering.Model;

public class Comment {
    private int uploaderSeq;
    private String postSeq;
    private String commentContents;
    private int commentSeq;
    private String profileImageUrl;
    private String name;

    private long uploadTime;

    public long getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(long uploadTime) {
        this.uploadTime = uploadTime;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getUploaderSeq() {
        return uploaderSeq;
    }

    public void setUploaderSeq(int uploaderSeq) {
        this.uploaderSeq = uploaderSeq;
    }

    public String getPostSeq() {
        return postSeq;
    }

    public void setPostSeq(String postSeq) {
        this.postSeq = postSeq;
    }

    public String getCommentContents() {
        return commentContents;
    }

    public void setCommentContents(String commentContents) {
        this.commentContents = commentContents;
    }

    public int getCommentSeq() {
        return commentSeq;
    }

    public void setCommentSeq(int commentSeq) {
        this.commentSeq = commentSeq;
    }
}
