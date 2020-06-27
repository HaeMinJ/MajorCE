package com.haemin.major.computerengineering.Main.Payment.PaymentMVP;


import android.os.Bundle;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import butterknife.ButterKnife;
import com.haemin.major.computerengineering.Main.MainMVP.BaseFragment;
import com.haemin.major.computerengineering.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class PaymentFragment extends BaseFragment
{

    public PaymentFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_payment, container, false);
        ButterKnife.bind(this, v);
        return v;
    }

}
