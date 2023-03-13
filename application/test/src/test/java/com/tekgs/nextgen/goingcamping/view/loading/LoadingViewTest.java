package com.tekgs.nextgen.goingcamping.view.loading;

import com.tekgs.nextgen.goingcamping.data.input.CamperPostData;
import com.tekgs.nextgen.goingcamping.view.landing.LandingView;
import org.softwareonpurpose.gauntlet.GauntletTest;
import org.testng.annotations.Test;

@Test(groups = {GauntletTest.Application.GOING_CAMPING, GauntletTest.View.LOADING})
public class LoadingViewTest extends GauntletTest {

    @Test(groups = {TestSuite.SMOKE})
    public void smoke() {
        LoadingViewExpected expect = LoadingViewExpected.getInstance();
        LoadingView actual = LoadingView.directNav();
        then(LoadingViewCalibrator.getInstance(expect, actual));
    }
    @Test(groups = {TestSuite.ACCEPTANCE}, dependsOnMethods = "smoke")
    public void fromLandingView() {
        LoadingViewExpected expect = LoadingViewExpected.getInstance();
        CamperPostData validCamperPostData = CamperPostData.getInstance().withCampsite("C5892").withName("Donavyn");
        LoadingView actual = LandingView.directNav().submit(validCamperPostData);
        then(LoadingViewCalibrator.getInstance(expect, actual));
    }

}
