package com.haemin.major.computerengineering.Main.Community.CommunityAddMVP;

import android.content.Intent;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.github.dhaval2404.imagepicker.ImagePicker;
import com.google.android.material.textfield.TextInputEditText;
import com.haemin.major.computerengineering.PickedImageAdapter;
import com.haemin.major.computerengineering.R;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

public class CommunityAddActivity extends AppCompatActivity implements CommunityAddContract.CommunityAddView {

    private static final int CODE_IMAGE_REQUEST = 123;
    CommunityAddContract.CommunityAddPresenter presenter;
    ArrayList<File> files;
    HashMap<String, String> postData;
    PickedImageAdapter adapter;

    @BindView(R.id.edit_contents)
    EditText editContents;
    @BindView(R.id.recycler_upload_image)
    RecyclerView recyclerUploadImage;
    @BindView(R.id.text_title_input)
    TextInputEditText editTitle;
    @BindView(R.id.btn_upload)
    TextView textUpload;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_community_add);
        ButterKnife.bind(this);
        {
            postData = new HashMap<>();
            files = new ArrayList<>();
            presenter = new CommunityAddPresenter(this, files);
        }
        {
            textUpload.setOnClickListener(v -> dataMining());
        }
        {
            adapter = new PickedImageAdapter(this, files, new PickedImageAdapter.OnFirstClickListener() {
                @Override
                public void onFirstClicked() {
                    pickFileList();
                }
            });
            recyclerUploadImage.setAdapter(adapter);
            recyclerUploadImage.setLayoutManager(new LinearLayoutManager(this,RecyclerView.HORIZONTAL,false));
        }
    }

    private void dataMining() {
        postData.put("title",editTitle.getText().toString());
        postData.put("contents",editContents.getText().toString());
        presenter.postData(postData);
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

    @Override
    public void pickFileList() {
        ImagePicker.Companion.with(this)
                .crop(1.0f,1.2f)
                .compress(1024) // 파일크기 제한
                .maxResultSize(512,512)
                .start(CODE_IMAGE_REQUEST);
    }

    public void updateFileList() {
        adapter.notifyDataSetChanged();
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == CODE_IMAGE_REQUEST){
            if(resultCode == RESULT_OK && data != null && data.getData() != null){
                //Uri fileUri = data.getData();
                File file = ImagePicker.Companion.getFile(data);
                files.add(file);
                updateFileList();
            }else{
                Toast.makeText(this, "이미지를 성공적으로 불러오지 못했습니다.",Toast.LENGTH_SHORT).show();
            }
        }
    }
}
