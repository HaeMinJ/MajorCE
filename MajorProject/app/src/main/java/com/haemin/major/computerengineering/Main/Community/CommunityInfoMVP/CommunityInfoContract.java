package com.haemin.major.computerengineering.Main.Community.CommunityInfoMVP;

import com.haemin.major.computerengineering.Model.Comment;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.PostAttachFile;

import java.io.File;
import java.util.ArrayList;

public interface CommunityInfoContract {
    interface CommunityInfoView{
        void showToast(String text);
        void updateView(Post post);
        void updateImageFiles(ArrayList<PostAttachFile> files);
        void updateComments(ArrayList<Comment> comments);
        void refreshAll();
    }
    interface CommunityInfoPresenter{
        void requestImageFiles(String postSeq);
        void requestViewUpdate(String postSeq);
        void requestCommentUpdate(String postSeq);
        void postComment(String postSeq, String contents);
    }
}
