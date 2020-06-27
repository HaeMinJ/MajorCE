package com.haemin.major.computerengineering.AuthInfo.ProfileMVP;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.github.dhaval2404.imagepicker.ImagePicker;
import com.haemin.major.computerengineering.R;

import java.io.File;

public class ProfileActivity extends AppCompatActivity implements ProfileContract.ProfileView {

    private static final int CODE_IMAGE_REQUEST = 123;
    @BindView(R.id.btn_back)
    ImageButton btnBack;
    @BindView(R.id.btn_profile_icon)
    ImageButton btnProfileIcon;
    @BindView(R.id.edit_name)
    EditText editName;
    @BindView(R.id.edit_student_code)
    EditText editStudentCode;
    @BindView(R.id.btn_finish)
    Button btnFinish;

    String userSeq;
    ProfileContract.ProfilePresenter presenter;

    public static void start(Context context, String userSeq) {
        Intent starter = new Intent(context, ProfileActivity.class);
        starter.putExtra("userSeq", userSeq);
        context.startActivity(starter);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        ButterKnife.bind(this);
        {
            Intent fromOutside = getIntent();
            userSeq = fromOutside.getStringExtra("userSeq");
            presenter = new ProfilePresenter(this);
        }
        {
            btnBack.setOnClickListener(v -> finish());
            btnProfileIcon.setOnClickListener(v -> pickImage());
            btnFinish.setOnClickListener(v -> modifyProfile());
        }
    }

    @Override
    public void showToast(String text) {
        Toast.makeText(this,text,Toast.LENGTH_SHORT).show();
    }

    @Override
    public void showSuccess(String text) {
        Toast.makeText(this,text,Toast.LENGTH_SHORT).show();
        finish();
    }

    private void modifyProfile() {
        presenter.requestModifyProfile(editStudentCode.getText().toString(),editName.getText().toString());
    }

    private void pickImage() {
        ImagePicker.Companion.with(this)
                .crop(1.0f,1.0f)
                .compress(1024) // 파일크기 제한
                .maxResultSize(512,512)
                .start(CODE_IMAGE_REQUEST);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == CODE_IMAGE_REQUEST){
            if(resultCode == RESULT_OK && data != null && data.getData() != null){
                //Uri fileUri = data.getData();
                File file = ImagePicker.Companion.getFile(data);
                presenter.updateProfileImage(file);
            }else{
                Toast.makeText(this, "이미지를 성공적으로 불러오지 못했습니다.",Toast.LENGTH_SHORT).show();
            }
        }
    }
}
