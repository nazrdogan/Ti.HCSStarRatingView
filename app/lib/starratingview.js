/**
 * @author Nazir Dogan
 *
 */
var CGRectMake = require('CoreGraphics').CGRectMake,
    UIColor = require('UIKit/UIColor'),
    UIScreen = require('UIKit/UIScreen'),
    UIControlEventValueChanged = require("UIKit").UIControlEventValueChanged;

var HCSStarRatingView = require("HCSStarRatingView/HCSStarRatingView");
var HCSStarRatingViewDelegate = require("delegate");

var delegateView =   new HCSStarRatingViewDelegate();
exports.delegate = function(){
   return  delegateView;
};


exports.createStar = function() {

    var bounds = UIScreen.mainScreen.bounds;
    var starRatingView = new HCSStarRatingView();
    starRatingView.frame = CGRectMake(20, 30, bounds.size.width - 40, bounds.size.height - 100);
    starRatingView.addTargetActionForControlEvents(delegateView, "valueChanged:", UIControlEventValueChanged);
    return starRatingView;
};

