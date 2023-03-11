package com.tekgs.nextgen.goingcamping.view.landing;

import com.softwareonpurpose.calibrator4test.Calibrator;

public class LandingVewCalibrator extends Calibrator {
    private static final String description = "'Landing' view";
    private final LandingViewExpected expected;
    private final LandingView actual;

    protected LandingVewCalibrator(LandingViewExpected expected, LandingView actual) {
        super(description, expected, actual);
        this.expected = expected;
        this.actual = actual;
    }


    public static Calibrator getInstance(LandingViewExpected expect, LandingView actual) {
        return new LandingVewCalibrator(expect, actual);
    }


    @Override
    protected void executeVerifications() {
        verify("Landing Header", expected.getLandingHeader(), actual.getLandingHeader());
    }
}
