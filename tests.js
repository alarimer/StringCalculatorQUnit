QUnit.module("StringCalculator", function () {
    QUnit.test("EmptyString_ReturnsZero", function (assert) {
        // arange
        let expected = 0;

        // act
        let actual = add('');

        // assert
        assert.equal(actual, expected);
    });

    QUnit.test("SingleNumber_ReturnsNumber", function (assert) {
        // arange
        let expected = 1;

        // act
        let actual = add('1');

        // assert
        assert.equal(actual, expected);
    });

    QUnit.test("TwoNumbersSeparatedWithComma_ReturnsSum", function (assert) {
        // arange
        let expected = 5;

        // act
        let actual = add('2,3');

        // assert
        assert.equal(actual, expected);
    });
});