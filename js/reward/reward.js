$(document).ready(function() {
    "use strict";
    let n, t;
    t = function() {
        var n = this;
        n.Constantes = {};
        n.Controles = {};
        n.Eventos = {
            ChangePointsFirst: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/milkwithcoffee.svg");
                $(".change-title").html("Personaliza tu bebida");
                $(".change-subtitle").html("Añádele a tu bebida un shot de café, un topping o un syrup, o cambia de leche animal por bebida vegetal");
                $(".rectangle-one").css("display", "block")
            },
            ChangePointsSecond: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/coffeandcheese.svg");
                $(".change-title").html("Desde café del día hasta croissants");
                $(".change-subtitle").html("Disfruta de café del día, galletas, muffins, kekes, croissants de mantequilla y más");
                $(".rectangle-two").css("display", "block")
            },
            ChangePointsThrird: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/freshjuice.svg");
                $(".change-title").html("Tu bebida favorita te espera");
                $(".change-subtitle").html("Comienza tu mañana con tu bebida favorita, Refresher, Cold Brew o hasta un delicioso Frappuccino");
                $(".rectangle-three").css("display", "block")
            },
            ChangePointsFourth: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/sandwich.svg");
                $(".change-title").html("Sándwiches, wraps, postres y más");
                $(".change-subtitle").html("Nutre tu día junto a un sandwich, wrap o postre de tu elección");
                $(".rectangle-four").css("display", "block")
            },
            ChangePointsfifth: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/sellcoffee.svg");
                $(".change-title").html("Tu merch favorito o café en grano ");
                $(".change-subtitle").html("Llévate a casa la taza o tumbler que siempre quisiste o el café en grano que más te gusta.<br><br>* Canje válido para modelos de merchandising seleccionados. No válido para artículos de filtrado de café ni tazas de edición Collector.");
                $(".rectangle-five").css("display", "block")
            },
            RegisterAccount: function() {
                window.location = urlCreateAccount
            },
            FrequentQuestion: function() {
                window.location = urlFrequentQuestion
            }
        };
        n.Variables = {};
        n.Funciones = {
            InicializarEventos: function() {
                n.Funciones.DefaultPoints();
                $("body").on("click", ".change-selected-one", n.Eventos.ChangePointsFirst);
                $("body").on("click", ".change-selected-two", n.Eventos.ChangePointsSecond);
                $("body").on("click", ".change-selected-three", n.Eventos.ChangePointsThrird);
                $("body").on("click", ".change-selected-four", n.Eventos.ChangePointsFourth);
                $("body").on("click", ".change-selected-five", n.Eventos.ChangePointsfifth);
                $("body").on("click", ".register-next", n.Eventos.RegisterAccount);
                $("body").on("click", ".frequent-question", n.Eventos.FrequentQuestion)
            },
            DefaultPoints: function() {
                $(".rectangle").css("display", "none");
                $(".change-title").html("");
                $(".change-subtitle").html("");
                $(".img-change").attr("src", "/icons/UI/24/milkwithcoffee.svg");
                $(".change-title").html("Personaliza tu bebida");
                $(".change-subtitle").html("Añádele a tu bebida un shot de café, un topping o un syrup, o cambia de leche animal por bebida vegetal");
                $(".rectangle-one").css("display", "block")
            }
        };
        n.Inicializar = function() {
            n.Funciones.InicializarEventos()
        }
    }
    ;
    n = new t;
    n.Inicializar()
})
