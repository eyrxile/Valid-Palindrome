var isPalindrome = function(s) {
    s= s.toLowerCase().replace(/[^a-z0-9]/g, '');

    if(s.length <= 1) return true;

    let left = 0, right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
};

//Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));