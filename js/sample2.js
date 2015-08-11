(function() {
    var customer = {
        customer: [],
        init: function() {
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function() {
            this.$el = $('#customerModule');
            this.$input = this.$el.find('input');
            this.$search = this.$el.find('button#search-button');
            this.$button = this.$el.find('button#print');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#customer-template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.printData.bind(this));
            this.$search.bind('click', this.searchData.bind(this));
        },
        render: function() {
            console.log(this.customer);
            this.$ul.html(Mustache.render(this.template, {
                customer: this.customer
            }));
        },
        printData: function() {
            $.getJSON('js/customer.json', function(response) {
                $.each(response.customer, function(i, customer) {
                    this.customer.push(customer);
                }.bind(this));
                this.render();
            }.bind(this));
        },
        searchData: function(input) {
            $.getJSON('js/customer.json', function(response) {
                console.log(response.customer[0]);
                $.each(response.customer, function(i, customer) {

                    if (customer.Name.search(input) >= 0) {
                        console.log('Search Found');

                    } else {
                        console.log('Not Found');
                    }

                });
            });
        }

    }
    customer.init();
})()
