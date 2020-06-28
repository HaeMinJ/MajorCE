package com.haemin.major.computerengineering.SplashMVP;

import com.haemin.major.computerengineering.Model.User;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SplashPresenter implements SplashContract.SplashPresenter {

    SplashContract.SplashView view;

    public SplashPresenter(SplashContract.SplashView view) {
        this.view = view;
    }

    @Override
    public void checkTokenAvailable(String token) {
        RetrofitClient.getAPIService().checkTokenAvailable(token).enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if(response.code() == 200 && response.body() != null){
                    if(response.body().getName() != null) {
                        view.goToMain();
                        view.showToast(response.body().getName() + "님 환영합니다!");
                    }else{
                        view.goToProfile();
                        view.showToast("앱을 이용하시기 전에 프로필을 등록해주세요.");
                    }
                }else{
                    view.goToLogin();
                    view.showToast("토큰이 만료되었습니다. 다시 로그인해주세요.");
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                view.showToast("네트워크 연결이 원활하지 않습니다.\n 같은 오류가 지속되면 앱을 업데이트 해주세요.");
            }
        });
    }
}
