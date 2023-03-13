package com.tekgs.nextgen.goingcamping.view.loading;

import com.softwareonpurpose.calibrator4test.Calibrator;

public class LoadingViewCalibrator extends Calibrator {
    private static final String DESCRIPTION = "'Landing' view";
    private final LoadingViewExpected expected;
    private final LoadingView actual;

    protected LoadingViewCalibrator(LoadingViewExpected expected, LoadingView actual) {
        super(DESCRIPTION, expected, actual);
        this.actual = actual;
        this.expected = expected;
    }

    public static LoadingViewCalibrator getInstance(LoadingViewExpected expect, LoadingView actual) {
        return new LoadingViewCalibrator(expect, actual);
    }

    @Override
    protected void executeVerifications() {
        verify("Loading Message", actual.getLoadingMessage(), expected.getLoadingMessage());
    }
}
