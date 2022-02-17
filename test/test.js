$(function () {

    const { test } = QUnit;

    QUnit.module('ellenorzes()?', function (hook) {
        hook.before(() => {
            this.lojatek = new LOJatek(0);
        });
        test("Létezik-e ellenorzes()?", function (assert) {
            this.lojatek = new LOJatek(0);
            assert.ok(this.lojatek.ellenorzes, "letezik");
        });
        test("Függvény-e ellenorzes()?", function (assert) {
            this.lojatek = new LOJatek(0);
            assert.ok(typeof this.lojatek.ellenorzes === "function", "function");
        });
        test("Minden lámpa felkapcsolva.", function (assert) {
            this.lojatek = new LOJatek(9);
            for (let index = 0; index < lampak.length; index++) {
                assert.equal(lampak[index].allapot, true);
            }
        });
        test("Minden lámpa lekapcsolva.", function (assert) {
            this.lojatek = new LOJatek(0);
            for (let index = 0; index < lampak.length; index++) {
                assert.equal(lampak[index].allapot, false);
            }
        });
        test("Kiinduláskor néhány elem felkapcsolva.", function (assert) {
            this.lojatek = new LOJatek(5);
            for (let index = 0; index < lampak.length; index++) {
                if (lampak[index].allapot == false) {
                    assert.equal(lampak[index].allapot, false);
                } else {
                    assert.equal(lampak[index].allapot, true);
                }

            }

        });
    });
    QUnit.module('szomszedokValtoztatasa()?', function (hook) {
        hook.before(() => {
            this.lojatek = new LOJatek(0);
        });
        test("Létetik-e a szomszedokValtoztatasa?", function (assert) {
            this.lojatek = new LOJatek(0);
            assert.ok(this.lojatek.szomszedokValtoztatasa, "letezik");
        });
        test("Függvény-e a szomszedokValtoztatasa?", function (assert) {
            this.lojatek = new LOJatek(0);
            assert.ok(typeof this.lojatek.szomszedokValtoztatasa === "function", "function");
        });
        test("Középső lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(4);
            assert.equal(lampak[1].allapot, true);
            assert.equal(lampak[3].allapot, true);
            assert.equal(lampak[5].allapot, true);
            assert.equal(lampak[7].allapot, true);
        });
        test("Bal felső sorban lévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(0);
            assert.equal(lampak[1].allapot, true);
            assert.equal(lampak[3].allapot, true);
        });
        test("Jobb felső sorban lévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(2);
            assert.equal(lampak[1].allapot, true);
            assert.equal(lampak[5].allapot, true);
        });
        test("Bal alsó sorban lévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(6);
            assert.equal(lampak[3].allapot, true);
            assert.equal(lampak[7].allapot, true);
        });
        test("Jobb alsó sorban lévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(8);
            assert.equal(lampak[5].allapot, true);
            assert.equal(lampak[7].allapot, true);
        });
        test("Jobb szélső középsőlévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(5);
            assert.equal(lampak[2].allapot, true);
            assert.equal(lampak[4].allapot, true);
            assert.equal(lampak[8].allapot, true);
        });
        test("Bal szélső középsőlévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(3);
            assert.equal(lampak[0].allapot, true);
            assert.equal(lampak[4].allapot, true);
            assert.equal(lampak[6].allapot, true);
        });
        test("Első sor középsőlévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(1);
            assert.equal(lampak[0].allapot, true);
            assert.equal(lampak[2].allapot, true);
            assert.equal(lampak[4].allapot, true);
        });
        test("Utolsó sor középsőlévő lámpát kapcsoljuk.", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lojatek.szomszedokValtoztatasa(7);
            assert.equal(lampak[4].allapot, true);
            assert.equal(lampak[6].allapot, true);
            assert.equal(lampak[8].allapot, true);
        });
    });
    QUnit.module('LampaJatekter', function (hook) {
        hook.before(() => {
            this.lampaJatek = new LampakJatekter($("#qunit-info"));
            this.lojatek = new LOJatek(0);
        });
        test("Létrejön-e a megfelelő számú elem?", function (assert) {
            this.lampaJatek = new LampakJatekter($("#qunit-info"));
            this.lojatek = new LOJatek(0);
            assert.equal(lampak.length, 9);
        });
        test("Megfelelő lesz-e az elem ID-ja?", function (assert) {
            this.lojatek = new LOJatek(0);
            this.lampaJatek = new LampakJatekter($("#qunit-info"));
            //this.lojatek = new LOJatek(0);
            console.log(lampak);
            for (let index = 9 /*0*/; index < lampak.length; index++) {
                assert.equal(lampak[index].elem.attr("dataId"), index-9 );
            }
        });
        test("Megfelelő-lesz-e az elem háttérszíne?", function (assert) {
            this.lampaJatek = new LampakJatekter($("#qunit-info"));
            this.lojatek = new LOJatek(4);
            for (let index = 0; index < lampak.length; index++) {
                if (lampak[index].allapot) {
                    assert.ok(lampak[index].elem.css("background-color", "green"), true);
                } else {
                    assert.ok(lampak[index].elem.css("background-color", "orange"), true);
                }
            }
        });
        test("Kattintásra megváltozik-e az adott elem színe?", function (assert) {
            this.lampaJatek = new LampakJatekter($("#qunit-info"));
            this.lojatek = new LOJatek(0);
            this.lampa = new Lampa($("#qunit-info"), 1);
            let regiAllapot = this.lampa.allapot;
            this.lampa.setAllapot();
            assert.equal(this.lampa.allapot, !regiAllapot);
        });
    });

});