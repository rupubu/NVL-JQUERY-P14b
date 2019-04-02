$(document).ready(function () {

    var antCell = ""; 
   
    $("td").on("click",selecciona);
    $("td").hover(function() { $(this).addClass("hover")}, function () { $(this).removeClass("hover")});
    $("body").keydown(BuscaCelda);

    function selecciona () {
        if ($(this).hasClass("seleccionada") === true) {
            $(this).removeClass("seleccionada");
        }
        else
        {
            if (antCell != "") {$(antCell).removeClass("seleccionada");}
            $(this).removeClass("hover");
            $(this).addClass("seleccionada");

        }
        antCell = this;
        }

    function BuscaCelda(e) {
        if (antCell !== "" ) {
            switch (e.which) {
                case 37:  // Fecha izquierda
                    if ($( antCell ).prev().length > 0) {
                        $( antCell ).prev().trigger("click");
                    }
                    else {
                        $ ( antCell ).nextAll().last().trigger("click");
                    }
                break;
                case 38:  // Fecha arriba
                    if ($( antCell ).closest("tr").prev().length > 0) {
                        $( antCell ).closest("tr").prev().children("td").eq([antCell.cellIndex]).trigger("click");
                    }
                    else {
                        $ ( antCell ).closest("tr").nextAll().last().children("td").eq([antCell.cellIndex]).trigger("click");
                    }
                break;
                case 39:  // Fecha derecha
                    if ($ ( antCell ).next().length > 0) {
                        $ ( antCell ).next().trigger("click");
                    }
                    else {
                        $ ( antCell ).prevAll().last().trigger("click");
                    }
                break;
                case 40:  // Fecha abajo
                if ($( antCell ).closest("tr").next().length > 0) {
                    $( antCell ).closest("tr").next().children("td").eq([antCell.cellIndex]).trigger("click");
                }
                else {
                    $ ( antCell ).closest("tr").prevAll().last().children("td").eq([antCell.cellIndex]).trigger("click");
                }
                break;
                default:
            }
        }
    }

    










});