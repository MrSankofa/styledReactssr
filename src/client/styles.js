import styled from 'styled-components';

module.exports.component = styled.div`    {
    font-family: 'Open Sans', sans-serif;
}

#Neighborhood {
    margin: auto;
}

p {
    font-size: 15px;
}

a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
    color: blue;
}

a:hover {
    color: lightblue
}

button:focus {
    outline: none;
}

button:hover {
    cursor: pointer;
}


/* app title header */

#pageTitle {
    clear: both;
    display: block;
    font-weight: 500;

    padding-bottom: 10px;
    border-bottom-color: lightgrey;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    
    padding-top: 10px;
    border-top-color: lightgrey;
    border-top-style: solid;
    border-top-width: 1px;
    margin-bottom: 20px;

}


/* Median Zestimate */

#medianZestimateAndMarketTempContainer {
    width: 100%;
}

#medianZestimateSection {
    float: left;
    width: 45%;
}

#medianZestimateHeader {
    display: inline-block;
    margin-bottom: 10px;
}

#averagePrice {
    margin-bottom: 0px;
}

#zestimateArrow {
    padding-top: 10px;
}

#twelveMonthChange {
    display: inline-block;
    font-size: 20px;
    font-weight: normal;
    padding-left: 5px;
    padding-bottom: 5px;
    margin: 5px;
}

.past12MonthsText {
    font-size: 12px;
}



/* Market Temp */

#marketTempSection {
    float: right;
    width: 45%;
    
}

#marketTempHeader {
    display: inline-block;
    margin-bottom: 10px;
}

.questionMarkButton {
    display: inline-block;
    border-radius: 50%;
    background-color: rgb(187, 185, 185);
    color: white;
    border: none;
    height: 18px;
    width: 18px;
    font-size: 10px;
    text-align: center;
}

.dialogueContainer {
    display: inline-block;
    position: relative;
    z-index: 3;
}

.ui-dialog-container {
    position: absolute;
}

.ui-dialog {
    position: absolute;
    top: 100px;
    left: 275px;
    background-color: rgb(46, 44, 44);
    color: white;
    font-size: 11px;
    line-height: 0.5;
    border-radius: 5px;
    width: 270px;
    opacity: .95;
}

.button {
    background-color: transparent;
    color: white;
    border: none;
}

.dialogueMessageLine {
    padding-left: 5px;
    font-size: 12px;
}

.dialogueLink {
    font-size: 12px;
    padding-left: 5px;
}

.questionMarkButton:hover {
    background-color: black;
}

#temperatureBarContainer {
    position: relative;
}

#temperatureBar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background-color: lightgrey;
    border-radius: 15px;
}

#temperature {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 15px;
background-image: linear-gradient(to right, blue, red);
clip-path: inset(0% 10% 0% 0%);
border-radius: 15px;
}

#buyersMarketText {
    padding-top: 20px;
    font-size: 12px;
    float: left;
}

#sellersMarketText {
    padding-top: 20px;
    font-size: 12px;
    float: right;
}




/* Neighborhood Description */

#neighborhoodInfoDescription {
    clear: both;
    padding-top: 20px;
    padding-bottom: 75px;
    
}

#walkerScore {
    float: left;
    font-size: 13px;
}

#transitScore {
    float: right;
    font-size: 13px;
}

.scoreIcons {
    width: 13px;
    height: 13px;
    padding-right: 5px;
}

#scoreNumbers {
    font-weight: bold;
}

.scoreButtons {
    background-color: white;
    border: none;
    color: blue;
    font-size: 13px;

}







/* Map */

.propertyMarkerContainer {
    position: relative;
}

.propertyMarkerPrice {
    background-color: rgb(248, 248, 248);
    color: black;
    border-radius: 4px;
    
}

.propertyMarkerPrice:hover {
    background-color: white;
    color: black;
}

.circle {
    height: 10px;
    width: 10px;
    background-color: rgb(243, 40, 18);
    border-radius: 50%;
    position: absolute;
    left: 20px;
    bottom: 15px;
    border-color: green;
    border-width: 10px;
    
    
}

.currentPropMapMarkerImg {
    height: 50px;
    width: 50px;
    border-width: 4px;
    border-color: white;
    
}




/* Nearby Homes */

#nearbyHomesSectionContainer {
    padding-bottom: 30px;
    border-bottom-color: lightgrey;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}

#nearbyHomesCarrouselContainer {
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center
}

.nearbyHomesPicsScroll {
    width: 20px;
    font-size: 15px;
    background-color: white;
    border: none;
}

.nearbyHomesPicContainer {
    position: relative;
    height: 150px;
    width: 43%;

}

.nearbyHomesPic {
    display: absolute;
    height: 150px;
    width: 100%;
    border: 2px solid white;
}

.nearbyHomesPicTextOverlayPhotos {
    position: absolute;
    left: 2%;
    top: 2%;
    color: white;
    font-size: 12px;
}

.nearbyHomesPicTextOverlayOnOffMarket {
    position: absolute;
    left: 2%;
    top: 52%;
    color: white;
}

.nearbyHomesPicTextOverlayPrice {
    position: absolute;
    left: 2%;
    top: 65%;
    font-size: 25px;
    color: white;
}

.nearbyHomesPicTextOverlayBeds {
    position: absolute;
    left: 40%;
    top: 70%;
    color: white;
    font-size: 13px;
}

.nearbyHomesPicTextOverlayAddress {
    position: absolute;
    left: 2%;
    top: 88%;
    color: white;
    font-size: 13px;
    color: rgb(240, 240, 240);
}
`;