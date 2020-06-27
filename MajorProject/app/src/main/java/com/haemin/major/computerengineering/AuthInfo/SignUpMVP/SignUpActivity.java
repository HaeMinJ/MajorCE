package com.haemin.major.computerengineering.AuthInfo.SignUpMVP;

import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.AuthInfo.ProfileMVP.ProfileActivity;
import com.haemin.major.computerengineering.Model.User;
import com.haemin.major.computerengineering.R;

public class SignUpActivity extends AppCompatActivity implements SignUpContract.SignUpView {


    SignUpContract.SignUpPresenter presenter;

    @BindView(R.id.edit_email)
    EditText editEmail;
    @BindView(R.id.edit_pw)
    EditText editPw;
    @BindView(R.id.btn_register)
    Button btnRegister;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
        ButterKnife.bind(this);
        presenter = new SignUpPresenter(this);
        btnRegister.setOnClickListener(v -> {
            User user = new User();
            user.setEmail(editEmail.getText().toString());
            user.setPw(editPw.getText().toString());
            presenter.requestSignUp(user);
        });
    }

    @Override
    public void showSuccess(String userSeq) {
        Toast.makeText(this,userSeq +" 번째 가입을 축하드립니다!\n정상적인 이용을 위해 프로필을 등록해주세요!",Toast.LENGTH_SHORT).show();
        ProfileActivity.start(this, userSeq);
        finish();
    }

    @Override
    public void showToast(String text) {
        Toast.makeText(this, text, Toast.LENGTH_SHORT).show();
    }
}
