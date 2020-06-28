package com.haemin.major.computerengineering.Main.Event.EventFragmentMVP;

import android.util.Log;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;

public class EventPresenter implements EventContract.EventPresenter {
    EventContract.EventView eventView;

    public EventPresenter(EventContract.EventView eventView) {
        this.eventView = eventView;
    }

    @Override
    public void requestPostData() {
        RetrofitClient.getAPIService().getEventList(GlobalApplication.getToken()).enqueue(new Callback<ArrayList<Post>>() {
            @Override
            public void onResponse(Call<ArrayList<Post>> call, Response<ArrayList<Post>> response) {
                if(response.code() == 200 && response.body() != null){
                    eventView.notifyDataSet(response.body());
                }else{
                    eventView.showToast("게시글 목록을 불러오는 데 실패했습니다.");
                    Log.e("CommunityPresenter",response.message());
                }
            }

            @Override
            public void onFailure(Call<ArrayList<Post>> call, Throwable t) {
                eventView.showToast(StringConstant.NETWORK_ERROR);
                Log.e("CommunityPresenter",t.getMessage(),t);
            }
        });
    }
}
