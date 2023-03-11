package com.tekgs.nextgen.goingcamping.view;

import com.softwareonpurpose.uinavigator.UiElement;
import com.softwareonpurpose.uinavigator.UiLocatorType;
import com.softwareonpurpose.uinavigator.UiView;

public class GoingCampingView extends UiView {
    public static final String DOMAIN_URL = "http://localhost:3000";

    protected GoingCampingView(String relativeUri, UiElement viewElement) {
        super(String.format("%s/%s", DOMAIN_URL, relativeUri), viewElement);
    }

    @Override
    protected boolean confirmElementStates() {
        return this.getElement().waitUntilVisible();
    }

    protected UiElement getViewElementById(String description, String locatorId){
        return UiElement.getInstance(description, UiLocatorType.ID, locatorId, this.getElement());
    }
    protected UiElement getViewElementByClass(String description, String locatorClass){
        return UiElement.getInstance(description, UiLocatorType.CLASS, locatorClass, this.getElement());
    }
}
