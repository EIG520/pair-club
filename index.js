var matrix = [];
for (var i = 0; i<=1000;i++) {
    matrix.push([i,i]);
}
var fs = 2;
document.getElementById("matrix").innerHTML = JSON.stringify(matrix);


function expand(){
    if(matrix[matrix.length - 1][1] == 0) {
        if(matrix[matrix.length-1][0]==0){
            fs++;
            matrix = matrix.slice(0,-1);
            document.getElementById("matrix").innerHTML = JSON.stringify(matrix);
            return;
        }
        for(var i = matrix.length-2; i >= 0; i --){
            if(matrix[i][0]<matrix[matrix.length - 1][0]){
                var br = i;
                break;
            }
        }
        bp = matrix.slice(br,-1);
        gp = matrix.slice(0,br);
        
        for(var i = 0; i <= fs; i++){
            gp = gp.concat(bp)
        }
        matrix = gp;
        document.getElementById("matrix").innerHTML = JSON.stringify(matrix);
        fs ++;
        return;
    }
    var c = [];
    var c2 = [];
    var s = matrix.length-2;
    while (c2[c2.length - 1] != 0) {
        for(var i = s; i >= 0; i --){
            if(matrix[i][0]<matrix[matrix.length - 1][0]){
                c.push(i);
                c2.push(matrix[i][0]);
                s = i-1;
                break;
            }
        }
    }

    for(var i = matrix.length-2; i >= 0; i --){
        if(matrix[i][1]<matrix[matrix.length - 1][1]){
            if(i in c) {
                var br = i;
                break;
            }
        }
    }
    var bp = matrix.slice(br,-1);
    var gp = matrix.slice(0,br);
    //var c = 
    for(var i = 0; i <= fs; i++){
        gp = gp.concat(JSON.parse(JSON.stringify(bp)));
        bp = addRow(JSON.parse(JSON.stringify(bp)), matrix[matrix.length - 1][0]-matrix[br][0]);
    }
    matrix = gp;
    document.getElementById("matrix").innerHTML = JSON.stringify(matrix);
    fs ++;
    return;
}

function addRow(b, n) {
    var bp = b;
    for (var j = 0; j < bp.length; j++) {
        bp[j][0] += n;
    }
    return bp;
}