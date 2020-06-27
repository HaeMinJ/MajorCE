package com.haemin.major.computerengineering.AuthInfo.ProfileMVP;

import android.util.Log;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.io.File;

public class ProfilePresenter implements ProfileContract.ProfilePresenter {
    ProfileContract.ProfileView view;

    public ProfilePresenter(ProfileContract.ProfileView view) {
        this.view = view;
    }

    @Override
    public void requestModifyProfile(String code, String name) {
        RetrofitClient.getAPIService().modifyProfile(GlobalApplication.getToken(), code, name).enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.code() == 200){
                    view.showSuccess("프로필 변경이 완료되었습니다.");
                }else{
                    view.showToast("프로필 변경에 실패하였습니다.");
                    Log.e("ProfilePresenter", response.message());
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                Log.e("ProfilePresenter",t.getMessage());
                view.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }

    @Override
    public void updateProfileImage(File file) {
        MultipartBody.Part part = MultipartBody.Part.createFormData("submitFile",file.getName() , RequestBody.create(MediaType.parse("image/png"), file));
        RetrofitClient.getAPIService().updateProfileImage(GlobalApplication.getToken(), part).enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.code() == 200){
                    view.showToast("프로필 사진 등록이 성공적으로 완료되었습니다.");
                }else{
                    view.showToast("프로필 사진 등록에 실패했습니다.");
                    Log.e("ProfilePresenter", response.message());
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                view.showToast(StringConstant.NETWORK_ERROR);
                Log.e("ProfilePresenter",t.getMessage(),t);
            }
        });
    }
}
