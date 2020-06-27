package com.haemin.major.computerengineering.Model;

public class Comment {
    private int uploaderSeq;
    private String postSeq;
    private String commentContents;
    private int commentSeq;

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
