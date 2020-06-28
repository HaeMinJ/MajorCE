package com.haemin.major.computerengineering.Main.Community.CommunityInfoMVP;

import android.util.Log;
import com.haemin.major.computerengineering.Model.Comment;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.PostAttachFile;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;

public class CommunityInfoPresenter implements CommunityInfoContract.CommunityInfoPresenter {
    CommunityInfoContract.CommunityInfoView infoView;

    public CommunityInfoPresenter(CommunityInfoContract.CommunityInfoView infoView) {
        this.infoView = infoView;
    }

    @Override
    public void requestImageFiles(String postSeq) {
        RetrofitClient.getAPIService().getCommunityFileList(GlobalApplication.getToken(),postSeq).enqueue(new Callback<ArrayList<PostAttachFile>>() {
            @Override
            public void onResponse(Call<ArrayList<PostAttachFile>> call, Response<ArrayList<PostAttachFile>> response) {
                if(response.code() == 200 && response.body() != null){
                    infoView.updateImageFiles(response.body());
                }else{
                    infoView.showToast("게시글 사진을 불러오는데 실패했습니다.");
                }
            }

            @Override
            public void onFailure(Call<ArrayList<PostAttachFile>> call, Throwable t) {
                infoView.showToast(StringConstant.NETWORK_ERROR);
                Log.e("CommunityInfoPresenter",t.getMessage(),t);
            }
        });
    }

    @Override
    public void requestViewUpdate(String postSeq) {
        RetrofitClient.getAPIService().getCommunityItem(GlobalApplication.getToken(),postSeq).enqueue(new Callback<Post>() {
            @Override
            public void onResponse(Call<Post> call, Response<Post> response) {
                if(response.code() == 200 && response.body() != null){
                    infoView.updateView(response.body());
                }else{
                    infoView.showToast("게시글 정보를 불러오는데 실패했습니다.");
                }
            }

            @Override
            public void onFailure(Call<Post> call, Throwable t) {
                infoView.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }

    @Override
    public void requestCommentUpdate(String postSeq) {
        RetrofitClient.getAPIService().getCommentList(GlobalApplication.getToken(),postSeq).enqueue(new Callback<ArrayList<Comment>>() {
            @Override
            public void onResponse(Call<ArrayList<Comment>> call, Response<ArrayList<Comment>> response) {
                if(response.code() == 200 && response.body() != null){
                    infoView.updateComments(response.body());
                }else{
                    infoView.showToast("댓글 정보를 불러오는데 실패했습니다.");
                }
            }

            @Override
            public void onFailure(Call<ArrayList<Comment>> call, Throwable t) {
                infoView.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }

    @Override
    public void postComment(String postSeq, String contents) {
        RetrofitClient.getAPIService().postComment(GlobalApplication.getToken(), postSeq, contents).enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                if(response.code() == 200){
                    infoView.refreshAll();
                }
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                infoView.showToast(StringConstant.NETWORK_ERROR);
            }
        });
    }
}
