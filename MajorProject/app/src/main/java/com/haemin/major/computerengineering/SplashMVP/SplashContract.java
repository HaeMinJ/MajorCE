package com.haemin.major.computerengineering.SplashMVP;

public interface SplashContract {
    interface SplashView{
        void showToast(String text);
        void checkPermission();
        void goToMain();
        void goToLogin();
    }
    interface SplashPresenter{
        void checkTokenAvailable(String token);
    }
}
