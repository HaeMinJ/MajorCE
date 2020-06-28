package com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
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
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;

public class CommunityAdapter extends RecyclerView.Adapter<CommunityAdapter.ViewHolder> {

    Context context;
    ArrayList<Post> posts;

    public CommunityAdapter(Context context, ArrayList<Post> posts) {
        this.context = context;
        this.posts = posts;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_project, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Post post = posts.get(position);
        holder.textTitle.setText(post.getTitle());
        holder.textUploaderName.setText(post.getName());
        RetrofitClient.getAPIService().getCommunityFileList(GlobalApplication.getToken(), post.getPostSeq()+"").enqueue(new Callback<ArrayList<PostAttachFile>>() {
            @Override
            public void onResponse(Call<ArrayList<PostAttachFile>> call, Response<ArrayList<PostAttachFile>> response) {
                if(response.code() == 200 && response.body() != null){
                    Glide.with(context)
                            .load(response.body().get(0).getFileUrl())
                            .into(holder.imageThumbnail);
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
        ImageView imageThumbnail;
        @BindView(R.id.text_title)
        TextView textTitle;
        @BindView(R.id.text_uploader_name)
        TextView textUploaderName;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
