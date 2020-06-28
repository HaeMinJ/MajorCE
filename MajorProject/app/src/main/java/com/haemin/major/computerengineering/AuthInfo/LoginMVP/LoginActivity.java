package com.haemin.major.computerengineering.AuthInfo.LoginMVP;

import android.content.Intent;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.AuthInfo.ProfileMVP.ProfileActivity;
import com.haemin.major.computerengineering.Main.MainMVP.MainActivity;
import com.haemin.major.computerengineering.Model.User;
import com.haemin.major.computerengineering.R;
import com.haemin.major.computerengineering.AuthInfo.SignUpMVP.SignUpActivity;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity implements LoginContract.LoginView {

    LoginContract.LoginPresenter presenter;

    @BindView(R.id.edit_email)
    EditText editEmail;
    @BindView(R.id.edit_pw)
    EditText editPw;
    @BindView(R.id.btn_login)
    Button btnLogin;
    @BindView(R.id.text_sign_up)
    TextView textSignUp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        {
            ButterKnife.bind(this);
            presenter = new LoginPresenter(this);
        }

        btnLogin.setOnClickListener(v -> {
            String email = editEmail.getText().toString();
            String pw = editPw.getText().toString();
            if(checkEmailRegal(email)){
                presenter.checkAuth(email, pw);
            }else{
                showToast("이메일 형식이 올바르지 않습니다.");
            }
        });
        textSignUp.setOnClickListener(v -> goToSignUp());
    }

    @Override
    protected void onPostResume() {
        super.onPostResume();
        String token = GlobalApplication.getToken();
        if(token != null && !token.equals("") ){
            RetrofitClient.getAPIService().checkTokenAvailable(token).enqueue(new Callback<User>() {
                @Override
                public void onResponse(Call<User> call, Response<User> response) {
                    if(response.code() == 200 && response.body() != null){
                        Toast.makeText(LoginActivity.this, "자동로그인을 실행합니다.",Toast.LENGTH_SHORT).show();
                        MainActivity.start(LoginActivity.this);
                    }
                }

                @Override
                public void onFailure(Call<User> call, Throwable t) {

                }
            });
        }
    }

    @Override
    public void goToSignUp() {
        startActivity(new Intent(this, SignUpActivity.class));
    }

    @Override
    public void showSuccess(String userSeq, String name) {
        if(name != null ) Toast.makeText(this,name+"님 환영합니다!",Toast.LENGTH_SHORT).show();
        if(name == null) ProfileActivity.start(this,userSeq);
        MainActivity.start(this);
    }

    @Override
    public void showToast(String text) {
        Toast.makeText(this, text, Toast.LENGTH_SHORT).show();
    }

    @Override
    public boolean checkEmailRegal(String email) {
        return email.contains("@");
    }
}
