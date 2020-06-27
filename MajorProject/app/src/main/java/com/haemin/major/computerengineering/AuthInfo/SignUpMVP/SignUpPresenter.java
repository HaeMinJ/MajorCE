package com.haemin.major.computerengineering.AuthInfo.SignUpMVP;

import com.haemin.major.computerengineering.Model.User;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class SignUpPresenter implements SignUpContract.SignUpPresenter {

    SignUpContract.SignUpView view;

    public SignUpPresenter(SignUpContract.SignUpView view) {
        this.view = view;
    }

    @Override
    public void requestSignUp(User user) {
        int typeSeq = 0; //default UserType
        String email = user.getEmail();
        String pw = user.getPw();
        RetrofitClient.getAPIService().signUpWithEmail(typeSeq, email, pw).enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if(response.code() == 200 && response.body() != null){
                    User user = response.body();
                    GlobalApplication.setToken(user.getAccessToken());
                    view.showSuccess(user.getUserSeq()+"");
                }else{
                    view.showToast(StringConstant.REGISTER_ERROR);
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                view.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }
}
