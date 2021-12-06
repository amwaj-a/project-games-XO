$(document).ready(function() {
    $("#home").click(() => {
        location.href = "index.html"
    })

    $('#win').hide()
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
    let turn = o

    const cell = $('.cell')
    cellclicked()
    cell.click(cellclicked)

    function CSS_win(a, b, c) {
        a.css('color', 'orange')
        b.css('color', 'orange')
        c.css('color', 'orange')

        setTimeout(() => {
            a.css('color', '')
            b.css('color', '')
            c.css('color', '')
        }, 1100);
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


        } else if (cell.text() !== '' && cell.text().length === 9) {
            $('#win').show()

            $('#win').text("No Winner ")

            setTimeout(() => {

                $('#win').hide()


                cell.text('')
            }, 1100);
        }
    }

    let countx = 0,
        counto = 0

    function playerwin(turn) {
        cell.off("click");
        $('#win').show()


        if (turn === x) {
            countx = countx + 1;
            $('#win').text(" Your is Winner ")
            $("#playX").text(countx)
        } else {
            counto = counto + 1;
            $("#playO").text(counto)
            $('#win').text(" Computer is Winner ")
        }




        setTimeout(() => {

            cell.text('')
            cell.on("click", cellclicked);



            $("#win").hide()

        }, 1100);




    }


    function turnauto() {
        let x = Math.floor(Math.random() * 10)
            // console.log(x);
        if (x <= 2) {
            play(cell_0, cell_4, cell_8, cell_2, cell_5, cell_6, cell_1, cell_3, cell_7)
        } else if (x <= 4) {
            play(cell_0, cell_4, cell_6, cell_8, cell_7, cell_1, cell_2, cell_5, cell_3)
        } else if (x <= 6) {
            play(cell_4, cell_6, cell_2, cell_5, cell_8, cell_7, cell_6, cell_3, cell_0)
        } else if (x <= 8) {
            play(cell_8, cell_7, cell_6, cell_5, cell_2, cell_3, cell_0, cell_1, cell_4)
        } else {

            play(cell_2, cell_4, cell_6, cell_5, cell_8, cell_1, cell_0, cell_3, cell_7)

        }
    }

    function play(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        setTimeout(() => {
            // console.log("hello");
            //colum
            const col1 = cell_0.text() + cell_3.text() + cell_6.text()
            const col2 = cell_1.text() + cell_4.text() + cell_7.text()
            const col3 = cell_2.text() + cell_5.text() + cell_8.text()
            const row1 = cell_0.text() + cell_1.text() + cell_2.text()
            const row2 = cell_3.text() + cell_4.text() + cell_5.text()
            const row3 = cell_6.text() + cell_7.text() + cell_8.text()
            const hos = cell_0.text() + cell_4.text() + cell_8.text()
            const hos2 = cell_2.text() + cell_4.text() + cell_6.text()
                //column
            if (col1 === 'OO' || (col1 === "XX" && col1.length < 3)) {
                console.log(col1.length < 3);

                if (cell_0.text() === '') a1 = cell_0
                else if (cell_3.text() === '') a1 = cell_3
                else a1 = cell_6


            } else if (col2 === 'OO' || (col2 === "XX" && col2.length < 3)) {
                if (cell_1.text() === '') a1 = cell_1
                else if (cell_4.text() === '') a1 = cell_4
                else a1 = cell_7
            } else if (col3 === 'OO' || (col3 === "XX" && col3.length < 3)) {
                if (cell_2.text() === '') a1 = cell_2
                else if (cell_5.text() === '') a1 = cell_5
                else a1 = cell_8
            }
            //row
            else if (row1 === 'OO' || (row1 === "XX" && row1.length < 3)) {
                console.log("row1");

                if (cell_0.text() === '') a1 = cell_0
                else if (cell_1.text() === '') a1 = cell_1
                else a1 = cell_2
            } else if (row2 === 'OO' || (row2 === "XX" && row2.length < 3)) {
                console.log("row2");

                if (cell_3.text() === '') a1 = cell_3
                else if (cell_4.text() === '') a1 = cell_4
                else a1 = cell_5
            } else if (row3 === 'OO' || (row3 === "XX" && row3.length < 3)) {
                console.log("row3");
                if (cell_8.text() === '') a1 = cell_8
                else if (cell_7.text() === '') a1 = cell_7
                else a1 = cell_6
            }
            //
            else if (hos === 'OO' || (hos === "XX" && hos.length < 3)) {
                console.log("Hos");
                if (cell_0.text() === '') a1 = cell_0
                else if (cell_4.text() === '') a1 = cell_4
                else a1 = cell_8
            } else if (hos2 === 'OO' || (hos2 === "XX" && hos2.length < 3)) {
                console.log("Hos2");
                if (cell_2.text() === '') a1 = cell_2
                else if (cell_4.text() === '') a1 = cell_4
                else a1 = cell_6
            } else {}












            if (a1.text() === '') {
                a1.text(o)

            } else if (a2.text() === '') {
                a2.text(o)

            } else if (a3.text() === '') {
                a3.text(o)

            } else if (a4.text() === '') {
                a4.text(o)

            } else if (a5.text() === '') {
                a5.text(o)

            } else if (a6.text() === '') {
                a6.text(o)

            } else if (a7.text() === '') {
                a7.text(o)

            } else if (a8.text() === '') {
                a8.text(o)

            } else if (a9.text() === '') {
                a9.text(o)

            }
            win(turn)
            turn = x

        }, 1200);


    }

    function cellclicked() {
        if ($(this).text() === '') {
            turnauto()
            if (turn === x) {
                $(this).text(x)
                win(turn)
                turn = o



                // $('#turn').text(turn)
            }


            // $('#turn').text(turn)

        } else {
            $(this).each(() => { alert('cant click') })
                // setTimeout(() => { $(this).css('background-color', 'white') }, 1000)

        }


    }

    $('#again').click(() => {
        location.reload()
    })
})
