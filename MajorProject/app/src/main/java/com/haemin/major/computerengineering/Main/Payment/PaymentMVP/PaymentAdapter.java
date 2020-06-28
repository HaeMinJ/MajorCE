package com.haemin.major.computerengineering.Main.Payment.PaymentMVP;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.Model.Payment;
import com.haemin.major.computerengineering.R;

import java.util.ArrayList;

public class PaymentAdapter extends RecyclerView.Adapter<PaymentAdapter.ViewHolder> {
    Context context;
    ArrayList<Payment> payments;

    public PaymentAdapter(Context context, ArrayList<Payment> payments) {
        this.context = context;
        this.payments = payments;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.recycler_payment, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Payment payment = payments.get(position);
        holder.textPostTime.setText("30분 전");
        holder.textTitle.setText(payment.getPaymentTitle());
        holder.textContents.setText(payment.getPaymentContents());
        holder.btnDetail.setOnClickListener(v -> {
            Intent intent = new Intent();
            intent.setData(Uri.parse("https://drive.google.com/drive/folders/1u2ruLZS1VPT7XUEuqDQqKMg45ufqPZKF"));
            intent.setAction(Intent.ACTION_VIEW);
            context.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return payments.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder{
        @BindView(R.id.text_post_time)
        TextView textPostTime;
        @BindView(R.id.btn_detail)
        Button btnDetail;
        @BindView(R.id.text_title)
        TextView textTitle;
        @BindView(R.id.text_contents)
        TextView textContents;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
