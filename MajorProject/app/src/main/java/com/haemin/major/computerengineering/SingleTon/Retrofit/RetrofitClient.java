package com.haemin.major.computerengineering.SingleTon.Retrofit;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient{
    private static volatile Retrofit instance = null;


    private static Retrofit getInstance(){
        if(instance == null){
            synchronized (Retrofit.class){
                if(instance == null){
                    instance = new Retrofit.Builder()
                            .baseUrl("http://ec2-3-34-194-33.ap-northeast-2.compute.amazonaws.com:3000")
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();
                }
            }
        }
        return instance;
    }
    public static RetrofitInterface getAPIService(){
        return getInstance().create(RetrofitInterface.class);
    }

}
