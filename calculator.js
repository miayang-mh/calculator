window.onload = function () {

    var way_res = [];

    var btn_txt = document.getElementsByClassName("btn");

    var txt = document.getElementsByClassName("txt")[0]; //[0]?

    var btn_way = document.getElementsByClassName("btnClick");


    for (var i = 0; i < btn_way.length; i++) {
        btn_way[i].onclick = function () {
            if (this.value == "AC") {
                way_res = [];
                txt.value = "";
            }
            else {
                txt.value = txt.value.substr(0, txt.value.length - 1);
            }
        }
    }


    for (var i = 0; i < btn_txt.length; i++) {
        btn_txt[i].onclick = function () {
            if (txt.value == "" && this.value == ".") {
                txt.value = "0.";
            }
            else {
                // 
                if (!isNaN(this.value) || this.value == ".") {
                    console.log("isNaN");
                    if (txt.value.indexOf(".") != -1) {
                        if (this.value != ".") {
                            txt.value += this.value;
                        }
                    } else {
                        txt.value += this.value;
                        // ?
                    }
                }
                // 
                else {
                    if (this.value != "=") {
                        way_res[way_res.length] = txt.value;
                        way_res[way_res.length] = this.value;
                        txt.value = "";
                        // ?
                    }
                    else {
                        // 如果按下等於的時候
                        way_res[way_res.length] = txt.value;
                        txt.value = eval(way_res.join(""));
                        way_res = [];
                        console.log(way_res); // 
                        // 放空白

                    }
                }
            }

            // //避免填入運算後的數字的後面   xx

            // if (way_res == null) {
            //     txt.value = btn_txt; way_res = 0;
            //     return;
            // } else {
            //     txt.value +=  btn_txt;
            // }
            // if (txt.value == 0) { txt.value = btn_txt; }
            // else { txt.value += btn_txt; }

            // //


        }
    }



}