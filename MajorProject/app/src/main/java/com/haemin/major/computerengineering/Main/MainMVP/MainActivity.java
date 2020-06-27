package com.haemin.major.computerengineering.Main.MainMVP;

import android.content.Context;
import android.content.Intent;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import androidx.viewpager.widget.ViewPager;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.google.android.material.tabs.TabLayout;
import com.haemin.major.computerengineering.R;

public class MainActivity extends AppCompatActivity {

    @BindView(R.id.nav_tab)
    TabLayout tabLayout;
    @BindView(R.id.viewpager)
    ViewPager viewPager;
    MainPagerAdapter pagerAdapter;

    public static void start(Context context) {
        Intent starter = new Intent(context, MainActivity.class);
        //starter.putExtra();
        context.startActivity(starter);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        {
            pagerAdapter = new MainPagerAdapter(getSupportFragmentManager(),4);
            viewPager.setAdapter(pagerAdapter);
        }
        {
            tabLayout.setupWithViewPager(viewPager);
            tabLayout.setTabRippleColorResource(R.color.colorPrimary);
            initializeTab();
            tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
                @Override
                public void onTabSelected(TabLayout.Tab tab) {
                    tab.view.setAlpha(1.0f);
                }

                @Override
                public void onTabUnselected(TabLayout.Tab tab) {
                    tab.view.setAlpha(0.7f);
                }

                @Override
                public void onTabReselected(TabLayout.Tab tab) {
                    tab.view.setAlpha(1.0f);
                }
            });

        }

    }

    private void initializeTab() {
        tabLayout.getTabAt(0).setText("이벤트").setIcon(R.drawable.event);
        tabLayout.getTabAt(0).view.setAlpha(1.0f);
        tabLayout.getTabAt(1).setText("커뮤니티").setIcon(R.drawable.project);
        tabLayout.getTabAt(1).view.setAlpha(0.7f);
        tabLayout.getTabAt(2).setText("시험 일정").setIcon(R.drawable.test);
        tabLayout.getTabAt(2).view.setAlpha(0.7f);
        tabLayout.getTabAt(3).setText("학생회").setIcon(R.drawable.council);
        tabLayout.getTabAt(3).view.setAlpha(0.7f);
    }
}
