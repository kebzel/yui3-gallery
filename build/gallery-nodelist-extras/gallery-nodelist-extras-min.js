YUI.add("gallery-nodelist-extras",function(g){var e=g.NodeList,d=e.prototype,f=d.filter,h=g.Lang.isString,b=g.Lang.isFunction,c=g.Lang.isNumber,a=g.Lang.isValue;d.filter=function(j){var i;if(h(j)){return f.apply(this,arguments);}if(b(j)){i=new e([]);this.each(function(l,k,m){if(j(l,k,m)){i.push(l);}});return i;}return this;};d.reject=function(i){if(h(i)){return this.filter(function(j){return !j.test(i);});}if(b(i)){return this.filter(function(l,k,j){return !i.call(null,l,k,j);});}return this;};d.first=function(m){var k,l,j;if(!a(m)){return this.item(0);}if(c(m)){return this.slice(0,m);}if(b(m)){l=this.size();for(k=0;k<l;k++){j=this.item(k);if(m(j)){return j;}}}};d.last=function(m){var k,l,j;if(!a(m)){return this.item(this.size()-1);}if(c(m)){return this.slice(-m);}if(b(m)){l=this.size();for(k=l-1;k>=0;k--){j=this.item(k);if(m(j)){return j;}}}};},"@VERSION@",{requires:["node"]});