QUnit.module("StringCalculator", function () {
    QUnit.test("EmptyString_ReturnsZero", function (assert) {
        // arange
        let expected = 0;

        // act
        let actual = add('');

        // assert
        assert.equal(actual, expected);
    });
});