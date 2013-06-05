var HomeView = function(store){
    
    this.render = function(){
        this.el.html(HomeView.template());
        return this;        
    };

    this.findByName = function() {
        var self = this
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });
    }; 

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };
    this.initialize();
}
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());

