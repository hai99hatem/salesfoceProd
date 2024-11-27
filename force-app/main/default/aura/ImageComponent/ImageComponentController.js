({
    doInit : function(component, event, helper) {
        // Set the logo URL to the static resource
        var logoUrl = $A.get("$Resource.OvaloLogo");
        component.set("v.logoUrl", logoUrl);
    }
})