var HCSStarRatingView = require("starratingview");
var starRatingView = HCSStarRatingView.createStar();
var delegate = HCSStarRatingView.delegate();

delegate.valueChanged = function(sender) {
    Ti.API.info('Value Changed');
    Ti.API.info(starRatingView.value);

};

$.index.add(starRatingView);

$.index.open();
