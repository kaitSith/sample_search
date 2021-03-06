$(function(){
  var type = $('.txt-type'),
      cat = $('.txt-cat'),
      txt = $('.frm-input')
      btn = $('.btn-search');
  var input_data,
      result = false;

  function SearchAPI(){
  }
  SearchAPI.prototype = {
  	search: function(){
  	  var me = this;
      $.ajax({
        method: 'GET',
        url: '../assets/model/category.json',
        dataType: 'json'
      }).done(function(json){
  	    me.scan(json);
      });
  	},
  	scan: function(data){
      for(key in data){
  	    // data[key].categories: array
  	    for(var i = 0; i < data[key].categories.length; i++){
  	  	  if(input_data === data[key].categories[i].id){
  	  	    type.html(data[key].name);
  	  	    cat.html(data[key].categories[i].name);
  	  	  }
  	    }
  	  }
  	}
  };

  var API = new SearchAPI();

  btn.on('click', function(e){
  	e.preventDefault();
  	input_data = txt.val();
  	API.search();
  });

});