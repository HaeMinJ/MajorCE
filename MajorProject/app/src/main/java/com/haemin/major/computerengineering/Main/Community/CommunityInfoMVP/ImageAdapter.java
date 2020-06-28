package com.haemin.major.computerengineering.Main.Community.CommunityInfoMVP;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.bumptech.glide.Glide;
import com.haemin.major.computerengineering.Model.PostAttachFile;
import com.haemin.major.computerengineering.PickedImageAdapter;
import com.haemin.major.computerengineering.R;

import java.io.File;
import java.util.ArrayList;

public class ImageAdapter extends RecyclerView.Adapter <ImageAdapter.ViewHolder>{

    Context context;
    ArrayList<PostAttachFile> attachFiles;

    public ImageAdapter(Context context, ArrayList<PostAttachFile> attachFiles) {
        this.context = context;
        this.attachFiles = attachFiles;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_image, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
            PostAttachFile file = attachFiles.get(position);
            Glide.with(context)
                    .load(file.getFileUrl())
                    .into(holder.imageView);

    }

    @Override
    public int getItemCount() {
        return attachFiles.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder {
        @BindView(R.id.image_selected)
        ImageView imageView;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}