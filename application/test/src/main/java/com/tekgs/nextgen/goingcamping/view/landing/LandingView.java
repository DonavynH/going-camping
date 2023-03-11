package com.tekgs.nextgen.goingcamping.view.landing;

import com.softwareonpurpose.uinavigator.UiElement;
import com.softwareonpurpose.uinavigator.UiLocatorType;
import com.softwareonpurpose.uinavigator.UiView;
import com.tekgs.nextgen.goingcamping.view.GoingCampingView;

public class LandingView extends GoingCampingView implements LandingViewCalibratable {

    private static final String RELATIVE_URI = "";
    private static final String DESCRIPTION = "'Landing' view";
    private static final String LOCATOR_TYPE = UiLocatorType.ID;
    private static final String LOCATOR_VALUE = "landing-view";


    public LandingView() {
        super(RELATIVE_URI, UiElement.getInstance(DESCRIPTION, LOCATOR_TYPE, LOCATOR_VALUE));
    }

    public static LandingView directNav() {
        new LandingView().load();
        return UiView.expect(LandingView.class);
    }

    private UiElement getLandingHeaderElement() {
        String description = "Landing Header";
        String locatorValue = "landing-header";
        return getViewElementById(description, locatorValue);
    }

    @Override
    public String getLandingHeader() {
        return getLandingHeaderElement().getText();
    }
}
