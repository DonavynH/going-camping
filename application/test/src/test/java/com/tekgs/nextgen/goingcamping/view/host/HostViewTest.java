package com.tekgs.nextgen.goingcamping.view.host;

import com.tekgs.nextgen.goingcamping.view.landing.LandingView;
import org.softwareonpurpose.gauntlet.GauntletTest;
import org.testng.annotations.Test;

@Test(groups = {GauntletTest.Application.GOING_CAMPING, GauntletTest.View.HOST})
public class HostViewTest extends GauntletTest {

    @Test(groups = {TestSuite.SMOKE, TestSuite.ACCEPTANCE})
    public void smoke() {
        addRequirements("Trip Organizer - Host Game");
        HostViewExpected expect = HostViewExpected.getInstance();
        HostView actual = HostView.directNav();
        then(HostViewCalibrator.getInstance(expect, actual));
    }

    @Test(groups = {TestSuite.ACCEPTANCE, TestSuite.DEBUG}, dependsOnMethods = "smoke")
    public void fromLandingView() {
        addRequirements("Trip Organizer - Host Game");
        HostViewExpected expect = HostViewExpected.getInstance();
        HostView actual = LandingView.directNav().clickHostButton();
        then(HostViewCalibrator.getInstance(expect, actual));
    }


}
