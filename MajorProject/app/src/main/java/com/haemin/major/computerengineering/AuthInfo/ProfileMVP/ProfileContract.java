package com.haemin.major.computerengineering.AuthInfo.ProfileMVP;

import android.net.Uri;

import java.io.File;

public interface ProfileContract {
    interface ProfileView{
        void showToast(String text);
        void showSuccess(String text);
    }
    interface ProfilePresenter{
        void requestModifyProfile(String code, String name, String userSeq );
        void updateProfileImage(String userSeq, File file);
    }
}
