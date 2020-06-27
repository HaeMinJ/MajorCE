package com.haemin.major.computerengineering.Main.MainMVP;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import com.haemin.major.computerengineering.Main.Payment.PaymentMVP.PaymentFragment;
import com.haemin.major.computerengineering.Main.Event.EventFragmentMVP.EventFragment;
import com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP.CommunityFragment;
import com.haemin.major.computerengineering.Main.Test.TestMVP.TestFragment;

import java.util.ArrayList;

public class MainPagerAdapter extends FragmentPagerAdapter {


    ArrayList<BaseFragment> fragments;

    public MainPagerAdapter(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
        fragments = new ArrayList<>();
        fragments.add(new EventFragment());
        fragments.add(new CommunityFragment());
        fragments.add(new TestFragment());
        fragments.add(new PaymentFragment());
    }


    @NonNull
    @Override
    public Fragment getItem(int position) {
        return fragments.get(position);
    }

    @Override
    public int getCount() {
        return fragments.size();
    }
}
