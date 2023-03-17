package com.tekgs.nextgen.goingcamping.view.host;

public class HostViewExpected implements HostViewCalibratable {
    public static final String HOST_PAGE_HEADER = "Welcome To Your Bus Trip Organizer!";

    public static HostViewExpected getInstance() {
        return new HostViewExpected();
    }

    @Override
    public String getPageHeader() {
        return HOST_PAGE_HEADER;
    }
}
