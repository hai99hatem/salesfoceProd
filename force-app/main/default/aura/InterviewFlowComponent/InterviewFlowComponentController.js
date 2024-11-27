({
    handleInit: function (component, event, helper) {
        // Log that the initialization function is triggered
        console.log("handleInit executed");

        // Parse the ResourceId from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const resourceId = urlParams.get("ResourceId");

        // Log the extracted ResourceId
        console.log("Extracted ResourceId:", resourceId);

        if (resourceId) {
            // Set the ResourceId attribute
            component.set("v.resourceId", resourceId);

            // Get the flow component
            const flow = component.find("interviewFlow");

            // Prepare flow input variables
            const flowInputs = [
                {
                    name: "ResourceId", // Name must match the flow variable
                    type: "String",
                    value: resourceId
                }
            ];

            // Log flow inputs for debugging
            console.log("Flow inputs prepared:", flowInputs);

            // Start the flow
            flow.startFlow("FLW_ET_Interview", flowInputs);
        } else {
            console.error("ResourceId parameter is missing in the URL.");
        }
    }
});