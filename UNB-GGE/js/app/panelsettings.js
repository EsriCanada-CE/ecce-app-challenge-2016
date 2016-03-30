/* ========================================================================
 * Calcite Maps: panelsettings.js v0.1 (jQuery)
 * ========================================================================
 * Settings panel event handlers to dynamically change map UI
 *
 * ======================================================================== */

// Opacity
function set_nav_color_opacity(e) {
    var bgColor = 'rgba(90, 147, 89, 0.74902)';
    $(".navbar").css({"background-color": bgColor});
}

function set_nav_textcolor(e) {
    var navStyle = "navbar-dark";
    $(".navbar").removeClass("navbar-default navbar-inverse navbar-light navbar-dark").addClass(navStyle);
}

function set_ui_layout() {
    var layout = $("#settingsLayout").find(":selected"),
        isMini = !$(".navbar .navbar-info").is(":visible"),
        space;

    var layout_val = "nav-position-top";
    var layout_nav_bar = "navbar-fixed-top";

    //"nav-space-none"
    space = "nav-space-none";
    // Set classes
    $("body").removeClass("nav-position-top nav-position-bottom nav-position-top-fixed " +
        "nav-position-bottom-fixed theme-side-left nav-right-absolute " +
        "nav-space-none nav-space-top nav-space-bottom nav-space-all " +
        "minibar nav-position-none").addClass(layout_val + " " + space + " " + (isMini ? "minibar" : ""));
    $(".navbar").removeClass("navbar-fixed-top navbar-fixed-bottom").addClass(layout_nav_bar);
}


function set_sustainability_panel() {
    var panelStyle = 'panel-right';
    $("body").removeClass("panel-left panel-right").addClass(panelStyle);

    //$("#btn-cartogram").click(function (e) {
    //    $("#modalSplash").modal({show: true});
    //    var elem = $("#green-factors").find(":selected");
    //    //$('option:selected', this).attr
    //    var attr = elem.attr('value');
    //    console.log(attr);
    //    community_cartogram(attr)
    //});

    $("#green-factors").change(function () {
        $("#modalSplash").modal({show: true});
        var elem = $("#green-factors").find(":selected");
        //$('option:selected', this).attr
        var attr = elem.attr('value');
        console.log(attr);
        community_cartogram(attr)
    });

    $("#btn-closemodal").click(function (e) {
        e.preventDefault();
        $("#modalSplash").modal('hide');
    });
    $("#green-factors").change(function (e) {


    })

}


(function ($) {
    'use strict';

    // ================
    // Panel - Settings
    // ================


    function resetLayout() {
        // Default themes
        $("body").removeClass("theme-default theme-top theme-top-space theme-bottom-space theme-top-space-all theme-top-fixed theme-bottom theme-bottom-space theme-bottom-space-all theme-bottom-fixed");
        // Custom themes
        $("body").removeClass("theme-jumbo-title theme-inline-right theme-inline-left theme-inline-combo");
        // Nav
        $("body").removeClass("nav-position-none nav-position-top nav-position-bottom nav-position-top-fixed nav-position-bottom-fixed");
        // Nav space
        $("body").removeClass("nav-space-none nav-space-top nav-space-bottom nav-space-all");
        // Zoom
        $("body").removeClass("zoom-top-left zoom-top-right zoom-bottom-left zoom-bottom-right");
        // Panel
        $("body").removeClass("panel-right panel-left");
        // Minibar
        $("body").removeClass("minibar");
        // Navbar
        $("nav").removeClass("navbar-fixed-top navbar-fixed-bottom");
        // $("nav").removeClass("navbar-default navbar-inverse navbar-light navbar-dark");
    }

    function syncLayout(nav, spacing, panel, zoom, navbar, theme, custom) {
        if (!custom) {
            $("body").addClass(nav + " " + spacing + " " + panel + " " + zoom);
        } else {
            $("body").addClass(nav + " " + spacing + " " + panel + " " + zoom + " " + theme);
        }
        $("nav").addClass(navbar);

        syncUIControls(nav, spacing, panel, zoom, custom);
    }

    function syncUIControls(nav, spacing, panel, zoom, custom) {
        $("#settingsLayout").val(nav);
        $("#settingsSpacing").val(spacing);
        $("#settingsPanel").val(panel);
        $("#settingsZoom").val(zoom);
    }

    // Theme
    $("#settingsThemeStandard, #settingsThemeCustom").change(function (e) {
        var theme = "theme-top";
        resetLayout();
        // Add classes
        syncLayout("nav-position-top", "nav-space-none", "panel-right", "zoom-top-left", "navbar-fixed-top", theme);
    });

    $("#settingsTextColor").on("change", function (e) {
        var navStyle = e.target.value;
        $(".navbar").removeClass("navbar-default navbar-inverse navbar-light navbar-dark").addClass(navStyle);
    });


    $("#settingsZoom").change(function (e) {
        var zoomStyle = e.target.value;
        $("body").removeClass("zoom-top-left zoom-top-right zoom-bottom-left zoom-bottom-right").addClass(zoomStyle);
    });

    $("#settingsResetLayout").on("click", function () {
        $("#settingsThemeStandard").val("theme-default");
        $("#settingsThemeStandard").trigger("change");
    });

    $("#settingsMobileZoom").on("click", function () {
        if (this.checked) {
            $("body").addClass("is-mobile-zoom");
        } else {
            $("body").removeClass("is-mobile-zoom");
        }
    });

}(jQuery));

