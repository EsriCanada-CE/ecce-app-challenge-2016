/**
 * Created by Titus on 3/4/2016.
 */

community_cartogram.carto = null;
community_cartogram.map = null;
community_cartogram.comm = null;
community_cartogram.colorScale = null;
community_cartogram.proj = null;
community_cartogram.csv = null;
community_cartogram.topology = null;
community_cartogram.geometries = null;
community_cartogram.sustainability_data = null;
community_cartogram.attr = null;

/**
 * @description community cartogram
 * @param attr
 */
function community_cartogram(attr) {
    var fn = community_cartogram;
    if (fn.attr !== attr){
        console.log('reset');
        fn.attr = attr
    }


    if (fn.map === null) {
        fn.colorScale = chroma
            .scale(['#e6ff4d', '#1fe9b6'])
            .domain([0, 1]);

        fn.map = d3.select("#carto");

        fn.comm = fn.map.append("g")
            .attr("id", "comm")
            .selectAll("path");

        fn.proj = d3.geo.albers()
            .origin([-66.66, 45.9])
            .parallels([48, 44])
            .scale(1.8e5)
            .translate([200, 350]);

    }

    var carto_features;

    fn.carto = d3.cartogram()
        .projection(fn.proj)
        .properties(function (d) {
            return d.properties; //geom prop
        });
    if (!fn.sustainability_data){
        fetch_sustainability_data("data/communities.csv")
    }
    if (!fn.topology){
        create_community_map("data/communities.topo.json")
    }

    update_carto(attr);

    function fetch_sustainability_data(url){
        // community factors
        fn.sustainability_data = d3.map();
        d3.csv(url, function (data) {
            data.forEach(function (d) {
                fn.sustainability_data.set(d.Name, d);
            })
        });
    }

    function create_community_map(url){
        // loads topojson file and creates the map.
        d3.json(url, function (data) {
            fn.topology = data;
            fn.geometries = fn.topology.objects.Regions.geometries;

            //these 2 below create the map and are based on the topojson implementation
            var features = fn.carto.features(fn.topology, fn.geometries);
            var path = d3.geo.path()
                .projection(fn.proj);

            fn.comm = fn.comm.data(features)
                .enter()
                .append("path")
                .attr("class", "comm")
                .attr("id", function (d) {
                    return d.properties.Name;
                })
                .attr("fill", function (e) {
                    return gen_color();
                })
                .attr("d", path);

            fn.comm.append("title")
                .text(function (d) {
                    return d.properties.Name;
                });

            d3.select("#click_to_run").text("click here to run");
        });
    }

    //color
    function gen_color() {
        return fn.colorScale(Math.random()).hex();
    }

    //update cartogram
    function update_carto(attr) {
        d3.select("#click_to_run").text("generating cartogram...");
        setTimeout(function () {
            //scale community based on sustainability factor
            //scaling is relative to the max value.
            fn.carto.value(function (d) {
                var obj = fn.sustainability_data.get(d.properties["Name"]);
                return parseFloat(obj[attr]);
            });

            //generate topology features if not defined
            if (carto_features == undefined) {
                carto_features = fn.carto(fn.topology, fn.geometries ).features;
            }

            //update the carto-map data
            fn.comm.data(carto_features)
                .select("title")
                .text(function (d) {
                    return d.properties.Name;
                });

            fn.comm.transition()
                .duration(2000)
                .each("end", function () {
                    d3.select("#click_to_run").text("done")
                })
                .attr("d", fn.carto.path);
        }, 20);
    }


}
