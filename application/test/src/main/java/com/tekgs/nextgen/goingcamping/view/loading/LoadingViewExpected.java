package com.tekgs.nextgen.goingcamping.view.loading;

public class LoadingViewExpected implements LoadingViewCalibratable{
    public static final String LOADING_MESSAGE = "Loading...";
    public static LoadingViewExpected getInstance() {
        return new LoadingViewExpected();
    }

    @Override
    public String getLoadingMessage() {
        return LOADING_MESSAGE;
    }
}
