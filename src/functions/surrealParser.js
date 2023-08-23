
// Assumes the left and right sets of number are both finite
export function isValidSurreal(number){
    var leftMax = Math.max(...number.left);
    var rightMin = Math.min(...number.right);

    return (leftMax < rightMin);
}

export function inputIsValid(surrealNumber){
    return !(surrealNumber.left.includes(NaN) || surrealNumber.right.includes(NaN))
}

// Assumes the left and right sets of number are both finite
export function surrealToReal(surrealNumber){
    // Input Validation
    if(!isValidSurreal(surrealNumber)) return NaN;
    if(!inputIsValid(surrealNumber)) return NaN;

    // Base Cases
    console.log(surrealNumber.right.length);
    if(surrealNumber.left.length === 0 && surrealNumber.right.length === 0) return 0;
    if(surrealNumber.left.length === 0){
        if(Math.min(...surrealNumber.right) <= 0) return Math.ceil(Math.min(...surrealNumber.right)) - 1;  // Biggest integer less than every right element
        else return 0; // simplest number less than every right element is 0
    }
    if(surrealNumber.right.length === 0){
        if(Math.max(...surrealNumber.left) >= 0) return Math.floor(Math.max(...surrealNumber.left)) + 1; // Smallest integer greater than every left element
        else return 0;
    }
    
    var [n, k] = findDiadicRational(Math.max(...surrealNumber.left), Math.min(...surrealNumber.right));
    return k/2**n;
}


// Theorem (by Luke Sequeira) If number = w + k/2^n, where w is a positive integer and k/2^n < 1 is positive, the birthday of number is b(number) = w+1+n
// Simplicity Theorem (by John Conway) let L and R be the left and right sets, respectively. x = {L | R} if x has the earliest birthday such that L < x < R

// Binary search ( O(logn) ) is possible, but overkill since n is small (in k/2^n)
// Greedy algorithm ( O(n) ): Find the smallest n such that there is an integer k where (2^n)maxL < k < (2^n)minR. For, if n is larger, than k must be larger.
/// returns [n, k]
export function findDiadicRational(maxL, minR){
    // Input Validation
    if(isNaN(maxL) || isNaN(minR)) return [NaN, NaN];

    var n = 0;
    if(maxL < 0 && 0 < minR) return [n, 0];

    while (n < 1074){ // Smallest Number in javascript is 5e-324
        if(maxL < Math.ceil(maxL) && Math.ceil(maxL) < minR) {
            // We have found n, we just need to find the k closest to 0
            if(Math.ceil(maxL) >= 0) return [n, Math.ceil(maxL)]; // smaller number is positive
            if(maxL < Math.floor(minR) && Math.floor(minR) < minR) return [n, Math.floor(minR)] // larger negative number
            if(maxL < Math.floor(minR) - 1 && Math.floor(minR) - 1 < minR) return [n, Math.floor(minR) - 1] // larger negative number

        }
        if(maxL < Math.ceil(maxL) + 1 && Math.ceil(maxL) + 1 < minR) {
            // We have found n, we just need to find the k closest to 0
            if(Math.ceil(maxL) + 1 >= 0) return [n, Math.ceil(maxL) + 1]; // smaller number is positive
            if(maxL < Math.floor(minR) && Math.floor(minR) < minR) return [n, Math.floor(minR)] // larger negative number
            if(maxL < Math.floor(minR) - 1 && Math.floor(minR) - 1 < minR) return [n, Math.floor(minR) - 1] // larger negative number
        }

        n++;
        maxL *= 2; minR *= 2;
    }

    return [NaN, NaN]; // If you output NaN, input validation has failed (or logic above is faulty).
}

export function birthday(number){
    if(!inputIsValid(number) || !isValidSurreal(number)) return NaN;

    var real = surrealToReal(number);
    if(isNaN(real)) return NaN;
    if(real === 0) return 0;
    if(Number.isInteger(real)) return Math.abs(real);

    var [n, k] = findDiadicRational(Math.max(...number.left), Math.min(...number.right));
    return n + Math.floor(Math.abs(real)) + 1;
}

export function realToSurreal_d(number){
    // Assumes number is a diadic rational.
    // TODO: Add input validation
    
    if(isNaN(number)) return {left: [NaN], right: [NaN]};
    if(number === 0) return {left: [], right: []};
    if(Number.isInteger(number) && number > 0) return {left: [number-1], right: []};
    if(Number.isInteger(number) && number < 0) return {left: [], right: [number+1]};

    var n = 0, k = number;

    // k will be odd. Finds k, n such that number = k/2^n
    var infiniteLoop = 0;
    while(!Number.isInteger(k)){
        n++;
        k *= 2;

        infiniteLoop++;
        if(infiniteLoop > 2000) return {left: [NaN], right: [NaN]};
    }

    // if k = 2r + 1, k/2^n = {r/2^(n-1) | (r+1)/2^(n-1)}
    var r = (k-1)/2;
    return {left: [r/2**(n-1)], right: [(r+1)/2**(n-1)]};
}