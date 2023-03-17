package com.tekgs.nextgen.goingcamping.view.host;

import com.softwareonpurpose.uinavigator.UiElement;
import com.softwareonpurpose.uinavigator.UiLocatorType;
import com.softwareonpurpose.uinavigator.UiView;
import com.tekgs.nextgen.goingcamping.view.GoingCampingView;

public class HostView extends GoingCampingView implements HostViewCalibratable {
    private static final String RELATIVE_URI = "host";
    private static final String DESCRIPTION = "'Host' view";
    private static final String LOCATOR_TYPE = UiLocatorType.ID;
    private static final String LOCATOR_VALUE = "host-view";

    public HostView() {
        super(RELATIVE_URI, UiElement.getInstance(DESCRIPTION, LOCATOR_TYPE, LOCATOR_VALUE));
    }

    public static HostView directNav() {
        new HostView().load();
        return UiView.expect(HostView.class);
    }

    @Override
    public String getPageHeader() {
        return getPageHeaderElement().getText();
    }

    private UiElement getPageHeaderElement() {
        return getViewElementById("Header", "host-header");
    }

}
