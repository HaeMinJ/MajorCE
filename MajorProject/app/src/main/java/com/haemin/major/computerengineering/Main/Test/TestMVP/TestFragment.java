package com.haemin.major.computerengineering.Main.Test.TestMVP;


import android.os.Bundle;
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
import com.haemin.major.computerengineering.Model.TestInfo;
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
public class TestFragment extends BaseFragment implements SwipeRefreshLayout.OnRefreshListener {

    TestAdapter adapter;
    ArrayList<TestInfo> testInfos;
    @BindView(R.id.recycler_test)
    RecyclerView recyclerTest;
    @BindView(R.id.swipe_refresh)
    SwipeRefreshLayout refreshLayout;

    public TestFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_test, container, false);
        ButterKnife.bind(this, v);
        {
            testInfos = new ArrayList<>();
            adapter = new TestAdapter(getActivity(), testInfos);
            recyclerTest.setLayoutManager(new LinearLayoutManager(getActivity(), RecyclerView.VERTICAL, false));
            recyclerTest.setAdapter(adapter);
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

    private void refresh() {
        RetrofitClient.getAPIService().getTestList(GlobalApplication.getToken()).enqueue(new Callback<ArrayList<TestInfo>>() {
            @Override
            public void onResponse(Call<ArrayList<TestInfo>> call, Response<ArrayList<TestInfo>> response) {
                if(response.code() == 200 && response.body() != null){
                    testInfos.clear();
                    testInfos.addAll(response.body());
                    adapter.notifyDataSetChanged();
                }
            }

            @Override
            public void onFailure(Call<ArrayList<TestInfo>> call, Throwable t) {

            }
        });
    }
}
