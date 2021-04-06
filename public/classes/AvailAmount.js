var AvailAmount = /** @class */ (function () {
    function AvailAmount(container) {
        this.container = container;
    }
    AvailAmount.prototype.render = function (amount) {
        var p = document.createElement('p');
        p.innerText = amount;
        this.container.append(p);
    };
    return AvailAmount;
}());
export { AvailAmount };
