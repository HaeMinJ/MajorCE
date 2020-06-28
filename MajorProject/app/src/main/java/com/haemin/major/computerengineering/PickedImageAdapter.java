package com.haemin.major.computerengineering;

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

import java.io.File;
import java.util.ArrayList;

public class PickedImageAdapter extends RecyclerView.Adapter<PickedImageAdapter.ViewHolder> {

    Context context;
    ArrayList<File> files;
    OnFirstClickListener onFirstClickListener;


    public PickedImageAdapter(Context context, ArrayList<File> files, OnFirstClickListener onFirstClickListener) {
        this.context = context;
        this.files = files;
        this.onFirstClickListener = onFirstClickListener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_image, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        if (position == 0) {
            Glide.with(context)
                    .load(R.drawable.bg_select_image)
                    .into(holder.imageView);
            holder.imageView.setOnClickListener(v -> onFirstClickListener.onFirstClicked());
        } else {
            File file = files.get(position - 1);
            Glide.with(context)
                    .load(file)
                    .into(holder.imageView);
        }
    }

    @Override
    public int getItemCount() {
        int size = files.size() + 1;
        return size;
    }

    public interface OnFirstClickListener {
        void onFirstClicked();
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
