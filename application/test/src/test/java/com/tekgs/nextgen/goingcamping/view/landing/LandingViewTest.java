package com.tekgs.nextgen.goingcamping.view.landing;

import org.softwareonpurpose.gauntlet.GauntletTest;
import org.testng.annotations.Test;

@Test(groups = {GauntletTest.Application.GOING_CAMPING, GauntletTest.View.LANDING})
public class LandingViewTest extends GauntletTest {

    @Test(groups = {TestSuite.SMOKE, TestSuite.ACCEPTANCE})
    public void smoke() {
        addRequirements("Landing Page");
        LandingViewExpected expect = LandingViewExpected.getInstance();
        LandingView actual = LandingView.directNav();
        then(LandingVewCalibrator.getInstance(expect, actual));
    }
}
