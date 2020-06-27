package com.haemin.major.computerengineering.Main.Community.CommunityFragmentMVP;

public class CommunityPresenter implements CommunityContract.CommunityPresenter {

    CommunityContract.CommunityView view;

    public CommunityPresenter(CommunityContract.CommunityView view) {
        this.view = view;
    }

    @Override
    public void requestPostData() {

    }
}
