var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
       	    if((a<=0)||(b<=0)||(c<=0)) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
   	    if((a!=b)&&(a!=c)&&(b!=c)) return false ;
    	if((a<=0)||(b<=0)||(c<=0)) return false ;
    	 if((a+b<=c)||(a+c<=b)||(b+c<=a)) return false ;
    	 //if(((a+b)<c&&(a==b)&&(a!=c) return false;
    	    return true ;
    },

    isScalene: function(a,b,c) {
  	    if((a+b<=c)||(b+c<=a)||(a+c<=b)) return false ;
    	if((a<=0)||(b<=0)||(c<=0)) return false ;
		return true ;
},
};