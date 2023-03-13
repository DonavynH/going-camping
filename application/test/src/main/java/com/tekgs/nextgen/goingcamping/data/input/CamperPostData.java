package com.tekgs.nextgen.goingcamping.data.input;

public class CamperPostData {
    private String campsite;
    private String name;

    public static CamperPostData getInstance() {
        return new CamperPostData();
    }

    public CamperPostData withCampsite(String campsite) {
        this.campsite = campsite;
        return this;
    }

    public CamperPostData withName(String name) {
        this.name = name;
        return this;
    }

    public String getCampsite() {
        return this.campsite;
    }

    public String getName() {
        return this.name;
    }
}
