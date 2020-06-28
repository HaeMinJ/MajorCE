package com.haemin.major.computerengineering.Main.Event.EventFragmentMVP;

import com.haemin.major.computerengineering.Model.Post;

import java.util.ArrayList;

public interface EventContract {
    interface EventView{
        void showToast(String text);
        void notifyDataSet(ArrayList<Post> posts);
    }
    interface EventPresenter{
        void requestPostData();
    }
}
