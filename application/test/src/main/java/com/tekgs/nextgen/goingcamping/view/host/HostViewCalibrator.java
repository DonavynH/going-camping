package com.tekgs.nextgen.goingcamping.view.host;

import com.softwareonpurpose.calibrator4test.Calibrator;

public class HostViewCalibrator extends Calibrator {
    private static final String DESCRIPTION = "'Landing' view";
    private final HostView actual;
    private final HostViewExpected expected;

    public HostViewCalibrator(HostViewExpected expected, HostView actual) {
        super(DESCRIPTION, expected, actual);
        this.expected = expected;
        this.actual = actual;
    }


    public static Calibrator getInstance(HostViewExpected expect, HostView actual) {
        return new HostViewCalibrator(expect, actual);
    }

    @Override
    protected void executeVerifications() {
        verify("Header Text", expected.getPageHeader(), actual.getPageHeader());
    }
}
