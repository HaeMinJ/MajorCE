package com.haemin.major.computerengineering.SingleTon.Retrofit;

import com.haemin.major.computerengineering.Model.Comment;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.PostAttachFile;
import com.haemin.major.computerengineering.Model.User;
import okhttp3.MultipartBody;
import retrofit2.Call;
import retrofit2.http.*;

import java.util.ArrayList;
import java.util.HashMap;

public interface RetrofitInterface {

    @GET("/auth/checkToken")
    Call<User> checkTokenAvailable(@Header("x-access-token")String accessToken);

    @FormUrlEncoded
    @POST("/auth/emailLogin")
    Call<User> checkAuthWithEmail(@Field("email") String email, @Field("pw")String pw);

    @FormUrlEncoded
    @POST("/auth/register")
    Call<User> signUpWithEmail(@Field("userType")int typeSeq,@Field("email")String email, @Field("pw")String pw);

    @FormUrlEncoded
    @POST("/profile/info/{userSeq}")
    Call<Void> modifyProfile(@Header("x-access-token")String accessToken, @Field("code")String code, @Field("name")String name);
    @Multipart
    @POST("/profile/image/{userSeq}")
    Call<Void> updateProfileImage(@Header("x-access-token")String accessToken, @Part MultipartBody.Part part);

    @GET("/community")
    Call<ArrayList<Post>> getPostData(@Header("x-access-token")String accessToken);
    @GET("/community/files/{postSeq}")
    Call<ArrayList<PostAttachFile>> getPostAttachedFile(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq);
    @GET("/community/comments/{postSeq}")
    Call<ArrayList<Comment>> getPostComments(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq);
    @FormUrlEncoded
    @POST("/community")
    Call<Void> postCommunity(@Header("x-access-token")String accessToken, @PartMap HashMap<String, String> communityUpload);
    @FormUrlEncoded
    @POST("/community/comments/{postSeq}")
    Call<Void> postComment(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq, @PartMap HashMap<String,String> commentUpload);


}