package com.haemin.major.computerengineering.Main.Test.TestMVP;

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
import com.haemin.major.computerengineering.Model.Payment;
import com.haemin.major.computerengineering.Model.TestInfo;
import com.haemin.major.computerengineering.R;

import java.util.ArrayList;

public class TestAdapter extends RecyclerView.Adapter<TestAdapter.ViewHolder> {

    Context context;
    ArrayList<TestInfo> tests;

    public TestAdapter(Context context, ArrayList<TestInfo> tests) {
        this.context = context;
        this.tests = tests;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_test, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        TestInfo testInfo = tests.get(position);
        holder.textPostTime.setText(DateUtils.getRelativeTimeSpanString(testInfo.getTestTime()));
        holder.textTitle.setText(testInfo.getTestName());
        holder.textContents.setText(testInfo.getTestRange());
    }

    @Override
    public int getItemCount() {
        return tests.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder{

        @BindView(R.id.text_post_time)
        TextView textPostTime;
        @BindView(R.id.image_thumbnail)
        ImageView imageThumbnail;
        @BindView(R.id.text_title)
        TextView textTitle;
        @BindView(R.id.text_contents)
        TextView textContents;
        @BindView(R.id.btn_add_calendar)
        TextView textAddCalendar;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
