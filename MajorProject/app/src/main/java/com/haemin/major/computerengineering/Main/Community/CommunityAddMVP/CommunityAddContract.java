package com.haemin.major.computerengineering.Main.Community.CommunityAddMVP;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

public interface CommunityAddContract {
    interface CommunityAddView{
        void showToast(String text);
        void showSuccess(String text);
        void pickFileList();
    }
    interface CommunityAddPresenter{
        void postData(HashMap<String, String> postCommunityMap);
    }
}
