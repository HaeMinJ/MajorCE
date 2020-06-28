package com.haemin.major.computerengineering.Main.Community.CommunityInfoMVP;

import android.content.Context;
import android.text.format.DateUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.bumptech.glide.Glide;
import com.haemin.major.computerengineering.Model.Comment;
import com.haemin.major.computerengineering.R;

import java.util.ArrayList;

public class CommentAdapter extends RecyclerView.Adapter<CommentAdapter.ViewHolder> {

    Context context;
    ArrayList<Comment> comments;

    public CommentAdapter(Context context, ArrayList<Comment> comments) {
        this.context = context;
        this.comments = comments;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_comment, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Comment comment = comments.get(position);
        if(comment.getProfileImageUrl() != null){
            Glide.with(context)
                    .load(comment.getProfileImageUrl())
                    .into(holder.imageProfile);
        }
        holder.textUserName.setText(comment.getName());
        holder.textContents.setText(comment.getCommentContents());
        holder.textUploadTime.setText(DateUtils.getRelativeTimeSpanString(comment.getUploadTime()));
    }

    @Override
    public int getItemCount() {
        return comments.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.image_profile)
        ImageView imageProfile;
        @BindView(R.id.text_user_name)
        TextView textUserName;
        @BindView(R.id.text_contents)
        TextView textContents;
        @BindView(R.id.text_upload_time)
        TextView textUploadTime;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
