package com.haemin.major.computerengineering.AuthInfo.LoginMVP;

import android.util.Log;
import com.haemin.major.computerengineering.Model.User;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginPresenter implements LoginContract.LoginPresenter {
    LoginContract.LoginView loginView;

    public LoginPresenter(LoginContract.LoginView loginView) {
        this.loginView = loginView;
    }

    @Override
    public void checkAuth(String email, String pw) {
        RetrofitClient.getAPIService().checkAuthWithEmail(email,pw).enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if(response.code() == 200 && response.body() != null){
                    User user = response.body();
                    GlobalApplication.setToken(user.getAccessToken());
                    loginView.showSuccess(user.getName());
                }else{
                    loginView.showToast(StringConstant.LOGIN_ERROR);
                    Log.e("LoginPresenter", response.message());
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Log.e("LoginPresenterCheckAuth", t.getMessage());
                loginView.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }
}
