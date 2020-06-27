package com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP;

import com.haemin.major.computerengineering.Model.Post;

import java.util.ArrayList;

public interface CommunityContract {
    interface CommunityView{
        void showToast(String text);
        void notifyDataSet(ArrayList<Post> posts);
    }
    interface CommunityPresenter{
        void requestPostData();
    }
}