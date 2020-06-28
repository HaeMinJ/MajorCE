package com.haemin.major.computerengineering.SplashMVP;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.gun0912.tedpermission.PermissionListener;
import com.gun0912.tedpermission.TedPermission;
import com.haemin.major.computerengineering.AuthInfo.LoginMVP.LoginActivity;
import com.haemin.major.computerengineering.AuthInfo.ProfileMVP.ProfileActivity;
import com.haemin.major.computerengineering.Main.MainMVP.MainActivity;
import com.haemin.major.computerengineering.R;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;

import java.util.ArrayList;

import static android.widget.Toast.LENGTH_SHORT;

public class SplashActivity extends AppCompatActivity implements SplashContract.SplashView {


    SplashPresenter presenter;

    @Override
    public void showToast(String text) {
        Toast.makeText(this, text, LENGTH_SHORT).show();
    }

    @Override
    public void checkPermission() {
        TedPermission.with(this)
                .setPermissions(Manifest.permission.READ_EXTERNAL_STORAGE)
                .setPermissionListener(new PermissionListener() {
                    @Override
                    public void onPermissionGranted() {
                        String token = GlobalApplication.getToken();
                        if(token != null)
                            presenter.checkTokenAvailable(token);
                        else
                            goToLogin();
                    }
                    @Override
                    public void onPermissionDenied(ArrayList<String> deniedPermissions) {
                         showToast("[설정] -> [권한] 에서 권한을 허용하실 수 있습니다.");
                    }
                })
                .check();
    }

    @Override
    public void goToProfile() {
        goToMain();
        ProfileActivity.start(this, 0+"");
    }

    @Override
    public void goToMain() {
        Intent toMain = new Intent(this, MainActivity.class);
        startActivity(toMain);
        finish();
    }

    @Override
    public void goToLogin() {
        Intent toLogin = new Intent(this, LoginActivity.class);
        startActivity(toLogin);
        finish();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        presenter = new SplashPresenter(this);
        new Handler().postDelayed(this::checkPermission, 3000);
    }
}
