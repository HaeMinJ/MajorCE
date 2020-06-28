package com.haemin.major.computerengineering.Main.Event.EventFragmentMVP;

import android.app.Dialog;
import android.content.Context;
import android.text.format.DateUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.bumptech.glide.Glide;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.Model.PostAttachFile;
import com.haemin.major.computerengineering.R;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import com.haemin.major.computerengineering.StringConstant;
import com.kodmap.app.library.PopopDialogBuilder;
import com.kodmap.app.library.ui.KmImageView;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;
import java.util.List;

public class EventAdapter extends RecyclerView.Adapter<EventAdapter.ViewHolder> {
    Context context;
    ArrayList<Post> posts;

    public EventAdapter(Context context, ArrayList<Post> posts) {
        this.context = context;
        this.posts = posts;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_event, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Post post = posts.get(position);

        holder.textTitle.setText(post.getTitle());
        holder.textContents.setText(post.getContents());
        holder.textUserName.setText(post.getName());
        holder.textPostTime.setText(DateUtils.getRelativeTimeSpanString(post.getUploadTime()));

        if(post.getProfileImageUrl() != null) {
            Glide.with(context)
                    .load(post.getProfileImageUrl())
                    .into(holder.imageProfile);
        }
        RetrofitClient.getAPIService().getEventFileList(GlobalApplication.getToken(), post.getPostSeq()+ "").enqueue(new Callback<ArrayList<PostAttachFile>>() {
            @Override
            public void onResponse(Call<ArrayList<PostAttachFile>> call, Response<ArrayList<PostAttachFile>> response) {
                if(response.code() == 200 && response.body() != null && response.body().size() != 0){
                    Glide.with(context)
                            .load(response.body().get(0).getFileUrl())
                            .into(holder.imageThumbnail);
                    holder.itemView.setOnClickListener(v -> {
                        List<String> url_list = new ArrayList<>();
                        for(PostAttachFile file : response.body()){
                            url_list.add(file.getFileUrl());
                        }
                        Dialog dialog = new PopopDialogBuilder(context)
                                .setList(url_list, 0)
                                .build();
                        dialog.show();
                    });
                }
            }

            @Override
            public void onFailure(Call<ArrayList<PostAttachFile>> call, Throwable t) {
                Toast.makeText(context, StringConstant.NETWORK_ERROR, Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return posts.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder{
        @BindView(R.id.image_thumbnail)
        ImageButton imageThumbnail;
        @BindView(R.id.text_title)
        TextView textTitle;
        @BindView(R.id.text_contents)
        TextView textContents;
        @BindView(R.id.image_profile)
        ImageButton imageProfile;
        @BindView(R.id.text_user_name)
        TextView textUserName;
        @BindView(R.id.text_post_time)
        TextView textPostTime;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
