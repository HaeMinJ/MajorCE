package com.haemin.major.computerengineering.AuthInfo.ProfileMVP;

import android.net.Uri;
import com.haemin.major.computerengineering.Model.User;

import java.io.File;

public interface ProfileContract {
    interface ProfileView{
        void showToast(String text);
        void showSuccess(String text);
        void updateView(User user);
    }
    interface ProfilePresenter{
        void requestModifyProfile(String code, String name, String userSeq );
        void updateProfileImage(String userSeq, File file);
        void requestProfileData();
    }
}
