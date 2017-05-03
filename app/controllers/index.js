var CGRectMake = require('CoreGraphics').CGRectMake,
    UIColor = require('UIKit/UIColor'),
    UIScreen = require('UIKit/UIScreen'), 
    UIControlEventValueChanged = require("UIKit").UIControlEventValueChanged;
 

var HCSStarRatingView = require("HCSStarRatingView/HCSStarRatingView");
var bounds = UIScreen.mainScreen.bounds;
     
var starRatingView = new HCSStarRatingView();   
     
starRatingView.frame = CGRectMake(20, 30, bounds.size.width - 40, bounds.size.height - 100);

var HCSStarRatingViewDelegate = Hyperloop.defineClass('HCSStarRatingViewDelegate', 'NSObject');

HCSStarRatingViewDelegate.addMethod({
    selector : 'valueChanged:',
    instance : true,
    arguments : ['HCSStarRatingView'],
    callback : function(sender) {
        if (this.valueChanged) {
            this.valueChanged(sender);
        }
    }
});

var delegate = new HCSStarRatingViewDelegate();

delegate.valueChanged = function(sender) {
    Ti.API.info('Value Changed');
    Ti.API.info(starRatingView.value);
};

starRatingView.addTargetActionForControlEvents(delegate, "valueChanged:", UIControlEventValueChanged);

     
$.index.add(starRatingView);     
$.index.open();
