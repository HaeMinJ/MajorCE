package com.haemin.major.computerengineering.SingleTon.Retrofit;

import com.haemin.major.computerengineering.Model.*;
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
    Call<Void> modifyProfile(@Header("x-access-token")String accessToken, @Field("phone")String phone, @Field("name")String name, @Path("userSeq") String userSeq);
    @Multipart
    @POST("/profile/image/{userSeq}")
    Call<Void> updateProfileImage(@Header("x-access-token")String accessToken, @Part MultipartBody.Part file, @Path("userSeq") String userSeq);

    @GET("/event")
    Call<ArrayList<Post>> getEventList(@Header("x-access-token")String accessToken);
    @GET("/event/files/{postSeq}")
    Call<ArrayList<PostAttachFile>> getEventFileList(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq);
    @FormUrlEncoded
    @POST("/event")
    Call<Post> postEventInfo(@Header("x-access-token")String accessToken, @FieldMap HashMap<String,String> eventPostMap);
    @Multipart
    @POST("/event/files/{postSeq}")
    Call<Void> uploadEventAttachFile(@Header("x-access-token")String accessToken, @Part MultipartBody.Part file, @Path("postSeq")String postSeq);

    @GET("/community")
    Call<ArrayList<Post>> getCommunityList(@Header("x-access-token")String accessToken);
    @GET("/community/posts/{postSeq}")
    Call<Post> getCommunityItem(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq);
    @GET("/community/files/{postSeq}")
    Call<ArrayList<PostAttachFile>> getCommunityFileList(@Header("x-access-token")String accessToken,@Path("postSeq")String postSeq);

    @FormUrlEncoded
    @POST("/community")
    Call<Post> postCommunityItem(@Header("x-access-token")String accessToken, @FieldMap HashMap<String, String> communityPostMap);
    @Multipart
    @POST("/community/files/{postSeq}")
    Call<Void> uploadCommunityAttachFile(@Header("x-access-token")String accessToken, @Part MultipartBody.Part part, @Path("postSeq") String postSeq);

    @GET("/community/comments/{postSeq}")
    Call<ArrayList<Comment>> getCommentList(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq);

    @FormUrlEncoded
    @POST("/community/comments/{postSeq}")
    Call<Void> postComment(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq, @Field("commentContents")String contents);

    @GET("/test")
    Call<ArrayList<TestInfo>> getTestList(@Header("x-access-token")String accessToken);
    @GET("/test/files/{postSeq}")
    Call<ArrayList<PostAttachFile>> getTestFileList(@Header("x-access-token")String accessToken, @Path("postSeq")String postSeq );
    @FormUrlEncoded
    @POST("/test")
    Call<TestInfo> postTestInfo(@Header("x-access-token")String accessToken, @FieldMap HashMap<String, String> testPostMap);
    @Multipart
    @POST("/test/files/{postSeq}")
    Call<Void> uploadTestAttachFile(@Header("x-access-token")String accessToken, @Part MultipartBody.Part part, @Path("postSeq")String postSeq);

    @GET("/payment")
    Call<ArrayList<Payment>> getPaymentList(@Header("x-access-token")String accessToken);
    @GET("/payment/files/{paymentSeq}")
    Call<ArrayList<PostAttachFile>> getPaymentFileList(@Header("x-access-token")String accessToken, @Path("paymentSeq")String paymentSeq);
    @FormUrlEncoded
    @POST("/payment")
    Call<Payment> postPaymentInfo(@Header("x-access-token")String accessToken, @FieldMap HashMap<String, String> paymentPostMap);
    @Multipart
    @POST("/payment/files/{paymentSeq}")
    Call<Void> uploadPaymentAttachFile(@Header("x-access-token")String accessToken, @Part MultipartBody.Part file, @Path("paymentSeq") String paymentSeq);
}