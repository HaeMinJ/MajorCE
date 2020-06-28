package com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP;


import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageButton;
import android.widget.Toast;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.Main.Community.CommunityAddMVP.CommunityAddActivity;
import com.haemin.major.computerengineering.Main.MainMVP.BaseFragment;
import com.haemin.major.computerengineering.Model.Post;
import com.haemin.major.computerengineering.R;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 */
public class CommunityFragment extends BaseFragment implements CommunityContract.CommunityView, SwipeRefreshLayout.OnRefreshListener {



    @BindView(R.id.recycler_community)
    RecyclerView recyclerCommunity;
    @BindView(R.id.btn_add)
    ImageButton btnAdd;
    @BindView(R.id.swipe_refresh)
    SwipeRefreshLayout refreshLayout;

    CommunityAdapter adapter;
    ArrayList<Post> posts;
    CommunityContract.CommunityPresenter presenter;

    public CommunityFragment() {
        // Required empty public constructor
    }

    @Override
    public void onRefresh() {
        presenter.requestPostData();
        refreshLayout.setRefreshing(false);
    }

    @Override
    public void showToast(String text) {
        Toast.makeText(getActivity(),text,Toast.LENGTH_SHORT).show();
    }

    @Override
    public void notifyDataSet(ArrayList<Post> posts) {
        this.posts.clear();
        this.posts.addAll(posts);
        adapter.notifyDataSetChanged();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v = inflater.inflate(R.layout.fragment_community, container, false);
        ButterKnife.bind(this, v);
        refreshLayout.setOnRefreshListener(this);
        {
            posts = new ArrayList<>();
            adapter = new CommunityAdapter(getActivity(), posts);
            recyclerCommunity.setLayoutManager(new GridLayoutManager(getActivity(), 2, RecyclerView.VERTICAL, false));
            recyclerCommunity.setAdapter(adapter);
        }
        btnAdd.setOnClickListener(v1 -> {
            startActivity(new Intent(getActivity(), CommunityAddActivity.class));
        });
        presenter = new CommunityPresenter(this);
        presenter.requestPostData();

        return v;
    }

}
