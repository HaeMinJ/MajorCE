package com.haemin.major.computerengineering.Main.Event.EventAddMVP;

import java.util.HashMap;

public interface EventAddContract {
    interface EventAddView{
        void showToast(String text);
        void showSuccess(String text);
        void pickFileList();
    }
    interface EventAddPresenter{
        void postData(HashMap<String, String> postEventMap);
    }
}
