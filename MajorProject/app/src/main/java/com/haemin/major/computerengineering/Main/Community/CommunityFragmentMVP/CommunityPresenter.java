package com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP;

import android.util.Log;
import android.widget.Toast;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;

public class CommunityPresenter implements CommunityContract.CommunityPresenter {

    CommunityContract.CommunityView view;

    public CommunityPresenter(CommunityContract.CommunityView view) {
        this.view = view;
    }

    @Override
    public void requestPostData() {
        RetrofitClient.getAPIService().getCommunityList(GlobalApplication.getToken()).enqueue(new Callback<ArrayList<Post>>() {
            @Override
            public void onResponse(Call<ArrayList<Post>> call, Response<ArrayList<Post>> response) {
                if(response.code() == 200 && response.body() != null){
                    view.notifyDataSet(response.body());
                }else{
                    view.showToast("게시글 목록을 불러오는 데 실패했습니다.");
                    Log.e("CommunityPresenter",response.message());
                }
            }

            @Override
            public void onFailure(Call<ArrayList<Post>> call, Throwable t) {
                view.showToast(StringConstant.NETWORK_ERROR);
                Log.e("CommunityPresenter",t.getMessage(),t);
            }
        });
    }
}
