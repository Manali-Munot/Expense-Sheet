var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (heading, amount) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading + " " + amount;
        li.append(h4);
        this.container.append(li);
    };
    return ListTemplate;
}());
export { ListTemplate };
