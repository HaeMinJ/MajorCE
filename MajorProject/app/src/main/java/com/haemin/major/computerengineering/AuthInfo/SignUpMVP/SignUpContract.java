package com.haemin.major.computerengineering.AuthInfo.SignUpMVP;

import com.haemin.major.computerengineering.Model.User;

public interface SignUpContract {
    interface SignUpView{
        void showSuccess(String text);
        void showToast(String text);
    }
    interface SignUpPresenter{
        void requestSignUp(User user);
    }
}
