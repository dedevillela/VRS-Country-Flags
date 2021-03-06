/** global: VRS */
    if(VRS && VRS.globalDispatch && VRS.serverConfig) {
        VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
            if(VRS.renderPropertyHandlers) {
                VRS.renderPropertyHandlers[VRS.RenderProperty.Country] = new VRS.RenderPropertyHandler({
                    property:               VRS.RenderProperty.Country,
                    surfaces:               VRS.RenderSurface.List + VRS.RenderSurface.DetailHead + VRS.RenderSurface.InfoWindow,
                    headingKey:             'ListCountry',
                    labelKey:               'Country',
                    sortableField:          VRS.AircraftListSortableField.Country,
                    suppressLabelCallback:  function() { return true; },
                    fixedWidth:             function() { return '27px'; },
                    hasChangedCallback:     function(aircraft) { return aircraft.country.chg; },
                    renderCallback:         function(aircraft) { return customFormatCountryFlagImageHtml(aircraft); },
                    tooltipChangedCallback: function(aircraft) { return aircraft.country.chg; },
                    tooltipCallback:        function(aircraft) { return aircraft.country.val; }
                });                
            }
        });
    }
    
function customFormatCountryFlagImageHtml(aircraft)
    {
        var result = '';
        if(aircraft.country.val) {
            var codeToUse = '';
            codeToUse = aircraft.country.val;
            //Place images on 'country' folder
            result = '<img src="images/web-country/Wdth-27/Hght-20';
            if(VRS.browserHelper.isHighDpi()) result += '/HiDpi';
            result += '/' + encodeURIComponent(codeToUse) +'.bmp" width="27px" height="20px" />';
        }
        return result;
    }
    
function customPipeSeparatedCode(text, code)
    {
        var result = text;
        if(code && code.length) {
            if(result.length) result += '|';
            result += code;
        }
        return result;
    }
