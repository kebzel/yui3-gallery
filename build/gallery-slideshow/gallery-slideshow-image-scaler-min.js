<<<<<<< HEAD
YUI.add("gallery-slideshow-image-scaler",function(B){var A=function(C){this._ss=C.host;A.superclass.constructor.apply(this,arguments);};A.NS="scaling";A.NAME="slideshowImageScaler";A.ATTRS={height:{validator:B.Lang.isNumber},width:{validator:B.Lang.isNumber},scaleFactor:{validator:B.Lang.isNumber}};B.extend(A,B.Plugin.Base,{initializer:function(C){this.doAfter("_createImage",this._scaleImage);},_scaleImage:function(D){var F=this.get("scaleFactor"),E=D.width||this.get("width"),C=D.height||this.get("height"),G=D._node.one("img");if(F){G.setStyles({height:F+"%",width:F+"%"});}else{if(E){G.setStyle("width",E);}if(C){G.setStyle("height",C);}}}});B.SlideShow.ImageScaler=A;},"@VERSION@",{requires:["gallery-slideshow-base","plugin"]});
=======
YUI.add("gallery-slideshow-image-scaler",function(B){var A=function(C){this._ss=C.host;A.superclass.constructor.apply(this,arguments);};A.NS="scaling";A.NAME="slideshowImageScaler";A.ATTRS={height:{validator:B.Lang.isNumber},width:{validator:B.Lang.isNumber},scaleFactor:{validator:B.Lang.isNumber}};B.extend(A,B.Plugin.Base,{initializer:function(C){this.doAfter("_createImage",this._scaleImage);},_scaleImage:function(D){var F=this.get("scaleFactor"),E=D.width||this.get("width"),C=D.height||this.get("height"),G=D._node.one("img");if(F){G.setStyles({height:F+"%",width:F+"%"});}else{if(E){G.setStyle("width",E);}if(C){G.setStyle("height",C);}}}});B.SlideShow.ImageScaler=A;},"gallery-2010.03.23-17-54",{requires:["gallery-slideshow","plugin"]});
>>>>>>> 94439ec26f261e2b796f74cb22f5a85434b025c4
