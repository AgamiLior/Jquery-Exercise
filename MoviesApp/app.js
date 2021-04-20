let moviesList = [];
let count = 0;
const arrOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

$(function () {

    $("#submit").on("click", function (evt) {
        // if ($("#user-rating").val() > 10) {
        //     alert("Must chose between 1-10")
        // }
        // evt.preventDefault();
        console.log(count)
        console.log($("#movie-name").val());
        console.log($("#user-rating").val());
        let nameLength = $("#movie-name").val().length;
        let rate = $("#user-rating").val();
        if (nameLength < 2) {
            alert("Name of Movie must contain at least 2 letters");
            evt.preventDefault();
        } else if (rate < 1 || rate > 10) {
            alert("Rating of Movie must contain be between 1-10");
        } else {
            // $('tabel').ready(function () {
            evt.preventDefault();
            $("table").append("<tr class='new-rank'></tr>");
            $(".new-rank").eq(count).append($('<td class="new-movie-name"></td> <td class="new-movie-rate"></td><td class="delete-movie-button"></td>'));
            $(".delete-movie-button").eq(count).append("<button class='delete-button'>X</button>")
            $(".new-movie-name").eq(count).text($("#movie-name").val());
            $(".new-movie-rate").eq(count).text($("#user-rating").val());
            moviesList.push($("#movie-name").val())


            // for (let i = 0; i < moviesList.length; i++) {
            $(".delete-movie-button").eq(count).on("click", function (evt) {
                evt.preventDefault();
                let parent = $(this).parent();
                let movieForDeletion = $(this).siblings().eq(0).text();

                console.log("this movie going to be deleted", movieForDeletion)
                console.log("parent is", parent)
                parent.remove();
                let blah = moviesList.indexOf(movieForDeletion);
                moviesList.splice(blah, 1);

                count--;
                console.log("new movie list is", moviesList)
                console.log("new count is ", count)
            })
            if (count < 0) {
                count = 0;
            }
            // }
            count++;
            console.log("movie list is", moviesList)
            console.log(count)
        }
    })
})

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            // if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //     shouldSwitch = true;
            //     break;
            // }
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }
}

