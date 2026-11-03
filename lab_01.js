console.log('Task 1');
function addition(a, b){
    return a+b;
}
console.log(addition(1,2));
console.log('Task 2');
function bitwiseAND(a,b){
    return a & b;
}
function bitwiseOR(a, b){
    return a | b;
}
function bitwiseXOR(a,b){
    return a ^ b;
}
console.log(bitwiseAND(9,10));
console.log(bitwiseOR(7,8));
console.log(bitwiseXOR(3,77));
console.log('Task 3');
function addUp(a){
    return (a * (a + 1))/2;
}
console.log(addUp(5));
console.log('Task 4');
function progressBar(a){
    var ans = '';
    for(var i = 10;i<=100;i = i+10){
        if(a >= i){
            ans += '#';
        }
        else{
            ans += '-';
        }
    }
    return ans;
}
console.log(progressBar(180));
console.log('Task 5');
function minMax(arr){
    let min = Infinity;
    let max = -Infinity;
    arr.forEach(element => {
        if(element< min ){
            min = element;
        }
        if(element > max){
            max = element;
        }
    });
    return [min, max];
}
console.log(minMax([8,9,2,3,4,-1]));
console.log('Task 6');
function calculateRepoStats(repos){
    // Couldn't come up with .map way so used forEach (that was only a hint right)
    let maxStars = -Infinity;
    let minStars = Infinity;
    let avgStars = 0;
    let varianceScore = 0;
    var count = 0;
    var total = 0;

    repos.forEach(element =>{
        if(element.stars > maxStars){
            maxStars = element.stars;
        }
        if(element.stars < minStars){
            minStars = element.stars;
        }
        total += element.stars;
        count++;
    })
    avgStars = Math.floor(total/count);
    varianceScore = Math.abs(maxStars-minStars);
    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore : varianceScore
    }
}
const repos = [ { name: 'repo-a', stars: 12 }, { name:
'repo-b', stars: 45 }, { name: 'repo-c', stars: 3 } ];
console.log(calculateRepoStats(repos));

console.log('Task 7');
function calculateFinalPrice(basePrice, taxRate, discountPercentage){
    if(basePrice < 0){
        console.log('Wrong price input');
        return;
    }
    var final = basePrice * (1 - discountPercentage/100);
    let tax =  (taxRate/100) * final;
    // TA asked to add taxRate as percentage
    final += tax;

    final = Math.round(final*100)/100;
    let loyaltyPoints = Math.ceil(final);

    return {finalPrice: final, loyaltyPoints: loyaltyPoints};
}
console.log(calculateFinalPrice(500,12,10));
console.log('Task 8');
function paginateData(items, pageNumber, pageSize = 5){
    let totalItems = items.length;
    let totalPages = Math.ceil(totalItems/pageSize);
    let hasNext = pageNumber < totalPages;
    let hasPrev = pageNumber> 1 && pageNumber <=totalPages;
    var pageElements = [];
    let start = 0;
    for(var i = 0;i<pageNumber -1;i++){
        start += pageSize;
    }
    for(var j = start;j < start + pageSize;j++){
        if(items[j] === undefined){
            break;
        }
        pageElements.push(items[j]);
    }
    return {
        data : pageElements,
        currentPage  :pageNumber,
        totalPages : totalPages,
        hasNext : hasNext,
        hasPrev : hasPrev
    }
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
const result = paginateData(allProducts, 2, 3);
console.log(result);