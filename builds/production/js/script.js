!function t(e,n,r){function a(o,s){if(!n[o]){if(!e[o]){var d="function"==typeof require&&require;if(!s&&d)return d(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};e[o][0].call(c.exports,function(t){var n=e[o][1][t];return a(n||t)},c,c.exports,t,e,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(t,e,n){d3.json("./data/rental_housing.json",function(t,e){d3.json("./data/cost_burden.json",function(t,n){function r(t,e,n,r,a){d3.select(t).selectAll(".card").sort(function(t,e){if("under50"==r){if("descend"==a)return d3.descending(t.under_50pct_change2014,e.under_50pct_change2014);if("ascend"==a)return d3.ascending(t.under_50pct_change2014,e.under_50pct_change2014)}if("under80"==r){if("descend"==a)return d3.descending(t.under_80pct_change2014,e.under_80pct_change2014);if("ascend"==a)return d3.ascending(t.under_80pct_change2014,e.under_80pct_change2014)}if("city"==r){if("descend"==a)return d3.descending(t.Citytownship,e.Citytownship);if("ascend"==a)return d3.ascending(t.Citytownship,e.Citytownship)}if("units"==r){if("descend"==a)return d3.descending(t.Totalrental_2014,e.Totalrental_2014);if("ascend"==a)return d3.ascending(t.Totalrental_2014,e.Totalrental_2014)}}).transition().duration(500)}function a(t,e,n){for(var r,a,i,o=0,s=!1,d=0;d<n.length;d++)if(e==n[d].city){r=n[d].y1990,a=n[d].y2000,i=n[d].y2005_2009,o=n[d].y2010_2014,s=!0;break}1==s?(t.load({columns:[[e,r,a,i,o]],unload:[u]}),u=e):t.unload()}function i(t,e,n){for(var r=0;r<n.length;r++)if(t==n[r].Citytownship){if(n[r].under_50pct_change2014_num>1e3)return"posDark";if(n[r].under_50pct_change2014_num>400)return"posMid";if(n[r].under_50pct_change2014_num>0)return"posLight";if(n[r].under_50pct_change2014_num<-1e3)return"negDark";if(n[r].under_50pct_change2014_num<-100)return"negMid";if(n[r].under_50pct_change2014_num<0)return"negLight";if(0==n[r].under_50pct_change2014_num)return"neutral"}}function o(t,e,n){for(var r=0;r<n.length;r++)if(t.properties.COCTU_DESC==n[r].Citytownship)return"<div><strong>"+t.properties.COCTU_DESC+"</strong></div><div class='"+i(t.properties.COCTU_DESC,e,n)+"'>"+d3.format("+,")(n[r].under_50pct_change2014_num)+" affordable rental units</div>";return"<div><strong>"+t.properties.COCTU_DESC+"</strong></div>"}var s=e.rentalHousing,d=n.costBurden,c=$("#map svg");$(window).on("resize",function(){var t=c.parent().width();c.attr("width",t),c.attr("height",t/(440/300))}),$(window).on("load",function(){var t=c.parent().width();c.attr("width",t),c.attr("height",t/(440/300))}),$(".rSort").click(function(){if($(".rSort").removeClass("selected"),$(this).addClass("selected"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var t="ascend"}else if($(this).hasClass("selected")){$(this).addClass("toggled");var t="descend"}r("#table","housing",s,$(this).attr("data"),t)}),$(document).ready(function(){$("#filter input").keyup(function(t){$(".card").hide();var e=$(this).val();$(".card").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})})});var l={top:20,right:40,bottom:20,left:40},c=c3.generate({bindto:"#chart",size:{height:200},padding:l,data:{x:"x",columns:[["x","1990","2000","2005-2009","2010-2014"],["Metro",.26,.24,.35,.32]]},bar:{width:{ratio:.5}},axis:{y:{tick:{max:.45,min:0,count:3,format:d3.format("%")}},x:{type:"category",tick:{count:3,multiline:!1}}},subchart:{show:!1},color:{pattern:["#666"]}}),u="Metro";!function(t,e,n,r,s,l,u,h){function p(t){if(t&&g!==t){var e=_.centroid(t);e[0],e[1],g=t}else g=null;y.selectAll("path").classed("faded",!0).classed("active",g&&function(t){return t===g})}function f(t){if(t&&g!==t){var e=_.centroid(t);e[0],e[1],g=t}else g=null;y.selectAll("path").classed("faded",!1).classed("active",g&&function(t){return t===g})}var g,v=450,m=350;if("us"==l)var C=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==l)var C=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==l)var C=d3.geo.mercator().scale([16800]).center([-92.367554,44.894796]);var _=d3.geo.path().projection(C),w=d3.select(t+" svg").attr("width",v).attr("height",m);w.append("rect").attr("class","background").attr("width",v).attr("height",m);var y=w.append("g");d3.json("shapefiles/"+r,function(t,e){y.append("g").attr("class","states").selectAll("path").data(e.features).enter().append("path").attr("d",_).on("click",p).attr("id",function(t){return t.properties.COCTU_DESC.replace(new RegExp(" ","g"),"-")}).attr("precinctName",function(t){return t.properties.COCTU_DESC}).attr("class",function(t){return i(t.properties.COCTU_DESC,s,u)}).on("mousedown",function(t,e){$("#infobox").html(t.properties.COCTU_DESC);for(var e=0;e<u.length;e++)t.properties.COCTU_DESC==u[e].Citytownship&&$("#rentalChange").html("<div class='"+i(t.properties.COCTU_DESC,s,u)+"'>"+d3.format("+,")(u[e].under_50pct_change2014_num)+" affordable rental units</div>");a(c,t.properties.COCTU_DESC,d),$(".card").hide();var n=t.properties.COCTU_DESC;$(".card").each(function(){-1!=$(this).text().toUpperCase().indexOf(n.toUpperCase())&&$(this).show()})}).style("stroke-width",1.5).call(d3.helper.tooltip(function(t,e){return o(t,s,u)})),y.append("path").attr("id","state-borders").attr("d",_)}),d3.behavior.zoom().on("zoom",function(){y.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),y.selectAll("circle").attr("d",_.projection(C)),y.selectAll("path").attr("d",_.projection(C))}),$(".zoom").click(function(){f(),$("#infobox").html("Metro Area"),$(".card").show(),$("#rentalHousing").html("<div class='negDark'>-8,874 affordable rental units</div>"),a(c,"Metro",d)}),d3.helper={},d3.helper.tooltip=function(t){return function(e){var n,r=d3.select("body").node();e.on("mouseover",function(e,a){d3.select("body").selectAll("div.tooltip").remove(),n=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(r);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001),t(e,a)}).on("mousemove",function(e,a){var i=d3.mouse(r);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var o=t(e,a)||"";n.html(o)}).on("mouseout",function(t,e){n.remove()})}}}("#map",0,0,"metro_cities.json","house","metro",s),function(t,e,n,r,a,i){d3.select(t).selectAll(".card").data(n).enter().append("div").attr("class","card").html(function(t){return"<div class='tableCell city cityCell'>"+t.Citytownship+"</div><div class='tableCell units rents'>"+d3.format(",")(t.Totalrental_2014)+"</div><div class='tableCell change'>"+t.under_50pct_change2014+"</div><div class='tableCell change'>"+t.under_80pct_change2014+"</div>"}),$(".city").click(function(){$("#infobox").html($(this).text()),jQuery.fn.d3Click=function(){this.each(function(t,e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)})},jQuery.fn.d3Down=function(){this.each(function(t,e){var n=document.createEvent("MouseEvents");n.initMouseEvent("mousedown",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)})},jQuery.fn.d3Up=function(){this.each(function(t,e){var n=document.createEvent("MouseEvents");n.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)})};var t=$(this).text();$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Down(),$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Up(),$("[id='"+t.replace(new RegExp(" ","g"),"-")+"']").d3Click()}),$(".change").each(function(){var t=$(this).text();t>=.7?($(this).addClass("posDark"),$(this).html(d3.format("+%")(t))):t>=.5?($(this).addClass("posMid"),$(this).html(d3.format("+%")(t))):t>0?($(this).addClass("posLight"),$(this).html(d3.format("+%")(t))):t<-.7?($(this).addClass("negDark"),$(this).html(d3.format("+%")(t))):t<-.5?($(this).addClass("negMid"),$(this).html(d3.format("+%")(t))):t<0?($(this).addClass("negLight"),$(this).html(d3.format("+%")(t))):0==t&&($(this).addClass("neutral"),$(this).html(d3.format("+%")(t)))})}("#table",0,s)})})},{}]},{},[1]);