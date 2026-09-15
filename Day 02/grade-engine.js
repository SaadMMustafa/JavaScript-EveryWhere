let score = 55 ;
let attendance = 60 ;

if (attendance >= 80 && attendance <= 100) {
    
    if (score >= 70) {
        console.log("Certificate awarded");
    } else {
        console.log("Review Needed");
    };

} else if (attendance < 80 && attendance >= 50) {

    if (score >= 70) {
        console.log("Certificate awarded");
    } else {
        console.log("Review Needed");
    };

} else {
    console.log("Fail due to attendance");
};