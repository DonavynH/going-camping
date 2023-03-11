package com.tekgs.nextgen.goingcamping.view.landing;

public class LandingViewExpected implements LandingViewCalibratable {

    public static final String LANDING_PAGE_HEADER = "I'm going camping and bringing...";

    public LandingViewExpected() {

    }

    public static LandingViewExpected getInstance() {
        return new LandingViewExpected();
    }


    @Override
    public String getLandingHeader() {
        return LANDING_PAGE_HEADER;
    }
}