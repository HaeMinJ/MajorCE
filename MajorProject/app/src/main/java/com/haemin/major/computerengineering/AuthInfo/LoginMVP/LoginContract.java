package com.haemin.major.computerengineering.AuthInfo.LoginMVP;

public interface LoginContract {
    interface LoginView{
        void goToSignUp();
        void showToast(String text);
        void showSuccess(String userSeq, String name);
        boolean checkEmailRegal(String email);
    }
    interface LoginPresenter{
        void checkAuth(String email, String pw);
    }
}
