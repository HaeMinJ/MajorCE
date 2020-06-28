package com.haemin.major.computerengineering.Main.Test.TestMVP;

import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.TestInfo;

import java.util.ArrayList;

public interface TestContract {
    interface TestView{
        void showToast(String text);
        void notifyDataSet(ArrayList<TestInfo> posts);
    }
    interface TestPresenter{
        void requestPostData();
    }
}
