package com.haemin.major.computerengineering.Main.Community.CommunityAddMVP;

import android.util.Log;
import com.haemin.major.computerengineering.Model.Post;
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
import java.util.ArrayList;
import java.util.HashMap;

public class CommunityAddPresenter implements CommunityAddContract.CommunityAddPresenter {

    CommunityAddContract.CommunityAddView addView;
    ArrayList<File> files;

    public CommunityAddPresenter(CommunityAddContract.CommunityAddView addView, ArrayList<File> files) {
        this.addView = addView;
        this.files = files;
    }

    @Override
    public void postData(HashMap<String, String> postCommunityMap) {
        RetrofitClient.getAPIService().postCommunityItem(GlobalApplication.getToken(), postCommunityMap).enqueue(new Callback<Post>() {
            @Override
            public void onResponse(Call<Post> call, Response<Post> response) {
                if(response.code() == 200){
                    if(files.size() != 0){
                        for(File f:files) addImage(f);
                    }else{
                        addView.showSuccess("게시글을 성공적으로 등록했습니다.");
                    }
                }else{
                    addView.showToast("게시글 등록에 실패했습니다.");
                    Log.e("CommunityAddPresenter", response.message());
                }
            }

            @Override
            public void onFailure(Call<Post> call, Throwable t) {
                addView.showToast(StringConstant.NETWORK_ERROR);
                Log.e("CommunityAddPresenter",t.getMessage(),t);
            }
        });
    }
    private void addImage(File file){
        MultipartBody.Part part = MultipartBody.Part.createFormData("file",file.getName() , RequestBody.create(MediaType.parse("image/png"), file));
        RetrofitClient.getAPIService().uploadCommunityAttachFile(GlobalApplication.getToken(),part).enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.code() != 200){
                    addView.showToast("이미지 등록에 실패했습니다.");
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                addView.showToast("이미지 등록에 실패했습니다.");
            }
        });
    }
}