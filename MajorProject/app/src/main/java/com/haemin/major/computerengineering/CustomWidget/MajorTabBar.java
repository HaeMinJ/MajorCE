package com.haemin.major.computerengineering.CustomWidget;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import butterknife.BindView;
import butterknife.ButterKnife;
import com.haemin.major.computerengineering.R;

public class MajorTabBar  extends ConstraintLayout {

    @BindView(R.id.btn_back)
    ImageButton btnBack;
    @BindView(R.id.text_head)
    TextView textHead;
    @BindView(R.id.dummy_logo)
    ImageView dummyLogo;

    public MajorTabBar(Context context) {
        super(context);
        init(context);
    }

    public MajorTabBar(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);
        getAttrs(context, attrs);
    }

    private void getAttrs(Context context, AttributeSet attrs) {
        TypedArray typedArray = context.obtainStyledAttributes(attrs, R.styleable.MajorTabBar);
        boolean logoVisible = typedArray.getBoolean(R.styleable.MajorTabBar_iconvisible, false);
        boolean backAble = typedArray.getBoolean(R.styleable.MajorTabBar_backable, false);
        String title = typedArray.getString(R.styleable.MajorTabBar_title);

        if(title != null){
            textHead.setText(title);
        }
        if(logoVisible){
            dummyLogo.setVisibility(VISIBLE);
        }else{
            dummyLogo.setVisibility(GONE);
        }
        if(backAble){
            btnBack.setVisibility(VISIBLE);
            btnBack.setOnClickListener(v -> {
                getActivity(context).finish();
            });
        }else{
            btnBack.setVisibility(GONE);
        }
    }
    public Activity getActivity(Context context) {
        if (context == null) return null;
        if (context instanceof Activity) return (Activity) context;
        if (context instanceof ContextWrapper) return getActivity(((ContextWrapper)context).getBaseContext());
        return null;
    }

    public MajorTabBar(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
        getAttrs(context, attrs);
    }


    private void init(Context context) {
        View v = LayoutInflater.from(context).inflate(R.layout.custom_major_tab,this, false);
        ButterKnife.bind(this,v);
        addView(v);
    }
}
