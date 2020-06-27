package com.haemin.major.computerengineering.Main.Event.EventFragmentMVP;


import android.os.Bundle;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.haemin.major.computerengineering.Main.MainMVP.BaseFragment;
import com.haemin.major.computerengineering.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class EventFragment extends BaseFragment {


    public EventFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_event, container, false);
    }

}
