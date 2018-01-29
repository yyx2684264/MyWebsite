var i = 1;

var id1 = "",
    id2 = "";

function addsheep() {
    var scount, allscount, rleave, needadd;
    allscount = document.getElementById("box").childNodes.length;
    scount = parseInt(document.body.scrollWidth / 50);
    rleave = allscount % scount;
    needadd = scount - rleave;

    if (needadd != 0) {
        scount = needadd;
    }

    for (var count = 0; count < scount; count++) {
        var x = 0;
        while (x == 0) {
            x = parseInt(Math.random() * 76);
        }
        var sheep = document.createElement("img");
        var box = document.getElementById("box");
        sheep.src = "sheeps/sheep (" + x + ").gif";
        sheep.width = 50;
        sheep.height = 50;
        sheep.id = "sid" + i;
        sheep.onclick = function() { choose(this) };
        i = i + 1;
        box.appendChild(sheep);
    }
}

function choose(obj) {
    var m, n;
    if (obj.src.indexOf("blank.png") < 0) {
        if (id1 != "") {
            if (id2 == "") {
                id2 = obj.id;
                document.getElementById(id2).style.border = "1px solid red";
                if (id1 != id2) {
                    m = document.getElementById(id1);
                    n = document.getElementById(id2);
                    if (m.src == n.src) {
                        m.src = "sheeps/blank.png";
                        n.src = "sheeps/blank.png";
                        document.getElementById(id1).style.border = "0px solid red";
                        document.getElementById(id2).style.border = "0px solid red";
                        id1 = id2 = m = n = "";
                    } else {
                        document.getElementById(id1).style.border = "0px solid red";
                        document.getElementById(id2).style.border = "0px solid red";
                        id1 = id2 = m = n = "";
                    }
                } else {
                    document.getElementById(id1).style.border = "0px solid red";
                    document.getElementById(id2).style.border = "0px solid red";
                    id1 = id2 = m = n = "";
                    alert("不能点同一只羊");
                }
            } else {
                id1 = id2 = m = n = "";
            }
        } else {
            id1 = obj.id;
            document.getElementById(id1).style.border = "1px solid red";
        }
    }
}