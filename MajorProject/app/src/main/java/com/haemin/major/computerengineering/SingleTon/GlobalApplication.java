package com.haemin.major.computerengineering.SingleTon;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;
import retrofit2.Retrofit;

public class GlobalApplication extends Application {

    private static Context context = null;
    private static String token = null;
    private static String APP_NAME = "MAJOR_COMPUTER";

    @Override
    public void onCreate() {
        super.onCreate();
        context = getApplicationContext();
    }

    public static String getToken() {
        SharedPreferences pref = context.getSharedPreferences(APP_NAME, MODE_PRIVATE);
        token = pref.getString("token",null);
        return token;
    }

    public static void setToken(String token) {

        GlobalApplication.token = token;
        SharedPreferences pref = context.getSharedPreferences(APP_NAME,MODE_PRIVATE);
        SharedPreferences.Editor editor = pref.edit();
        editor.putString("token",null);
        editor.apply();

    }
}
