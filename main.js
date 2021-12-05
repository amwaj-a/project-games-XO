$(document).ready(function() {
    let contx = 0;
    let conto = 0;
    $('#win').hide()
    let as = ''

    $("#nameX").click(() => {
            as = $("#nameX").val()
        })
        // $("#moveGame").click(() => {
        //     location.href = "xo.html"
        //         // location.pathname = { name_x: $("#nameX").val() }


    //     // localStorage.setItem("lastname", a);

    //     // $(".playerx").text($("#nameX").val());

    //     // const name_x = $("#nameX").val()
    // })


    // const name_o = $("#nameO").val()
    $("#moveOuto").click(() => {
        location.href = "xoAuto.html"
    })
    $("#move").click(() => {
        location.href = "xo.html"
    })

    $("#home").click(() => {
        location.href = 'index.html'
    })

    const x = 'X'
    const o = 'O'
    const cell_0 = $('#cell_0')
    const cell_1 = $('#cell_1')
    const cell_2 = $('#cell_2')
    const cell_3 = $('#cell_3')
    const cell_4 = $('#cell_4')
    const cell_5 = $('#cell_5')
    const cell_6 = $('#cell_6')
    const cell_7 = $('#cell_7')
    const cell_8 = $('#cell_8')
    let turn = x
    $('#turn').text(turn)
    const cell = $('.cell')
    cell.click(cellclicked)

    function CSS_win(a, b, c) {
        a.css('color', 'orange')
        b.css('color', 'orange')
        c.css('color', 'orange')
        setTimeout(() => {
            a.css('color', '')
            b.css('color', '')
            c.css('color', '')
        }, 1500);


    }

    function win(turn) {

        //row1
        if (
            (cell_0.text() === cell_1.text() && cell_1.text() === cell_2.text()) &&
            cell_0.text() !== '') {
            console.log("win 1row ");

            playerwin(turn)
            CSS_win(cell_0, cell_1, cell_2)

        }
        //colum 1
        else if (
            (cell_0.text() === cell_3.text() &&
                cell_3.text() === cell_6.text()) && cell_0.text() !== '') {
            console.log("win clum 1");
            playerwin(turn)
            CSS_win(cell_0, cell_3, cell_6)

        } //row2
        else if (
            (cell_3.text() === cell_4.text() && cell_4.text() === cell_5.text()) &&
            cell_3.text() !== '') {
            console.log("win 2row ");
            playerwin(turn)
            CSS_win(cell_3, cell_4, cell_5)

        }
        //colum 2
        else if (
            (cell_1.text() === cell_4.text() &&
                cell_4.text() === cell_7.text()) && cell_1.text() !== '') {
            console.log("win clum 2");
            playerwin(turn)
            CSS_win(cell_1, cell_4, cell_7)

        }
        //row3
        else if (
            (cell_6.text() === cell_7.text() && cell_7.text() === cell_8.text()) &&
            cell_6.text() !== '') {
            console.log("win 3row ");
            playerwin(turn)
            CSS_win(cell_6, cell_7, cell_8)


        }
        //colum 3
        else if (
            (cell_2.text() === cell_5.text() &&
                cell_5.text() === cell_8.text()) && cell_8.text() !== '') {
            console.log("win clum 3");
            playerwin(turn)
            CSS_win(cell_2, cell_5, cell_8)

        } else if (
            (cell_0.text() === cell_4.text() && cell_4.text() === cell_8.text()) &&
            cell_0.text() !== '') {
            console.log("win  ");
            playerwin(turn)
            CSS_win(cell_0, cell_4, cell_8)


        } else if (
            (cell_2.text() === cell_4.text() && cell_4.text() === cell_6.text()) &&
            cell_6.text() !== '') {
            console.log("win 3row ");
            playerwin(turn)
            CSS_win(cell_2, cell_6, cell_4)


        } else
        if (cell.text() !== '' && cell.text().length === 9) {
            $('#win').show()

            $('#win').text("No Winner ")
            $("#play").hide()

            setTimeout(() => {

                $('#win').hide()
                $("#play").show()


                cell.text('')
            }, 1500);
        }
    }

    function playerwin(turn) {
        cell.off("click");
        if (turn === x) {
            contx = contx + 1
            $("#playX").text(contx)
            console.log(contx);
        } else {
            conto = conto + 1
            $("#playO").text(conto)
        }

        $('#win').show()

        $('#win').text("Player " + turn + " is Winner ")
        $("#play").hide()

        setTimeout(() => {
            cell.text('')
            cell.on("click", cellclicked);



            $("#play").show()
            $("#win").hide()

        }, 1500);
    }


    function cellclicked() {
        if ($(this).text() === '') {
            if (turn === x) {
                $(this).text(x)
                win(turn)

                turn = o
                $('#turn').text(turn)
            } else if (turn === o) {

                $(this).text(o)
                win(turn)

                turn = x
                $('#turn').text(turn)
            }
        } else {
            $(this).each(() => { alert('cant click') })
                // setTimeout(() => { $(this).css('background-color', 'white') }, 1000)

        }


    }

    $('#again').click(() => {
        location.reload()



    })

})