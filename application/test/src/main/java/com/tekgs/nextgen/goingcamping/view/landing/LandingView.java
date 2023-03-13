package com.tekgs.nextgen.goingcamping.view.landing;

import com.softwareonpurpose.uinavigator.UiElement;
import com.softwareonpurpose.uinavigator.UiLocatorType;
import com.softwareonpurpose.uinavigator.UiView;
import com.tekgs.nextgen.goingcamping.data.input.CamperPostData;
import com.tekgs.nextgen.goingcamping.view.GoingCampingView;
import com.tekgs.nextgen.goingcamping.view.loading.LoadingView;

import java.util.List;

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

    public LoadingView submit(CamperPostData camperPostData) {
        getCampsiteInput().set(camperPostData.getCampsite());
        getNameInput().set(camperPostData.getName());
        getSubmitElement().click();
        return UiView.expect(LoadingView.class);
    }

    private UiElement getSubmitElement() {
        String locatorId = "camper-submit";
        String description = "Camper Submit";
        return getViewElementById(description, locatorId);
    }

    private UiElement getNameInput() {
        String locatorId = "camper-name";
        String description = "Camper Name";
        return getViewElementById(description, locatorId);
    }

    private UiElement getCampsiteInput() {
        String description = "Campsite Input";
        String locatorId = "campsite-number";
        return getViewElementById(description, locatorId);
    }
}
