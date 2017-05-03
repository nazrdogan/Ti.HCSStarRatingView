/**
 * @author Nazir Dogan
 */

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
    

module.exports = HCSStarRatingViewDelegate;