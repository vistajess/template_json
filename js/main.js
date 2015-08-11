(function() {

    var people = {
        people: ['Jess', 'Sample', 'First Person', 'Second Person'],
        // template: $('#people-template').html(),
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();

        },
        cacheDom: function() {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        render: function() {
            var data = {
                people: this.people, //people inside the function and this.people is the global
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        addPerson: function() {
            this.people.push(this.$input.val());
            this.render();
            // this.$input.val('');
        },
        deletePerson: function(event) {
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        }

    };
    people.init();

})()
// $(document).ready(function() {
//     var myModule = {

//         name: 'John',
//         age: "30",
//         sayName: function() {
//             // alert(this.name);
//         },
//         setName: function(newName) {
//             this.name = newName;
//         }
//     };


//     myModule.setName('JESS');
//     myModule.sayName();

// });
