package com.haemin.major.computerengineering.Main.Payment.PaymentMVP;


import android.os.Bundle;
import android.widget.ImageButton;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.Main.MainMVP.BaseFragment;
import com.haemin.major.computerengineering.Model.Payment;
import com.haemin.major.computerengineering.R;
import com.haemin.major.computerengineering.SingleTon.GlobalApplication;
import com.haemin.major.computerengineering.SingleTon.Retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 */
public class PaymentFragment extends BaseFragment implements SwipeRefreshLayout.OnRefreshListener
{

    PaymentAdapter adapter;
    @BindView(R.id.recycler_payment)
    RecyclerView recyclerPayment;
    @BindView(R.id.btn_add)
    ImageButton btnAdd;
    @BindView(R.id.swipe_refresh)
    SwipeRefreshLayout refreshLayout;

    ArrayList<Payment>payments;

    public PaymentFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_payment, container, false);
        ButterKnife.bind(this, v);

        {
            payments = new ArrayList<>();
            adapter = new PaymentAdapter(getActivity(), payments);
            recyclerPayment.setLayoutManager(new LinearLayoutManager(getActivity(), RecyclerView.VERTICAL, false));
            recyclerPayment.setAdapter(adapter);
            refresh();
            refreshLayout.setOnRefreshListener(this);
        }
        return v;
    }

    @Override
    public void onRefresh() {
        refresh();
        refreshLayout.setRefreshing(false);
    }
    void refresh(){
        RetrofitClient.getAPIService().getPaymentList(GlobalApplication.getToken()).enqueue(new Callback<ArrayList<Payment>>() {
            @Override
            public void onResponse(Call<ArrayList<Payment>> call, Response<ArrayList<Payment>> response) {
                if(response.code() == 200 && response.body() != null){
                    payments.clear();
                    payments.addAll(response.body());
                    adapter.notifyDataSetChanged();
                }
            }

            @Override
            public void onFailure(Call<ArrayList<Payment>> call, Throwable t) {

            }
        });
    }
}
