package com.tekgs.nextgen.goingcamping.view.loading;

import org.softwareonpurpose.gauntlet.GauntletTest;
import org.testng.annotations.Test;

@Test(groups = {GauntletTest.Application.GOING_CAMPING, GauntletTest.View.LOADING})
public class LoadingViewTest extends GauntletTest {

    @Test(groups = {TestSuite.SMOKE, TestSuite.ACCEPTANCE})
    public void smoke() {
        LoadingViewExpected expect = LoadingViewExpected.getInstance();
        LoadingView actual = LoadingView.directNav();
        then(LoadingViewCalibrator.getInstance(expect, actual));
    }
}
