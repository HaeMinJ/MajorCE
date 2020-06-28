package com.haemin.major.computerengineering.Main.Community.CommunityInfoMVP;

import android.content.Context;
import android.content.Intent;
import android.text.format.DateUtils;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.bumptech.glide.Glide;
import com.haemin.major.computerengineering.Model.Comment;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.PostAttachFile;
import com.haemin.major.computerengineering.R;

import java.io.File;
import java.util.ArrayList;

public class CommunityInfoActivity extends AppCompatActivity implements CommunityInfoContract.CommunityInfoView {

    String postSeq;

    ArrayList<PostAttachFile> files;
    ArrayList<Comment> comments;
    CommunityInfoContract.CommunityInfoPresenter presenter;

    CommentAdapter commentAdapter;
    ImageAdapter imageAdapter;

    @BindView(R.id.image_profile)
    ImageView imageProfile;
    @BindView(R.id.text_user_name)
    TextView textUserName;
    @BindView(R.id.text_post_time)
    TextView textPostTime;
    @BindView(R.id.text_title)
    TextView textTitle;
    @BindView(R.id.text_contents)
    TextView textContents;
    @BindView(R.id.recycler_image)
    RecyclerView recyclerImage;
    @BindView(R.id.recycler_comments)
    RecyclerView recyclerComment;
    @BindView(R.id.edit_comment)
    EditText editComment;
    @BindView(R.id.btn_send)
    ImageButton btnSend;


    public static void start(Context context, String postSeq) {
        Intent starter = new Intent(context, CommunityInfoActivity.class);
        starter.putExtra("postSeq",postSeq);
        context.startActivity(starter);
    }

    @Override
    public void showToast(String text) {
        Toast.makeText(this,text,Toast.LENGTH_SHORT).show();
    }

    @Override
    public void updateView(Post post) {
        if(post.getProfileImageUrl() != null){
            Glide.with(this)
                    .load(post.getProfileImageUrl())
                    .into(imageProfile);
        }
        textUserName.setText(post.getName());
        textPostTime.setText(DateUtils.getRelativeTimeSpanString(post.getUploadTime()));
        textTitle.setText(post.getTitle());
        textContents.setText(post.getContents());
    }

    @Override
    public void updateImageFiles(ArrayList<PostAttachFile> files) {
        this.files.clear();
        this.files.addAll(files);
        imageAdapter.notifyDataSetChanged();
    }

    @Override
    public void updateComments(ArrayList<Comment> comments) {
        this.comments.clear();
        this.comments.addAll(comments);
        commentAdapter.notifyDataSetChanged();
    }

    @Override
    public void refreshAll() {
        presenter.requestCommentUpdate(postSeq);
        presenter.requestImageFiles(postSeq);
        presenter.requestViewUpdate(postSeq);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_community_info);
        ButterKnife.bind(this);

        Intent fromOutside = getIntent();
        postSeq = fromOutside.getStringExtra("postSeq");

        {
            files = new ArrayList<>();
            comments = new ArrayList<>();
            presenter = new CommunityInfoPresenter(this);
            imageAdapter = new ImageAdapter(this, files);
            commentAdapter = new CommentAdapter(this, comments);
        }
        {
            recyclerImage.setLayoutManager(new LinearLayoutManager(this, RecyclerView.HORIZONTAL, false));
            recyclerComment.setLayoutManager(new LinearLayoutManager(this, RecyclerView.VERTICAL, false));
            recyclerComment.setAdapter(commentAdapter);
            recyclerImage.setAdapter(imageAdapter);
        }
        {
            btnSend.setOnClickListener(v -> {
                presenter.postComment(postSeq, editComment.getText().toString());
            });
            refreshAll();
        }
    }
}
