package com.tekgs.nextgen.goingcamping.view.loading;

import com.softwareonpurpose.uinavigator.UiElement;
import com.softwareonpurpose.uinavigator.UiLocatorType;
import com.softwareonpurpose.uinavigator.UiView;
import com.tekgs.nextgen.goingcamping.view.GoingCampingView;

public class LoadingView extends GoingCampingView implements LoadingViewCalibratable{
    private static final String RELATIVE_URI = "loading";
    private static final String DESCRIPTION = "'Loading' view";
    private static final String LOCATOR_TYPE = UiLocatorType.ID;
    private static final String LOCATOR_VALUE = "loading-view";
    protected LoadingView() {
        super(RELATIVE_URI, UiElement.getInstance(DESCRIPTION, LOCATOR_TYPE, LOCATOR_VALUE));
    }

    public static LoadingView directNav() {
        new LoadingView().load();
        return UiView.expect(LoadingView.class);
    }

    @Override
    public String getLoadingMessage() {
        String locatorId = "loading-message";
        String description = "Loading Message";
        return getViewElementById(description, locatorId).getText();
    }
}
